import { NextRequest } from "next/server";
import { promises as dns } from "dns";

export const runtime = "nodejs"; // ensure Node APIs like dns are available
export const dynamic = "force-dynamic";

async function resolveIPv4(domain: string): Promise<string[]> {
  try {
    const ips = await dns.resolve4(domain);
    return ips;
  } catch (e) {
    // try CNAME chain once
    try {
      const cnames = await dns.resolveCname(domain);
      if (cnames && cnames.length > 0) {
        try {
          const ips = await dns.resolve4(cnames[0]);
          return ips;
        } catch {
          return [];
        }
      }
      return [];
    } catch {
      return [];
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const { domains, targetIp } = (await req.json()) as { domains: string[]; targetIp: string };
    if (!Array.isArray(domains) || typeof targetIp !== "string") {
      return new Response(JSON.stringify({ error: "Invalid payload" }), { status: 400 });
    }

    const uniqueDomains = Array.from(new Set(domains.filter(Boolean)));

    const results = await Promise.all(
      uniqueDomains.map(async (d) => {
        const ips = await resolveIPv4(d);
        const match = ips.includes(targetIp);
        return { domain: d, ips, match };
      })
    );

    const count = results.reduce((acc, r) => acc + (r.match ? 1 : 0), 0);

    return new Response(
      JSON.stringify({ targetIp, count, total: uniqueDomains.length, results }),
      { headers: { "content-type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "Server error" }), { status: 500 });
  }
}

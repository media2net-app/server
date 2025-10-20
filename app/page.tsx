"use client";

import React from "react";
import DataTable from "@/components/DataTable";
import DomainTable from "@/components/DomainTable";
import { parseSites } from "@/lib/parse";
import { parseDomains } from "@/lib/domain-parse";

const defaultInput = `123platform.nl
Media2Net
303.8 MB
235.6 MB/month
Active
123zorgwebsite.nl
Media2Net
4580.1 MB
0 MB/month
Disabled
actiefsamenleven.nl
Media2Net
7993.6 MB
7.2 MB/month
Active
acvobe.nl
Media2Net
416.9 MB
0 MB/month
Active
afslankpakket.nl
Media2Net
928.4 MB
297.3 MB/month
Active
akkerspeelgoed.nl
Media2Net
78534.5 MB
2.6 MB/month
Active
alainlubbers.nl
Media2Net
490.4 MB
387.5 MB/month
Active
alfaprojectstoffering.nl
Media2Net
728.9 MB
174.4 MB/month
Active
allesafdekken.nl
Media2Net
2565.1 MB
2.9 MB/month
Active
andersbelang.123zorgwebsite.nl
Media2Net
10.8 MB
0 MB/month
Disabled


andersbelang.nl
Media2Net
239.8 MB
64.6 MB/month
Active
apk-centrum.nl
Media2Net
837.5 MB
0 MB/month
Active
arka-webshop.nl
Media2Net
74.2 MB
23.6 MB/month
Active
arkahoogeveen.nl
Media2Net
840.6 MB
156.7 MB/month
Active
astron.media2netdev.nl
Media2Net
5.5 MB
6.1 MB/month
Active


atiservice.media2netdev.nl
Media2Net
13.8 MB
11.1 MB/month
Active


atiservice.nl
Media2Net
2472.4 MB
301.8 MB/month
Active
autobedrijfandresnippe.nl
Media2Net
8167.8 MB
4285.3 MB/month
Active
autosnippe.nl
Media2Net
9443.8 MB
89.5 MB/month
Active
baasis.nu
Media2Net
203.7 MB
0 MB/month
Active
baby-en-mama-geluk.nlNo hosting
Media2Net
101.1 MB
0.2 MB/month
Active
babylon-hoogeveen.nl
Media2Net
1696.4 MB
1401.3 MB/month
Active
backup.123zorgwebsite.nl
Media2Net
3 MB
0 MB/month
Disabled


backup.swannpannenleggers.nl
Media2Net
2.5 MB
0 MB/month
Active


backup.teunsvleesservice.nl
Media2Net
8.9 MB
16.9 MB/month
Active


bakkerijdebakfiets.nl
Media2Net
5057.9 MB
0.3 MB/month
Active
bandenhalhoogeveen.nl
Media2Net
2808.5 MB
496.8 MB/month
Active
bcs.media2netdev.nl
Media2Net
10.9 MB
276 MB/month
Active


bergasports.com
Media2Net
5756.8 MB
0 MB/month
Active
bergasports.nlNo hosting
Media2Net
0 MB
0 MB/month
Active
beterzorgeb.media2netdev.nl
Media2Net
20.6 MB
12254.4 MB/month
Active


bitcoin24.nl
Media2Net
0.4 MB
0 MB/month
Active
bocokeukens.nl
Media2Net
7152.2 MB
0 MB/month
Active
borghuiskeukens-oud.nl
Media2Net
8987.7 MB
0 MB/month
Active
borghuiskeukens.nl
Media2Net
29418 MB
0 MB/month
Active
bouwbedrijfzuidema.nl
Media2Net
17606.5 MB
0 MB/month
Active
buning.dd-shop.nl
Media2Net
21.1 MB
96.5 MB/month
Active


chaletsholiday.nl
Media2Net
1566.2 MB
180.9 MB/month
Active
chielendeborah.nl
Media2Net
437 MB
76.3 MB/month
Active
chiptuningfiles.media2netdev.nl
Media2Net
12.8 MB
5.7 MB/month
Active


clique.dd-shop.nl
Media2Net
21.1 MB
202.3 MB/month
Active


comfortfloors-noord.nl
Media2Net
826.9 MB
0 MB/month
Active
commin.nlNo hosting
Media2Net
1643.2 MB
3.4 MB/month
Active
coronasneltesthoogeveen.nl
Media2Net
994.9 MB
64.3 MB/month
Active
costerkeukens.nl
Media2Net
744.5 MB
0 MB/month
Active
costerkeukens.vanhaasterdev.nl
Media2Net
7 MB
105 MB/month
Active


daanboverhof.nl
Media2Net
14656.2 MB
0 MB/month
Active
dd-shop.nl
Media2Net
6121.6 MB
0 MB/month
Active
debbzcoach.nl
Media2Net
5803.7 MB
0 MB/month
Active
deege-timmerwerken.media2netdev.nl
Media2Net
6.3 MB
16.3 MB/month
Active


deege-timmerwerken.nl
Media2Net
3013.8 MB
4.5 MB/month
Active
destruker.nl
Media2Net
654 MB
0 MB/month
Active
detextielbaron.nl
Media2Net
2762.3 MB
2239.9 MB/month
Active
dichtbijmew.123zorgwebsite.nl
Media2Net
9.3 MB
0 MB/month
Disabled


dichtbijmew.nl
Media2Net
368 MB
23.8 MB/month
Active
douwsma-zorg.123zorgwebsite.nl
Media2Net
5 MB
0 MB/month
Disabled


drenthekanwelwathoogeveengebruiken.nl
Media2Net
1644.9 MB
328.4 MB/month
Active
dtnn.media2netdev.nl
Media2Net
7.2 MB
19.9 MB/month
Active


dtnn.nl
Media2Net
324.4 MB
49.2 MB/month
Active
dutch-export.com
Media2Net
353.8 MB
0 MB/month
Active
duynbrink.media2netdev.nl
Media2Net
9.5 MB
11.7 MB/month
Active


duynbrink.nl
Media2Net
1184.6 MB
0.7 MB/month
Active
dvxperformance.nl
Media2Net
1630.8 MB
0 MB/month
Disabled
dylanocup.nl
Media2Net
2033.8 MB
270.8 MB/month
Active
edwintalen.nl
Media2Net
17.9 MB
0 MB/month
Active
elis.dd-shop.nl
Media2Net
18.4 MB
183.8 MB/month
Active


emeq-int.com
Media2Net
3790.8 MB
13.3 MB/month
Active
emeq-int.media2netdev.nl
Media2Net
8.4 MB
10.1 MB/month
Active


emeq-int.nlalias for emeq-int.com
Media2Net
3790.8 MB
13.3 MB/month
Active
emeq.media2netdev.nl
Media2Net
8.3 MB
19.2 MB/month
Active


erotiex.nl
Media2Net
3579.9 MB
12954.4 MB/month
Active
factor79.nl
Media2Net
62332.3 MB
0 MB/month
Active
fanshop.dd-shop.nl
Media2Net
20.3 MB
135 MB/month
Active


fctunas.dd-shop.nl
Media2Net
19.8 MB
185.9 MB/month
Active


feestweeknoordscheschut.nl
Media2Net
143.1 MB
0 MB/month
Active
floorplaybylonny.123zorgwebsite.nl
Media2Net
3.8 MB
0 MB/month
Disabled


floorplaybylonny.nl
Media2Net
422.2 MB
36.7 MB/month
Active
fokker.coronasneltesthoogeveen.nl
Media2Net
11.1 MB
12.4 MB/month
Active


frietwinkelbakhuus.nl
Media2Net
1911.3 MB
0 MB/month
Active
geveltechniekzuidema.nlalias for zuidemakozijnen.nl
Media2Net
9624.8 MB
0 MB/month
Active
hac63.dd-shop.nl
Media2Net
15.8 MB
108.7 MB/month
Active


hagro-update.nl
Media2Net
1528.2 MB
0 MB/month
Active
hagrokeukens.nl
Media2Net
8876.9 MB
0 MB/month
Active
hagroupdate.nlNo hosting
Media2Net
0 MB
0 MB/month
Active
happybabyspa.nlNo hosting
Media2Net
0 MB
0 MB/month
Active
hdbevestigingssystemen.nl
Media2Net
874.6 MB
406.6 MB/month
Active
hefbrugkeurmeester.nl
Media2Net
662.9 MB
239.8 MB/month
Active
hildevanderzee.nl
Media2Net
788.9 MB
174 MB/month
Active
himitsu.nl
Media2Net
577.4 MB
0 MB/month
Active
honda-classics.nl
Media2Net
1055.4 MB
6.2 MB/month
Active
hoogveenvastgoedontwikkeling.nl
Media2Net
413.3 MB
130.8 MB/month
Active
hoorcentrumdewolden.nl
Media2Net
618.5 MB
0 MB/month
Active
igual.studio
Media2Net
2870.4 MB
284 MB/month
Active
inabruinsthuiszorg.123zorgwebsite.nl
Media2Net
8.8 MB
0 MB/month
Disabled


isashi.nl
Media2Net
2295 MB
0.9 MB/month
Active
itcertificering.nlNo hosting
Media2Net
0 MB
0 MB/month
Active
itsmiaofficial.comforward to onlyfans.com/itsmiaofficialcom
Media2Net
40.7 MB
0.5 MB/month
Active
jasseedsholland.com
Media2Net
79.2 MB
0 MB/month
Active
juichhoogeveen.nl
Media2Net
815.8 MB
0 MB/month
Active
karinbroekstra.com
Media2Net
944.1 MB
422.2 MB/month
Active
keukensmetsmaak.nl
Media2Net
2165.2 MB
0 MB/month
Active
kirstenheins.nl
Media2Net
1435.6 MB
0 MB/month
Active
kitchenevent.online
Media2Net
2.3 MB
0 MB/month
Active
kleding.dd-shop.nl
Media2Net
20.7 MB
99 MB/month
Active


koos-stucadoor.nl
Media2Net
418.8 MB
217.9 MB/month
Active
krijtbordstyling.nl
Media2Net
1000.3 MB
740.6 MB/month
Active
kunststofkozijnen-reparatie.nl
Media2Net
537.2 MB
4.6 MB/month
Active
kunststofkozijnenreparatie.media2netdev.nl
Media2Net
10.2 MB
5.9 MB/month
Active


light1st.nl
Media2Net
2377.2 MB
109.4 MB/month
Active
livinstyle.nualias for livinstylekeukensenbadkamers.nl
Media2Net
1 MB
0 MB/month
Active
livinstyle.vanhaasterdev.nl
Media2Net
13.1 MB
4.6 MB/month
Active


livinstylebadkamers.nlalias for livinstylekeukensenbadkamers.nl
Media2Net
1 MB
0 MB/month
Active
livinstylekeukens.nlalias for livinstylekeukensenbadkamers.nl
Media2Net
1 MB
0 MB/month
Active
livinstylekeukensenbadkamers.nl
Media2Net
1 MB
0 MB/month
Active
lottie.nl
Media2Net
2448 MB
0.3 MB/month
Active
lottieborg.nlalias for lottie.nl
Media2Net
2448 MB
0.3 MB/month
Active
luchtfilterwinkel.nl
Media2Net
1605.3 MB
461.1 MB/month
Active
m-mkappers.nl
Media2Net
671.5 MB
1014.4 MB/month
Active
m2n.nl
Media2Net
20.1 MB
8.8 MB/month
Active
magazijn22.nl
Media2Net
13350.4 MB
2220.2 MB/month
Active
mail.m2n.nl
Media2Net
3.4 MB
0.6 MB/month
Active


mangatwacht-huren.nl
Media2Net
407.4 MB
0 MB/month
Active
marco-optiek.nl
Media2Net
1225.7 MB
771.2 MB/month
Active
marionlansink.nl
Media2Net
471.7 MB
334.3 MB/month
Active
maxhoogeveen.nlNo hosting
Media2Net
0.5 MB
0 MB/month
Active
maxvroomshoop.nlNo hosting
Media2Net
0 MB
0 MB/month
Active
media2net.nl
Media2Net
520.7 MB
758.4 MB/month
Active
media2netdev.nl
Media2Net
33046.2 MB
13.1 MB/month
Active
mhpspecialist.nl
Media2Net
1288.2 MB
14.5 MB/month
Active
mihaelafitness-oud.com
Media2Net
331.1 MB
0 MB/month
Active
mihaelafitness.com
Media2Net
637 MB
0 MB/month
Active
mijnvloerkleed.nl
Media2Net
4303 MB
0 MB/month
Active
mikestoel.nl
Media2Net
347.6 MB
0 MB/month
Disabled
mkautoservice.nl
Media2Net
256.1 MB
88.7 MB/month
Active
mrdtail.nl
Media2Net
123.4 MB
2 MB/month
Active
mrsfriday.nl
Media2Net
1627.3 MB
0 MB/month
Active
multyreal.nl
Media2Net
80.8 MB
0 MB/month
Active
nft-cursus.nl
Media2Net
338 MB
11.1 MB/month
Active
nieuwsociaalhoogeveen.nl
Media2Net
486.8 MB
371.1 MB/month
Active
nursingwithasmile.123zorgwebsite.nl
Media2Net
3.3 MB
0 MB/month
Disabled


nursingwithasmile.nl
Media2Net
247.2 MB
52.7 MB/month
Active
obd-chiptuning.media2netdev.nl
Media2Net
9.4 MB
20.2 MB/month
Active


offerte.swannpannenleggers.nl
Media2Net
9.7 MB
0 MB/month
Active


ondernemendhoogeveen.nl
Media2Net
1116.9 MB
0 MB/month
Active
onehundrednft.com
Media2Net
7.7 MB
4.1 MB/month
Active
onlyfanscursus.nl
Media2Net
494.6 MB
58.4 MB/month
Active
order-form.dutch-export.com
Media2Net
9.2 MB
0 MB/month
Active
parcferme.media2netdev.nl
Media2Net
14.2 MB
38.7 MB/month
Active


parcferme.nl
Media2Net
5500.9 MB
1291.2 MB/month
Active
pixalpaving.nl
Media2Net
2225.7 MB
0 MB/month
Active
popup-actie.nl
Media2Net
549.4 MB
363.1 MB/month
Active
praktijksalomons.nl
Media2Net
366.3 MB
146.5 MB/month
Active
pre-pared.nl
Media2Net
546.4 MB
0 MB/month
Active
prestigemeppel.nl
Media2Net
1434.9 MB
1511.3 MB/month
Active
puurvlees.nu
Media2Net
486.1 MB
320.5 MB/month
Active
pvcdeal.nlNo hosting
Media2Net
2.6 MB
0 MB/month
Active
reassink-holding.com
Media2Net
282.6 MB
8.2 MB/month
Active
reassink-holding.nlalias for reassink-holding.com
Media2Net
282.6 MB
8.2 MB/month
Active
rixos-design.de
Media2Net
1450.7 MB
0 MB/month
Active
rollator-groothandel.nl
Media2Net
3288.2 MB
314.2 MB/month
Active
rotpunkt.media2netdev.nl
Media2Net
6.8 MB
28 MB/month
Active


ryladrenthe.nl
Media2Net
424.1 MB
0 MB/month
Active
sachawerndly.nlforward to cursuszzperindezorg.nl
Media2Net
0 MB
0 MB/month
Active
secretaressekracht.nl
Media2Net
0.5 MB
0 MB/month
Active
serenity.media2netdev.nl
Media2Net
1 MB
0 MB/month
Disabled


serenityme.nl
Media2Net
867.4 MB
265.1 MB/month
Active
service.borghuiskeukens-oud.nl
Media2Net
6.1 MB
0 MB/month
Active


sextoys24.nl
Media2Net
8712.9 MB
3659.9 MB/month
Active
sexyblackfriday.nl
Media2Net
420 MB
67.7 MB/month
Active
sharonlageveen.nl
Media2Net
612.7 MB
86.9 MB/month
Active
sidokwan.dd-shop.nl
Media2Net
11.7 MB
6.6 MB/month
Active


siemservice.nl
Media2Net
983 MB
561.6 MB/month
Active
simhamodels.media2netdev.nl
Media2Net
1.2 MB
0.7 MB/month
Active


snackbarkeurmerk.nl
Media2Net
409.5 MB
266.6 MB/month
Active
snelcoronatest.com
Media2Net
225.1 MB
0 MB/month
Active
snippetuinmachines.nl
Media2Net
10957.6 MB
0 MB/month
Active
soc2.nlNo hosting
Media2Net
0 MB
0 MB/month
Active
staging.123zorgwebsite.nl
Media2Net
2.6 MB
0 MB/month
Disabled


stevenkeukens.nl
Media2Net
3260.6 MB
5.1 MB/month
Active
swannpannenleggers.nl
Media2Net
21554.6 MB
0 MB/month
Active
swzorgenbegeleiding.nl
Media2Net
459.1 MB
0 MB/month
Active
talktopics.nlalias for marionlansink.nl
Media2Net
471.7 MB
334.3 MB/month
Active
telefoonkracht.nl
Media2Net
1069.2 MB
0 MB/month
Active
teunsvleesservice.nl
Media2Net
3326 MB
252.3 MB/month
Active
thebodywaxstudio.nlNo hosting
Media2Net
277.1 MB
0.1 MB/month
Active
thebrightsmilestudio.nlNo hosting
Media2Net
18.6 MB
0.1 MB/month
Active
thehairboutiquecuracao.com
Media2Net
591.2 MB
0 MB/month
Disabled
thehaircolorboard.nlNo hosting
Media2Net
0.2 MB
0 MB/month
Active
thehaircolorlab.nlNo hosting
Media2Net
105.8 MB
0.7 MB/month
Active
thehairlab.nl
Media2Net
3588.1 MB
0 MB/month
Active
thestudiohardenberg.nl
Media2Net
111 MB
1.1 MB/month
Active
thingsway.nl
Media2Net
1604.4 MB
591.4 MB/month
Active
topfithoogeveen.dd-shop.nl
Media2Net
21.5 MB
194.7 MB/month
Active


toptiermen.media2netdev.nl
Media2Net
2.3 MB
1.5 MB/month
Active


toptiermen.nlforward to toptiermen.eu
Media2Net
1.1 MB
0.4 MB/month
Active
trimsalonfurrychoice.nl
Media2Net
532.9 MB
0 MB/month
Active
trouwvanjou.nlNo hosting
Media2Net
0.2 MB
0 MB/month
Active
tuinierbeheer.nl
Media2Net
733.1 MB
14.6 MB/month
Active
vanhaasterdev.nl
Media2Net
2851 MB
6.6 MB/month
Active
vannoortfd.nl
Media2Net
858.1 MB
239.6 MB/month
Active
vasjan.nl
Media2Net
459.6 MB
0 MB/month
Active
vasjanbadkamers.nlalias for vasjan.nl
Media2Net
459.6 MB
0 MB/month
Active
vasjankeukens.nlalias for vasjan.nl
Media2Net
459.6 MB
0 MB/month
Active
veegservicehoogeveen.media2netdev.nl
Media2Net
4.1 MB
1.3 MB/month
Active


veegservicehoogeveen.nl
Media2Net
1652.5 MB
390.7 MB/month
Active
veiligheidsnettenspecialist.nl
Media2Net
817.4 MB
0 MB/month
Active
veteranenhoogeveen.nl
Media2Net
511.4 MB
12.5 MB/month
Active
vlechtbedrijfvanessen.nl
Media2Net
3.1 MB
0 MB/month
Active
voetbalkern.nl
Media2Net
1093.7 MB
0 MB/month
Active
voorjaarsbeurspesse.nl
Media2Net
504 MB
170 MB/month
Active
voortmanassen.nl
Media2Net
5626.9 MB
0 MB/month
Active
voortmanpesse.nl
Media2Net
7939.1 MB
8.8 MB/month
Active
voortmanpesseshowroom.nlalias for voortmanpesse.nl
Media2Net
7939.1 MB
8.8 MB/month
Active
vps-332589-6788.hosted.at.hostnet.nl
Media2Net
265.3 MB
0 MB/month
Active
waku-ladders.nl
Media2Net
1018.7 MB
0 MB/month
Active
wealth.media2netdev.nl
Media2Net
6.4 MB
2.6 MB/month
Active


wealth.online
Media2Net
96.7 MB
0 MB/month
Active
webshop.thehairlab.nl
Media2Net
12.7 MB
13.1 MB/month
Active


weghorstkeukens.vanhaasterdev.nl
Media2Net
0.8 MB
0 MB/month
Disabled


wellnesstuinier.nl
Media2Net
1045 MB
0 MB/month
Active
werkenbijvoortmanpesse.nl
Media2Net
600.8 MB
601 MB/month
Active
wiltkracht.nl
Media2Net
384.5 MB
0 MB/month
Active
woelders.nl
Media2Net
842.9 MB
0 MB/month
Disabled
ykzorg.nl
Media2Net
343.7 MB
62.2 MB/month
Active
zakenkringhoogeveen.nlNo hosting
Media2Net
0 MB
0 MB/month
Disabled
zijorganiseert.nl
Media2Net
864.1 MB
0 MB/month
Active
ziptuning.media2netdev.nl
Media2Net
5.1 MB
58.2 MB/month
Active


zoer.media2netdev.nl
Media2Net
6.5 MB
38.9 MB/month
Active


zoer.online
Media2Net
2907.3 MB
0.1 MB/month
Active
zoeroutdoorliving.de
Media2Net
56.2 MB
4.5 MB/month
Active
zoeroutdoorliving.nlforward to zoer.online
Media2Net
6540.7 MB
0 MB/month
Active
zuidemakozijnen.nl`;

const domainData = `123pflanzekaufen.de	Domeinregistratie .de	Actief	F0000.2412.0010.0695	12 december 2025
123plantkopen.nl	Domeinregistratie .nl	Actief	F0000.2412.0010.0695	12 december 2025
123platform.nl	Domeinregistratie .nl	Actief	F0000.2505.0008.7813	8 mei 2026
123webshopcursus.nl	Domeinregistratie .nl	Actief	F0000.2510.0001.2822	18 september 2026
123website.nu	Domeinregistratie .nu	Actief	F0000.2507.0008.7692	3 juli 2026
123websitecursus.nl	Domeinregistratie .nl	Actief	F0000.2510.0001.2822	18 september 2026
123zorgwebsite.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	25 januari 2026
afslank-pakket.com	Domeinregistratie .com	Actief	F0000.2506.0001.3182	18 mei 2026
afslank-pakket.nl	Domeinregistratie .nl	Actief	F0000.2505.0001.3062	22 april 2026
afslankpakket.com	Domeinregistratie .com	Actief	F0000.2506.0001.3182	18 mei 2026
afslankpakket.nl	Domeinregistratie .nl	Actief	F0000.2505.0001.3062	29 april 2026
alainlubbers.nl	Domeinregistratie .nl	Actief	F0000.2501.0010.2922	14 januari 2026
apiconnect.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	19 december 2025
arka-webshop.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	21 januari 2026
arkahoogeveen.com	Domeinregistratie .com	Actief	F0000.2510.0001.2822	26 september 2026
arkahoogeveen.nl	Domeinregistratie .nl	Actief	F0000.2510.0001.2822	26 september 2026
autobedrijfandresnippe.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
autoluchtfilter.be	Domeinregistratie .be	Actief	F0000.2509.0001.2985	1 september 2026
autoluchtfilter.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
autostickersshop.nl	Domeinregistratie .nl	Actief	F0000.2411.0001.6766	20 oktober 2025
autoverkoophoogeveen.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
avggenerator.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	10 september 2026
baby-en-mama-geluk.nl	Domeinregistratie .nl	Actief	F0000.2507.0008.7692	8 juli 2026
babyenmamageluk.nl	Domeinregistratie .nl	Actief	F0000.2507.0008.7692	8 juli 2026
bakfietsbloemen.nl	Domeinregistratie .nl	Actief	F0000.2501.0010.2922	5 januari 2026
bandenhalhoogeveen.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
bdsmwebshop.nl	Domeinregistratie .nl	Actief	F0000.2412.0010.0695	10 december 2025
bergasports.com	Domeinregistratie .com	Actief	F0000.2502.0009.1000	12 februari 2026
bergasports.nl	Domeinregistratie .nl	Actief	F0000.2502.0009.1000	12 februari 2026
bioaudit.nl	Domeinregistratie .nl	Actief	F0000.2507.0001.3008	19 juni 2026
bloemenbundel.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	29 maart 2026
bloemenvandegier.be	Domeinregistratie .be	Actief	F0000.2411.0010.1925	2 november 2025
bloemenvandegier.nl	Domeinregistratie .nl	Actief	F0000.2504.0008.8752	2 april 2026
bmwindividual.nl	Domeinregistratie .nl	Actief	F0000.2505.0008.7813	9 mei 2026
brandingbuilders.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	8 september 2026
chatgptmasterclass.online	Domeinregistratie .online	Actief	F0000.2506.0001.3182	20 mei 2026
chielendeborah.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	30 maart 2026
chiptuningcentrum.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
chiptuningfiles.online	Domeinregistratie .online	Actief	F0000.2507.0008.7692	3 juli 2026
comfortfloors-oost.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	27 augustus 2026
commin.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	19 december 2025
coronasneltesthoogeveen.nl	Domeinregistratie .nl	Actief	F0000.2412.0010.0695	10 december 2025
coronatestdrente.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	21 december 2025
coronatesthoogeveen.nl	Domeinregistratie .nl	Actief	F0000.2412.0010.0695	10 december 2025
coronavaccinatiedrenthe.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	21 december 2025
dakengevelreinigingnoord.nl	Domeinregistratie .nl	Actief	F0000.2501.0010.2922	8 januari 2026
datadashboard.app	Domeinregistratie .app	Actief	F0000.2506.0001.3182	31 mei 2026
detextielbaron.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	17 januari 2026
dewoldentegenderest.nl	Domeinregistratie .nl	Actief	F0000.2510.0001.2822	24 september 2026
dierenwinkeldrenthe.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	30 november 2025
dierenwinkelflevoland.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	30 november 2025
dierenwinkelfriesland.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	30 november 2025
dierenwinkelgelderland.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	30 november 2025
dierenwinkelnoord-brabant.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	30 november 2025
dierenwinkelnoord-holland.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	30 november 2025
dierenwinkeloverijssel.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	30 november 2025
dierenwinkelzuid-holland.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	30 november 2025
domotica365.be	Domeinregistratie .be	Actief	F0000.2503.0001.3169	21 februari 2026
domotica365.nl	Domeinregistratie .nl	Actief	F0000.2503.0001.3169	21 februari 2026
drenthekanwelwathoogeveengebruiken.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	20 januari 2026
dropshipkoning.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	18 maart 2026
dvxperformance.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
dylanocup.nl	Domeinregistratie .nl	Actief	F0000.2508.0008.7089	6 augustus 2026
earthluxe.nl	Domeinregistratie .nl	Actief	F0000.2508.0001.2582	18 juli 2026
eikenprocessierupsbultjes.nl	Domeinregistratie .nl	Actief	F0000.2507.0001.3008	27 juni 2026
eikenprocessierupsmiddel.nl	Domeinregistratie .nl	Actief	F0000.2507.0001.3008	27 juni 2026
eikenprocessierupszalf.nl	Domeinregistratie .nl	Actief	F0000.2507.0001.3008	27 juni 2026
emilyrosefans.com	Domeinregistratie .com	Actief	F0000.2501.0010.2922	7 januari 2026
erotiex.nl	Domeinregistratie .nl	Actief	F0000.2504.0008.8752	4 april 2026
exclusive-experience.nl	Domeinregistratie .nl	Actief	F0000.2508.0008.7089	11 augustus 2026
farmerpixelsbymariel.nl	Domeinregistratie .nl	Actief	F0000.2506.0001.3182	1 juni 2026
fitnutrition.nl	Domeinregistratie .nl	Actief	F0000.2411.0010.1925	9 november 2025
floorplaybylonny.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	27 maart 2026
floradeal.nl	Domeinregistratie .nl	Actief	F0000.2510.0001.2822	29 september 2026
furrychoice.nl	Domeinregistratie .nl	Actief	F0000.2411.0001.6766	26 oktober 2025
groothandelnagels.nl	Domeinregistratie .nl	Actief	F0000.2503.0001.3169	17 februari 2026
grote-kamerplanten.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	18 december 2025
hagrokeukens.com	Domeinregistratie .com	Actief	F0000.2510.0008.9227	14 oktober 2026
happypetzy.com	Domeinregistratie .com	Actief	F0000.2510.0001.2822	18 september 2026
hedge-center.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	17 januari 2026
hedgecenter.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	17 januari 2026
hedgecenterholland.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	17 januari 2026
hefbrugkeurmeester.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	4 september 2026
hildevanderzee.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	19 november 2025
himitsu.nl	Domeinregistratie .nl	Actief	F0000.2411.0001.6766	25 oktober 2025
hoogveenvastgoed.nl	Domeinregistratie .nl	Actief	F0000.2502.0009.1000	15 februari 2026
hoogveenvastgoedbeheer.nl	Domeinregistratie .nl	Actief	F0000.2502.0009.1000	15 februari 2026
hoogveenvastgoedontwikkeling.nl	Domeinregistratie .nl	Actief	F0000.2502.0009.1000	15 februari 2026
igual.studio	Domeinregistratie .studio	Actief	F0000.2510.0001.2822	22 september 2026
igualstudio.nl	Domeinregistratie .nl	Actief	F0000.2510.0001.2822	22 september 2026
improve.onl	Domeinregistratie .onl	Actief	F0000.2509.0008.8332	3 september 2026
inabruinsthuiszorg.nl	Domeinregistratie .nl	Actief	F0000.2506.0008.8151	4 juni 2026
inveray.nl	Domeinregistratie .nl	Actief	F0000.2505.0001.3062	18 april 2026
inveray.online	Domeinregistratie .online	Actief	F0000.2505.0001.3062	18 april 2026
inveray.store	Domeinregistratie .store	Actief	F0000.2505.0001.3062	18 april 2026
itcertificering.nl	Domeinregistratie .nl	Actief	F0000.2508.0008.7089	13 augustus 2026
itsmiaofficial.com	Domeinregistratie .com	Actief	F0000.2502.0009.1000	9 februari 2026
karinbroekstra.com	Domeinregistratie .com	Actief	F0000.2502.0009.1000	7 februari 2026
karinbroekstra.nl	Domeinregistratie .nl	Actief	F0000.2502.0009.1000	7 februari 2026
keukenkopen.nu	Domeinregistratie .nu	Actief	F0000.2505.0008.7813	6 mei 2026
keukensamenstellen.nl	Domeinregistratie .nl	Actief	F0000.2411.0001.6766	30 oktober 2025
kikkertbouw.nl	Domeinregistratie .nl	Actief	F0000.2505.0008.7813	10 mei 2026
koezoe.nl	Domeinregistratie .nl	Actief	F0000.2507.0001.3008	30 juni 2026
koos-stucadoor.nl	Domeinregistratie .nl	Actief	F0000.2504.0008.8752	3 april 2026
kortinghanger.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	29 maart 2026
kriszhairsalon.nl	Domeinregistratie .nl	Actief	F0000.2505.0001.3062	17 april 2026
lentjes-droomkeukens.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	30 maart 2026
lentjesdroomkeukens.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	30 maart 2026
luchtfilterwinkel.be	Domeinregistratie .be	Actief	F0000.2509.0001.2985	1 september 2026
luchtfilterwinkel.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
luxurynature.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	7 september 2026
luxurysofa.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	7 september 2026
m2n.nl	Domeinregistratie .nl	Actief	F0000.2510.0008.9227	8 oktober 2026
magazijn22.nl	Domeinregistratie .nl	Actief	F0000.2507.0001.3008	20 juni 2026
mancavestyling.nl	Domeinregistratie .nl	Actief	F0000.2506.0001.3182	29 mei 2026
mancavestylingbyroy.nl	Domeinregistratie .nl	Actief	F0000.2506.0001.3182	29 mei 2026
maxhaircreators.nl	Domeinregistratie .nl	Actief	F0000.2508.0008.7089	3 augustus 2026
media2net.nl	Domeinregistratie .nl	Actief	F0000.2510.0008.9227	8 oktober 2026
media2netdev.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	11 september 2026
media2nettest.nl	Domeinregistratie .nl	Actief	F0000.2508.0008.7089	14 augustus 2026
meditatie-expert.nl	Domeinregistratie .nl	Actief	F0000.2503.0001.3169	22 februari 2026
mhpspecialist.nl	Domeinregistratie .nl	Actief	F0000.2507.0001.3008	19 juni 2026
miekehoefnagel.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	16 november 2025
mihaelafitness.com	Domeinregistratie .com	Actief	F0000.2502.0009.1000	14 februari 2026
mijnvloerkleed.com	Domeinregistratie .com	Actief	F0000.2508.0008.7089	3 augustus 2026
mijnvloerkleed.nl	Domeinregistratie .nl	Actief	F0000.2508.0008.7089	3 augustus 2026
millionaire-artwork.com	Domeinregistratie .com	Actief	F0000.2505.0008.7813	9 mei 2026
mkautoservice.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	23 maart 2026
mnqr.nl	Domeinregistratie .nl	Actief	F0000.2505.0008.7813	8 mei 2026
motorkeurmerk.nl	Domeinregistratie .nl	Actief	F0000.2510.0008.9227	14 oktober 2026
mrdtail.com	Domeinregistratie .com	Actief	F0000.2508.0008.7089	7 augustus 2026
mrdtail.nl	Domeinregistratie .nl	Actief	F0000.2508.0008.7089	7 augustus 2026
mulderenvandermark.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	18 januari 2026
najaarsbeurspesse.nl	Domeinregistratie .nl	Actief	F0000.2503.0001.3169	20 februari 2026
nft-cursus.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	16 november 2025
nieuwsociaalhoogeveen.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	17 november 2025
office96.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	24 december 2025
onehundrednft.com	Domeinregistratie .com	Actief	F0000.2412.0001.6641	16 november 2025
onlyfanscursus.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	25 maart 2026
onlyflow.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	15 december 2025
openluchtfilter.be	Domeinregistratie .be	Actief	F0000.2509.0001.2985	1 september 2026
outdoorbed.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	16 december 2025
pelletgroothandel.nl	Domeinregistratie .nl	Actief	F0000.2411.0010.1925	3 november 2025
personalmillionaireplan.com	Domeinregistratie .com	Actief	F0000.2509.0008.8332	6 september 2026
personalmillionaireplan.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	6 september 2026
pokegoforum.nl	Domeinregistratie .nl	Actief	F0000.2507.0008.7692	11 juli 2026
popup-actie.nl	Domeinregistratie .nl	Actief	F0000.2506.0008.8151	5 juni 2026
prestige-meppel.nl	Domeinregistratie .nl	Actief	F0000.2502.0009.1000	15 februari 2026
prestigemeppel.nl	Domeinregistratie .nl	Actief	F0000.2502.0009.1000	15 februari 2026
profijttimmerwerken.nl	Domeinregistratie .nl	Actief	F0000.2506.0001.3182	31 mei 2026
puurvlees.nu	Domeinregistratie .nu	Actief	F0000.2503.0008.7145	3 maart 2026
pvcdeal.be	Domeinregistratie .be	Actief	F0000.2507.0001.3008	18 juni 2026
pvcdeal.de	Domeinregistratie .de	Actief	F0000.2507.0001.3008	18 juni 2026
pvcdeal.de	Trustee Service .de	Actief	F0000.2507.0001.3008	18 juni 2026
pvcdeal.fr	Domeinregistratie .fr	Actief	F0000.2507.0001.3008	18 juni 2026
pvcdeal.it	Domeinregistratie .it	Actief	F0000.2507.0001.3008	18 juni 2026
pvckorting.nl	Domeinregistratie .nl	Actief	F0000.2504.0008.8752	6 april 2026
re-wi.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
restaurantbezorgd.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	16 maart 2026
restaurantbezorgt.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	16 maart 2026
rewiautomotive.com	Domeinregistratie .com	Actief	F0000.2509.0001.2985	1 september 2026
rewiautomotive.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
rollator-groothandel.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	7 september 2026
royalfield.be	Domeinregistratie .be	Actief	F0000.2509.0008.8332	9 september 2026
royalfield.de	Domeinregistratie .de	Actief	F0000.2509.0008.8332	9 september 2026
royalfield.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	7 september 2026
rozenbestellen.com	Domeinregistratie .com	Actief	F0000.2508.0008.7089	10 augustus 2026
sacha-werndly.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	28 maart 2026
sextoys24.nl	Domeinregistratie .nl	Actief	F0000.2507.0001.3008	18 juni 2026
sexyblackfriday.com	Domeinregistratie .com	Actief	F0000.2411.0010.1925	15 november 2025
sexyblackfriday.nl	Domeinregistratie .nl	Actief	F0000.2411.0010.1925	15 november 2025
sharonlageveen.nl	Domeinregistratie .nl	Actief	F0000.2411.0001.6766	25 oktober 2025
siemservice.nl	Domeinregistratie .nl	Actief	F0000.2501.0010.2922	5 januari 2026
snackbarkeurmerk.nl	Domeinregistratie .nl	Actief	F0000.2411.0001.6766	22 oktober 2025
sneltestpakket.nl	Domeinregistratie .nl	Actief	F0000.2504.0008.8752	6 april 2026
sslkopen.be	Domeinregistratie .be	Actief	F0000.2510.0001.2822	16 september 2026
sslkopen.com	Domeinregistratie .com	Actief	F0000.2510.0001.2822	16 september 2026
systeemplafond-offerte.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	19 maart 2026
systeemplafond24.be	Domeinregistratie .be	Actief	F0000.2510.0008.9227	10 oktober 2026
systeemplafondofferte.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	19 maart 2026
tattookeurmerk.nl	Domeinregistratie .nl	Actief	F0000.2411.0001.6766	22 oktober 2025
tattooshopkeur.nl	Domeinregistratie .nl	Actief	F0000.2411.0001.6766	22 oktober 2025
tattoospray.nl	Domeinregistratie .nl	Actief	F0000.2507.0008.7692	6 juli 2026
tegentroep.nl	Domeinregistratie .nl	Actief	F0000.2502.0009.1000	2 februari 2026
thebodywaxstudio.nl	Domeinregistratie .nl	Actief	F0000.2510.0001.2822	28 september 2026
thebrightsmilestudio.nl	Domeinregistratie .nl	Actief	F0000.2510.0001.2822	28 september 2026
thehairboutiquecuracao.com	Domeinregistratie .com	Actief	F0000.2509.0001.2985	22 augustus 2026
thehaircolorboard.nl	Domeinregistratie .nl	Actief	F0000.2507.0008.7692	9 juli 2026
thehaircolorlab.nl	Domeinregistratie .nl	Actief	F0000.2412.0010.0695	11 december 2025
thehaircuttinglab.nl	Domeinregistratie .nl	Actief	F0000.2506.0001.3182	18 mei 2026
thehairlab.nl	Domeinregistratie .nl	Actief	F0000.2506.0001.3182	18 mei 2026
thehairlabcuracao.com	Domeinregistratie .com	Actief	F0000.2505.0001.3062	19 april 2026
thehairspacuracao.com	Domeinregistratie .com	Actief	F0000.2509.0008.8332	13 september 2026
themoneymakingcouple.com	Domeinregistratie .com	Actief	F0000.2505.0008.7813	13 mei 2026
thestudiohardenberg.nl	Domeinregistratie .nl	Actief	F0000.2411.0010.1925	3 november 2025
todaydeal.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	16 december 2025
toptiermen.nl	Domeinregistratie .nl	Actief	F0000.2509.0008.8332	7 september 2026
tuinierbeheer.nl	Domeinregistratie .nl	Actief	F0000.2505.0001.3062	17 april 2026
vaccinatiehoogeveen.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	21 december 2025
vanhaasterdev.nl	Domeinregistratie .nl	Actief	F0000.2501.0001.5966	17 december 2025
verdovendtatoeren.nl	Domeinregistratie .nl	Actief	F0000.2507.0008.7692	6 juli 2026
vintagevloerkleden.com	Domeinregistratie .com	Actief	F0000.2508.0008.7089	3 augustus 2026
viskorting.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	18 januari 2026
vlechtbedrijfvanessen.nl	Domeinregistratie .nl	Actief	F0000.2502.0001.7335	20 januari 2026
voorjaarsbeurspesse.nl	Domeinregistratie .nl	Actief	F0000.2503.0001.3169	20 februari 2026
voortmanhout.nl	Domeinregistratie .nl	Actief	F0000.2411.0010.1925	15 november 2025
voortmanpessebouw.nl	Domeinregistratie .nl	Actief	F0000.2411.0010.1925	15 november 2025
voortmanpessebv.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	26 november 2025
voortmanpessehout.nl	Domeinregistratie .nl	Actief	F0000.2411.0010.1925	15 november 2025
voortmanpessehouthandel.nl	Domeinregistratie .nl	Actief	F0000.2411.0010.1925	15 november 2025
voortmanpessewonen.nl	Domeinregistratie .nl	Actief	F0000.2411.0010.1925	15 november 2025
voortmanspa.nl	Domeinregistratie .nl	Actief	F0000.2504.0001.3619	18 maart 2026
vrbrillenshop.nl	Domeinregistratie .nl	Actief	F0000.2412.0001.6641	16 november 2025
warmepantoffels.be	Domeinregistratie .be	Actief	F0000.2505.0008.7813	3 mei 2026
warmepantoffels.nl	Domeinregistratie .nl	Actief	F0000.2505.0008.7813	3 mei 2026
werkenbijvoortmanpesse.nl	Domeinregistratie .nl	Actief	F0000.2411.0001.6766	26 oktober 2025
zakenkringhoogeveen.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	27 augustus 2026
zerifashion.com	Domeinregistratie .com	Actief	F0000.2501.0001.5966	21 december 2025
zipnoord.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
ziptuningnoord.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	1 september 2026
zoer.online	Domeinregistratie .online	Actief	F0000.2507.0008.7692	3 juli 2026
zoeroutdoorliving.de	Domeinregistratie .de	Actief	F0000.2506.0001.3182	27 mei 2026
zoeroutdoorliving.nl	Domeinregistratie .nl	Actief	F0000.2505.0001.3062	27 april 2026
zorg-hulpmiddelen.nl	Domeinregistratie .nl	Actief	F0000.2504.0008.8752	15 april 2026
zpperindezorg.nl	Domeinregistratie .nl	Actief	F0000.2509.0001.2985	28 augustus 2026`;

export default function Page() {
  const rows = React.useMemo(() => parseSites(defaultInput), []);
  const domainRows = React.useMemo(() => parseDomains(domainData), []);
  const [activeTab, setActiveTab] = React.useState<"hosting" | "domains">("hosting");
  const [dnsCount, setDnsCount] = React.useState<{ count: number; total: number } | null>(null);
  const [dnsLoading, setDnsLoading] = React.useState<boolean>(false);
  const [dnsError, setDnsError] = React.useState<string | null>(null);
  const [dnsMap, setDnsMap] = React.useState<Record<string, boolean>>({});
  const euro = React.useMemo(() => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }), []);
  const devSuffix = ".media2netdev.nl";
  const devCount = React.useMemo(() => rows.filter((r) => r.domain.endsWith(devSuffix)).length, [rows]);
  const [selected, setSelected] = React.useState<Record<string, boolean>>({});
  const [selectedHydrated, setSelectedHydrated] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("selectedDomains");
      if (raw) setSelected(JSON.parse(raw));
    } catch {}
    setSelectedHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!selectedHydrated) return;
    try {
      localStorage.setItem("selectedDomains", JSON.stringify(selected));
    } catch {}
  }, [selected, selectedHydrated]);

  React.useEffect(() => {
    const run = async () => {
      try {
        setDnsLoading(true);
        setDnsError(null);
        const res = await fetch("/api/dns-count", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            domains: rows.map((r) => r.domain),
            targetIp: "162.19.155.212",
          }),
        });
        if (!res.ok) {
          const t = await res.text();
          throw new Error(t || `Request failed (${res.status})`);
        }
        const data = (await res.json()) as {
          count: number;
          total: number;
          results: { domain: string; ips: string[]; match: boolean }[];
        };
        setDnsCount({ count: data.count, total: data.total });
        const map: Record<string, boolean> = {};
        for (const r of data.results) map[r.domain] = r.match;
        setDnsMap(map);
      } catch (e: any) {
        setDnsError(e?.message || "Failed to resolve DNS");
      } finally {
        setDnsLoading(false);
      }
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  return (
    <main className="w-full p-6 space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Server Migration Dashboard</h1>
        <p className="text-sm text-zinc-600">Overview of all sites and domains. Table is full width.</p>
      </header>

      {/* Tab Navigation */}
      <div className="border-b border-zinc-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("hosting")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "hosting"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300"
            }`}
          >
            Hosting
          </button>
          <button
            onClick={() => setActiveTab("domains")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "domains"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300"
            }`}
          >
            Domeinnamen
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "hosting" && (
        <section className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="text-sm text-zinc-600">A records pointing to 162.19.155.212</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {dnsLoading ? "…" : dnsError ? "-" : dnsCount?.count ?? "-"}
              </div>
              <div className="mt-1 text-xs text-zinc-500">of {dnsCount?.total ?? rows.length} domains</div>
              {dnsError && <div className="mt-2 text-xs text-rose-600">{dnsError}</div>}
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="text-sm text-zinc-600">Yearly revenue (matching client domains) (€24,95/month)</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {(() => {
                  const hasMap = Object.keys(dnsMap).length > 0;
                  if (dnsLoading || !hasMap) return "…";
                  const matchClientCount = Object.entries(dnsMap).filter(([d, v]) => v && !d.endsWith(devSuffix)).length;
                  const yearly = matchClientCount * 24.95 * 12;
                  return euro.format(yearly);
                })()}
              </div>
              <div className="mt-1 text-xs text-zinc-500">Excludes {devCount} dev domains ({devSuffix})</div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="text-sm text-zinc-600">Dev domains count ({devSuffix})</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">{devCount}</div>
              <div className="mt-1 text-xs text-zinc-500">These are not billed as clients</div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="text-sm text-zinc-600">Potential (selected green domains) (€24,95/month)</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {(() => {
                  const hasMap = Object.keys(dnsMap).length > 0;
                  if (dnsLoading || !hasMap) return "…";
                  const selectedGreen = Object.entries(selected).filter(([d, isSel]) => isSel && dnsMap[d] === true).length;
                  const yearly = selectedGreen * 24.95 * 12;
                  return euro.format(yearly);
                })()}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{Object.entries(selected).filter(([d, isSel]) => isSel && dnsMap[d] === true).length} selected</div>
            </div>
          </div>

          <DataTable
            data={rows}
            matchMap={dnsMap}
            selected={selected}
            onToggle={(domain) => {
              // Only allow marking if green
              if (dnsMap[domain] !== true) return;
              setSelected((s) => ({ ...s, [domain]: !s[domain] }));
            }}
          />
        </section>
      )}

      {activeTab === "domains" && (
        <section className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="text-sm text-zinc-600">Total domains</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">{domainRows.length}</div>
              <div className="mt-1 text-xs text-zinc-500">All registered domains</div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="text-sm text-zinc-600">Active domains</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {domainRows.filter(d => d.status.toLowerCase() === "actief").length}
              </div>
              <div className="mt-1 text-xs text-zinc-500">Currently active</div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="text-sm text-zinc-600">Domain extensions</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">
                {new Set(domainRows.map(d => d.name.split('.').pop())).size}
              </div>
              <div className="mt-1 text-xs text-zinc-500">Different TLDs</div>
            </div>
          </div>

          <DomainTable data={domainRows} />
        </section>
      )}
    </main>
  );
}

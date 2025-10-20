export type DomainRow = {
  name: string;
  product: string;
  status: string;
  lastInvoice: string;
  nextInvoice: string;
  nextInvoiceMonth: string; // Extracted month for filtering
};

// Function to extract month from Dutch date format
function extractMonthFromDutchDate(dateString: string): string {
  const monthMap: Record<string, string> = {
    'januari': '01',
    'februari': '02',
    'maart': '03',
    'april': '04',
    'mei': '05',
    'juni': '06',
    'juli': '07',
    'augustus': '08',
    'september': '09',
    'oktober': '10',
    'november': '11',
    'december': '12'
  };

  const parts = dateString.toLowerCase().split(' ');
  for (const part of parts) {
    if (monthMap[part]) {
      return monthMap[part];
    }
  }
  return '00'; // Unknown month
}

export function parseDomains(input: string): DomainRow[] {
  const lines = input.trim().split('\n');
  const domains: DomainRow[] = [];
  
  // Skip header lines and process data
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.includes('DienstenLijst') || line.includes('Naam') || line.includes('Product') || line.includes('Status') || line.includes('Laatste factuur') || line.includes('Volgende factuur') || line.includes('E-mailen') || line.includes('Downloaden')) {
      continue;
    }
    
    // Split by tabs or multiple spaces
    const parts = line.split(/\s{2,}|\t/).filter(part => part.trim());
    
    if (parts.length >= 5) {
      const nextInvoice = parts[4].trim();
      domains.push({
        name: parts[0].trim(),
        product: parts[1].trim(),
        status: parts[2].trim(),
        lastInvoice: parts[3].trim(),
        nextInvoice: nextInvoice,
        nextInvoiceMonth: extractMonthFromDutchDate(nextInvoice)
      });
    }
  }
  
  return domains;
}

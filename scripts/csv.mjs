// Parser CSV kecil (RFC 4180) tanpa dependensi. Dipakai oleh make-placeholders dan check-coverage.
import { readFileSync, writeFileSync } from 'node:fs';

export function parseCsv(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); cell = ''; if (row.length > 1 || row[0] !== '') rows.push(row); row = [];
    } else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

export function toCsv(records, columns) {
  const esc = (v) => (/[",\n\r]/.test(v ?? '') ? `"${String(v).replace(/"/g, '""')}"` : (v ?? ''));
  return [columns.join(','), ...records.map((r) => columns.map((c) => esc(r[c])).join(','))].join('\n') + '\n';
}

export const readCsv = (p) => parseCsv(readFileSync(p, 'utf8'));
export const writeCsv = (p, records, columns) => writeFileSync(p, toCsv(records, columns));

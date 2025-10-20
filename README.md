# M2N Dashboard (Next.js + Tailwind)

Simple paste-and-parse dashboard to view your websites as a searchable/sortable table.

## Requirements
- Node.js 18+
- npm or yarn or pnpm

## Install
```bash
npm install
```

## Development
```bash
npm run dev
```
Then open http://localhost:3000

## Build & Start
```bash
npm run build
npm run start
```

## How it works
- Paste your list into the textarea on the home page (`/`).
- The parser in `lib/parse.ts` tries to extract `domain`, `provider`, `sizeMB`, `monthlyMB`, `status` and an optional `note` (e.g., "No hosting", "alias for X", "forward to Y").
- The `DataTable` in `components/DataTable.tsx` provides search and sortable columns.

## Project structure
- `app/` Next.js App Router pages and layout
- `components/` Reusable React components
- `lib/` Utilities (parser)
- `app/globals.css` Tailwind styles


## CollegeMatch

Full‑stack app with a React (Vite) client and a Node/Express API that reads college data from an Excel file and returns filtered results.

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Project structure
```
.
├─ client/        # React + Vite frontend
├─ server/        # Express API (reads ../data/cet_colg_data.xlsx)
├─ data/          # Excel source: cet_colg_data.xlsx
└─ README.md
```

### Quick start (development)
Open two terminals.

1) API server
```bash
cd server
npm install
npm run dev
# Server starts on http://localhost:3000
```

2) Web client
```bash
cd client
npm install
npm run dev
# Vite dev server on http://localhost:5173
```

Then open http://localhost:5173 in your browser.

### Important: client proxy vs server port
- The API listens on port 3000 by default (`server/server.js`).
- The client `package.json` currently has `"proxy": "http://localhost:5000/"`.

If you want the client dev server to proxy API calls during development, make one of these adjustments:
- Option A (recommended): change `client/package.json` proxy to `http://localhost:3000/` and restart the client dev server.
- Option B: change the server port in `server/server.js` to 5000 and restart the server.

If you do neither, calls should still work because CORS is enabled on the server, but you will not get the convenience of the dev proxy.

### API overview
- Base URL (dev): `http://localhost:3000`
- Endpoint: `POST /fetchData`
- Body JSON fields:
  - `rank` (number)
  - `clusters` (array of cluster keys, e.g. `CS_Cluster`, `EC_Cluster`, ...)
  - `places` (array of strings, optional)
  - `category` (string, e.g. `3AK`, `3AG`, `GM`)

The server reads `data/cet_colg_data.xlsx` and returns filtered rows sorted by rank and place.

### Build for production (client)
```bash
cd client
npm run build
npm run preview
# Preview runs on http://localhost:4173 by default
```

### Troubleshooting
- Port mismatch: ensure the client proxy and server port align (see note above).
- Excel path: server expects `../data/cet_colg_data.xlsx` relative to `server/`.
- Node version: use a recent LTS (18 or newer) to avoid dependency issues.



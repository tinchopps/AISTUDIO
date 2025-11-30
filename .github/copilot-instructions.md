# AI Coding Instructions for Family Gallery (AISTUDIO)

## Architecture & Core Concepts
- **Framework:** React 19 + Vite + TypeScript.
- **Routing:** Custom state-based routing in `App.tsx` (no `react-router`).
  - `selectedAlbum` state controls view (Gallery vs Album).
  - `isAuthenticated` state controls Login vs Main App.
- **Data:** Static data defined in `data/familyData.ts`.
- **Media:** Google Drive integration.
  - Raw Drive links are transformed using `utils/driveHelper.ts`.
  - Images use Drive thumbnail endpoint (`sz=w2048`).
  - Videos use Drive preview endpoint (iframe).

## Styling & UI
- **CSS Framework:** Tailwind CSS.
- **Theme:** "Sepia" theme is core to the design (`bg-sepia-50`, `text-sepia-900`).
- **Icons:** `lucide-react`.
- **Animations:** `framer-motion` or Tailwind `animate-in` classes.

## Key Files & Directories
- `App.tsx`: Main entry, auth logic, routing logic.
- `types.ts`: Shared TypeScript interfaces (`Album`, `MediaItem`).
- `utils/driveHelper.ts`: Critical for handling Google Drive URLs.
- `data/familyData.ts`: Source of truth for album content.

## Development Workflows
- **Start:** `npm run dev`
- **Build:** `npm run build`
- **Env:** Requires `GEMINI_API_KEY` in `.env` (though usage is minimal currently).

## Coding Conventions
- **Types:** Define shared interfaces in `types.ts`.
- **Components:** Functional components with typed props.
- **Auth:** Simple client-side check against `SHARED_PASSWORD` in `App.tsx`.
- **Media Handling:** ALWAYS use `getEmbedUrl` from `utils/driveHelper.ts` when rendering media from Drive.

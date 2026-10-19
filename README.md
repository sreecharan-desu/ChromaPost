# chroma-post

social post creator: write captions and build visuals with background removal and stock backgrounds.

## features

- caption generator
- visuals generator: remove an image background (remove.bg) and place it on a random background (unsplash, pixabay)
- live preview panel

## stack

react 18 · vite · typescript · tailwind css

## run locally

```bash
npm install
cp .env.example .env
npm run dev
npm run build
```

## env

copy `.env.example` to `.env` and add `VITE_REMOVEBG_API_KEY`, `VITE_UNSPLASH_ACCESS_KEY` and `VITE_PIXABAY_API_KEY`.

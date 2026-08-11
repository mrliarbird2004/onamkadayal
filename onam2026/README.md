# Onam 2026 — Beaudouscamper Arts & Sports Welfare Trust

A premium, interactive, animated-film-style Onam celebration website built
with Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS and Framer
Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

Push this folder to a Git repo and import it in Vercel — no extra config
needed. `npm run build` / `next build` works out of the box.

## Replacing placeholder art with real assets

No reference photo of Maveli or the chief guests was available when this
site was generated, so every character (Maveli, the four chief guests) is
an original, hand-built SVG illustration living in `components/Maveli.tsx`
and `components/GuestCard.tsx`. They follow the brief's visual language —
rounded forms, warm gold/red/green palette, friendly expressions — but they
are illustrations, not real likenesses or photographs.

To swap in real artwork later:

1. **Logo** — drop your file at `public/images/logo/logo.png` and add an
   `<Image>` reference wherever you want it shown (e.g. in `Navbar.tsx`).
2. **Maveli artwork** — add a PNG/WebP to `public/images/maveli/`, then
   replace the `<MaveliArt />` SVG inside `components/Maveli.tsx` with an
   `<Image>` tag. Keep the surrounding `motion.div` (idle sway) as is.
3. **Chief guest photos** — add photos to `public/images/guests/` and swap
   `<GuestPortrait variant=... />` in `components/GuestCard.tsx` for
   `<Image>` tags once you have permission to use real photographs.
4. **Gallery photos** — drop event photography into
   `public/images/gallery/` using the filenames `photo01.jpg` …
   `photo08.jpg` (or edit the `GALLERY_FILES` array in
   `components/Gallery.tsx` to match your own filenames). Any image that
   isn't there yet automatically shows a "Photo coming soon" placeholder
   instead of breaking.
5. **Event-day photography** — same idea, in `public/images/events/`,
   filenames `event01.jpg` … `event03.jpg` (edit `EVENT_FILES` in
   `components/EventPhotos.tsx` to add more).

## Music

The floating music player uses the YouTube IFrame API against the track at
https://www.youtube.com/watch?v=Gw_RurnCslM. Playback only starts after the
visitor taps **Enter the Celebration**, in line with browser autoplay
policies — it never tries to force sound on page load.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     All UI sections and reusable art (Maveli, Pookalam, etc.)
public/images/  Organizer-replaceable image slots
```

## Notes

- Countdown target is fixed to 26 August 2026, 8:30 AM IST regardless of
  the visitor's local timezone.
- Reduced-motion preferences are respected site-wide (`prefers-reduced-motion`).
- The custom flower cursor and Pookalam mouse-parallax are desktop-only and
  disable themselves automatically on touch devices.

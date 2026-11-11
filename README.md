# Marvin Barro — Personal Developer Portfolio

A modern, responsive personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **next-themes**, and **React Hook Form + Zod**.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (with `prefers-reduced-motion` support)
- **Icons:** Lucide React
- **Theme Management:** `next-themes` (Persistent Light & Dark Mode)
- **Forms & Validation:** React Hook Form + Zod
- **Deployment:** Ready for Vercel

## Project Structure

```text
app/
  globals.css
  icon.tsx
  layout.tsx
  page.tsx
components/
  About.tsx
  Contact.tsx
  ContactForm.tsx
  Experience.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  ProjectCard.tsx
  Projects.tsx
  Skills.tsx
  ThemeProvider.tsx
  ThemeToggle.tsx
lib/
  constants.ts
  projects.ts
  skills.ts
public/
  images/
    akai-app.png
    eat-n-repeat-app.png
    marvin-profile.jpg
    university-library-app.png
```

## Customization Guide

1. **Personal Info, Stats & Journey:** Edit `lib/constants.ts`.
2. **Portrait Photo:** Replace `public/images/marvin-profile.jpg` (or update `HERO_CONTENT.portraitSrc` in `lib/constants.ts`).
3. **Projects:** Edit `lib/projects.ts` to update projects or replace placeholder slots.
4. **Skills:** Edit `lib/skills.ts`.
5. **Contact Form Service (Optional):** Set `NEXT_PUBLIC_CONTACT_ENDPOINT` in `.env.local` (see `.env.example`) to connect Formspree, Web3Forms, or another form service.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

Push this repository to GitHub and import it into [Vercel](https://vercel.com/new) with zero additional build configuration required.


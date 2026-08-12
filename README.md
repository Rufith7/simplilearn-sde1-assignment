## Simplilearn SDE-1 Assessment — Landing Page

A responsive landing-page implementation created as part of the Simplilearn SDE-1 technical assessment. The project recreates the supplied Figma design using Next.js App Router, TypeScript, React, and Tailwind CSS, with reusable server-rendered components and structured data separated from presentation.

## Live Repository

## GitHub: https://github.com/Rufith7/simplilearn-sde1-assignment

## Overview

This project focuses on translating a Figma landing-page design into a maintainable Next.js application with an emphasis on:

High visual fidelity to the supplied design

Responsive layouts across desktop, tablet, and mobile screens

Reusable React components

Server Components by default with the Next.js App Router

Structured content/data separated from presentation

Type-safe development with TypeScript

Tailwind CSS for responsive styling

Clean Git and project organization

## Tech Stack

**Framework:** Next.js 16 (App Router)

**Language:** TypeScript

**UI:** React

**Styling:** Tailwind CSS

**Linting:** ESLint

**Build:** Next.js production build with Turbopack

**Version Control:** Git / GitHub

**AI-assisted development:** ChatGPT

Key Implementation Details

Component-based architecture

## The page is divided into focused layout, section, and UI components instead of placing the entire page inside one component.

 components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Clients.tsx
│   ├── Community.tsx
│   ├── Features.tsx
│   ├── Stats.tsx
│   ├── Testimonial.tsx
│   ├── Blog.tsx
│   └── CTA.tsx
└── ui/
    ├── Button.tsx
    └── SectionHeading.tsx

## Structured content

Page copy, navigation items, feature content, statistics, testimonials, blog content, footer links, and image paths are maintained in the data/ directory instead of being embedded directly into presentation components.

data/
├── blogs.ts
├── clients.ts
├── community.ts
├── cta.ts
├── features.ts
├── footer.ts
├── hero.ts
├── navigation.ts
├── stats.ts
└── testimonial.ts

This makes content updates easier without changing component logic.

## Type safety

Shared TypeScript interfaces are maintained in types/index.ts for navigation items, buttons, features, statistics, blog posts, and other structured content.

## Responsive implementation

Layouts are implemented using Tailwind responsive utilities and are designed to adapt across:

Desktop

Laptop

Tablet

Mobile

The navigation also provides a mobile-friendly menu without introducing unnecessary client-side state.

## Page Sections

The current implementation includes:

Responsive navigation

Hero section

Client logos

Community/member categories

Feature section

Business statistics

Second feature section

Testimonial section

Blog cards

Call-to-action section

Footer

Asset Organization

Figma-exported assets are organized by purpose under public/images/:

public/images/
├── blog/
├── clients/
├── hero/
├── icons/
└── sections/

The data layer references these assets, allowing the presentation components to remain reusable.

Getting Started

Prerequisites

Node.js 20+ recommended

npm

Installation

## Clone the repository:

git clone https://github.com/Rufith7/simplilearn-sde1-assignment.git
cd simplilearn-sde1-assignment

Install dependencies:

npm install

Start the development server:

npm run dev

Open:

http://localhost:3000

Available Commands

Development

npm run dev

Lint

npm run lint

Production build

npm run build

Production start

npm start

The project was verified with both ESLint and the Next.js production build during development.

Design-to-Code Approach

The implementation followed a design-first process:

Reviewed the supplied Figma landing page.

Identified repeated patterns and page sections.

Created reusable components before assembling the page.

Separated content and asset references into typed data modules.

Exported design assets from Figma and organized them under public/images/.

Implemented responsive behavior with Tailwind CSS.

Used npm run lint and npm run build as final technical checks.

AI-Assisted Development

AI tools were used as a development accelerator for tasks such as:

Component scaffolding

Data-modeling suggestions

TypeScript error diagnosis

Responsive Tailwind implementation

Debugging build and lint errors

Reviewing component architecture

The resulting code was reviewed, integrated, and tested locally rather than copied blindly from generated output.

Engineering Decisions

## Server Components by default

The landing page does not require client-side state for its core content, so the implementation keeps components as Server Components wherever possible. This reduces unnecessary client-side JavaScript and follows the App Router model.

## Avoiding unnecessary libraries

No state-management library or backend was added because this assignment is a presentation-focused landing page. Adding Redux, a database, or an API layer would increase complexity without improving the required outcome.

Data vs presentation separation

Content is kept in data/, reusable types in types/, visual components in components/, and route composition in app/page.tsx. This keeps responsibilities clear and makes future page sections easier to extend.

Validation

Before submission, the project was checked with:

npm run lint
npm run build

Both checks completed successfully during development.

## Notes

This repository is intentionally focused on the SDE-1 assessment requirements. Backend services, authentication, database integration, CMS functionality, and other production features outside the supplied landing-page scope were not added because they were not required for the assignment.

## Author

Ruffith Shaik

Frontend Developer | React.js | Next.js | TypeScript

GitHub: https://github.com/Rufith7

Email: rufiths@gmail.com

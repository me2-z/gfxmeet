# GFXMEET V3 — Production Engineering Architecture & Documentation

## 1. Overview & Engineering Philosophy
GFXMEET V3 is engineered not as a static portfolio, but as a production-grade SaaS digital platform for an elite creative studio. Built with **Next.js App Router**, **TypeScript (Strict)**, **Tailwind CSS**, **Framer Motion**, **Three.js**, and **Lenis Smooth Scroll**, the architecture prioritizes:
- **Maintainability & Modular Separation of Concerns**
- **Sub-2s LCP and 60 FPS GPU-accelerated motion**
- **Granular Role-Based Access Control (RBAC) & Security**
- **Optimized Image & Asset Pipeline**

---

## 2. Project Directory Structure
```
app/
├── (auth)/             # Authentication routes (Sign in, Magic Link, Passkeys)
├── (admin)/            # Studio OS Admin Panel routes & Kanban pipeline
├── (client)/           # Secure Client Portal workspaces & invoicing
├── (studio)/           # Studio departments & discipline pages
├── api/                # REST API endpoints (contact, upload, order, message)
├── components/         # Modular UI components (Navbar, Hero, Gallery, Modal, Three.js)
├── actions/            # Server Actions for forms, authentication & DB mutations
├── lib/                # Database clients, Auth config, Zod schemas, utilities
├── types/              # TypeScript interfaces & type definitions
├── constants/          # Static configuration & studio metrics
└── store/              # Zustand state stores
```

---

## 3. Database Schema Models (Prisma / PostgreSQL)
The application utilizes relational data models ensuring zero duplicate data and strict foreign key constraints:

- **Users**: Authentication credentials, roles (`SUPER_ADMIN`, `ADMIN`, `DESIGNER`, `CLIENT`, `VIEWER`), 2FA status, and session tokens.
- **Clients**: Enterprise creator profiles, billing addresses, lifetime value, and active retainers.
- **Projects**: Production pipeline tracking title, client, category, status (`DISCOVERY`, `RESEARCH`, `DESIGN`, `REVIEW`, `REVISION`, `COMPLETED`), priority, and budget.
- **Thumbnails**: High-resolution creative assets linked to projects, storing views generated, CTR percentage, software stacks, and color palettes.
- **CaseStudies**: Apple product-launch style deep dives documenting challenge, audience research, visual strategy, process timeline, and Photoshop layer stacks.
- **Invoices**: Financial tracking with status (`PAID`, `PENDING`, `OVERDUE`), due dates, stripe reference IDs, and automated PDF generation logs.
- **Messages & Notifications**: Real-time communication threads and notification dispatch queue.

---

## 4. Security & Role-Based Access Control (RBAC)
- **Authentication**: Auth.js v5 supporting Google, GitHub, Magic Links, and WebAuthn Passkeys.
- **Granular Permissions**:
  - `SUPER_ADMIN`: Full system control, billing, backups, and user management.
  - `ADMIN` / `DESIGNER`: Project management, thumbnail publishing, case study CMS, and client communication.
  - `CLIENT`: Access to secure project workspace, artwork review, milestone approval, and invoice payment.
  - `VIEWER`: Read-only public portfolio access.
- **Server-Side Validation**: All mutations are validated using **Zod** schemas inside Next.js Server Actions with CSRF protection and rate limiting.

---

## 5. Image Pipeline & Optimization
- **Cloudinary / Edge CDN Integration**: Automatic generation of AVIF and WebP formats with responsive size variants.
- **Blur Placeholders**: Low-quality image placeholders (LQIP) generated instantly to prevent layout shifts (CLS < 0.05).
- **EXIF Stripping**: Automated metadata sanitization upon file upload.

---

## 6. Caching & Performance Strategy
- **ISR (Incremental Static Regeneration)**: Portfolio gallery and case studies cached at the edge with on-demand tag revalidation.
- **GPU Acceleration**: All motion (Framer Motion and Three.js canvas) utilizes `transform` and `opacity` properties to maintain strict 60 FPS performance.
- **Lenis Smooth Scroll**: Inertia-based smooth wheel scrolling tuned for luxury application feel.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EMSA is a single-product landing page for a women's jogger (Jogger Premium EMSA). It's a static site (HTML/CSS/JS only, no build tools) deployed via GitHub Pages at **emsa.solucionem.com**. The business model is cash-on-delivery (pago contra entrega) across Colombia, with orders confirmed via WhatsApp.

## Architecture

Three files make up the entire site:

- **`index.html`** — Full landing page + checkout modal (no separate checkout page)
- **`styles.css`** — All styles; CSS custom properties for theming in `:root`; mobile-first responsive breakpoints at 480px, 768px, 1024px
- **`script.js`** — All interactivity; **top ~120 lines are the editable config block** (prices, WhatsApp number, colors, sizes, testimonials, Web3Forms key, departments/cities)

## Configuration System

All business-critical values live as constants at the top of `script.js`. When changing prices, colors, or product info, **only edit the config block** — the rest of the file reads from it:

| Constant | Controls |
|---|---|
| `WHATSAPP_NUMBER` | WhatsApp redirect for orders and support |
| `WEB3FORMS_KEY` | API key for form data storage (web3forms.com) |
| `COMBOS` | Pricing tiers: 1 unit, x2, x3 (price, oldPrice, savings, discount, badge) |
| `COLORS` | Product color variants with swatch hex and image path |
| `AVAILABLE_SIZES` | Size options (S, M, L, XL) |
| `TESTIMONIALS` | Customer reviews with photo, text, author, city |
| `DEPARTMENTS` | All 32 Colombian departments with their cities |

## Order Flow

1. User selects color + combo (bundle) on the landing page
2. Clicks "Comprar Ahora" → opens checkout modal (not a page navigation)
3. Fills form with shipping info + size/color per unit
4. Submit: data POSTs to Web3Forms API, then redirects to WhatsApp with formatted order message
5. If Web3Forms fails, WhatsApp redirect still fires (no order is lost)

## Design Constraints

- **Color palette**: Navy/black/white/gold — based on the EMSA brand identity (logo is navy blue with gold accent)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Logo files**: `multimedia/imagen/material visual tienda/ems_sin_fondo.png` (text only, has large transparent padding — needs large height values to render visibly) and `emsa.png` (circular version with "TIENDA ONLINE")
- **Product images have spaces in filenames** (e.g., `colores productos/Azul Cielo.jpg`) — this is intentional and must be preserved

## Multimedia Structure

```
multimedia/
├── imagen/
│   ├── colores productos/    ← 10 color variant photos (one per COLORS entry)
│   ├── material visual producto/  ← Product shots, testimonials, transportadoras
│   └── material visual tienda/    ← Brand logos
└── video/
    ├── hero.mp4              ← Hero section background
    └── Jogger_En_Calle.mp4   ← Video showcase section
```

## Deployment

Static site hosted on GitHub Pages. The `CNAME` file points to `emsa.solucionem.com`. Push to `main` to deploy.

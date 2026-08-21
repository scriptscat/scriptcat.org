## What this PR does

### 1. Light Theme Contrast (WCAG AA)

Audit all light-theme colors for WCAG AA compliance (4.5:1 minimum) and darken failing values:

| Token | Before | After | Ratio |
|-------|--------|-------|-------|
| `--lp-muted` | #6e8194 (4.01:1) | #576d82 (5.36:1) | ✅ |
| `--lp-accent-deep` | #f05e1c (3.32:1) | #c94a0d (4.70:1) | ✅ |
| `--lp-mint` | #12b28c (2.70:1) | #0b8264 (4.78:1) | ✅ |
| `--ifm-color-primary` | #4594d5 (3.26:1) | #1976d2 (4.60:1) | ✅ |
| Card link: adblock | #F05E1C (3.32:1) | #c94a0d (4.70:1) | ✅ |
| Card link: shopping | #B9791A (3.61:1) | #8c5c0f (5.75:1) | ✅ |
| Card link: automation | #0E8A6C (4.31:1) | #0b8264 (4.78:1) | ✅ |

All text colors now pass WCAG AA for both normal and large text.

### 2. Mobile Step Arrows Fix

Fix step arrows in the landing page "How It Works" section — they now always point DOWN (↓) on mobile for both LTR and RTL languages:

- **Before (RTL):** Arrows pointed ↑ (wrong)
- **After (RTL):** Arrows point ↓ (correct)  
- **LTR:** Unchanged, still ↓

### Files Changed
- `src/components/landing/landing.module.css` — CSS variable values + mobile arrow rotation
- `src/components/landing/sections.tsx` — Hardcoded card link colors
- `src/css/custom.css` — Infima primary color palette

🤖 Generated with Codebuff

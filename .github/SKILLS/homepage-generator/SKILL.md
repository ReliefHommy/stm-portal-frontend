---
name: stm-homepage-generator
description: Generates React components for the Somtam Market Portal homepage using Studio.model context.
---

# Instructions
When generating components for `app/components/homepage`, follow these architectural rules:

1. **Subdomain-Aware Routing:** All links must use absolute URLs.
 -If a component consumes `Studio.Pillar=foods`, the CTA must point to `https://food.somtammarket.com`.
 -If a component consumes `Studio.Pillar=wellness`, the CTA must point to `https://welness.somtammarket.com`.
 -If a component consumes `Studio.Pillar=games`, the CTA must point to `https://gemes.somtammarket.com`.

2. **Masonry Logic:** Use a responsive column layout (1 col mobile, 3 col desktop) for the `EcosystemMasonry` component to mimic Pinterest.

3. **Data Mapping:** 
    - Use `Studio.asset` for primary imagery.
    - Use `Studio.DesignTemplate` to define the CSS classes (Tailwind) for the component container.

4. **No-Cart Rule:** Do not include checkout or cart logic in these components. Use a `RedirectBridge` function that points to `store.somtammarket.com`.

# Component Template (React/Tailwind)
Ensure the `CrossDomainCard` follows this structure:
- Image Container (75% height)
- Content Area: `Studio.topic` as a badge, `Studio.CampaignPost.title` as H3.
- Hover State: Display "Discover on [Subdomain]" button.
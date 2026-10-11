---
name: MH Digital Studio
description: Your business technology, assembled piece by piece with clear instructions.
colors:
  paper: "#FBFCFF"
  paper-tint: "#F1F5FF"
  grid-line: "rgba(29, 95, 230, 0.07)"
  sheet-white: "#FFFFFF"
  ink: "#0A1638"
  ink-soft: "#33446E"
  ink-muted: "#56658C"
  rule: "rgba(10, 22, 56, 0.16)"
  assembly-blue: "#1D5FE6"
  assembly-blue-deep: "#1650C8"
  selection-wash: "#DCE8FF"
  guide-blue: "#7CA6F2"
  error-red: "#B42318"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.6vw, 4.3rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 1.05
    fontVariation: "'wdth' 112"
  number:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.97rem"
    fontWeight: 600
    lineHeight: 1
  caption:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  hairline: "4px"
  tag: "6px"
  control: "8px"
  action: "10px"
  sheet: "12px"
  circle: "50%"
spacing:
  grid: "24px"
  gutter: "clamp(16px, 4vw, 48px)"
  max-width: "1200px"
  section: "clamp(4rem, 8vw, 6.5rem)"
  section-head-gap: "clamp(2rem, 4vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.assembly-blue}"
    textColor: "{colors.sheet-white}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "1em 1.4em"
  button-primary-hover:
    backgroundColor: "{colors.assembly-blue-deep}"
    textColor: "{colors.sheet-white}"
  button-primary-small:
    backgroundColor: "{colors.assembly-blue}"
    textColor: "{colors.sheet-white}"
    rounded: "{rounded.action}"
    padding: "0.7em 1em"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.assembly-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7em 1em"
  button-outline-hover:
    backgroundColor: "{colors.assembly-blue}"
    textColor: "{colors.sheet-white}"
  chip-available:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.5em 0.85em 0.5em 0.5em"
  chip-selected:
    backgroundColor: "{colors.selection-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  number-circle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.number}"
    rounded: "{rounded.circle}"
    size: "52px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.75em 0.9em"
  sheet:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "clamp(1.4rem, 3vw, 2rem)"
  tag:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.tag}"
    padding: "0.15em 0.55em"
---

# Design System: MH Digital Studio

## Overview

**Creative North Star: "The Assembly Manual"**

The site reads like a printed assembly manual. White paper carries a faint blue 24px grid. Every object is a single-weight blue line drawing, every part has a number in a circle, and dotted guide lines with arrowheads show where each piece goes. Navy ink sets the text. MH does the assembling, and the page shows the parts, the finished builds and the numbered steps.

Density is calm and orderly. Sections open on a heavy ink rule like the heading of a manual page. Lists are bounded white sheets divided by dashed cut lines. Real project screenshots sit in thin ink frames with "Fig. n" captions. Color does nothing decorative: blue marks what is drawn, what is selected and what you can act on, and nothing else. The world rejects the generic agency landing page (split hero with a screen mockup, then a grid of icon cards).

Motion follows the manual. On load, the exploded-view pieces slide in along their guides once. Choosing a piece fills it and moves it toward its place on the notebook while the others turn dashed. The dotted step arrows draw themselves in sequence.

**Key Characteristics:**
- White paper with a faint blue grid; navy ink text.
- Single-weight blue line drawing for every object and icon.
- Part numbers in line-only circles, set in Archivo.
- Dotted guide lines and arrows to show sequence and placement.
- A strict three-state vocabulary: selected, available, dimmed.
- Expanded Archivo headings over Hanken Grotesk text.

## Colors

One ink, one blue, and paper. The blue family has distinct jobs (line, action, selection wash, guide), and neutrals stay in the navy hue.

### Primary
- **Assembly Blue** (`assembly-blue`): the drawing line for every piece, the fill of the primary action, the outline action and its hover fill, focus rings, link hover underlines, and the dotted step arrows.
- **Assembly Blue Deep** (`assembly-blue-deep`): hover state of the primary action only.
- **Selection Wash** (`selection-wash`): the light fill of a selected piece or chip, the small accent bars inside drawings, and the input focus halo. Seeing it means "this one is chosen."
- **Guide Blue** (`guide-blue`): the softer line for empty slots in drawings, resting link underlines, list bullets in the parts list, and the scrollbar. Never used for text.

### Neutral
- **Paper** (`paper`): the page and input background.
- **Paper Tint** (`paper-tint`): screens drawn inside the line art, and the scrollbar track.
- **Grid Line** (`grid-line`): the 24px graph-paper grid on the body. It must stay barely visible.
- **Sheet White** (`sheet-white`): bounded surfaces that sit on the grid, such as the parts list, the form, project frames, chips, tags and the footer.
- **Ink** (`ink`): headings, body text, sheet borders, section rules, the nav underline and number circles.
- **Ink Soft** (`ink-soft`): ledes, secondary paragraphs, nav links and tag text.
- **Ink Muted** (`ink-muted`): captions, form hints, footer text and the dotted guide lines at rest.
- **Rule** (`rule`): dashed cut lines between list rows and around the about band, and tag borders.
- **Error Red** (`error-red`): invalid field borders and form error text only.

The logo and favicon carry their own colors (a light-to-electric blue gradient, `#7CC0FF` to `#2F7BFF`, on an Ink square). Those colors belong to the mark and are not part of the interface palette.

### Named Rules
**The One Blue Rule.** Blue means drawn, chosen or actionable. It never appears as a background wash, a gradient or decoration.

**The Navy Neutral Rule.** Every gray is navy at reduced strength (Ink, Ink Soft, Ink Muted, Rule). Do not use neutral or warm grays.

## Typography

**Display Font:** Archivo (with Arial), self-hosted variable, weight 500 to 900, width 100% to 125%
**Body Font:** Hanken Grotesk (with system-ui), self-hosted variable, weight 400 to 700

**Character:** Archivo expanded to 112% width at weight 800 gives headings the wide, stamped look of manual titles. Hanken Grotesk keeps text plain and friendly. Numbers use Archivo at its normal 100% width so they fit their circles.

### Hierarchy
- **Display** (800, clamp(2.5rem, 4.6vw, 4.3rem), 1.02, -0.025em, max 14ch): the hero headline only. On phones it is set to 2.35rem.
- **Headline** (800, clamp(2rem, 4vw, 3.2rem), 1, -0.02em): section titles, always under the heavy section rule. The contact headline is larger at clamp(2.3rem, 4.6vw, 3.8rem).
- **Title** (800, 1.3 to 1.6rem, 1.05 to 1.1): part names, project names (2.1rem on the lead project), step names and the form title.
- **Number** (800, 100% width, sized to its circle: 1.5rem in 52px, 1.35rem in 48px, 0.85rem on chips): part, step and chip numbers.
- **Body** (400, 1.0625rem, 1.6; 1rem under 640px): running text. Ledes are 44ch and paragraphs 55 to 65ch.
- **Label** (600 to 700, 0.95 to 1.0625rem, line-height 1): buttons, chips, nav links, form labels and channel links.
- **Caption** (400, 0.82 to 0.92rem, Ink Muted): "Fig. n · description" captions, form hints and the footer.

### Named Rules
**The Stamped Heading Rule.** Every h1 to h3 is Archivo 800 at 112% width with balanced wrapping. Body text never uses Archivo.

**The Sentence Case Rule.** No uppercase labels, no tracked-out small caps, and no kicker lines above headings. Each section opens with its heading directly under the rule.

## Layout

Content sits in a centered column 1200px wide (`max-width`), with a fluid gutter of clamp(16px, 4vw, 48px). The 24px body grid is a background only, and content is not snapped to it. Sections get vertical padding of clamp(4rem, 8vw, 6.5rem). The about band is shorter, at clamp(3rem, 6vw, 4.5rem). Each section head is at most 44rem wide.

The reading order is fixed: piece, what it includes, then the quote action. Each row of the parts list is a five-column grid (number 52px, drawing 64px, name up to 13rem, body, action). At 980px and below it becomes three columns, with the drawing tucked under the number. At 640px it becomes two columns. Steps run in five columns joined by horizontal dotted arrows, and at 980px they stack into one column with vertical dotted arrows. Projects use a two-column figure grid, with the lead figure spanning both columns (1.5fr image, 1fr text). At 640px everything is one column.

From 1000px up, the hero splits 1.08fr to 0.92fr (copy, then the exploded view) and is up to min(100svh, 940px) tall. Below 640px it stacks in this order: headline, lede, a smaller exploded view (max 330px), then the picker. The fixed nav is 12px plus gutter, and anchor offsets are 84 to 96px.

Breakpoints: 640px, 820px (the nav collapses to a toggle), 980px, 1000px.

## Elevation & Depth

Depth comes mainly from line and paper: white sheets with ink borders on the gridded page. A small set of soft navy shadows sits under three object types: the primary action, project frames and the form. They are diffuse and use negative spread, so they read as paper lifting slightly off the table. They are never hard offsets. Hover lifts the action and frames by 1 to 3px and deepens the shadow.

### Shadow Vocabulary
- **Action lift** (`box-shadow: 0 8px 18px -10px rgba(10, 22, 56, 0.55)`; hover `0 12px 22px -10px rgba(10, 22, 56, 0.6)`): primary buttons.
- **Plate lift** (`box-shadow: 0 14px 30px -18px rgba(10, 22, 56, 0.45)`; hover `0 20px 36px -18px rgba(10, 22, 56, 0.5)`): project screenshot frames.
- **Sheet lift** (`box-shadow: 0 18px 40px -26px rgba(10, 22, 56, 0.5)`): the contact form.

### Named Rules
**The Line First Rule.** A border separates things before a shadow does. Only the three roles above get shadows, and the parts list, chips, tags and nav stay flat.

## Shapes

Corners are softly rounded, and the radius grows with the size of the object: 4px for the focus ring, 6px for tags, 8px for chips, inputs and outline actions, 10px for primary actions, frames and the nav toggle, and 12px for sheets (the parts list and the form). Numbers are perfect circles. Borders are 1.5px Ink on sheets, chips and frames, 2px Ink on number circles, and 3px Ink for the section rule. Drawings use a 2px line weight (2.5px on piece outlines), with round caps and joins.

Line style carries meaning. A solid line means a piece that exists. A dashed or dotted line means a guide, a cut line or a dimmed piece. Arrowheads are drawn as two-sided border chevrons, never as glyphs.

### Named Rules
**The Three States Rule.** Selected = Selection Wash fill plus a heavy Assembly Blue line (a 3px effective border on chips, a 3.5px stroke on drawn pieces). Available = line only, with no fill change. Dimmed = dashed line at 40% opacity. No other state treatment exists.

**The Circled Number Rule.** Part, step and callout numbers always sit in line-only circles in Archivo 800. The number marks a part. It is not a badge.

## Components

### Buttons
Confident, blue and tactile.
- **Shape:** gently rounded (10px), with a 0.6em gap before the inline icon.
- **Primary:** Assembly Blue fill, white Hanken 700 label, 1em by 1.4em padding, with the action lift shadow. Used for every WhatsApp action. On phones it spans the full width inside the hero and the form.
- **Hover / Focus:** Assembly Blue Deep, a 1px lift and a deeper shadow. On press it drops by 1px. Focus shows a 2.5px Assembly Blue outline offset by 3px. Transitions take 0.2s on the expo-out ease.
- **Small:** 0.9375rem, 0.7em by 1em padding, in the nav.
- **Outline ("Cotizar" in parts rows):** a 1.5px Assembly Blue border, blue label and 8px radius, followed by a chevron. On hover it fills Assembly Blue with white text.
- **Arrow link:** an Ink label with 600 weight and a 1.5px Guide Blue underline, followed by a chevron. On hover the underline turns Assembly Blue and the chevron moves 3px.

### Chips (piece picker)
- **Style:** a white field with a 1.5px Ink border and 8px radius, a Label-style name, and a leading number in a 1.6em line-only circle.
- **State:** available means line only. Hover turns the border and text Assembly Blue. Selected (`aria-pressed="true"`) means a Selection Wash fill plus a 1.5px inset Assembly Blue ring over the blue border. Only one chip can be selected, and pressing it again releases it. The chips control the exploded view.
- **Selected number:** when a piece is selected, its chip number and its callout circle in the exploded view fill solid Assembly Blue with white numerals. This is intentional: it is the "selected" state applied to the number, and it is the only place a number circle is filled.

### Cards / Containers (sheets)
- **Corner Style:** 12px.
- **Background:** Sheet White on the gridded Paper.
- **Shadow Strategy:** flat, except the form, which gets the sheet lift (see Elevation & Depth).
- **Border:** 1.5px Ink. Rows inside a sheet are divided by 1.5px dashed Rule cut lines.
- **Internal Padding:** clamp(1.4rem, 3vw, 2rem).

### Inputs / Fields
- **Style:** a Paper fill, a 1.5px border at 35% Ink, 8px radius, 0.75em by 0.9em padding and a blue caret. Labels sit above in Hanken 600 at 0.95rem.
- **Focus:** the border turns Assembly Blue and gets a 3px Selection Wash halo. The default outline is removed.
- **Error:** the border turns Error Red, and a 600-weight Error Red message appears below the fields.

### Navigation
- **Style:** a fixed top bar of near-opaque Paper (94%) with a 1.5px Ink bottom line. The brand mark and name sit on the left, and Ink Soft 600 links and the small WhatsApp action sit on the right. Link hover is Assembly Blue.
- **Mobile (820px and below):** a 44px line-only toggle with 10px radius. It opens a full-width Paper panel with large links divided by dashed Rule cut lines.

### Tags
Small line-only labels at 0.82rem, Hanken 600, Ink Soft. They have a 1.5px Rule border, 6px radius and a white fill, and appear under project names.

### Exploded View (signature)
A single-weight line drawing (viewBox 640 by 540) of a browser window, a notebook, an envelope and a padlock. Numbered callouts 1 to 4 sit in circles, and dotted Ink Muted guides with arrowheads point toward the notebook. Piece outlines are 2.5px Assembly Blue on white, details are 2px, and empty slots are dashed Guide Blue. When a piece is selected it follows the Three States Rule and moves toward its slot over 1s on the expo-out ease. Its callout travels with it and its guide turns Assembly Blue. With reduced motion, only opacity changes.

### Figure Plate (project)
A screenshot in a 16:10 frame with a 1.5px Ink border, 10px radius and the plate lift shadow, cropped to the top. The caption below reads "Fig. n · description" in Ink Muted, followed by the name, a line of description, tags and an arrow link.

### Step Sequence
Numbered steps in 48px line-only circles on Paper, joined by dashed Assembly Blue arrows (8px dash period) that end in a chevron. When the list enters view, the arrows draw in sequence with a 0.15s stagger.

## Do's and Don'ts

### Do:
- **Do** draw every object as a single-weight Assembly Blue line with round caps (2px detail, 2.5px outline).
- **Do** use exactly three states: Selection Wash fill plus heavy blue line for selected, line only for available, dashed at 40% for dimmed.
- **Do** put part and step numbers in line-only circles in Archivo 800 at 100% width.
- **Do** open every section with a 3px Ink top rule followed directly by the Archivo headline.
- **Do** separate rows inside a sheet with 1.5px dashed Rule cut lines, and keep sheet borders at 1.5px solid Ink.
- **Do** caption real project screenshots as "Fig. n · description".
- **Do** let motion follow the guides: pieces arrive along their dotted lines once on load, and nothing loops.

### Don't:
- **Don't** add uppercase kickers or eyebrow labels above headings.
- **Don't** fill shapes with Assembly Blue to show emphasis. Solid blue is reserved for the primary action and the outline action's hover.
- **Don't** use filled, duotone or glyph icons. Icons are inline SVG line drawings at 1.8 stroke, except the WhatsApp brand mark.
- **Don't** use hard offset shadows or add shadows beyond the action, plate and sheet roles.
- **Don't** use dashed lines for anything that is selected or active. Dashed means guide, cut line or dimmed.
- **Don't** build the split hero with a screen mockup followed by a grid of icon cards.

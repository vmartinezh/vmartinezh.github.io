---
name: MH Digital Studio
description: Your business technology, assembled piece by piece with clear instructions.
colors:
  paper: "#FBFCFF"
  paper-tint: "#F1F5FF"
  grid-line: "rgba(29, 95, 230, 0.07)"
  sheet: "#FFFFFF"
  ink: "#0A1638"
  ink-soft: "#33446E"
  ink-muted: "#56658C"
  rule: "rgba(10, 22, 56, 0.16)"
  field-line: "rgba(10, 22, 56, 0.35)"
  placeholder: "#5C6A90"
  nav-bg: "rgba(251, 252, 255, 0.94)"
  assembly-blue: "#1D5FE6"
  assembly-blue-deep: "#1650C8"
  on-blue: "#FFFFFF"
  selection-wash: "#DCE8FF"
  guide-blue: "#7CA6F2"
  logo-bg: "#0A1638"
  logo-fg: "#7CC0FF"
  error-red: "#B42318"
  paper-dark: "#0B1E4A"
  paper-tint-dark: "#0A1A40"
  grid-line-dark: "rgba(190, 215, 255, 0.09)"
  sheet-dark: "#0E2558"
  ink-dark: "#EAF2FF"
  ink-soft-dark: "#C3D3F3"
  ink-muted-dark: "#9AB0DA"
  rule-dark: "rgba(234, 242, 255, 0.2)"
  field-line-dark: "rgba(234, 242, 255, 0.4)"
  placeholder-dark: "#93A9D6"
  nav-bg-dark: "rgba(11, 30, 74, 0.94)"
  assembly-blue-dark: "#9CC6FF"
  assembly-blue-deep-dark: "#B8D7FF"
  on-blue-dark: "#0B1E4A"
  selection-wash-dark: "rgba(156, 198, 255, 0.2)"
  guide-blue-dark: "#5E86C8"
  logo-bg-dark: "#EAF2FF"
  logo-fg-dark: "#1D5FE6"
  error-red-dark: "#FFADA3"
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
  panel: "14px"
  pill: "999px"
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
    textColor: "{colors.on-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "1em 1.4em"
  button-primary-hover:
    backgroundColor: "{colors.assembly-blue-deep}"
    textColor: "{colors.on-blue}"
  button-primary-small:
    backgroundColor: "{colors.assembly-blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.action}"
    padding: "0.7em 1em"
  button-primary-disabled:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.action}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.assembly-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7em 1em"
  button-outline-hover:
    backgroundColor: "{colors.assembly-blue}"
    textColor: "{colors.on-blue}"
  button-ghost:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0.8em 1.1em"
  button-ghost-pressed:
    backgroundColor: "{colors.selection-wash}"
    textColor: "{colors.ink}"
  button-round:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "44px"
  chip-available:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.5em 0.85em 0.5em 0.5em"
  chip-selected:
    backgroundColor: "{colors.selection-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  pill-available:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5em 0.9em"
  pill-selected:
    backgroundColor: "{colors.selection-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  pill-disabled:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
  number-circle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.number}"
    rounded: "{rounded.circle}"
    size: "52px"
  number-circle-selected:
    backgroundColor: "{colors.assembly-blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.circle}"
  theme-switch-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.circle}"
    size: "30px"
  theme-switch-button-pressed:
    backgroundColor: "{colors.assembly-blue}"
    textColor: "{colors.on-blue}"
  module-tab:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "0.85rem 0.9rem"
  module-tab-selected:
    backgroundColor: "{colors.selection-wash}"
    textColor: "{colors.ink}"
  option-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "0.75rem 0.9rem 0.75rem 2.7rem"
  option-card-checked:
    backgroundColor: "{colors.selection-wash}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.75em 0.9em"
  sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "clamp(1.4rem, 3vw, 2rem)"
  step-panel:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.2rem, 3vw, 2rem)"
  product-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "0.7rem"
  tag:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.tag}"
    padding: "0.15em 0.55em"
---

# Design System: MH Digital Studio

## Overview

**Creative North Star: "The Assembly Manual"**

The site reads like a printed assembly manual. White paper carries a faint blue 24px grid. Every object is a single-weight blue line drawing, every part has a number in a circle, and dotted guide lines with arrowheads show where each piece goes. Navy ink sets the text. MH does the assembling, and the page shows the parts, working demonstrations of them, the finished builds and the numbered steps.

The manual has two printings. The light theme is the printed manual: navy ink on white paper. The dark theme is the blueprint, a cyanotype: pale ink and pale blue line on deep blue paper with a pale grid. Both themes use the same roles and the same drawings, and only the token values change. The reader picks light, dark or system, and system is the default.

Density is calm and orderly. Sections open on a heavy ink rule like the heading of a manual page. Lists are bounded sheets divided by dashed cut lines. Real project screenshots sit in thin ink frames with "Fig. n" captions. Interactive demos sit in a line-drawn browser frame marked as a demonstration. Color does nothing decorative: blue marks what is drawn, what is selected and what you can act on, and nothing else. The world rejects the generic agency landing page (split hero with a screen mockup, then a grid of icon cards).

Motion follows the manual. On load, the exploded-view pieces slide in along their guides once. Choosing a piece fills it and moves it toward its place on the notebook while the others turn dashed. Stepping through the instructions fills the step rail and assembles the drawing stage by stage. Nothing moves on its own except a guided tour the reader starts, which runs once and stops.

**Key Characteristics:**
- Two printings of one manual: white paper with navy ink, or blueprint paper with pale ink.
- Single-weight blue line drawing for every object and icon.
- Part numbers and keys in circles, set in Archivo.
- Dotted guide lines and arrows to show sequence and placement.
- A strict state vocabulary: selected, available, dimmed.
- Expanded Archivo headings over Hanken Grotesk text.

## Colors

One ink, one blue, and paper, printed two ways. The blue family has distinct jobs (line, action, selection wash, guide), and neutrals stay in the ink's hue. Every role has a light value and a `-dark` value. The dark values are applied by `data-theme="dark"`, or by `prefers-color-scheme: dark` when no theme is forced.

### Primary
- **Assembly Blue** (`assembly-blue`; Blueprint Line `assembly-blue-dark` in dark): the drawing line for every piece, the fill of the primary action, the outline action and its hover fill, selected number circles and toggles, focus rings, link hover underlines, the step rail fill, and text selection.
- **Assembly Blue Deep** (`assembly-blue-deep`): hover state of the primary action only. In dark it is lighter (`assembly-blue-deep-dark`), because hover moves toward the paper's opposite.
- **On Blue** (`on-blue`): text and marks set on solid Assembly Blue. White in light, blueprint paper in dark.
- **Selection Wash** (`selection-wash`): the light fill of a selected piece, chip, pill, tab or option card, the small accent fills inside drawings, and the focus halo. Seeing it means "this one is chosen." In dark it is translucent pale blue.
- **Guide Blue** (`guide-blue`): the softer line for empty slots in drawings, resting link underlines, the dashed step rail, URL fields in the browser frame, and the scrollbar. Never used for text.

### Neutral
- **Paper** (`paper`): the page, input, option-card, product-card and ticket background.
- **Paper Tint** (`paper-tint`): screens drawn inside the line art, the "before" side of the compare demo, and the scrollbar track.
- **Grid Line** (`grid-line`): the 24px graph-paper grid on the body. It must stay barely visible in both themes.
- **Sheet** (`sheet`): bounded surfaces that sit on the grid: the parts list, the form, frames, the browser demo, the step panel, chips, pills, tabs, round buttons, tags and the footer.
- **Ink** (`ink`): headings, body text, sheet borders, section rules, the nav underline and number circles.
- **Ink Soft** (`ink-soft`): ledes, secondary paragraphs, nav links, tag text and theme-switch icons at rest.
- **Ink Muted** (`ink-muted`): captions, hints, footer text, disabled controls and the dotted guide lines at rest.
- **Rule** (`rule`): dashed cut lines between rows, the about band, the product-card border and tag borders.
- **Field Line** (`field-line`) and **Placeholder** (`placeholder`): input borders and placeholder text.
- **Nav Paper** (`nav-bg`): the fixed nav, paper at 94%.
- **Error Red** (`error-red`): invalid field borders and form error text only. In dark it is a pale coral.

The logo and favicon carry their own colors. The mark is drawn with `logo-fg` on a `logo-bg` square, and the pair inverts in dark (blue letters on a pale square). These belong to the mark and are not used elsewhere in the interface.

### Named Rules
**The One Blue Rule.** Blue means drawn, chosen or actionable. It never appears as a background wash, a gradient or decoration.

**The Ink Neutral Rule.** Every gray is the ink at reduced strength (Ink, Ink Soft, Ink Muted, Rule, Field Line): navy on light paper, pale blue on blueprint paper. Do not use neutral or warm grays.

**The Same Roles Rule.** A theme changes token values, never roles. Components read only the role tokens, so every component, drawing and state works in both printings without a per-theme override.

## Typography

**Display Font:** Archivo (with Arial), self-hosted variable, weight 500 to 900, width 100% to 125%
**Body Font:** Hanken Grotesk (with system-ui), self-hosted variable, weight 400 to 700

**Character:** Archivo expanded to 112% width at weight 800 gives headings the wide, stamped look of manual titles. Hanken Grotesk keeps text plain and friendly. Numbers and letter keys use Archivo at its normal 100% width so they fit their circles.

### Hierarchy
- **Display** (800, clamp(2.5rem, 4.6vw, 4.3rem), 1.02, -0.025em, max 14ch): the hero headline only. On phones it is set to 2.35rem.
- **Headline** (800, clamp(2rem, 4vw, 3.2rem), 1, -0.02em): section titles, always under the heavy section rule. The contact headline is larger at clamp(2.3rem, 4.6vw, 3.8rem).
- **Title** (800, 1.3 to 2.4rem, 1.05 to 1.1): part names, project names in the carousel (clamp(1.8rem, 3vw, 2.4rem)), step-panel titles, step names under the rail (1.05rem at 108%) and the form title. Demo headings such as the quote-builder legend and the agenda summary use Archivo 800 at 1.25rem and 105% width.
- **Number** (800, 100% width, sized to its circle: 1.5rem in 52px, 1.4rem in 56px, 0.95rem in 30px, 0.75 to 0.85rem in 24px and chip circles): part, step, callout and chip numbers, module keys A to D, carousel dots and agenda day numbers.
- **Body** (400, 1.0625rem, 1.6; 1rem under 640px): running text. Ledes are 44ch and paragraphs 46 to 65ch.
- **Label** (600 to 700, 0.85 to 1.0625rem, line-height 1): buttons, chips, pills, tabs, nav links, form labels and channel links.
- **Caption** (400, 0.8 to 0.92rem, Ink Muted): "Fig. n · description" captions, hints, demo notes, the agenda legend and the footer.

### Named Rules
**The Stamped Heading Rule.** Every h1 to h3 is Archivo 800 at 112% width with balanced wrapping. Body text never uses Archivo.

**The Sentence Case Rule.** No uppercase labels, no tracked-out small caps, and no kicker lines above headings. Each section opens with its heading directly under the rule.

## Layout

Content sits in a centered column 1200px wide (`max-width`), with a fluid gutter of clamp(16px, 4vw, 48px). The 24px body grid is a background only, and content is not snapped to it. Sections get vertical padding of clamp(4rem, 8vw, 6.5rem). The about band is shorter, at clamp(3rem, 6vw, 4.5rem). Each section head is at most 44rem wide. When a section has its own controls (the carousel arrows and dots, the tour button), the head becomes a row: heading block on the left, controls aligned to the bottom right, wrapping under on narrow screens.

The reading order is fixed: piece, what it includes, then the quote action. Each row of the parts list is a five-column grid (number 52px, drawing 64px, name up to 13rem, body, action). At 980px and below it becomes three columns, with the drawing tucked under the number. At 640px it becomes two columns.

The modules bench puts the lettered tabs in a column up to 18rem wide beside the browser demo. At 980px the tabs sit above the demo in two columns, and at 640px they drop their descriptions. Inside demos, the catalog grid is three columns (two at 640px), the agenda is 1.5fr days and times beside a 1fr ticket (stacked at 980px), and option cards fill a grid of 190px minimum columns.

Projects show one at a time in a carousel. Each slide is 1.45fr plate to 1fr text, stacked at 980px. The step track is five equal columns over a horizontal rail, followed by the step panel at 1.15fr text to 1fr drawing, stacked at 980px with the drawing capped at 520px.

From 1000px up, the hero splits 1.08fr to 0.92fr (copy, then the exploded view) and is up to min(100svh, 940px) tall. Below 640px it stacks in this order: headline, lede, a smaller exploded view (max 330px), then the picker. The fixed nav is 12px plus gutter, and anchor offsets are 84 to 96px.

Breakpoints: 640px, 820px (the nav collapses to a toggle), 980px, 1000px.

## Elevation & Depth

Depth comes mainly from line and paper: sheets with ink borders on the gridded page. A small set of soft shadows sits under a few object types. They are diffuse and use negative spread, so they read as paper lifting slightly off the table. They are never hard offsets. All of them use one shadow color token per theme (`--shadow`): navy ink in light, near-black blue at 70% in dark. Hover lifts the action and frames by 1 to 3px and deepens the shadow.

### Shadow Vocabulary
- **Action lift** (`box-shadow: 0 8px 18px -10px var(--shadow)`; hover `0 12px 22px -10px`): primary buttons.
- **Plate lift** (`box-shadow: 0 14px 30px -18px var(--shadow)`; hover `0 20px 36px -18px`): project screenshot frames.
- **Sheet lift** (`box-shadow: 0 18px 40px -26px var(--shadow)`): the contact form.
- **Stage lift** (`box-shadow: 0 22px 44px -30px var(--shadow)`, -32px on the step panel): the browser demo frame and the step panel, the two large working surfaces.
- **Handle lift** (`box-shadow: 0 6px 14px -6px var(--shadow)`): the round handle of the compare slider.

### Named Rules
**The Line First Rule.** A border separates things before a shadow does. Only the five roles above get shadows. The parts list, chips, pills, tabs, round buttons, option cards, product cards, tags and nav stay flat.

## Shapes

Corners are softly rounded, and the radius grows with the size of the object: 4px for the focus ring, 6px for tags and the demo tag, 8px for chips, inputs and outline actions, 10px for primary and ghost actions, tabs, option cards, product cards, frames and the nav toggle, 12px for sheets, the browser frame and the ticket, and 14px for the carousel and step panel. Pills (the theme switch, demo pills, the URL field) are fully rounded. Numbers, keys, dots and round buttons are perfect circles. Borders are 1.5px Ink on sheets, chips, pills, tabs, round buttons and frames, 2px Ink on large number circles, and 3px Ink for the section rule. The browser frame is itself a drawing: a 2.5px Assembly Blue outline with a 2px blue line under its bar. Drawings use a 2px line weight (2.2px in demo art, 2.5px on piece outlines), with round caps and joins.

Line style carries meaning. A solid line means a piece that exists. A dashed or dotted line means a guide, a cut line, something not yet done (the unconfirmed ticket, pending wizard steps, the demo tag), or a dimmed or unavailable item. Arrowheads and chevrons are drawn as two-sided borders or SVG strokes, never as glyphs.

### Named Rules
**The Three States Rule.** Selected = Selection Wash fill plus a heavy Assembly Blue line (a 3px effective border on chips, pills, tabs and option cards; a 3.5px stroke on drawn pieces). Available = line only, with no fill change. Dimmed or unavailable = dashed line, muted ink (40% opacity on drawn pieces, struck-through text on unavailable pills). No other state treatment exists.

**The Selected Number Rule.** A circle that marks a part or a choice is line-only at rest. When its item is selected, the circle fills solid Assembly Blue with On Blue content: chip numbers and callouts, module keys, the current step, the current carousel dot and the pressed theme button. Steps already passed keep a blue line without a fill. This fill is the selected state applied to the circle, not a badge.

**The Circled Number Rule.** Part, step, callout and key numbers always sit in circles in Archivo 800 at 100% width. The number marks a part.

## Components

### Buttons
Confident, blue and tactile.
- **Shape:** gently rounded (10px), with a 0.6em gap before the inline icon.
- **Primary:** Assembly Blue fill, On Blue Hanken 700 label, 1em by 1.4em padding, with the action lift shadow. Used for every WhatsApp action and the forward step in the quote builder. On phones it spans the full width inside the hero, the form and the ticket.
- **Hover / Focus:** Assembly Blue Deep, a 1px lift and a deeper shadow. On press it drops by 1px. Focus shows a 2.5px Assembly Blue outline offset by 3px. Transitions take 0.2s on the expo-out ease.
- **Disabled:** the fill drops away, leaving Ink Muted text inside a 1.5px dashed Ink Muted outline and no shadow.
- **Small:** 0.9375rem, 0.7em by 1em padding, in the nav.
- **Outline ("Cotizar" in parts rows, "Agregar" in product cards):** a 1.5px Assembly Blue border, blue label and 8px radius (7px in product cards). On hover, and when pressed in product cards, it fills Assembly Blue with On Blue text.
- **Ghost:** a Sheet field with a 1.5px Ink border, 10px radius, Ink Hanken 700 label and 0.8em by 1.1em padding. Used for secondary actions such as "Atrás" and the step tour toggle. Hover turns the border and label blue. When pressed it takes the selected treatment (Selection Wash plus heavy blue line).
- **Round:** a 44px circle with a 1.5px Ink border on Sheet, carrying a 20px stroked chevron. Used for previous and next arrows in the carousel and step panel. Hover turns it blue, and it scales to 0.94 on press.
- **Arrow link:** an Ink label with 600 weight and a 1.5px Guide Blue underline, followed by a chevron. On hover the underline turns Assembly Blue and the chevron moves 3px.

### Chips (piece picker)
- **Style:** a Sheet field with a 1.5px Ink border and 8px radius, a Label-style name, and a leading number in a 1.6em circle.
- **State:** available means line only. Hover turns the border and text Assembly Blue. Selected (`aria-pressed="true"`) means a Selection Wash fill plus a 1.5px inset Assembly Blue ring over the blue border, with the number filled per the Selected Number Rule. Only one chip can be selected, and pressing it again releases it. The chips control the exploded view.

### Pills (demo choices)
Fully rounded Label-style choices at 0.9rem, 1.5px Ink border, Sheet fill. Used for catalog filters and agenda times. Agenda days are the same pill at 10px radius with the day number in Archivo 800. Selected follows the Three States Rule. Unavailable pills are dashed Ink Muted with struck-through text at 75% opacity and no hover. A small legend of 14px squares (solid and dashed) explains the states.

### Theme Switch
Three 30px round icon buttons (light, dark, system) inside a pill with a 1.5px Ink border on Sheet, placed at the end of the nav links. Icons are 17px line drawings at 1.8 stroke in Ink Soft. The pressed button fills Assembly Blue with On Blue icon. The choice is saved in localStorage as `mh-theme`; no stored value means system. An inline script in the head applies a saved theme before first paint. In the mobile panel the buttons grow to 38px.

### Module Tabs and Browser Frame (signature)
- **Tabs:** full-width Sheet buttons with a 1.5px Ink border and 10px radius. Each has a 30px lettered key (A to D) in a circle, a bold name and an Ink Muted one-line description. Hover turns the border blue and nudges the tab 3px right. Selected follows the Three States Rule, and its key fills per the Selected Number Rule.
- **Browser frame:** the demo container, drawn as an object: Sheet fill, 2.5px Assembly Blue outline, 12px radius and the stage lift. Its bar holds three 9px line-only dots, a pill URL field in Guide Blue line with Ink Muted text, and a "Demostración" tag in a 1.5px dashed blue border (hidden at 640px). Each demo enters with a 0.45s fade and 8px rise.

### Cards / Containers (sheets)
- **Corner Style:** 12px (14px for the step panel).
- **Background:** Sheet on the gridded Paper.
- **Shadow Strategy:** flat, except the form (sheet lift) and the step panel (stage lift).
- **Border:** 1.5px Ink. Rows inside a sheet are divided by 1.5px dashed Rule cut lines.
- **Internal Padding:** clamp(1.4rem, 3vw, 2rem).

### Product Cards (catalog demo)
Small Paper cards with a 1.5px Rule border and 10px radius: a 46px line drawing in Assembly Blue (Selection Wash accent fill), a Hanken 700 name, an Ink Muted caption and the small outline action. An empty result is a dashed Rule box with centered Ink Muted text.

### Agenda Ticket (booking demo)
A Paper card with a 1.5px dashed Ink border and 12px radius while the booking is incomplete. Its summary line is Archivo 800 at 1.25rem. When confirmed, the border turns solid Assembly Blue with the selected treatment.

### Quote Builder (step-by-step demo)
- **Progress:** numbered segments with a 3px top line. Pending segments are dashed Rule with Ink Muted text. The current one turns solid Assembly Blue with Ink text. Each number sits in a 24px circle, filled blue when that step is done.
- **Option cards:** radio and checkbox choices drawn as Paper cards with a 1.5px Ink border and 10px radius, a bold name and a muted caption, with an 18px indicator on the left (round for radio, 5px corners for checkbox). Checked follows the Three States Rule, and the indicator fills blue with a Sheet or On Blue inner ring.
- **Summary:** label-value rows divided by dashed Rule cut lines, then a ghost "Atrás" on the left and the primary action on the right.

### Compare Slider (before and after demo)
A drawing in a 1.5px Ink frame with 10px radius. The "before" side is dashed Ink Muted line on Paper Tint; the "after" side is solid blue line on Sheet. A 2.5px Assembly Blue divider carries a 38px solid blue round handle with two On Blue chevrons and the handle lift. A full-size transparent range input drives it, and focus outlines the handle in Ink.

### Project Carousel
One project at a time on a sliding track (0.7s expo-out), with the hidden slides faded out. Controls sit in the section head: round previous and next arrows around 34px numbered dots in Archivo 800, the current dot filled per the Selected Number Rule. Each slide pairs a figure plate with its name, description, a bold "Piezas instaladas" list label and a numbered list whose 24px circles are blue line with blue numerals, then an arrow link. Arrow keys and a 50px swipe also move it. It never advances on its own.

### Step Rail and Progressive Assembly (signature)
- **Rail:** five 56px number circles (2px Ink border on Paper) over a dashed Guide Blue rail. A solid Assembly Blue fill grows along the rail to the current step in 0.7s. Hover lifts a step 3px and turns it blue. Passed steps keep a blue line. The current step fills solid blue, scales to 1.12 and gets a 6px Selection Wash halo. Step names sit under the circles and hide at 640px, where circles shrink to 44px.
- **Panel:** the step panel holds the title, description and a "what you get" line above a dashed cut line, then a round previous arrow, a "Paso N de 5" status in Ink Soft 700, and a round next arrow.
- **Assembly drawing:** the exploded kit is reused as Fig. 4 and assembles in five stages. Stage 1 shows loose pieces dashed at 60%. Stages 2 to 4 bring guides in and move pieces into their slots. Stage 5 fills the notebook with Selection Wash, removes the empty slots and shows a blue round check badge drawn in On Blue stroke. The caption updates to "Fig. 4 · " and the stage description. A "Ver recorrido" ghost button plays the steps once at 2.6s each and stops at the end.

### Inputs / Fields
- **Style:** a Paper fill, a 1.5px Field Line border, 8px radius, 0.75em by 0.9em padding and a blue caret. Labels sit above in Hanken 600 at 0.95rem. The catalog search uses the same field.
- **Focus:** the border turns Assembly Blue and gets a 3px Selection Wash halo. The default outline is removed.
- **Error:** the border turns Error Red, and a 600-weight Error Red message appears below the fields.

### Navigation
- **Style:** a fixed top bar of Nav Paper with a 1.5px Ink bottom line. The brand mark and name sit on the left, and Ink Soft 600 links, the theme switch and the small WhatsApp action sit on the right. Link hover is Assembly Blue.
- **Mobile (820px and below):** a 44px line-only toggle with 10px radius. It opens a full-width Paper panel with large links divided by dashed Rule cut lines, and the theme switch below them.

### Tags
Small line-only labels at 0.82rem, Hanken 600, Ink Soft. They have a 1.5px Rule border, 6px radius and a Sheet fill, and appear under project names.

### Exploded View (signature)
A single-weight line drawing (viewBox 640 by 540) of a browser window, a notebook, an envelope and a padlock. Numbered callouts 1 to 4 sit in circles, and dotted Ink Muted guides with arrowheads point toward the notebook. Piece outlines are 2.5px Assembly Blue on Sheet, details are 2px, and empty slots are dashed Guide Blue. When a piece is selected it follows the Three States Rule and moves toward its slot over 1s on the expo-out ease. Its callout travels with it, fills per the Selected Number Rule, and its guide turns Assembly Blue. With reduced motion, only opacity changes.

### Figure Plate (project)
A screenshot in a 16:10 frame with a 1.5px Ink border, 10px radius and the plate lift shadow, cropped to the top. The caption below reads "Fig. n · description" in Ink Muted.

## Do's and Don'ts

### Do:
- **Do** draw every object as a single-weight Assembly Blue line with round caps (2px detail, 2.5px outline).
- **Do** read only role tokens in components, so each one works in the printed and blueprint themes without overrides.
- **Do** use exactly three states: Selection Wash fill plus heavy blue line for selected, line only for available, dashed and muted for dimmed or unavailable.
- **Do** put part, step and key numbers in circles in Archivo 800 at 100% width, filling the circle solid blue only when its item is selected.
- **Do** open every section with a 3px Ink top rule followed directly by the Archivo headline.
- **Do** separate rows inside a sheet with 1.5px dashed Rule cut lines, and keep sheet borders at 1.5px solid Ink.
- **Do** caption real project screenshots and the assembly drawing as "Fig. n · description".
- **Do** put interactive demos inside the line-drawn browser frame with its "Demostración" tag.
- **Do** let motion follow the guides: pieces arrive along their dotted lines once on load, and nothing advances or loops on its own.

### Don't:
- **Don't** add uppercase kickers or eyebrow labels above headings.
- **Don't** fill shapes with Assembly Blue to show emphasis. Solid blue is reserved for the primary action, outline-action hover, selected circles and toggles, the step rail fill and the compare handle.
- **Don't** use filled, duotone or glyph icons. Icons are inline SVG line drawings at 1.8 to 2 stroke, except the WhatsApp brand mark.
- **Don't** use hard offset shadows or add shadows beyond the action, plate, sheet, stage and handle roles.
- **Don't** use dashed lines for anything that is selected or active. Dashed means guide, cut line, not yet done, or dimmed.
- **Don't** give a theme its own colors for a role, or its own component styles. Change the token value, never the role.
- **Don't** build the split hero with a screen mockup followed by a grid of icon cards.

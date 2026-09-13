export const TONES = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
] as const;

export type Tone = (typeof TONES)[number];

/** Pin a tag to a specific tone here. Anything not listed still gets a
 *  colour — just an automatic, deterministic one (see `hashTone` below) —
 *  so a new tag never needs a manual entry to look consistent. */
const PINNED: Record<string, Tone> = {
  Brand: "secondary",
  "UI Design": "tertiary",
  "Web Design": "tertiary",
  "Product Design": "primary",
  "Design System": "tertiary",
  "Design Systems": "tertiary",
};

const hashTone = (label: string): Tone => {
  let hash = 0;
  for (let i = 0; i < label.length; i++) {
    hash = (hash * 31 + label.charCodeAt(i)) | 0;
  }
  return TONES[Math.abs(hash) % TONES.length];
};

/** The colour a tag pill should render in, wherever it appears. Centralised
 *  here rather than left to each caller (or authored per-project in
 *  frontmatter) so the same tag name is always the same colour site-wide. */
export const tagTone = (label: string): Tone =>
  PINNED[label] ?? hashTone(label);

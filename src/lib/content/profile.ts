export interface Social {
  name: string;
  /** TODO(Sonja): drop in the real profile URLs. Empty entries are hidden. */
  href: string;
}

export const profile = {
  name: "Sonja Hanekom",
  role: "Product / UI / Graphic Designer",
  tagline:
    "I design brands, interfaces and the odd sticker sheet — mostly things people end up sticking on their laptops.",
  email: "",
};

export const socials: Social[] = [
  { name: "Instagram", href: "" },
  { name: "LinkedIn", href: "" },
  { name: "GitHub", href: "" },
  { name: "Something Store", href: "" },
];

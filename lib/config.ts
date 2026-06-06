/**
 * Global, owner-editable site configuration.
 * Values marked TODO are launch placeholders — see PLACEHOLDERS.md.
 */

export const SITE = {
  name: "W4GZ — Writing4GenZ",
  shortName: "W4GZ",
  wordmarkFull: "Writing4GenZ",
  motto: "Creates narratives worth living.",
  description:
    "W4GZ — Writing4GenZ. Cộng đồng đầu tiên ở Việt Nam coi viết là một thực hành nghiêm túc. Creates narratives worth living.",
  // TODO(placeholder): set the real production domain before launch.
  url: "https://w4gz.org",
  locale: "vi_VN",
  est: "2022",
  city: "Ho Chi Minh City",
} as const;

/**
 * TODO(placeholder): set the real form endpoint before launch.
 * Empty string => the stubbed handler logs to the console only (no network call).
 */
export const SUBMIT_ENDPOINT = "";

/** Destination for the persistent nav "Enroll →" shortcut (decided visitors). */
export const ENROLL_HREF = "/courses";

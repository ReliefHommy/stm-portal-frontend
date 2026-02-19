export const HIGHLIGHT_IDS = {
  COMMUNITY: [2,3,4,12, 18, 25,],
  RELIGIOUS: [2,3,4,7,8,9,10,11,13,14],
  MARKET: [30, 31, 32],
  CONCERT: [44, 45],
} as const;

export type HighlightEventType = keyof typeof HIGHLIGHT_IDS;

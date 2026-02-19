export const HIGHLIGHT_IDS = {
  COMMUNITY: [31,36,35,30,28,39,32,37,34,38,],
  RELIGIOUS: [21,10,19,9,1,2,25,3,4,5,6,12,18,17,],
  MARKET: [7,8,16,13,22,24,11,26,27,23,15,20,14,16,],
  CONCERT: [33,29,],
} as const;

export type HighlightEventType = keyof typeof HIGHLIGHT_IDS;

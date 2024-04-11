import { defineTokens } from "@pandacss/dev";

export const durations = defineTokens.durations({
  fastest: { value: "25ms" },
  faster: { value: "50ms" },
  fast: { value: "100ms" },
  normal: { value: "200ms" },
  slow: { value: "300ms" },
  slower: { value: "400ms" },
  slowest: { value: "500ms" },
});

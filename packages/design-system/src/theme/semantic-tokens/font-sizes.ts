import { defineSemanticTokens } from "@pandacss/dev";

export const fontSizes = defineSemanticTokens.fontSizes({
  h1: { value: "{fontSizes.4xl}" },
  h2: { value: "{fontSizes.3xl}" },
  h3: { value: "{fontSizes.2xl}" },
  h4: { value: "{fontSizes.xl}" },
  h5: { value: "{fontSizes.lg}" },
  h6: { value: "{fontSizes.md}" },
  p: { value: "{fontSizes.base}" },
  small: { value: "{fontSizes.sm}" },
});

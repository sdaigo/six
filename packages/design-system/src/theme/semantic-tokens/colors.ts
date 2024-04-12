import { defineSemanticTokens } from "@pandacss/dev";

export const colors = defineSemanticTokens.colors({
  accent: {
    DEFAULT: { value: "{colors.ultra.950}" },
    fg: { value: "{colors.ultra.50}" },
    emphasized: { value: "{colors.ultra.800}" },
    muted: { value: "{colors.ultra.700}" },
    subtle: { value: "{colors.ultra.100}" },
    disabled: { value: "{colors.ultra.200}" },
  },
  foreground: {
    DEFAULT: { value: "{colors.neutral.950}" },
    emphasized: { value: "{colors.neutral.800}" },
    muted: { value: "{colors.neutral.700}" },
    subtle: { value: "{colors.neutral.500}" },
    disabled: { value: "{colors.neutral.200}" },
  },
  background: {
    DEFAULT: { value: "{colors.white}" },
    canvas: { value: "{colors.neutral.50}" },
    muted: { value: "{colors.neutral.200}" },
    subtle: { value: "{colors.neutral.100}" },
    disabled: { value: "{colors.neutral.200}" },
  },
  border: {
    DEFAULT: { value: "{colors.neutral.200}" },
    emphasized: { value: "{colors.neutral.300}" },
    outline: { value: "{colors.neutral.700}" },
    accent: { value: "{colors.ultra.950}" },
    disabled: { value: "{colors.neutral.200}" },
  },
  error: {
    background: { value: "{colors.red.50}" },
    foreground: { value: "{colors.red.500}" },
  },
  alert: {
    background: { value: "{colors.orange.50}" },
    foreground: { value: "{colors.orange.500}" },
  },
  success: {
    background: { value: "{colors.green.50}" },
    foreground: { value: "{colors.green.500}" },
  },
  info: {
    background: { value: "{colors.blue.50}" },
    foreground: { value: "{colors.blue.500}" },
  },
});

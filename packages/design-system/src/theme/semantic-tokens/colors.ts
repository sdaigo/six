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
    "50": { value: "{colors.red.50}" },
    "100": { value: "{colors.red.300}" },
    "200": { value: "{colors.red.500}" },
    "300": { value: "{colors.red.700}" },
    "400": { value: "{colors.red.950}" },
  },
  alert: {
    "50": { value: "{colors.orange.50}" },
    "100": { value: "{colors.orange.300}" },
    "200": { value: "{colors.orange.500}" },
    "300": { value: "{colors.orange.700}" },
    "400": { value: "{colors.orange.950}" },
  },
  success: {
    "50": { value: "{colors.green.50}" },
    "100": { value: "{colors.green.300}" },
    "200": { value: "{colors.green.500}" },
    "300": { value: "{colors.green.700}" },
    "400": { value: "{colors.green.950}" },
  },
  info: {
    "50": { value: "{colors.blue.50}" },
    "100": { value: "{colors.blue.300}" },
    "200": { value: "{colors.blue.500}" },
    "300": { value: "{colors.blue.700}" },
    "400": { value: "{colors.blue.950}" },
  },
});

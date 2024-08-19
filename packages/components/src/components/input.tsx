import { styled } from "@/styled-system/jsx";
import { input } from "@/styled-system/recipes";
import { ark } from "@ark-ui/react/factory";

export const Input = styled(ark.input, input);
export interface FormLabelProps extends React.ComponentProps<typeof Input> {}

import { styled } from "@/styled-system/jsx";
import { formLabel } from "@/styled-system/recipes";
import { ark } from "@ark-ui/react/factory";

export const FormLabel = styled(ark.label, formLabel);
export interface FormLabelProps extends React.ComponentProps<typeof FormLabel> {}

import { styled } from "@/styled-system/jsx";
import { button } from "@/styled-system/recipes";
import { ark } from "@ark-ui/react/factory";

export const Button = styled(ark.button, button);

export interface ButtonProps extends React.ComponentProps<typeof Button> {}

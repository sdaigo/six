import { styled } from "@/styled-system/jsx";
import { loader } from "@/styled-system/recipes";
import { LoaderCircle } from "lucide-react";

export const Loader = styled(LoaderCircle, loader);
export interface LoaderProps extends React.ComponentProps<typeof Loader> {}

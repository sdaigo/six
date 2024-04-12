import { format } from "date-fns";

export const formatDate = (str: string) => format(new Date(str), "MMMM d, yyyy");

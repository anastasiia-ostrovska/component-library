import { ComponentProps } from "react";

export interface InputProps extends Omit<ComponentProps<"input">, "onChange"> {
	name: string;
	value: string;
	onChange: (newValue: string) => void;
	label?: string;
	helperText?: string;
	validationState?: "standard" | "error" | "success";
	clearable?: boolean;
}

import { Eye, EyeOff } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface ShowPasswordIconButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	iconSize: number;
	showPassword: boolean;
	onClick: () => void;
}

export const ShowPasswordIconButton = ({
	iconSize,
	showPassword,
	onClick,
	...props
}: ShowPasswordIconButtonProps) => {
	const label = showPassword ? "Hide password" : "Show password";

	return (
		<button type="button" aria-label={label} onClick={onClick} {...props}>
			{showPassword ? <EyeOff size={iconSize} /> : <Eye size={iconSize} />}
		</button>
	);
};

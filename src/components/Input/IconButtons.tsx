import { Eye, EyeOff, X } from "lucide-react";

const ICON_SIZE = 16;
const inputIconStyles =
	"absolute right-2 inset-y-0 text-gray-400 hover:text-gray-600";

// Show the password button
interface ShowPasswordIconButtonProps {
	showPassword: boolean;
	onClick: () => void;
}

export const ShowPasswordIconButton = ({
	showPassword,
	onClick,
}: ShowPasswordIconButtonProps) => {
	const label = showPassword ? "Hide password" : "Show password";

	return (
		<button
			type="button"
			aria-label={label}
			onClick={onClick}
			className={inputIconStyles}
		>
			{showPassword ? <EyeOff size={ICON_SIZE} /> : <Eye size={ICON_SIZE} />}
		</button>
	);
};

// Clear input button
interface ClearInputIconButtonProps {
	onClick: () => void;
}

export const ClearInputIconButton = ({
	onClick,
}: ClearInputIconButtonProps) => {
	return (
		<button
			type="button"
			aria-label={"Clear input"}
			onClick={onClick}
			className={inputIconStyles}
		>
			<X size={ICON_SIZE} />
		</button>
	);
};

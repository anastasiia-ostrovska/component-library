import type { ButtonHTMLAttributes } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

interface ClearInputIconButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	iconSize: number;
	onClick: () => void;
}

export const CloseIconButton = ({
	iconSize,
	onClick,
	className,
	...props
}: ClearInputIconButtonProps) => {
	return (
		<button
			type="button"
			aria-label={"Clear input"}
			onClick={onClick}
			className={clsx(
				"cursor-pointer transition-transform duration-200 hover:scale-120",
				className
			)}
			{...props}
		>
			<X size={iconSize} />
		</button>
	);
};

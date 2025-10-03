import { useEffect, useState } from "react";
import { CloseIconButton } from "@/components/CloseIconButton";
import type { ToastProps } from "./types";
import { transitionDuration, variantStyles } from "./styles";
import { icons } from "./icons";
import { ICON_SIZE } from "./consts";
import clsx from "clsx";

export const Toast = ({
	handleCLose,
	isOpen,
	message,
	transition = "fade",
	duration = 5000,
	withCloseButton = false,
	variant = "primary",
}: ToastProps) => {
	const [isVisible, setIsVisible] = useState(false);

	console.log("isVisible: ", isVisible);
	console.log("isOpen: ", isOpen);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
			const hideVisibilityTimer = setTimeout(() => {
				setIsVisible(false);
			}, duration - transitionDuration[transition]);

			const closeTimer = setTimeout(() => {
				handleCLose();
			}, duration);

			return () => {
				clearTimeout(hideVisibilityTimer);
				clearTimeout(closeTimer);
			};
		}
	}, [duration, handleCLose, isOpen, transition]);

	const handleCloseWithAnimation = () => {
		setIsVisible(false);
		setTimeout(handleCLose, transitionDuration[transition]);
	};

	if (!isOpen) return null;

	return (
		<div
			className={clsx(
				`
		fixed right-8 bottom-8 flex flex-row items-center gap-4
		max-w-3xs w-full sm:max-w-sm py-2 px-4 text-wrap break-all
		bg-background border-2 rounded-md  
		transition-all ease-in-out
		`,
				`duration-[${[transitionDuration[transition]]}]ms`,
				isVisible ? "opacity-100" : "opacity-0",
				transition === "slide" &&
					(isVisible ? "translate-x-0" : "translate-x-full"),
				variantStyles[variant]
			)}
		>
			{icons[variant]}
			<p className="w-full">{message}</p>
			{withCloseButton && (
				<CloseIconButton
					iconSize={ICON_SIZE}
					onClick={handleCloseWithAnimation}
				/>
			)}
		</div>
	);
};

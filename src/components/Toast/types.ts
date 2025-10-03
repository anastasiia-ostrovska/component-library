export type ToastVariant =
	| "primary"
	| "secondary"
	| "error"
	| "warning"
	| "success";

export type ToastTransition = "fade" | "slide";

export interface ToastProps {
	isOpen: boolean;
	handleCLose: () => void;
	message: string;
	variant?: ToastVariant;
	transition?: ToastTransition;
	duration?: number;
	withCloseButton?: boolean;
}

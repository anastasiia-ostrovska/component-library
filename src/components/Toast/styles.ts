import type { ToastTransition, ToastVariant } from "./types";
import { FADE_TRANSITION_DURATION, SLIDE_TRANSITION_DURATION } from "./consts";

export const variantStyles: Record<ToastVariant, string> = {
	primary: "text-primary ",
	secondary: "text-secondary",
	error: "text-error",
	warning: "text-warning",
	success: "text-success",
};

export const transitionDuration: Record<ToastTransition, number> = {
	fade: FADE_TRANSITION_DURATION,
	slide: SLIDE_TRANSITION_DURATION,
};

import { JSX } from "react";
import {
	InfoIcon,
	CheckCircleIcon,
	CircleAlert,
	TriangleAlert,
} from "lucide-react";
import { ToastVariant } from "@/components/Toast/types";
import { ICON_SIZE } from "./consts";

export const icons: Record<ToastVariant, JSX.Element> = {
	primary: <InfoIcon size={ICON_SIZE} />,
	secondary: <InfoIcon size={ICON_SIZE} />,
	success: <CheckCircleIcon size={ICON_SIZE} />,
	error: <CircleAlert size={ICON_SIZE} />,
	warning: <TriangleAlert size={ICON_SIZE} />,
};

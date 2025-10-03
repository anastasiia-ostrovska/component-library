import { ReactNode } from "react";

export interface MenuItem {
	title: string;
	icon?: ReactNode;
	path?: string;
	children?: MenuItem[];
}

export interface SidebarProps {
	items: MenuItem[];
	header?: ReactNode;
}

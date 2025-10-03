import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { MenuItem } from "./types";
import clsx from "clsx";

export const SidebarItem = ({
	title,
	icon = null,
	path = "",
	children,
}: MenuItem) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	if (children && !path) {
		return (
			<li
				className={`flex flex-col py-3 px-6 rounded cursor-pointer hover:bg-background-hover`}
			>
				<div className="flex flex-row items-center justify-between">
					<div className="flex flex-row items-center gap-2">
						<div className="h-4 w-4">{!!icon && icon}</div>
						{title}
					</div>
					<ChevronDown
						className={clsx(
							"h-5 w-5 rotate-270 opacity-70 hover:opacity-90 transition-transform duration-200",
							isOpen ? "rotate-360" : ""
						)}
						onClick={handleToggleAccordion}
					/>
				</div>
				<ul
					className={clsx(
						"list-none overflow-hidden transition-all duration-500 ease-in-out",
						isOpen ? "max-h-screen mt-2" : "max-h-0 overflow-hidden"
					)}
				>
					{children.map((item) => {
						return <SidebarItem key={item.title} {...item} />;
					})}
				</ul>
			</li>
		);
	}

	return (
		<li
			className={`flex flex-col py-3 px-6 rounded cursor-pointer hover:bg-background-hover`}
		>
			<Link href={path} className="flex flex-row items-center gap-2">
				<div className="h-4 w-4">{icon}</div>
				{title}
			</Link>
		</li>
	);
};

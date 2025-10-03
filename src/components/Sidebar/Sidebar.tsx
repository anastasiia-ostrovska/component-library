import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import type { SidebarProps } from "./types";
import clsx from "clsx";

export const Sidebar = ({ items, header = null }: SidebarProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{!isOpen && (
				<button
					onClick={() => setIsOpen(true)}
					className={`
				fixed z-60 top-4 right-4 px-3 py-2 rounded-lg shadow bg-background cursor-pointer
				opacity-90 hover:opacity-100 hover:scale-102 transition-transform duration-200`}
				>
					<Menu />
				</button>
			)}

			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}

			<aside
				className={clsx(
					`
					fixed top-0 right-0 z-50 h-screen w-full max-w-3xs sm:w-3xs 
					bg-background shadow-lg overflow-auto
					transition-all ease-in-out duration-300`,
					isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
				)}
			>
				<div className="flex flex-row justify-between items-center h-15 py-3 px-6">
					{header}
					<button
						onClick={() => setIsOpen(false)}
						className={`ml-auto cursor-pointer opacity-90 hover:opacity-100 hover:scale-102 transition-transform duration-200`}
					>
						<X />
					</button>
				</div>
				<ul className="list-none">
					{items.map((item) => {
						return <SidebarItem key={item.title} {...item} />;
					})}
				</ul>
			</aside>
		</>
	);
};

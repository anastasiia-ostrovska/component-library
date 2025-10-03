import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar, type SidebarProps } from "@/components/Sidebar";
import { oneLeveNestedItems, twoLeveNestedItems } from "./data";

const meta: Meta<typeof Sidebar> = {
	title: "UI/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A responsive sidebar component that slides in from the right. Supports nested menus, optional header, and closing by clicking outside or using the close button.",
			},
		},
	},
	argTypes: {
		items: {
			description:
				"Array of menu items to render in the sidebar. Each item can have a title, optional icon, path, and nested children.",
			control: "object",
		},
		isOpen: {
			description:
				"Initial open state of the sidebar. Can be controlled externally.",
			control: "boolean",
		},
		header: {
			description:
				"Optional ReactNode to render at the top of the sidebar, typically a title or logo.",
			control: "object",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const Screen = (args: SidebarProps) => {
	return (
		<div className="relative w-full h-[400px] overflow-hidden">
			<Sidebar {...args} />
		</div>
	);
};

export const OneLevel: Story = {
	render: (args) => <Screen {...args} />,
	args: { items: oneLeveNestedItems },
};

export const TwoLevel: Story = {
	render: (args) => <Screen {...args} />,
	args: { items: twoLeveNestedItems },
};

export const InitiallyOpen: Story = {
	render: (args) => <Screen {...args} />,
	args: { items: oneLeveNestedItems, isOpen: true },
};

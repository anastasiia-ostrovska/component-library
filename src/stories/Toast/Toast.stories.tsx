import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast, type ToastProps } from "@/components/Toast";

const meta: Meta<typeof Toast> = {
	title: "UI/Toast",
	component: Toast,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A toast notification component that appears at the bottom-right of the screen. Supports multiple variants (primary, secondary, success, error, warning), auto-dismiss after a specified duration, optional manual close button, and smooth fade or slide transitions.",
			},
		},
	},
	argTypes: {
		message: {
			description: "Text content displayed inside the toast notification",
		},
		isOpen: {
			description: "Controls whether the toast is visible or hidden",
		},
		variant: {
			description: "Visual style of the toast",
		},
		duration: {
			description: "Time in milliseconds before the toast automatically closes",
		},
		withCloseButton: {
			description: "Whether to show a manual close button",
		},
		handleCLose: {
			description: "Callback function triggered when the toast closes",
		},
		transition: {
			description: "Type of animation applied when showing or hiding the toast",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ControlledToast = (args: ToastProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="min-h-100 overflow-hidden">
			<button
				className="mb-4 rounded-lg bg-foreground text-background p-2 cursor-pointer transition-transform duration-200 hover:scale-105"
				onClick={() => setIsOpen(true)}
			>
				Open toast
			</button>
			<Toast {...args} isOpen={isOpen} handleCLose={() => setIsOpen(false)} />
		</div>
	);
};

// Variants
export const Primary: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "Primary toast notifications! (3s)",
		variant: "primary",
		duration: 3000,
		transition: "fade",
	},
};

export const Success: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "Success toast notifications! (3s) ",
		variant: "success",
		duration: 3000,
		transition: "fade",
	},
};

export const Warning: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "Warning toast notifications! (3s) ",
		variant: "warning",
		duration: 3000,
		transition: "fade",
	},
};

export const Error: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "Error toast notifications! (3s) ",
		variant: "error",
		duration: 3000,
		transition: "fade",
	},
};

export const Secondary: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "Secondary toast notifications! (3s) ",
		variant: "secondary",
		duration: 3000,
		transition: "fade",
	},
};

// Durations
export const ShortDuration: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "This toast will disappear in 2s",
		variant: "success",
		duration: 2000,
		transition: "fade",
	},
};

export const LongDuration: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "This toast will disappear in 6s",
		variant: "primary",
		duration: 6000,
		transition: "fade",
	},
};

// Close Button
export const WithCloseButton: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "You can dismiss this manually",
		variant: "warning",
		duration: 5000,
		withCloseButton: true,
		transition: "fade",
	},
};

export const WithoutCloseButton: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "This will only auto-dismiss",
		variant: "secondary",
		duration: 5000,
		withCloseButton: false,
		transition: "fade",
	},
};

// Animations
export const SlideAnimation: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "I slide in from the right side!",
		variant: "success",
		duration: 5000,
		transition: "slide",
		withCloseButton: true,
	},
};

export const FadeAnimation: Story = {
	render: (args) => <ControlledToast {...args} />,
	args: {
		message: "I fade in and out!",
		variant: "primary",
		duration: 5000,
		transition: "fade",
		withCloseButton: true,
	},
};

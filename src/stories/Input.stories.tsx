import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { InputProps } from "@/types";
import { Input } from "@/components/Input";

const meta: Meta<typeof Input> = {
	title: "UI/Input",
	component: Input,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		type: {
			control: "select",
			description: "Input types",
			options: ["text", "number", "email", "password"],
		},
		name: { description: "Unique name for input" },
		label: { description: "Label text displayed above the input field" },
		helperText: {
			description:
				"Additional information about input value or validation state",
		},
		onChange: {
			description: "Callback function called when input value changes",
		},
		validationState: {
			description:
				'Indicates input validation status (e.g., "standard", "error", "success")',
		},
		clearable: {
			description: "Whether to show a clear button or not",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

const ControlledInput = (args: InputProps) => {
	const [value, setValue] = useState("");
	return <Input {...args} value={value} onChange={setValue} />;
};

export const Text: Story = {
	render: (args) => <ControlledInput {...args} />,
	args: {
		name: "text",
		label: "Text Input",
		type: "text",
		helperText: "Enter your name",
	},
};

export const TextClearable: Story = {
	render: (args) => <ControlledInput {...args} />,
	args: {
		name: "text-clearable",
		label: "Text Input (clearable)",
		type: "text",
		helperText: "Successful state of input",
		clearable: true,
		validationState: "success",
	},
};

export const Password: Story = {
	render: (args) => <ControlledInput {...args} />,
	args: {
		name: "password",
		label: "Password",
		type: "password",
		helperText: "Toggle visibility with the eye icon",
	},
};

export const Number: Story = {
	render: (args) => <ControlledInput {...args} />,
	args: {
		name: "number",
		label: "Number Input",
		type: "number",
		helperText: "Error state of input",
		validationState: "error",
	},
};

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
		state: "success",
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
		state: "error",
	},
};

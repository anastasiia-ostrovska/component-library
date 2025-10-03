"use client";

import { useState } from "react";
import { CloseIconButton } from "@/components/CloseIconButton";
import { ShowPasswordIconButton } from "./ShowPasswordIconButton";
import { inputIconStyles, validationStates } from "./styles";
import { ICON_SIZE } from "./consts";
import type { InputProps } from "./types";
import clsx from "clsx";

export const Input = ({
	name,
	value,
	onChange,
	label = "",
	helperText = "",
	type = "text",
	validationState = "standard",
	clearable = false,
	className,
	...props
}: InputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClearInput = () => {
		onChange("");
	};

	const handlePasswordToggle = () => {
		setShowPassword((prev) => !prev);
	};

	const isPassword = type === "password";
	const inputType = isPassword && showPassword ? "text" : type;
	const showClearButton = clearable && !!value && !isPassword;

	return (
		<div className="flex flex-col">
			{/*	Label for the input*/}
			{label && (
				<label htmlFor={name} className="mb-1 text-md font-medium">
					{label}
				</label>
			)}
			<div className="relative">
				<input
					id={name}
					type={inputType}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className={clsx(
						`
						w-full rounded-md border px-3 py-2 pr-9
						focus:outline-none focus:ring-2 focus:ring-primary 
						[&::-webkit-inner-spin-button]:appearance-none 
						[&::-webkit-outer-spin-button]:appearance-none`,
						className
					)}
					{...props}
				/>
				{/*	CLear button*/}
				{showClearButton && (
					<CloseIconButton
						iconSize={ICON_SIZE}
						onClick={handleClearInput}
						className={inputIconStyles}
					/>
				)}
				{/* Password toggle */}
				{isPassword && (
					<ShowPasswordIconButton
						iconSize={ICON_SIZE}
						showPassword={showPassword}
						onClick={handlePasswordToggle}
						className={inputIconStyles}
					/>
				)}
			</div>
			{/*	Helper text with states*/}
			{helperText && (
				<p className={clsx("mt-1 text-sm", validationStates[validationState])}>
					{helperText}
				</p>
			)}
		</div>
	);
};

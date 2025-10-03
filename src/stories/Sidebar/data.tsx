import {
	Home,
	User,
	FolderKanban,
	Settings,
	Bell,
	CreditCard,
	HelpCircle,
	LogOut,
	Receipt,
	Wallet,
} from "lucide-react";
import { MenuItem } from "@/components/Sidebar";

const iconStyles = "w-4 h-4";

export const twoLeveNestedItems: MenuItem[] = [
	{
		title: "Dashboard",
		icon: <Home className={iconStyles} />,
		path: "/dashboard",
	},
	{
		title: "Settings",
		icon: <Settings className={iconStyles} />,
		children: [
			{
				title: "Notifications",
				icon: <Bell className={iconStyles} />,
				path: "/settings/notifications",
			},
			{
				title: "Billing",
				icon: <CreditCard className={iconStyles} />,
				children: [
					{
						title: "Payment Methods",
						icon: <Wallet className={iconStyles} />,
						path: "/settings/billing/payment-methods",
					},
					{
						title: "Invoices",
						icon: <Receipt className={iconStyles} />,
						path: "/settings/billing/invoices",
					},
				],
			},
		],
	},

	{
		title: "Account",
		icon: <User className={iconStyles} />,
		children: [
			{ title: "Profile", path: "/account/profile" },
			{ title: "Security", path: "/account/security" },
		],
	},
	{
		title: "Projects",
		icon: <FolderKanban className={iconStyles} />,
		children: [
			{ title: "Active", path: "/projects/active" },
			{ title: "Archived", path: "/projects/archived" },
		],
	},
	{
		title: "Help",
		icon: <HelpCircle className={iconStyles} />,
		path: "/help",
	},
	{
		title: "Logout",
		icon: <LogOut className={iconStyles} />,
		path: "/logout",
	},
];

export const oneLeveNestedItems: MenuItem[] = [
	{
		title: "Dashboard",
		icon: <Home className={iconStyles} />,
		path: "/dashboard",
	},
	{
		title: "Account",
		icon: <User className={iconStyles} />,
		children: [
			{ title: "Profile", path: "/account/profile" },
			{ title: "Security", path: "/account/security" },
		],
	},
	{
		title: "Projects",
		icon: <FolderKanban className={iconStyles} />,
		children: [
			{ title: "Active", path: "/projects/active" },
			{ title: "Archived", path: "/projects/archived" },
		],
	},
	{
		title: "Settings",
		icon: <Settings className={iconStyles} />,
		children: [
			{
				title: "Notifications",
				icon: <Bell className={iconStyles} />,
				path: "/settings/notifications",
			},
			{
				title: "Billing",
				icon: <CreditCard className={iconStyles} />,
			},
		],
	},
	{
		title: "Help",
		icon: <HelpCircle className={iconStyles} />,
		path: "/help",
	},
	{
		title: "Logout",
		icon: <LogOut className={iconStyles} />,
		path: "/logout",
	},
];

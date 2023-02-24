import { DiamondIcon, ListIcon, ReferralIcon, UserIcon, WalletIcon } from "./icons";
import { NavLink } from "react-router-dom";

const links = [
	{
		to: "/",
		title: "Обзор",
		icon: <ListIcon className="mr-2.5 h-4 w-4 text-cadet-gray transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
	{
		to: "/referral",
		title: "Реферальная программа",
		icon: <ReferralIcon className="mr-2.5 h-4 w-4 text-cadet-gray transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
	{
		to: "/settings",
		title: "Настройки",
		icon: <UserIcon className="mr-2.5 h-4 w-4 text-cadet-gray transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
	{
		to: "/tariffs",
		title: "Тарифы",
		icon: <DiamondIcon className="mr-2.5 h-4 w-4 text-cadet-gray transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
	{
		to: "/payment",
		title: "Оплата",
		icon: <WalletIcon className="mr-2.5 h-4 w-4 text-cadet-gray transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
];

function Menu({ className = "", ...props }) {
	return (
		<nav className={className} {...props}>
			<ul>
				{links.map((link, index) => (
					<li key={index}>
						<NavLink
							to={link.to}
							className="group relative flex h-11 items-center px-5 text-sm text-cadet-gray transition-colors before:absolute before:-left-0.5 before:top-0 before:block before:h-full before:w-[3px] before:rounded-[19px] before:bg-gradient-to-b before:from-primary before:to-primary-darker before:opacity-0 before:transition-all hover:text-primary lg:h-[50px] lg:px-4 lg:before:w-1 [&.active]:bg-dark-gunmetal [&.active]:text-primary [&.active]:before:opacity-100"
						>
							{link.icon}
							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Menu;

import avatar from "../assets/images/avatar.png";
import cn from "classnames";
import { DiamondIcon, ExitIcon, ListIcon, LockIcon, UserIcon } from "./icons";
import useComponentVisible from "../utils/useComponentVisible";
import { NavLink } from "react-router-dom";

const links = [
	{
		to: "/",
		title: "Обзор",
		icon: <ListIcon className="mx-auto max-h-full max-w-full text-white transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
	{
		to: "/settings",
		title: "Настройки",
		icon: <UserIcon className="mx-auto max-h-full max-w-full text-white transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
	{
		to: "/tariffs",
		title: "Изменить тариф",
		icon: <DiamondIcon className="mx-auto max-h-full max-w-full text-white transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
	{
		to: "/referral",
		title: "Изменить пароль",
		icon: <LockIcon className="mx-auto max-h-full max-w-full text-white transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
	{
		to: "/payment",
		title: "Выход",
		icon: <ExitIcon className="ml-auto max-h-[14px] max-w-[14px] text-white transition-colors group-hover:text-primary group-[&.active]:text-primary" />,
	},
];

function UserDropdown({ className = "", ...props }) {
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

	return (
		<div className={cn("relative", className)} ref={ref} {...props}>
			<div className="cursor-pointer text-center" onClick={() => setIsComponentVisible((prev) => !prev)}>
				<div className="mx-auto flex h-9 w-9 rounded-full bg-light-silver/[.15] p-0.5 sm:h-11 sm:w-11 lg:mb-[3px]">
					<img src={avatar} alt="alt" className="h-full w-full rounded-full object-cover" />
				</div>
				<div className="hidden max-w-[55px] truncate text-[11px] leading-tighter text-primary lg:block">accteammmmm</div>
			</div>
			<ul
				className={cn(
					"invisible absolute right-0 top-[35px] z-20 w-[189px] rounded-[5px] bg-dark-jungle py-5 opacity-0 shadow-mobile-menu transition-all [&.is-active]:visible [&.is-active]:opacity-100",
					{
						"is-active": isComponentVisible,
					}
				)}
			>
				{links.map((link, index) => (
					<li key={index}>
						<NavLink
							to={link.to}
							className="group flex h-[30px] items-center pl-6 pr-[22px] text-[13px] transition-colors hover:text-primary [&.active]:bg-dark-gunmetal [&.active]:text-primary"
						>
							<div className="mr-3.5 h-4 w-4">{link.icon}</div>
							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}

export default UserDropdown;

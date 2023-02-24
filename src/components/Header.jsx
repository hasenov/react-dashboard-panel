import hamburger from "../assets/icons/hamburger.svg";
import exit from "../assets/icons/exit.svg";
import LanguageDropdown from "./LanguangeDropdown";
import License from "./License";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import Menu from "./Menu";
import cn from "classnames";
import useComponentVisible from "../utils/useComponentVisible";
import NotificationsDropdown from "./NotificationsDropdown";
import MessagesDropdown from "./MessagesDropdown";
import UserDropdown from "./UserDropdown";
import { useBlur } from "../context/blur/BlurState";

function Header() {
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
	const isTabletOrMobile = useMediaQuery({ query: "not all and (min-width: 1024px)" });

	const blur = useBlur()[0];
	const blurClass = {
		"blur-[6px] pointer-events-none": blur,
	};

	function toggleMenu() {
		setIsComponentVisible(!isComponentVisible);
	}

	return (
		<Fragment>
			<div
				className={cn(
					"relative flex items-center bg-chinese-black/[.35] px-8 pb-[18px] pt-[18px] before:absolute before:bottom-0 before:left-0 before:right-0 before:hidden before:h-px before:bg-white/5 before:will-change-[filter] lg:bg-transparent lg:px-7 lg:pb-4 lg:pt-7 lg:before:block",
					{
						"before:blur-[6px]": blur,
					}
				)}
			>
				
				{isTabletOrMobile && <div className={cn("text-3xl transition-all", blurClass)}>Logotype</div>}

				<div className={cn("hidden basis-72 transition-all lg:block", blurClass)}>
					<License tariff="middle" tariffTitle="Middle" title="Лицензии до:" date="02.03.23" completed={75} />
				</div>

				<div className="ml-auto flex items-center">
					<div
						className={cn(
							"relative mr-2 transition-all will-change-[filter] after:absolute after:top-2/4 after:right-0 after:hidden after:h-6 after:w-px after:-translate-y-2/4 after:bg-white/5 lg:mr-7 lg:pr-9 lg:after:block",
							blurClass
						)}
					>
						<LanguageDropdown />
					</div>
					<div className="flex lg:-mx-[7px]">
						<MessagesDropdown className="lg:mx-[7px]" />
						<NotificationsDropdown className="lg:mx-[7px]" />
					</div>
					<UserDropdown className={cn("ml-2 transition-all lg:ml-[18px]", blurClass)} />
				</div>
			</div>
			{isTabletOrMobile && (
				<div>
					<div className={cn("flex justify-between border-b border-white/5 px-8 pt-[11px] pb-[13px] transition-all", blurClass)}>
						<button type="button" className="flex items-center py-2.5 text-sm" onClick={toggleMenu}>
							<img src={hamburger} alt="alt" className="mr-3 max-w-[20px]" />
							Меню
						</button>
						<License tariff="middle" tariffTitle="Middle" title="Лицензии до:" date="02.03.23" completed={75} />
					</div>

					<div
						className={cn(
							"invisible fixed top-[42px] left-0 z-20 w-[277px] max-w-full overflow-hidden rounded-tr-[5px] rounded-br-[5px] bg-dark-gunmetal/[.15] py-10 pl-[13px] pr-5 opacity-0 shadow-mobile-menu backdrop-blur-[27.5px] transition-all will-change-[visibility,_opacity] [&.is-active]:visible [&.is-active]:opacity-100",
							{
								"is-active": isComponentVisible,
							}
						)}
						ref={ref}
					>
						<div className="mb-4 pl-5">
							<button type="button" className="flex items-center py-2.5 text-sm" onClick={toggleMenu}>
								<img src={exit} alt="alt" className="mr-3 max-w-[20px]" />
								Свернуть
							</button>
						</div>
						<Menu />
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default Header;

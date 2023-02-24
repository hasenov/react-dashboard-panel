import moon from "../assets/icons/moon.svg";
import fullscreen from "../assets/icons/fullscreen.svg";
import { useMediaQuery } from "react-responsive";
import Button from "./Button";
import { LinuxIcon, MacIcon, MessageIcon, WindowsIcon } from "./icons";
import cn from "classnames";
import useComponentVisible from "../utils/useComponentVisible";

function Footer() {
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
	const isTabletOrMobile = useMediaQuery({ query: "not all and (min-width: 1024px)" });

	return (
		<div className="border-t border-white/[.03] pt-[25px] pl-9 pr-6 lg:mt-auto">
			<div className="mb-5 text-center text-[13px] uppercase lg:text-left">Скачать приложение</div>
			<div className="mb-[69px] flex items-end justify-center lg:mb-36 lg:justify-start">
				<a href="#" className="group relative flex h-10 w-11 items-center justify-center rounded-[5px] transition-colors hover:bg-yankees-blue">
					<LinuxIcon className="h-[26px] w-[23px] text-cool-gray transition-colors group-hover:text-white" />
				</a>
				<a href="#" className="group relative flex h-10 w-11 items-center justify-center rounded-[5px] transition-colors hover:bg-yankees-blue">
					<WindowsIcon className="h-[26px] w-[23px] text-cool-gray transition-colors group-hover:text-white" />
				</a>
				<div
					className={cn(
						"group relative flex h-10 w-11 cursor-pointer items-center justify-center rounded-tl-[5px] rounded-tr-[5px] transition-colors hover:bg-yankees-blue [&.is-active]:bg-yankees-blue",
						{
							"is-active": isComponentVisible,
						}
					)}
					onClick={() => setIsComponentVisible((prev) => !prev)}
					ref={ref}
				>
					<MacIcon className="-mt-1 h-[26px] w-[23px] text-cool-gray transition-colors group-hover:text-white group-[.is-active]:text-white" />
					<div className="invisible absolute top-full left-0 right-0 divide-y divide-[#151B2C] rounded-bl-[5px] rounded-br-[5px] bg-[#1B2131] text-center opacity-0 transition-all group-[.is-active]:visible group-[.is-active]:opacity-100 lg:group-hover:visible lg:group-hover:opacity-100">
						<a href="#" className="block py-1 text-xs leading-tight">
							intel
						</a>
						<a href="#" className="block py-1 text-xs leading-tight">
							m1
						</a>
					</div>
				</div>
			</div>
			{isTabletOrMobile && (
				<div className="mb-14 text-center">
					<Button variant="primary" className="h-9 rounded px-4 text-sm">
						<MessageIcon className="mr-2 max-h-5 w-5 text-white" />
						Помощь оператора
					</Button>
				</div>
			)}
			<div className="flex justify-between">
				<button type="button" className="flex items-center text-[10px] text-crayola">
					<img src={moon} alt="alt" className="mr-2" />
					Светлый
				</button>
				<button type="button" className="flex items-center text-[10px] text-crayola">
					<img src={fullscreen} alt="alt" className="mr-2" />
					На сайт
				</button>
			</div>
		</div>
	);
}

export default Footer;

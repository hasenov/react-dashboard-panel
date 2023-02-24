import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import Menu from "./Menu";
import cn from "classnames";
import { useBlur } from "../context/blur/BlurState";

function Sidebar() {
	const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
	const blur = useBlur()[0];
	const blurClass = {
		"blur-[6px] pointer-events-none": blur,
	};

	return (
		<div className={cn("w-full pb-[35px] transition-all will-change-[filter] lg:flex lg:flex-auto lg:flex-col lg:bg-eerie-black/[.35] lg:pt-[33px]", blurClass)}>
			{isDesktop && (
				<Fragment>
					<div className="mb-20 self-start px-9 text-3xl">Logotype</div>
					<Menu className="mb-6 pl-5" />
				</Fragment>
			)}
			<Footer />
		</div>
	);
}

export default Sidebar;

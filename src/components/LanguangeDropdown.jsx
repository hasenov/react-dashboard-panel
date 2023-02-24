import chevronDown from "../assets/icons/chevron-down.svg";
import cn from "classnames";
import useComponentVisible from "../utils/useComponentVisible";
import { Link } from "react-router-dom";

function LanguageDropdown({ className = "", ...props }) {
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

	return (
		<div className={cn("relative", className)} ref={ref} {...props}>
			<div className="flex cursor-pointer items-center text-xs text-primary" onClick={() => setIsComponentVisible((prev) => !prev)}>
				<img src={chevronDown} alt="alt" className="mr-2 max-w-[20px] shrink-0" />
				<span>En</span>
			</div>
			<ul
				className={cn("invisible absolute top-full right-0 z-20 w-12 bg-dark-gunmetal text-center opacity-0 transition-all [&.is-active]:visible [&.is-active]:opacity-100", {
					"is-active": isComponentVisible,
				})}
			>
				<li>
					<Link to="/" className="block py-1 text-xs text-primary">
						En
					</Link>
				</li>
				<li>
					<Link to="/" className="block py-1 text-xs text-primary">
						Ru
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default LanguageDropdown;

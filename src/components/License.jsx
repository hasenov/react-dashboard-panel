import Progress from "./Progress";
import stars from "../assets/icons/stars.svg";
import waves from "../assets/icons/waves.svg";
import darts from "../assets/icons/darts.svg";
import star from "../assets/icons/star.svg";
import team from "../assets/icons/team.svg";
import trial from "../assets/icons/trial.svg";
import { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

function License({ type = "horizontal", tariff, tariffTitle, title, date, completed, className = "", ...props }) {
	const isTabletOrMobile = useMediaQuery({ query: "not all and (min-width: 1024px)" });
	const [icon, setIcon] = useState(null);

	useEffect(() => {
		if (tariff == "free") {
			setIcon(waves);
		} else if (tariff == "micro") {
			setIcon(star);
		} else if (tariff == "base") {
			setIcon(darts);
		} else if (tariff == "middle") {
			setIcon(stars);
		} else if (tariff == "team") {
			setIcon(team);
		} else if (tariff == "trial") {
			setIcon(trial);
		}
	});

	return (
		<Fragment>
			{type === "horizontal" ? (
				<div className={cn("flex items-center", className)} {...props}>
					<div className="mr-12 hidden items-center text-xs text-primary lg:flex">
						{icon && <img src={icon} alt="alt" className="mr-2" />}
						{tariffTitle}
					</div>
					<div className="flex-auto">
						<div className="mb-1 flex  items-center justify-between lg:mb-[6px]">
							{isTabletOrMobile && (
								<div className="mr-12 flex items-center text-xs text-primary">
									{icon && <img src={icon} alt="alt" className="max-w-5 sm:max-w-6 mr-2 max-h-5 sm:max-h-6" />}
									{tariffTitle}
								</div>
							)}
							<span className="hidden text-[10px] lg:block">{title}</span>
							<span className="text-xs">{date}</span>
						</div>
						<Progress completed={completed} />
					</div>
				</div>
			) : (
				<div className={cn(className)} {...props}>
					<div className="mb-[34px] flex items-center">
						{icon && <img src={icon} alt="alt" className="mr-2 h-5 w-5" />}
						<div>
							<div className="leading-tighter text-primary">{tariffTitle}</div>
							<div className="text-[10px]">{date}</div>
						</div>
					</div>
					<Progress completed={completed} />
				</div>
			)}
		</Fragment>
	);
}

export default License;

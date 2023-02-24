import cn from "classnames";
import Status from "./Status";
import Button from "./Button";
import { BellIcon } from "./icons";
import useComponentVisible from "../utils/useComponentVisible";
import BlurContext from "../context/blur/blurContext";
import { useContext, useEffect } from "react";

function NotificationsDropdown({ className = "", ...props }) {
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
	const blurContext = useContext(BlurContext);
	const { setBlur, removeBlur, blur } = blurContext;
	const blurClass = {
		"blur-[6px] pointer-events-none": blur,
	};

	useEffect(() => {
		if (isComponentVisible) {
			setBlur();
		} else {
			removeBlur();
		}
	}, [isComponentVisible]);

	return (
		<div className={cn("flex flex-col sm:relative", className)} ref={ref} {...props}>
			<Button variant="transparent" className={cn("relative flex-auto rounded-lg p-2 transition-all will-change-[filter]", blurClass)} onClick={() => setIsComponentVisible((prev) => !prev)}>
				<BellIcon className="max-h-5 w-5 text-white" />
				<Status value={5} variant="primary" className="absolute -top-px right-0.5" />
			</Button>
			<div
				className={cn("invisible absolute top-[42px] right-0 z-20 max-w-full pt-[13px] opacity-0 transition-all sm:top-full sm:max-w-none [&.is-active]:visible [&.is-active]:opacity-100", {
					"is-active": isComponentVisible,
				})}
			>
				<div className="-before:translate-x-1/2 relative w-[290px] max-w-full overflow-hidden rounded-lg bg-dark-gunmetal text-left shadow-dropdown before:absolute before:top-[17px] before:left-1/2 before:block before:h-[3px] before:w-[26px] before:rounded-[9px] before:bg-crayola">
					<div className="scrollbar max-h-96 overflow-y-auto pt-[18px] sm:max-h-[500px]">
						<div className="pt-3.5 pr-[18px] pb-4 pl-5 even:bg-yankees-blue">
							<div className="mb-2.5 text-sm leading-tighter">Обновление системы оплаты</div>
							<div className="mb-2 text-[13px] text-cadet-gray">Добавили новые способы оплаты, теперь можно оплатить через любые возможные способы</div>
							<div className="text-[11px] text-american-blue">02.03.23</div>
						</div>
						<div className="pt-3.5 pr-[18px] pb-4 pl-5 even:bg-yankees-blue">
							<div className="mb-2.5 text-sm leading-tighter text-primary">Обновление системы оплаты</div>
							<div className="mb-2 text-[13px] text-cadet-gray">Добавили новые способы оплаты, теперь можно оплатить через любые возможные способы</div>
							<div className="text-[11px] text-american-blue">02.03.23</div>
						</div>
						<div className="pt-3.5 pr-[18px] pb-4 pl-5 even:bg-yankees-blue">
							<div className="mb-2.5 text-sm leading-tighter">Обновление системы оплаты</div>
							<div className="mb-2 text-[13px] text-cadet-gray">Добавили новые способы оплаты, теперь можно оплатить через любые возможные способы</div>
							<div className="text-[11px] text-american-blue">02.03.23</div>
						</div>
					</div>
					<Button variant="primary" className="w-full py-3 text-sm">
						Смотреть все
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NotificationsDropdown;

import cn from "classnames";
import Status from "./Status";
import Button from "./Button";
import { MessageIcon, SendIcon } from "./icons";
import useComponentVisible from "../utils/useComponentVisible";
import avatar from "../assets/images/avatar.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.png";
import BlurContext from "../context/blur/blurContext";
import { useContext, useEffect } from "react";

function MessagesDropdown({ className = "", ...props }) {
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
				<MessageIcon className="max-h-5 w-4 text-white sm:w-5" />
				<Status value={5} variant="violet" className="absolute -top-px right-0.5" />
			</Button>
			<div
				className={cn("invisible absolute top-[42px] right-0 z-20 max-w-full pt-[13px] opacity-0 transition-all sm:top-full sm:max-w-none [&.is-active]:visible [&.is-active]:opacity-100", {
					"is-active": isComponentVisible,
				})}
			>
				<div className="-before:translate-x-1/2 relative w-[350px] max-w-full overflow-hidden rounded-lg bg-dark-gunmetal text-left shadow-dropdown before:absolute before:top-[17px] before:left-1/2 before:block before:h-[3px] before:w-[26px] before:rounded-[9px] before:bg-crayola">
					<div className="scrollbar max-h-96 space-y-3 overflow-y-auto px-[18px] pt-8 pb-6 sm:max-h-[500px]">
						<div className="flex">
							<div className="mr-5 flex h-9 w-9 shrink-0 rounded-full bg-light-silver/[.15] p-0.5 sm:h-11 sm:w-11">
								<img src={avatar2} alt="alt" className="h-full w-full rounded-full object-cover" />
							</div>
							<div className="flex-auto">
								<div className="mb-2">
									<div className="text-sm leading-tighter">Андрей</div>
									<div className="text-[10px] text-american-blue">Помошник</div>
								</div>
								<div className="mb-1 text-[13px] font-normal text-cadet-gray">Мы получили ваш запрос на смену тарифа, можем подсказать как изменить</div>
								<div className="text-[11px] text-american-blue">02.03.23</div>
							</div>
						</div>
						<div className="flex">
							<div className="mr-5 flex h-9 w-9 shrink-0 rounded-full bg-light-silver/[.15] p-0.5 sm:h-11 sm:w-11">
								<img src={avatar} alt="alt" className="h-full w-full rounded-full object-cover" />
							</div>
							<div className="flex-auto rounded-[7px] bg-yankees-blue px-3 pt-1.5 pb-2">
								<div className="mb-2">
									<div className="text-sm leading-tighter text-primary">Вы</div>
								</div>
								<div className="mb-1 text-[13px] font-normal text-cadet-gray">Мы получили ваш запрос на смену тарифа, можем подсказать как изменить</div>
								<div className="text-[11px] text-american-blue">02.03.23</div>
							</div>
						</div>
						<div className="flex">
							<div className="mr-5 flex h-9 w-9 shrink-0 rounded-full bg-light-silver/[.15] p-0.5 sm:h-11 sm:w-11">
								<img src={avatar} alt="alt" className="h-full w-full rounded-full object-cover" />
							</div>
							<div className="flex-auto">
								<div className="mb-2">
									<div className="text-sm leading-tighter">Вы</div>
								</div>
								<div className="mb-1 text-[13px] font-normal text-cadet-gray">Мы получили ваш запрос на смену тарифа, можем подсказать как изменить</div>
								<div className="text-[11px] text-american-blue">02.03.23</div>
							</div>
						</div>
						<div className="flex">
							<div className="mr-5 flex h-9 w-9 shrink-0 rounded-full bg-light-silver/[.15] p-0.5 sm:h-11 sm:w-11">
								<img src={avatar3} alt="alt" className="h-full w-full rounded-full object-cover" />
							</div>
							<div className="flex-auto rounded-[7px] bg-yankees-blue px-3 pt-1.5 pb-2">
								<div className="mb-2">
									<div className="text-sm leading-tighter text-primary">Андрей</div>
									<div className="text-[10px] text-american-blue">Помошник</div>
								</div>
								<div className="mb-1 text-[13px] font-normal text-cadet-gray">Мы получили ваш запрос на смену тарифа, можем подсказать как изменить</div>
								<div className="text-[11px] text-american-blue">02.03.23</div>
							</div>
						</div>
					</div>
					<Button variant="primary" className="w-full py-3 text-sm">
						<SendIcon className="mr-2 max-h-4 w-4 text-white" /> К общению
					</Button>
				</div>
			</div>
		</div>
	);
}

export default MessagesDropdown;

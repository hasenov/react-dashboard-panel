import info from "../assets/icons/info.svg";
import light from "../assets/images/light.svg";
import light2 from "../assets/images/light-2.svg";
import { CopyIcon } from "../components/icons";
import Table from "../components/Table";
import { useState } from "react";
import cn from "classnames";
import Input from "../components/Input";
import Label from "../components/Label";

function Referral() {
	const [referralLink, setReferralLink] = useState("link.com");
	const [copied, setCopied] = useState(false);

	function copyToClipboard() {
		navigator.clipboard.writeText(referralLink);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}

	return (
		<div>
			<div className="-mx-3.5 -mb-7 flex flex-wrap">
				<div className="mb-7 flex shrink-0 grow-0 basis-full flex-col px-3.5 sm:max-w-[50%] sm:basis-2/4 md:max-w-[60%] md:basis-3/5">
					<h2 className="mb-5 px-[18px] text-xl lg:mb-4 lg:px-0">Реферальнная система</h2>
					<div className="relative flex flex-auto flex-col overflow-hidden rounded-[7px]">
						<img src={light} alt="alt" className="pointer-events-none absolute bottom-0 right-0 select-none rounded-[95px] blur-[27.5px]" />
						<div className="relative z-10 flex flex-auto">
							<div className="flex-auto rounded-[7px] bg-dark-gunmetal/75 px-5 pt-[22px] pb-7 sm:px-[30px] sm:pb-[18px]">
								<div className="mb-5 flex">
									<div className="mr-2 shrink-0 basis-5 pt-2.5 sm:mr-3 sm:basis-[22px] sm:pt-1">
										<img src={info} alt="alt" />
									</div>
									<div>
										<div className="mb-2 text-sm leading-tighter sm:mb-3">
											Вы получите <span className="text-primary">15% от всех платежей</span> приведенных вами пользователей пожизненно.
										</div>
										<div className="text-xs leading-tighter text-cool-gray">Для вывода реферальных средств, свяжитесь с оператором</div>
									</div>
								</div>
								<div className="relative md:ml-[34px]">
									<Label htmlFor="referral">Ваша реферальная ссылка</Label>
									<Input variant="white" type="text" id="referral" className="pr-10 text-primary" defaultValue={referralLink} readOnly />
									<button type="button" className="absolute right-0 top-2/4 flex h-full -translate-y-2/4 items-center p-3" onClick={copyToClipboard}>
										<CopyIcon className="h-3.5 w-3.5 shrink-0 text-primary" />
									</button>
									<div
										className={cn(
											"invisible absolute top-0 right-0 inline-block rounded-[3px] bg-primary px-1.5 py-0.5 align-top text-[9px] opacity-0 shadow-tooltip transition-all [&.is-active]:visible [&.is-active]:-top-6 [&.is-active]:opacity-100",
											{
												"is-active": copied,
											}
										)}
									>
										Скопировано
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-7 flex shrink-0 grow-0 basis-full flex-col px-3.5 sm:max-w-[50%] sm:basis-2/4 md:max-w-[40%] md:basis-2/5">
					<h2 className="mb-5 px-[18px] text-xl lg:mb-4 lg:px-0">Ваша статистика</h2>
					<div className="relative flex flex-auto flex-col overflow-hidden rounded-[7px]">
						<img src={light2} alt="alt" className="pointer-events-none absolute bottom-0 left-5 select-none rounded-[95px] blur-[27.5px] sm:left-0" />
						<div className="relative z-10 flex flex-auto">
							<div className="flex-auto divide-y divide-primary/10 rounded-[7px] bg-dark-gunmetal/75">
								<div className="flex items-center px-2 pt-[19px] pb-[17px]">
									<div className="shrink-0 basis-2/5 text-center text-3xl">1544</div>
									<div className="basis-3/5 text-[13px] leading-tighter">Всего зарегистрировано пользователей по вашей реферальной ссылке</div>
								</div>
								<div className="flex items-center px-2 py-6">
									<div className="shrink-0 basis-2/5 text-center">Баланс:</div>
									<div className="basis-3/5 text-3xl leading-tighter text-primary">$1544</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-7 max-w-full shrink-0 grow-0 basis-full px-3.5">
					<Table />
				</div>
			</div>
		</div>
	);
}

export default Referral;

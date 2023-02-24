import stars from "../assets/icons/stars.svg";
import waves from "../assets/icons/waves.svg";
import darts from "../assets/icons/darts.svg";
import star from "../assets/icons/star.svg";
import team from "../assets/icons/team.svg";
import chevronDown from "../assets/icons/chevron-down.svg";
import Button from "../components/Button";
import Counter from "../components/Counter";
import SimpleBar from "simplebar-react";

function Tariffs() {
	return (
		<div>
			<h1 className="mb-5 px-[18px] text-xl lg:mb-4 lg:px-0">Тарифы</h1>
			<div className="-mx-[15px] flex items-center overflow-x-auto"></div>
			<SimpleBar autoHide={false} className="tariffs-simplebar lg:-mr-8">
				<div className="relative mx-1 mb-7 flex min-h-[402px] shrink-0 basis-40 flex-col overflow-hidden sm:mx-[15px] sm:mb-0">
					<div className="flex flex-auto flex-col rounded-lg border border-transparent bg-chinese-black/[.35] p-[19px] transition-colors lg:hover:border-white/30">
						<div className="min-h-[124px] flex-auto">
							<div className="flex items-center justify-center rounded-[5px] bg-white/5 py-[5px] px-2 text-sm">
								<img src={waves} alt="alt" className="mr-2" />
								Free
							</div>
							<div className="mt-[34px] text-center text-xs leading-loose">Весь функционал</div>
						</div>
						<div className="flex min-h-[150px] flex-auto flex-col items-center justify-center border-t border-white/[.03] pt-2.5 pb-2 text-center">
							<div className="leading-tighter">
								5<br /> профилей
							</div>
						</div>
						<div className="border-t border-white/[.03] pt-2.5">
							<div className="mb-3 text-center text-3xl leading-tighter">$0</div>
							<Button variant="outline-white" className="w-full rounded-[30px] py-1.5 px-2 text-[13px]" shadow>
								Оплатить
							</Button>
						</div>
					</div>
				</div>
				<div className="relative mx-1 mb-7 flex min-h-[402px] shrink-0 basis-40 flex-col overflow-hidden sm:mx-[15px] sm:mb-0">
					<div className="flex flex-auto flex-col rounded-lg border border-transparent bg-chinese-black/[.35] p-[19px] transition-colors lg:hover:border-white/30">
						<div className="min-h-[124px] flex-auto">
							<div className="flex items-center justify-center rounded-[5px] bg-white/5 py-[5px] px-2 text-sm">
								<img src={star} alt="alt" className="mr-2" />
								Micro
							</div>
							<div className="mt-[22px] text-center text-xs leading-loose">
								Весь функционал
								<br />
								Создание команды
							</div>
						</div>
						<div className="flex min-h-[150px] flex-auto flex-col items-center justify-center border-t border-white/[.03] pt-2.5 pb-2 text-center">
							<div className="leading-tighter">
								50
								<br /> профилей
							</div>
						</div>
						<div className="border-t border-white/[.03] pt-2.5">
							<div className="mb-3 text-center text-3xl leading-tighter">$29</div>
							<Button variant="outline-white" className="w-full rounded-[30px] py-1.5 px-2 text-[13px]" shadow>
								Оплатить
							</Button>
						</div>
					</div>
				</div>
				<div className="relative mx-1 mb-7 flex min-h-[474px] shrink-0 basis-full flex-col overflow-hidden sm:mx-[15px] sm:mb-0 sm:basis-40">
					<div className="absolute left-0 top-0 h-[35px] w-[116px] rounded-[50%] bg-primary/[.15] blur-lg"></div>
					<div className="flex flex-auto flex-col rounded-lg border border-transparent bg-chinese-black/[.35] px-[19px] pt-6 pb-10 transition-colors sm:pb-[34px] lg:hover:border-white/30">
						<span className="absolute top-[11px] -right-5 block h-4 w-20 rotate-45 bg-primary text-center text-[8px] uppercase leading-4 shadow-default shadow-primary/30 [text-shadow:0px_4px_4px_rgba(0,0,0,0.5)]">
							popular
						</span>
						<div className="min-h-[124px] flex-auto">
							<div className="mx-auto flex w-40 items-center justify-center rounded-[5px] bg-white/5 py-[5px] px-2 text-sm sm:mx-0 sm:w-auto">
								<img src={darts} alt="alt" className="mr-2" />
								Base
							</div>
							<div className="mt-[22px] text-center text-xs leading-loose">
								Весь функционал
								<br /> Создание команды
							</div>
						</div>
						<div className="flex min-h-[200px] flex-auto flex-col items-center justify-center border-t border-white/[.03] pt-2.5 pb-2 text-center">
							<div className="leading-tighter">
								150
								<br /> профилей
							</div>
						</div>
						<div className="border-t border-white/[.03] pt-2.5 text-center">
							<div className="mb-3 text-center text-3xl leading-tighter">$79</div>
							<Button variant="outline-white" className="w-[123px] rounded-[30px] py-1.5 px-2 text-[13px]" shadow>
								Оплатить
							</Button>
						</div>
					</div>
				</div>
				<div className="relative mx-1 mb-7 flex min-h-[402px] shrink-0 basis-40 flex-col overflow-hidden sm:mx-[15px] sm:mb-0">
					<div className="flex flex-auto flex-col rounded-lg border border-transparent bg-chinese-black/[.35] p-[19px] transition-colors lg:hover:border-white/30">
						<div className="min-h-[124px] flex-auto">
							<div className="flex items-center justify-center rounded-[5px] bg-white/5 py-[5px] px-2 text-sm">
								<img src={stars} alt="alt" className="mr-2" />
								Middle
							</div>
							<div className="mt-[22px] text-center text-xs leading-loose">
								Весь функционал
								<br /> Создание команды
							</div>
						</div>
						<div className="flex min-h-[150px] flex-auto flex-col items-center justify-center border-t border-white/[.03] pt-2.5 pb-2 text-center">
							<div className="mb-2 leading-tighter">
								500
								<br /> профилей
							</div>
							<Counter defaultValue={2} className="mb-2" />
							<div className="leading-tighter">по $15</div>
							<div className="text-[13px] leading-tighter text-metallic-silver">за пользователя</div>
						</div>
						<div className="border-t border-white/[.03] pt-2.5">
							<div className="mb-3 text-center text-3xl leading-tighter">$199</div>
							<Button variant="outline-white" className="w-full rounded-[30px] py-1.5 px-2 text-[13px]" shadow>
								Оплатить
							</Button>
						</div>
					</div>
				</div>
				<div className="relative mx-1 mb-7 flex min-h-[402px] shrink-0 basis-40 flex-col overflow-hidden sm:mx-[15px] sm:mb-0">
					<div className="flex flex-auto flex-col rounded-lg border border-transparent bg-chinese-black/[.35] p-[19px] transition-colors lg:hover:border-white/30">
						<div className="min-h-[114px] flex-auto">
							<div className="flex items-center justify-center rounded-[5px] bg-white/5 py-[5px] px-2 text-sm">
								<img src={team} alt="alt" className="mr-2" />
								Team
							</div>
							<div className="mt-[23px] text-center text-xs leading-loose">
								Весь функционал
								<br /> Создание команды
							</div>
						</div>
						<div className="flex min-h-[150px] flex-auto flex-col items-center justify-center border-t border-white/[.03] pt-2.5 pb-2 text-center">
							<div className="leading-tighter">по $199</div>
							<div className="-mx-[13px] mb-2 text-[11px] leading-tighter text-metallic-silver">за каждые 1500 профилей</div>
							<div className="mb-[11px] flex w-[108px] items-center justify-center rounded-[5px] bg-white/5 py-0.5 text-primary">
								<img src={chevronDown} alt="alt" className="mr-1.5" />
								4500
							</div>
							<Counter defaultValue={2} className="mb-2" />
							<div className="leading-tighter">по $15</div>
							<div className="text-[13px] leading-tighter text-metallic-silver">за пользователя</div>
						</div>
						<div className="border-t border-white/[.03] pt-2.5">
							<div className="mb-3 text-center text-3xl leading-tighter">$399</div>
							<Button variant="outline-white" className="w-full rounded-[30px] py-1.5 px-2 text-[13px]" shadow>
								Оплатить
							</Button>
						</div>
					</div>
				</div>
			</SimpleBar>
		</div>
	);
}

export default Tariffs;

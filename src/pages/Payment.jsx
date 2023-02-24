import paypal from "../assets/images/paypal.svg";
import card from "../assets/images/card.svg";
import btc from "../assets/images/btc.svg";
import star from "../assets/icons/star.svg";
import info from "../assets/icons/info.svg";
import Button from "../components/Button";
import Counter from "../components/Counter";
import Label from "../components/Label";
import Input from "../components/Input";
import PaymentType from "../components/PaymentType";

function Payment() {
	return (
		<div>
			<h1 className="mb-5 px-[18px] text-xl lg:mb-4 lg:px-0">Оплата</h1>
			<div className="rounded-lg bg-chinese-black/[.35] px-[18px] pt-6 pb-7 sm:pt-[18.5px] sm:pb-6">
				<div className="-mx-[15px] -mb-8 flex flex-wrap">
					<div className="mb-8 shrink-0 grow-0 basis-full px-[15px] sm:max-w-[50%] sm:basis-1/2 md:max-w-[33.333333%] md:basis-1/3">
						<div className="mb-[19px] leading-tighter">Тарифный план</div>
						<div>
							<div className="mb-10 flex items-center justify-between space-x-1">
								<div className="text-[13px] text-cadet-gray">Дополнительные пользователи</div>
								<Counter />
							</div>
							<div className="mb-9 flex items-center justify-between space-x-1">
								<div className="text-[13px] text-cadet-gray">Переод оплаты</div>
								<select className="appearance-none rounded-[21px] bg-dark-gunmetal/75 bg-[url(/src/assets/icons/chevron-down-white.svg)] bg-[calc(100%_-_12px)_center] bg-no-repeat py-0.5 pl-[13px] pr-10 text-sm outline-none">
									<option value="1">1 месяц</option>
									<option value="2">2 месяца</option>
									<option value="3">3 месяца</option>
								</select>
							</div>
							<div className="relative mb-4">
								<Label htmlFor="promocode">Промокод</Label>
								<Input variant="gray" type="text" id="promocode" className="pr-24 text-xs" placeholder="Введите промокод" />
								<Button variant="primary" shadow className="absolute right-2 top-2/4 -translate-y-2/4 rounded-[5px] py-[5px] px-2.5 text-[11px]">
									Проверить
								</Button>
							</div>
							<div className="flex items-center justify-between space-x-1">
								<div className="text-[13px] text-cadet-gray">Ваша скидка:</div>
								<div className="text-lg leading-tighter text-primary">-$25</div>
							</div>
						</div>
					</div>
					<div className="mb-8 shrink-0 grow-0 basis-full px-[15px] sm:max-w-[50%] sm:basis-1/2 md:max-w-[33.333333%] md:basis-1/3">
						<div className="mb-[19px] leading-tighter">Способы оплаты</div>
						<div className="space-y-[26.5px]">
							<PaymentType name="payment" id="paypal" title="PayPal" logo={paypal} />
							<PaymentType name="payment" id="card" title="Credit / Debit Card" logo={card} />
							<PaymentType name="payment" id="crypto" title="Crypto" logo={btc} />
						</div>
					</div>
					<div className="mb-8 shrink-0 grow-0 basis-full px-[15px] sm:max-w-[75%] sm:basis-9/12 sm:max-md:mx-auto md:max-w-[33.333333%] md:basis-1/3">
						<div className="mb-[19px] leading-tighter">Итого</div>
						<div className="relative overflow-hidden">
							<div className="absolute top-[42.5px] left-6 right-2.5 bottom-8 -z-10 rounded-[20px] bg-gradient-to-tl from-[#153EA6] via-[#7E1CDF] to-[#15A655] blur-[7.5px]"></div>
							<div className="relative rounded-[7px] bg-dark-gunmetal/75 backdrop-blur-[27.5px]">
								<div className="flex items-center justify-between py-[15px] px-[10.5px]">
									<div className="text-sm leading-tighter">Тариф</div>
									<div className="flex items-center">
										<img src={star} alt="alt" className="mr-2.5" />
										<div className="text-sm leading-tighter text-primary">Micro</div>
									</div>
								</div>
								<div className="space-y-[6.5px] bg-gunmetal/25 py-[18px] px-[10.5px]">
									<div className="flex">
										<div className="text-xs leading-tighter">Профили</div>
										<div className="mx-[5px] mb-[3px] flex-auto border-b border-dashed border-white/10"></div>
										<div className="text-xs leading-tighter">150</div>
									</div>
									<div className="flex">
										<div className="text-xs leading-tighter">Пользователи</div>
										<div className="mx-[5px] mb-[3px] flex-auto border-b border-dashed border-white/10"></div>
										<div className="text-xs leading-tighter">2</div>
									</div>
									<div className="flex">
										<div className="text-xs leading-tighter">
											Переод <span className="text-[10px]">(мес.)</span>
										</div>
										<div className="mx-[5px] mb-[3px] flex-auto border-b border-dashed border-white/10"></div>
										<div className="text-xs leading-tighter">12</div>
									</div>
								</div>
								<div className="space-y-[6.5px] bg-chinese-black/25 py-[18px] px-[10.5px]">
									<div className="flex">
										<div className="text-xs leading-tighter">Стоимость тарифа</div>
										<div className="mx-[5px] mb-[3px] flex-auto border-b border-dashed border-white/10"></div>
										<div className="text-xs leading-tighter">$1245</div>
									</div>
									<div className="flex">
										<div className="text-xs leading-tighter">Доп. пользователи</div>
										<div className="mx-[5px] mb-[3px] flex-auto border-b border-dashed border-white/10"></div>
										<div className="text-xs leading-tighter">$15</div>
									</div>
									<div className="flex">
										<div className="text-xs leading-tighter text-primary">
											Скидка <span className="text-[10px]">(по промокоду)</span>
										</div>
										<div className="mx-[5px] mb-[3px] flex-auto border-b border-dashed border-white/10"></div>
										<div className="text-xs leading-tighter text-primary">-$2.5</div>
									</div>
									<div className="flex">
										<div className="text-xs leading-tighter">Комиссия</div>
										<div className="mx-[5px] mb-[3px] flex-auto border-b border-dashed border-white/10"></div>
										<div className="text-xs leading-tighter">$0.5</div>
									</div>
								</div>
								<div className="py-[13px] pb-[17px] text-center">
									<div className="mb-3 text-2xl leading-tighter">$125</div>
									<Button variant="primary" shadow className="rounded-[31px] py-2 px-8 text-[13px]">
										Оплатить
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;

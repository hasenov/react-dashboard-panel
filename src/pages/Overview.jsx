import Button from "../components/Button";
import light from "../assets/images/light.svg";
import SimpleBar from "simplebar-react";

function Overview() {
	return (
		<div>
			<h1 className="mb-5 px-[18px] text-xl lg:mb-4 lg:px-0">Обзор</h1>

			<SimpleBar autoHide={false}>
				<div className="relative overflow-hidden">
					<img src={light} alt="alt" className="pointer-events-none absolute bottom-0 right-0 select-none rounded-[95px] blur-[27.5px]" />
					<div className="relative z-10">
						<table className="min-w-full table-fixed overflow-hidden rounded-[7px] bg-dark-gunmetal/75 text-left text-sm ">
							<thead>
								<tr>
									<th className="bg-yankees-blue px-5 py-3.5 first:rounded-bl-[7px] last:rounded-br-[7px] sm:px-8 sm:py-5">Аккаунт</th>
									<th className="bg-yankees-blue px-5 py-3.5 first:rounded-bl-[7px] last:rounded-br-[7px] sm:px-8 sm:py-5">accteam@mail.ru</th>
								</tr>
							</thead>
							<tbody className="text-cadet-gray">
								<tr className="border-white/5 [&:not(:last-child)]:border-b">
									<td className="px-5 py-3 sm:px-8 sm:py-4">Тариф</td>
									<td className="flex px-5 py-3 sm:px-8 sm:py-4">
										<div className="basis-[52px] pr-2">
											<span className="text-primary">Base</span>
										</div>
										<Button variant="primary" shadow className="min-w-[94px] rounded-[34px]">
											Купить
										</Button>
									</td>
								</tr>
								<tr className="border-white/5 [&:not(:last-child)]:border-b">
									<td className="px-5 py-3 sm:px-8 sm:py-4">Пользователи</td>
									<td className="flex px-5 py-3 sm:px-8 sm:py-4">
										<div className="basis-[52px] pr-2">1/2</div>
										<Button variant="primary" shadow className="min-w-[94px] rounded-[34px]">
											Добавить
										</Button>
									</td>
								</tr>
								<tr className="border-white/5 [&:not(:last-child)]:border-b">
									<td className="px-5 py-3 sm:px-8 sm:py-4">Количество команд</td>
									<td className="px-5 py-3 sm:px-8 sm:py-4">2</td>
								</tr>
								<tr className="border-white/5 [&:not(:last-child)]:border-b">
									<td className="px-5 py-3 sm:px-8 sm:py-4">Окончания лицензии</td>
									<td className="px-5 py-3 sm:px-8 sm:py-4">02.03.2023</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</SimpleBar>
		</div>
	);
}

export default Overview;

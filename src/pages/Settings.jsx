import avatar from "../assets/images/avatar.png";
import { CameraIcon, CheckIcon, CloseCircleIcon, CloseIcon, KeyIcon, PenIcon } from "../components/icons";
import Button from "../components/Button";
import Team from "../components/Team";
import License from "../components/License";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import Label from "../components/Label";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

function Settings() {
	const isMobile = useMediaQuery({ query: "not all and (min-width: 640px)" });
	const [isNameEditable, setIsNameEditable] = useState(false);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	function onSubmit(data) {
		console.log(data);
		toggleEditName();
	}

	function toggleEditName() {
		setIsNameEditable((prev) => !prev);
	}

	return (
		<div>
			<h1 className="mb-5 px-[18px] text-xl lg:mb-4 lg:px-0">Настройки</h1>
			<div className="rounded-lg bg-chinese-black/[.35]">
				<div className="relative border-b border-white/[.03] px-5 pt-6 pb-8 sm:py-7 sm:px-[30px]">
					<div className="sm:-mx-[15px] sm:flex sm:items-center">
						<div className="flex items-center sm:max-w-[44%] sm:shrink-0 sm:grow-0 sm:basis-[44%] sm:px-[15px]">
							<div className="mr-7 sm:mr-[30px]">
								<div className="relative">
									<div className="flex h-14 w-14 rounded-full bg-primary p-[3px] shadow-glow-bottom sm:h-16 sm:w-16">
										<img src={avatar} alt="alt" className="h-full w-full rounded-full object-cover" />
									</div>
									<button type="button" className="absolute -top-px -left-px flex h-[15px] w-[15px] items-center justify-center rounded-full bg-primary/[.15] backdrop-blur-[2.5px]">
										<CloseIcon className="h-2 w-2 shrink-0 text-white" />
									</button>
									<button type="button" className="absolute -bottom-[7px] -right-[7px] flex h-7 w-7 items-center justify-center rounded-full bg-primary/[.15] backdrop-blur-[2.5px]">
										<CameraIcon className="h-4 w-4 shrink-0 text-white" />
									</button>
								</div>
							</div>
							<div className="flex-auto">
								{isNameEditable ? (
									<form
										className={cn("relative mb-1", {
											"mb-7": isNameEditable && isMobile,
										})}
										onSubmit={handleSubmit(onSubmit)}
									>
										<Label htmlFor="firstName">{errors.firstName ? "Не корректное имя" : "Введите имя"}</Label>
										<Input
											variant="gray"
											size="sm"
											type="text"
											id="firstName"
											className={cn("pr-10", {
												"is-invalid": errors.firstName,
											})}
											defaultValue="Ксения Иванова"
											{...register("firstName", { required: true, maxLength: 50 })}
											aria-invalid={errors.firstName ? "true" : "false"}
										/>
										{errors.firstName ? (
											<div className="absolute right-0 top-2/4 flex h-full -translate-y-2/4 items-center p-2.5">
												<CloseCircleIcon className="h-4 w-4 text-danger" />
											</div>
										) : (
											<button type="submit" className="absolute right-0 top-2/4 flex h-full -translate-y-2/4 items-center p-2.5">
												<CheckIcon className="h-4 w-4 text-primary" />
											</button>
										)}
										<Button type="button" variant="danger" className="absolute right-0 top-[calc(100%_+_6px)] rounded-[3px] px-1.5 py-0.5 text-[11px]" onClick={toggleEditName}>
											Отменить
										</Button>
									</form>
								) : (
									<div className="mb-1.5 flex items-center">
										<div className="text-lg leading-tighter">Ксения Иванова</div>
										<button
											type="button"
											className="relative ml-4 before:absolute before:-top-2 before:-left-2 before:-right-2 before:-bottom-2 before:block sm:before:-top-3 sm:before:-left-3 sm:before:-right-3 sm:before:-bottom-3"
											onClick={toggleEditName}
										>
											<PenIcon className="h-[13px] w-[13px] text-primary" />
										</button>
									</div>
								)}
								<div className="flex justify-between sm:block">
									<div className="text-sm leading-tighter text-primary">ksy92</div>
									{isMobile && (
										<button type="button" className="inline-flex items-center align-top text-[13px] leading-tighter text-primary underline">
											<KeyIcon className="mr-[7px] h-3.5 w-3.5 text-primary" />
											Изменить пароль
										</button>
									)}
								</div>
							</div>
						</div>
						<div className="hidden leading-none sm:-mt-4 sm:block sm:max-w-[56%] sm:shrink-0 sm:grow-0 sm:basis-[56%] sm:px-[15px]">
							<button type="button" className="inline-flex items-center align-top text-[13px] leading-tighter text-primary underline">
								<KeyIcon className="mr-[7px] h-3.5 w-3.5 text-primary" />
								Изменить пароль
							</button>
						</div>
					</div>
				</div>
				<div className="px-5 pt-9 pb-[69px] sm:px-[30px] sm:pt-10 sm:pb-7">
					<div className="space-y-9 sm:-mx-[15px] sm:flex sm:space-y-0">
						<div className="sm:max-w-[44%] sm:shrink-0 sm:grow-0 sm:basis-[44%] sm:px-[15px]">
							<div className="mb-5">Ваш тариф</div>
							<License type="vertical" tariff="middle" tariffTitle="Middle" title="Лицензии до:" date="02.03.23" completed={75} className="mb-7 max-w-[225px] sm:mb-[34px]" />
							<Button className="rounded-[30px] px-[34px] pt-[9px] pb-[11px] text-sm" shadow>
								Продлить
							</Button>
						</div>
						<div className="sm:max-w-[56%] sm:shrink-0 sm:grow-0 sm:basis-[56%] sm:px-[15px]">
							<div className="mb-5">Ваша команда</div>
							<Team />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;

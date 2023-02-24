import cn from "classnames";
import { Fragment, useState } from "react";
import avatar from "../assets/images/avatar.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.png";
import female from "../assets/icons/female.svg";
import Button from "./Button";

const teams = [
	{
		id: 1,
		team: [
			{
				avatar: avatar2,
				isActive: false,
			},
			{
				avatar: avatar,
				isActive: false,
			},
			{
				avatar: avatar3,
				isActive: true,
			},
			{
				avatar: avatar2,
				isActive: false,
			},
		],
	},
	{
		id: 2,
		team: [
			{
				avatar: avatar,
				isActive: false,
			},
			{
				avatar: avatar2,
				isActive: true,
			},
			{
				avatar: avatar,
				isActive: false,
			},
			{
				avatar: avatar3,
				isActive: false,
			},
		],
	},
	{
		id: 3,
		team: [
			{
				avatar: avatar3,
				isActive: true,
			},
			{
				avatar: avatar,
				isActive: false,
			},
			{
				avatar: avatar,
				isActive: true,
			},
			{
				avatar: avatar,
				isActive: false,
			},
		],
	},
];

function Team() {
	const [activeTab, setActiveTab] = useState(teams[0]?.id);

	return (
		<div>
			{teams && teams.length ? (
				<Fragment>
					<div className="-mx-1 -mb-2 flex flex-wrap sm:-mx-[6.5px] sm:-mb-[13px]">
						{teams.map((item, index) => (
							<Button
								variant="ghost"
								className={cn("mx-1 mb-2 rounded-[21px] py-1.5 px-5 text-xs sm:mx-[6.5px] sm:mb-[13px] sm:px-6", {
									"is-active": activeTab === item.id,
								})}
								key={index}
								onClick={() => setActiveTab(item.id)}
							>
								Команда {index + 1}
							</Button>
						))}
					</div>
					<div>
						{teams.map((item, index) => (
							<div
								className={cn("-mx-[4.5px] -mb-[9px] mt-[18px] flex flex-wrap sm:-mx-1.5 sm:-mb-3", {
									hidden: !(activeTab === item.id),
								})}
								key={index}
							>
								{item.team.map((member, index) => (
									<div
										className={cn(
											"mx-[4.5px] mb-[9px] flex h-12 w-12 rounded-full bg-dark-gunmetal p-[3px] sm:mx-1.5 sm:mb-3 sm:h-16 sm:w-16 [&.is-active]:bg-primary [&.is-active]:shadow-glow-bottom",
											{
												"is-active": member.isActive,
											}
										)}
										key={index}
									>
										<img src={member.avatar} alt="alt" className="h-full w-full rounded-full object-cover" />
									</div>
								))}
							</div>
						))}
					</div>
				</Fragment>
			) : (
				<div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-dark-gunmetal bg-eerie-black">
					<img src={female} alt="alt" />
				</div>
			)}
		</div>
	);
}

export default Team;

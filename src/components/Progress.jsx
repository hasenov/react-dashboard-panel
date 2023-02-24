import cn from "classnames";

function Progress({ completed, className, ...props }) {
	return (
		<div className={cn("flex h-1 justify-end rounded-[14px] bg-gunmetal", className)} {...props}>
			<div
				className={cn("h-full rounded-[19px] bg-gradient-to-l", {
					"from-primary to-primary-darker-2": completed >= 50,
					"from-metallic-brown to-citron": (completed < 50) & (completed >= 10),
					"from-blood to-chinese-bronze": completed < 10,
				})}
				style={{
					width: `${completed}%`,
				}}
			></div>
		</div>
	);
}

export default Progress;

import cn from "classnames";

function Status({ variant, value, className, ...props }) {
	return (
		<span className={cn("flex h-4 w-4 items-center justify-center", className)} {...props}>
			<span
				className={cn("absolute h-full w-full shrink-0 animate-ping rounded-full opacity-50", {
					"bg-violet-alt": variant === "violet",
					"bg-primary": variant === "primary",
				})}
			></span>
			<span
				className={cn("relative block h-4 w-4 shrink-0 rounded-full text-center text-[11px] leading-4", {
					"bg-violet-alt": variant === "violet",
					"bg-primary": variant === "primary",
				})}
			>
				{value}
			</span>
		</span>
	);
}

export default Status;

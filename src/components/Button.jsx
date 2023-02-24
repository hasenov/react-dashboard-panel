import cn from "classnames";
import { Fragment } from "react";

function Button({ variant = "primary", children, className, href, shadow, ...props }) {
	const classes = cn("inline-flex items-center justify-center text-center align-top leading-tighter transition-all outline-none", className, {
		"bg-primary text-white hover:bg-primary-hover": variant == "primary",
		"shadow-default shadow-primary/30": shadow && variant == "primary",
		"bg-dark-gunmetal/75 text-white hover:bg-charcoal/75 [&.is-active]:bg-charcoal/75": variant == "ghost",
		"bg-danger text-white": variant == "danger",
		"bg-transparent text-white border border-white hover:bg-primary hover:border-primary": variant == "outline-white",
		"shadow-default hover:shadow-primary/30": shadow && variant == "outline-white",
		"[&:not(:disabled)]:hover:bg-gunmetal/75": variant == "transparent",
	});

	return (
		<Fragment>
			{href ? (
				<a href={href} className={classes} {...props}>
					{children}
				</a>
			) : (
				<button className={classes} {...props}>
					{children}
				</button>
			)}
		</Fragment>
	);
}

export default Button;

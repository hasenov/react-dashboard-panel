import cn from "classnames";

function Label({ variant, size, className = "", children, ...props }) {
	return (
		<label className={cn("absolute -top-[6.45px] left-[17px] block bg-dark-gunmetal px-1 text-[11px]", className)} {...props}>
			{children}
		</label>
	);
}

export default Label;

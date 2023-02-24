import cn from "classnames";
import React from "react";

function Input({ variant = "gray", size = "md", className = "", ...props }, ref) {
	return (
		<input
			className={cn("block w-full border bg-transparent outline-none transition-colors [&.is-invalid]:border-danger", className, {
				"border-white": variant == "white",
				"border-electric-blue text-electric-blue placeholder:text-electric-blue": variant == "gray",
				"rounded-[7px] px-5 py-2.5 text-sm": size == "md",
				"rounded-[5px] px-5 py-1.5 text-xs": size == "sm",
			})}
			{...props}
			ref={ref}
		/>
	);
}

export default React.forwardRef(Input);

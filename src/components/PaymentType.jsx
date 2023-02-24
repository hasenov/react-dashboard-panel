import cn from "classnames";
import { CheckIcon, CircleIcon } from "./icons";

function PaymentType({ title, name, id, logo, className = "", ...props }) {
	return (
		<label htmlFor={id} className={cn("flex cursor-pointer items-center rounded-[7px] bg-dark-gunmetal/75 py-1.5 pr-2 pl-3.5 transition-colors lg:hover:bg-dark-gunmetal", className)} {...props}>
			<input type="radio" name={name} id={id} className="peer absolute h-0 w-0 opacity-0" />
			<CircleIcon className="h-4 w-4 shrink-0 text-rhythm peer-checked:hidden" />
			<CheckIcon className="hidden h-4 w-4 shrink-0 text-primary peer-checked:block" />
			<div className="ml-2 flex-auto text-sm">{title}</div>
			<img src={logo} alt="alt" className="ml-auto max-w-[52px]" />
		</label>
	);
}

export default PaymentType;

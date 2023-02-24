import { useState } from "react";
import minus from "../assets/icons/minus.svg";
import plus from "../assets/icons/plus.svg";
import cn from "classnames";

function Counter({ defaultValue = 0, className = "", ...props }) {
	const [value, setValue] = useState(defaultValue);

	function handleChange(e) {
		setValue(e.target.value);
	}

	function decrease() {
		if (value > 0) {
			setValue((prev) => prev - 1);
		}
	}

	function increase() {
		setValue((prev) => prev + 1);
	}

	return (
		<div className={cn("flex items-center", className)} {...props}>
			<button type="button" className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5" onClick={decrease}>
				<img src={minus} alt="alt" />
			</button>
			<input type="text" className="mx-1.5 h-6 w-14 rounded-[37px] bg-white/5 text-center outline-none" value={value} onChange={handleChange} />
			<button type="button" className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5" onClick={increase}>
				<img src={plus} alt="alt" />
			</button>
		</div>
	);
}

export default Counter;

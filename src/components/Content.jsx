import { Routes, Route } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Overview from "../pages/Overview";
import Payment from "../pages/Payment";
import Referral from "../pages/Referral";
import Settings from "../pages/Settings";
import Tariffs from "../pages/Tariffs";
import { MessageIcon } from "../components/icons";
import "simplebar-react/dist/simplebar.min.css";
import PaymentNoPayment from "../pages/PaymentNoPayment";
import cn from "classnames";
import { Fragment } from "react";
import { useBlur } from "../context/blur/BlurState";

function Content() {
	const blur = useBlur()[0];
	const blurClass = {
		"blur-[6px] pointer-events-none": blur,
	};

	return (
		<Fragment>
			<Header />
			<div className={cn("scrollbar px-3.5 pb-6 pt-5 transition-all will-change-[filter] lg:flex lg:flex-auto lg:flex-col lg:overflow-y-auto lg:pl-[30px] lg:pr-9 lg:pt-12", blurClass)}>
				<Routes>
					<Route path="/" element={<Overview />} />
					<Route path="/referral" element={<Referral />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/tariffs" element={<Tariffs />} />
					<Route path="/payment" element={<Payment />} />
					<Route path="/payment-bez-oplaty" element={<PaymentNoPayment />} />
				</Routes>
				<div className="mt-auto hidden lg:block">
					<div className="pt-5 text-end">
						<Button variant="primary" className="h-9 rounded px-4 text-sm">
							<MessageIcon className="mr-2 max-h-5 w-5 text-white" />
							Помощь оператора
						</Button>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Content;

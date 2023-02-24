export const PenIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M2.375 8.5625L4.78125 10.625M2.03125 8.5625L8.80964 1.54738C9.53948 0.817541 10.7228 0.81754 11.4526 1.54738C12.1825 2.27722 12.1825 3.46052 11.4526 4.19036L4.4375 10.9688L1 12L2.03125 8.5625Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

PenIcon.defaultProps = {
	className: "",
};

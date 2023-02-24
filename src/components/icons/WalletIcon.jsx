export const WalletIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M13 1H2.16667C1.52233 1 1.00139 1.69269 1.00079 2.40625C1 3.34375 1.52233 4.27083 2.16667 4.27083H14.3333C15.2538 4.27083 16 4.07953 16 5V13C16 14.1046 15.1046 15 14 15H3C1.89543 15 1 14.1046 1 13V2.875M12.0131 8.98695L12 9"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

WalletIcon.defaultProps = {
	className: "",
};

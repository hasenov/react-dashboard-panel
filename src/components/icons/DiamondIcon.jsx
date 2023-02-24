export const DiamondIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M7.33495 1L5.73301 5.22674L8.5 14M8.5 14L11.3398 5.15258L9.81068 1M8.5 14L1 5.30089M8.5 14L16 5.30089M1 5.30089L4.20388 1H12.8689L16 5.30089M1 5.30089H16"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

DiamondIcon.defaultProps = {
	className: "",
};

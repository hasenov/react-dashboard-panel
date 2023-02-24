export const ListIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M6.25 4.0625L4.0625 4.0625M6.25 6.6875L4.0625 6.6875M11.9375 4.0625H9.75M11.9375 6.6875L9.75 6.6875M6.25 9.3125H4.0625M6.25 11.9375H4.0625M1 3.625L1 12.375C1 13.8247 2.17525 15 3.625 15C5.07475 15 10.9253 15 12.375 15C13.8247 15 15 13.8247 15 12.375V3.625C15 2.17525 13.8247 1 12.375 1L3.625 1C2.17525 1 1 2.17525 1 3.625Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

ListIcon.defaultProps = {
	className: "",
};

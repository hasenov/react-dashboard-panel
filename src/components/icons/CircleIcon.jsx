export const CircleIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M1.52588 8.46289C1.52588 4.43833 4.78843 1.17578 8.81299 1.17578C12.8375 1.17578 16.1001 4.43833 16.1001 8.46289C16.1001 12.4874 12.8375 15.75 8.81299 15.75C4.78843 15.75 1.52588 12.4874 1.52588 8.46289Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

CircleIcon.defaultProps = {
	className: "",
};

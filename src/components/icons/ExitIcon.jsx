export const ExitIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M5.00746 1.4375H2.4411C2.05216 1.4375 1.67915 1.59072 1.40413 1.86345C1.12911 2.13617 0.974609 2.50607 0.974609 2.89177V11.6174C0.974609 12.0031 1.12911 12.373 1.40413 12.6457C1.67915 12.9184 2.05216 13.0717 2.4411 13.0717H5.00746M5.18972 7.25458H13.4998M13.4998 7.25458L10.3246 3.93053M13.4998 7.25458L10.3246 10.5786"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

ExitIcon.defaultProps = {
	className: "",
};

export const CopyIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M10.75 5.88397H12.25C12.6642 5.88397 13 6.21976 13 6.63397L13 11.384C13 12.4885 12.1046 13.384 11 13.384L6.25 13.384C5.83579 13.384 5.5 13.0482 5.5 12.634V11.134M7 1.38397L2.5 1.38397C1.67157 1.38397 1 2.05555 1 2.88397L1 7.38397C1 8.2124 1.67157 8.88397 2.5 8.88397L7 8.88397C7.82843 8.88397 8.5 8.2124 8.5 7.38397L8.5 2.88397C8.5 2.05555 7.82843 1.38397 7 1.38397Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

CopyIcon.defaultProps = {
	className: "",
};

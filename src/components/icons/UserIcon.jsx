export const UserIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M3.34375 14.125C3.70404 13.7215 5.39144 11.8646 5.88594 11.8646H11.1144C11.8309 11.8646 13.2937 13.4038 13.6562 13.9464M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5ZM11.1866 5.94372C11.1866 4.51285 9.97868 3.34375 8.50023 3.34375C7.02181 3.34375 5.81386 4.51285 5.81386 5.94372C5.81386 7.37459 7.02181 8.54369 8.50023 8.54369C9.97864 8.54369 11.1866 7.37459 11.1866 5.94372Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

UserIcon.defaultProps = {
	className: "",
};

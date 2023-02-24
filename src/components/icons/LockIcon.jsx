export const LockIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M2.60419 6.08979V5.34553C2.60419 2.87174 4.56486 0.879944 7 0.879944C9.43514 0.879944 11.3958 2.87174 11.3958 5.34553V6.08979M2.60419 6.08979C1.79829 6.08979 1.13892 6.75963 1.13892 7.57832V15.021C1.13892 15.8397 1.79829 16.5095 2.60419 16.5095H11.3958C12.2017 16.5095 12.8611 15.8397 12.8611 15.021V7.57832C12.8611 6.75963 12.2017 6.08979 11.3958 6.08979M2.60419 6.08979H11.3958"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

LockIcon.defaultProps = {
	className: "",
};

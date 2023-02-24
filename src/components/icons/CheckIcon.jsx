export const CheckIcon = ({ className }) => {
	return (
		<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M9.84419 6.08639L6.73612 9.19446L5.67666 8.135M7.55557 1C3.93503 1 1 3.93503 1 7.55557C1 11.1761 3.93503 14.1111 7.55557 14.1111C11.1761 14.1111 14.1111 11.1761 14.1111 7.55557C14.1111 3.93503 11.1761 1 7.55557 1Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

CheckIcon.defaultProps = {
	className: "",
};

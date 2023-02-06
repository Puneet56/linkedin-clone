type ButtonProps = {
	title: string;
	onClick?: () => void;
	className?: string;
};

export const BaseButton: React.FC<ButtonProps> = ({
	title = '',
	onClick = () => {},
	className = '',
	...other
}) => {
	return (
		<button
			{...other}
			className={`flex min-w-[4rem] items-center justify-center rounded-full px-8 py-2 hover:bg-black/5 ${className}`}
			onClick={onClick}
			aria-label={title}
		>
			<span className="font-semibold">{title}</span>
		</button>
	);
};

export const PrimaryButton: React.FC<ButtonProps> = ({
	title = '',
	onClick = () => {},
	className = '',
	...other
}) => {
	return (
		<BaseButton
			{...other}
			className={`border border-blue-600 text-blue-600  ${className}`}
			onClick={onClick}
			title={title}
		/>
	);
};

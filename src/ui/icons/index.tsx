type IconProps = {
	icon: React.ReactNode;
	label: string;
};

export const BaseIcon = ({ icon, label, ...others }: IconProps) => {
	return (
		<div
			className="flex aspect-square h-12 flex-col items-center justify-center"
			{...others}
		>
			{icon}
			<span className="text-xs">{label}</span>
		</div>
	);
};

export const DiscoverIcon = () => {
	return (
		<BaseIcon
			icon={<div className="h-6 w-6 bg-gray-500"></div>}
			label="Discover"
		/>
	);
};

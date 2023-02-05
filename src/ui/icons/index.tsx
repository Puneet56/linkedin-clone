import { AiFillCompass } from 'react-icons/ai';

type IconProps = {
	icon: React.ReactNode;
	label: string;
};

export const BaseIcon = ({ icon, label, ...others }: IconProps) => {
	return (
		<div className="flex flex-col items-center justify-center" {...others}>
			{icon}
			<span className="font-medium text-gray-500">{label}</span>
		</div>
	);
};

export const DiscoverIcon = () => {
	return (
		<BaseIcon
			icon={<AiFillCompass className="text-3xl text-gray-500" />}
			label="Discover"
		/>
	);
};

export const PeopleIcon = () => {
	return (
		<BaseIcon icon={<AiFillCompass className="text-xl" />} label="Discover" />
	);
};

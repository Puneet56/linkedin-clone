import { AiFillCompass } from 'react-icons/ai';
import { BsBriefcaseFill } from 'react-icons/bs';
import { MdOutlineOndemandVideo, MdPeopleAlt } from 'react-icons/md';

type IconProps = {
	icon: React.ReactNode;
	label: string;
	onClick?: () => void;
};

export const Icon = ({
	icon,
	label,
	onClick = () => {},
	...others
}: IconProps) => {
	return (
		<div
			className="flex w-16 cursor-pointer flex-col items-center justify-center"
			{...others}
		>
			{icon}
			<span className="font-medium text-gray-500">{label}</span>
		</div>
	);
};

export const DiscoverIcon = () => {
	return (
		<Icon
			icon={<AiFillCompass className="text-3xl text-gray-500" />}
			label="Discover"
		/>
	);
};

export const PeopleIcon = () => {
	return (
		<Icon
			icon={<MdPeopleAlt className="text-3xl text-gray-500" />}
			label="People"
		/>
	);
};

export const LearningIcon = () => {
	return (
		<Icon
			icon={<MdOutlineOndemandVideo className="text-3xl text-gray-500" />}
			label="Learning"
		/>
	);
};

export const JobsIcon = () => {
	return (
		<Icon
			icon={<BsBriefcaseFill className="text-3xl text-gray-500" />}
			label="Jobs"
		/>
	);
};

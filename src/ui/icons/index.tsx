import { AiFillCompass } from 'react-icons/ai';
import { BsBriefcaseFill } from 'react-icons/bs';
import { MdOutlineOndemandVideo, MdPeopleAlt } from 'react-icons/md';

type IconProps = {
	icon: React.ReactNode;
	label: string;
};

export const BaseIcon = ({ icon, label, ...others }: IconProps) => {
	return (
		<div className="flex w-16 flex-col items-center justify-center" {...others}>
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
		<BaseIcon
			icon={<MdPeopleAlt className="text-3xl text-gray-500" />}
			label="People"
		/>
	);
};

export const LearningIcon = () => {
	return (
		<BaseIcon
			icon={<MdOutlineOndemandVideo className="text-3xl text-gray-500" />}
			label="Learning"
		/>
	);
};

export const JobsIcon = () => {
	return (
		<BaseIcon
			icon={<BsBriefcaseFill className="text-3xl text-gray-500" />}
			label="Jobs"
		/>
	);
};

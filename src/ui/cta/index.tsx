import { AiOutlineArrowRight } from 'react-icons/ai';

const CTA = ({ description }: { description: string }) => {
	return (
		<div className="flex h-20 w-full items-center justify-between rounded-xl bg-white px-8">
			<span className="flex-1 text-2xl text-black">{description}</span>
			<AiOutlineArrowRight className="text-3xl text-gray-500" />
		</div>
	);
};

export default CTA;

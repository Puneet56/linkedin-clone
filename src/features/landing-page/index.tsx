import CTA from '@/ui/cta';
import { DiscoverIcon, JobsIcon, LearningIcon, PeopleIcon } from '@/ui/icons';
import tw from 'tailwind-styled-components';

const Header = tw.header`w-full flex items-center justify-around p-4
`;

const LandingPage = () => {
	return (
		<div className="bg-[#f3f2ef]">
			<div className="container mx-auto h-screen">
				<Header>
					<img className="h-12" src={'/logo-with-text.svg'} alt="LinkedIn" />
					<div className="flex items-center justify-center gap-2">
						<DiscoverIcon />
						<PeopleIcon />
						<LearningIcon />
						<JobsIcon />
						<div className="h-12 border"></div>
					</div>
				</Header>
				<div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
					<div className="h-full flex-1 flex-col items-center justify-start">
						<h1 className="text-5xl font-normal leading-relaxed text-yellow-600">
							Welcome to your
						</h1>
						<h1 className="text-5xl font-normal leading-relaxed text-yellow-600">
							professional community
						</h1>
						<div className="flex flex-col gap-4">
							<CTA description="Search for a job" />
							<CTA description="Find a person you know" />
							<CTA description="learn new skill" />
						</div>
					</div>
					<div className="flex-1">
						<img src={'/Landing-Page-Stock-Image.svg'} alt="hero" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;

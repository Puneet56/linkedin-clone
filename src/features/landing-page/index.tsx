import { DiscoverIcon } from '@/ui/icons';
import tw from 'tailwind-styled-components';

const Header = tw.header`w-full flex items-center justify-around p-4
`;

const LandingPage = () => {
	return (
		<Header>
			<h1>
				<img className="h-12" src={'/logo-with-text.svg'} alt="LinkedIn" />
			</h1>
			<div className="flex items-center justify-center">
				<DiscoverIcon />
				<DiscoverIcon />
				<DiscoverIcon />
				<DiscoverIcon />
				<DiscoverIcon />
			</div>
		</Header>
	);
};

export default LandingPage;

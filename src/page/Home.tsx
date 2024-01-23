import React, { useRef } from 'react';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import Introduction from './Homepage/Introduction/Introduction';
import Driver from './Homepage/Driver/Driver';
import ChatBox from './Homepage/Chatbox/Chatbox';
import Product from './Homepage/Product/Product';
import Blog from './Homepage/Blog/Blog';
import Incentives from './Homepage/Incentives/Incentives';
interface HomeProps { }
const Home: React.FC<HomeProps> = () => {
	const registerRef = useRef<HTMLDivElement>(null);

	const executeScroll = () => {
		console.log("Executing scrollFunc");
		if (registerRef.current) {
			registerRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<div className='overflow-hidden'>
			<div>
				<Header scrollFunc={executeScroll} />
			</div>
			<div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='50' >
				<Introduction />
			</div>
			<div data-aos='fade-left' data-aos-duration='1000'>
				<Driver />
			</div>
			<div data-aos='fade-right' data-aos-duration='1000' data-aos-delay='50'>
				<ChatBox />
			</div>
			<div data-aos='fade-up-right' data-aos-duration='1000' data-aos-delay='50'>
				<Product />
			</div>
			<div data-aos='fade-right' data-aos-duration='1000' data-aos-delay='50'>
				<Blog />
			</div>
			<div ref={registerRef}>
				<Incentives />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;

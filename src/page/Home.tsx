import React, { useEffect } from 'react';
// import Header from '@/components/Layout/Header/Header';
// import Footer from '@/components/Layout/Footer/Footer';
import Introduction from './Homepage/Introduction/Introduction';
import Driver from './Homepage/Driver/Driver';
import ChatBox from './Homepage/Chatbox/Chatbox';
import Product from './Homepage/Product/Product';
import Blog from './Homepage/Blog/Blog';
import Incentives from './Homepage/Incentives/Incentives';
interface HomeProps { }
const Home: React.FC<HomeProps> = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='overflow-hidden'>
			{/* <div>
				<Header />
			</div> */}
			<div data-aos='fade-down' data-aos-duration='2000' data-aos-delay='50' style={{ paddingLeft: "2%", paddingRight: "5%", marginBottom: "1%" }}>
				<Introduction />
			</div>
			<div data-aos='fade-left' data-aos-duration='2000' data-aos-delay='50' >
				<Driver />
			</div>
			<div data-aos='fade-right' data-aos-duration='2000' data-aos-delay='50'>
				<ChatBox />
			</div>
			<div data-aos='fade-up-right' data-aos-duration='2000' data-aos-delay='50' >
				<Product />
			</div>
			<div data-aos='fade-right' data-aos-duration='2000' data-aos-delay='50'>
				<Blog />
			</div>
			<div className='mb-16'>
				<Incentives />
			</div>

		</div>
	);
};

export default Home;

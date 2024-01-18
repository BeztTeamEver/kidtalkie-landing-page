import reactLogo from '/src/assets/react.svg';
import viteLogo from '/vite.svg';
import '/src/App.css';
import Button from '@/components/Button';
import useHomeStore from '@/store/useStore';
import { useBlogSelector, useFetchBlog } from '@/hook/useFetchApi';

const Home = () => {
	const { count, increase } = useHomeStore((state) => state);
	const { blogs } = useBlogSelector();
	console.log('🚀 ~ Home ~ blogs:', blogs);
	useFetchBlog();

	return (
		<>
			<div className="flex flex-row items-center justify-center bg-primary-600">
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="text-neutral-light font-sans font-bold">Vite + React</h1>
			<div className="card">
				<Button onClick={() => increase()}>count is {count}</Button>
				<p className="font-sans">Check console log for demo fetch api data response</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
};

export default Home;

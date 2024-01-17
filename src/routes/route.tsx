import Home from '@/page/Home';
import { Route, RouteProps, Routes } from 'react-router';

const publicRoute: RouteProps[] = [
	{
		path: '/',
		element: <Home />,
	},
];

const AppRoutes = () => {
	return (
		<Routes>
			{publicRoute.map((route, index) => (
				<Route key={index} {...route} />
			))}
		</Routes>
	);
};

export default AppRoutes;

import Cost from '@/page/Costpage/Cost';
import Home from '@/page/Home';
import Incentives from '@/page/Homepage/Incentives/Incentives';
import Update from '@/page/Updatepage/updatePage';
import { Route, RouteProps, Routes } from 'react-router';

const publicRoute: RouteProps[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/incentives',
		element: <Incentives />,
	},
	{
		path: '/cost',
		element: <Cost />,
	},
	{
		path: '/updating',
		element: <Update />,
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

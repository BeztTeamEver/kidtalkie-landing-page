import useBlogStore from '@/store/useBlogStore';
import { useEffect } from 'react';

export const useFetchBlog = () => {
	const { fetch } = useBlogStore((state) => state);

	useEffect(() => {
		fetch();
	}, []);
};

export const useBlogSelector = () => {
	const { blogs } = useBlogStore((state) => state);
	return { blogs };
};

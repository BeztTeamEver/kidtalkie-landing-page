import { IBlogState } from '@/interface/BlogState';
import blogService from '@/services/blogService';
import { create } from 'zustand';

const useBlogStore = create<IBlogState>((set) => ({
	blogs: [],
	fetch: async () => {
		const data = await blogService.getBlogList();
		set({ blogs: data });
	},
}));

export default useBlogStore;

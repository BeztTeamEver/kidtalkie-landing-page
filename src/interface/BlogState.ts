import { BlogModel } from '@/Model/Blog';

export interface IBlogState {
	blogs: BlogModel[];
	fetch: () => Promise<void>;
}

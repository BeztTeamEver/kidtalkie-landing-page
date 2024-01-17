import { BaseHttp } from '@/utils/api';

const endpoint = '/posts';

class BlogService extends BaseHttp {
	public async getBlogList() {
		const response = await this.get({ url: `${endpoint}` });
		return response.data;
	}
}

export default new BlogService();

import { BaseHttp } from './api';
const baseHttp = new BaseHttp();

export const RegisterAPI = {
	register: async (
		fullName: String,
		email: String,
		province: String,
		referralCodeOther: String,
	) => {
		return await baseHttp.post({
			headers: {},
			params: {},
			// url: '/landing-page/register-early', run in local
			url: '/api/landing-page/register-early',
			data: { fullName, email, province, referralCodeOther },
		});
	},
};

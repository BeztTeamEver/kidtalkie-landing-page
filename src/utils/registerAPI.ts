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
			// run in local
			// url: '/landing-page/register-early',
			url: '/api/landing-page/register-early',
			data: { fullName, email, province, referralCodeOther },
		});
	},
};

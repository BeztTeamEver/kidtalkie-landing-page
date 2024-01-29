import { BaseHttp } from './api';
const baseHttp = new BaseHttp();
export const ProvincesAPI = {
    getProvinces: async () => {
        return await baseHttp.get({
            headers: {},
            params: {},
            // url: '/landing-page/provinces', run in local
            url: '/api/landing-page/provinces',
        });
    },
};
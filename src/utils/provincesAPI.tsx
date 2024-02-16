import { BaseHttp } from './api';
const baseHttp = new BaseHttp();
export const ProvincesAPI = {
    getProvinces: async () => {
        return await baseHttp.get({
            headers: {},
            params: {},
            // run in local
            // url: '/landing-page/provinces',
            url: '/api/landing-page/provinces',
        });
    },
};
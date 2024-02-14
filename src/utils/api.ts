import { IBaseRequest, IRequest } from '@/interface/Api';
import { API_URL } from '@config/config';
import axios, { AxiosInstance } from 'axios';
import assign from 'lodash/assign';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: API_URL,
	timeout: 5000,
	headers: { 'X-Custom-Header': 'foobar' },
});

axiosInstance.interceptors.request.use(function (config) {
	// Check authorization if need
	return config;
});

export class BaseHttp {
	public get({ headers, params, url }: IBaseRequest) {
		return axiosInstance.get(url, {
			params: assign({}, params),
			headers: assign({}, headers),
		});
	}

	public post({ headers, params, url, data }: IRequest) {
		return axiosInstance.post(url,data, {
			params: assign({}, params),
			headers: assign({}, headers),
		});
	}

	public put({ headers, params, url, data }: IRequest) {
		return axiosInstance.put(url,data, {
			params: assign({}, params),
			headers: assign({}, headers),
		});
	}

	public delete({ headers, params, url, data }: IRequest) {
		return axiosInstance.delete(url, {
			params: assign({}, params),
			data: assign({}, data),
			headers: assign({}, headers),
		});
	}
}

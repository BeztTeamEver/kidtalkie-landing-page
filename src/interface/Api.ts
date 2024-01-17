export interface IBaseRequest {
	url: string;
	params?: any;
	headers?: any;
}

export interface IRequest extends IBaseRequest {
	data?: any;
}

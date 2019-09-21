import { BaseApi } from "./base";

export class EverythingApi extends BaseApi {
	constructor() {
		super('v2/')
	}

	getNews = (url, params = {}) => this.make('GET', url, params)

}
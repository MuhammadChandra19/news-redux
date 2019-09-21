import axios from 'axios';
import { errorInterceptor } from '../interceptors/error';


export class BaseApi {
	/*
 * Base Url
 * Sample : http://example.com
 * */
	baseUrl = '';

	/*
	 * Addtional Base Url
	 * Base Url will be appended to baseUrl
	 * Sample : users
	 * */
	addtionalBaseUrl = '';

	/*
	 * Axios Instance
	 */
	axiosInstance = null;

	/*
	 * Constructor(string)
	 * - Set base url
	 * - Add unauthorized interceptors
	 * - Set addtional base url
	 */

	constructor(addtionalBaseUrl = '') {
		this.baseUrl = process.env.REACT_APP_API_URL || '';

		this.addtionalBaseUrl = addtionalBaseUrl;

		this.axiosInstance = axios.create();
		// this.axiosInstance.interceptors.request.use(
		// 	// preRequestInterceptor,
		// 	(err) => Promise.reject(err),
		// );
		this.axiosInstance.interceptors.response.use(
			(response) => response,
			(err) => Promise.reject(err),
			errorInterceptor,
		);
	}

	make(method, url, data = {}, addtionalConfig = {}, headers = {}) {
		let withKey = {
			...data,
			apiKey: process.env.REACT_APP_API_KEY
		}
		let header = {
			'Content-Type': 'application/json'
		}
		if (method === '') {
			throw new Error('Error : please fill method');
		}

		if (Object.keys(headers).length > 0) {
			header = headers
		}


		if (typeof method !== 'string' && typeof url !== 'string') {
			throw new Error('Error : method and url must be string');
		}

		const config = {
			baseURL: this.baseUrl,
			method,
			url: `${this.addtionalBaseUrl}${url}`,
			headers: header,
			...addtionalConfig,
		};
		if (method === 'GET') {
			Object.keys(withKey).forEach((key) => {
				if (withKey[key] === null || withKey[key] === '') {
					delete withKey[key];
				}
			});
			config.params = withKey;
		} else {
			config.data = withKey;
		}

		return this.axiosInstance.request(config);
	}


}
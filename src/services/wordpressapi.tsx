import { Component } from 'react';


export default class WordpressApi extends Component {
    static myInstance?: WordpressApi;
    
    baseUrl = 'https://public-api.wordpress.com/wp/v2/sites/shaolinvalencia119107985.wordpress.com/posts/';

    static getInstance(): WordpressApi {
        if (!this.myInstance) this.myInstance = new WordpressApi({});
        return this.myInstance!;
    }

    getOptions() {
        const requestOptionsGet: RequestInit = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return requestOptionsGet;
    }

    async getPosts() {
        const getOptions = this.getOptions();

        try {
            const response = await fetch(this.baseUrl, getOptions);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    async getPostByID(id:number) {
        const getOptions = this.getOptions();

        try {
            const response = await fetch(this.baseUrl + id, getOptions);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }
}

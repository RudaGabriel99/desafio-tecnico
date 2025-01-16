import { PostResponse } from '@/types/postResponse';
import { AxiosInstance } from 'axios';
import api from './api';


export class PostService {
    private api: AxiosInstance;

    constructor() {
        this.api = api;
    }

    async getPosts(): Promise<PostResponse[]> {
        const { data } = await this.api.get<PostResponse[]>("/posts");
        return data;
    }
}


import { TUser } from '@/types/user';
import { AxiosInstance } from 'axios';
import api from './api';


export class UserService {
    private api: AxiosInstance;

    constructor() {
        this.api = api;
    }

    async getUser(): Promise<TUser> {
        const { data } = await this.api.get<TUser>("/user");
        return data;
    }
}


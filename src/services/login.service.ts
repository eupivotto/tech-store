import { userApi } from './api';
import { userApiAdmin } from './api';

export interface AdminData {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface LoginResponse {
  user: string;
  token: string;
  admin?: AdminData;
}

export const loginNewUser = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await userApi.post('/', { email, password });
  const { token } = response.data;
  return {user:'', token };
};

export const loginAdmin = async (email: string, password: string): Promise<LoginResponse | undefined> => {
    try {
        const response = await userApiAdmin.post('/', { email, password });
        const { token, admin } = response.data;
        return { user: '', token, admin };
      } catch (error) {
        return undefined;
      }
};

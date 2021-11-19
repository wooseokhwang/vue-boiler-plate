import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

interface User {
  id: string;
  name: string;
}
interface Response<T> {
  data: T;
}

const instance = (function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
})();

const loginUser = <T>(userData: User): Promise<Response<T>> => {
  return instance.post('login', userData);
};

const fetchPosts = <T>(): Promise<Response<T>> => {
  return instance.get('posts');
};

export { loginUser, fetchPosts };

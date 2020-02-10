import axios from 'axios';
export default function request() {
  return (next) => (action) => {
    const { payload, type } = action;
    if (!payload || !payload.method) return next({ payload, type });
    try {
      const result = axios({
        method: payload.method,
        url: payload.url,
        data: payload.data,
        params: payload.params,
      });
      return Promise.resolve(result);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
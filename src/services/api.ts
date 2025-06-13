import axios from 'axios';

// API 기본 설정
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:80/bizwatch_web_src',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키를 포함한 요청을 위해 필요
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 요청 전에 수행할 작업
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 에러 처리
    if (error.response?.status === 401) {
      // 인증 에러 처리
      console.error('인증 에러가 발생했습니다.');
    }
    return Promise.reject(error);
  }
);

export default api; 
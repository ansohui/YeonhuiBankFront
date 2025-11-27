import { userInstance } from "./instance";
import { request } from "../utils/request";

// 아이디 중복확인: GET /api/users/check?userId=
export const checkId = (userId) => {
  return request(userInstance, "get", "/check", { params: { userId } });
};

// 회원가입: POST /api/users/signup
export const signup = (payload) => {
  return request(userInstance, "post", "/signup", payload);
};

// 로그인: POST /api/users/login (토큰 발급)
export const login = (payload) => {
  return request(userInstance, "post", "/login", payload);
};

// 특정 유저 조회: GET /api/users/{userId}
export const fetchUserInfo = (userId) => {
  return request(userInstance, "get", `/${userId}`);
};

// 내 정보 조회: GET /api/users/me (JWT 필요)
export const fetchMyInfo = () => {
  return request(userInstance, "get", "/me");
};

import { failureReasonInstance } from "./instance";
import { request } from "../utils/request";

// 실패 사유 등록: POST /api/failure-reasons
export const createFailureReason = (payload) => {
  return request(failureReasonInstance, "post", "/", payload);
};

// 실패 사유 단건 조회: GET /api/failure-reasons/{reasonCode}
export const fetchFailureReason = (reasonCode) => {
  return request(failureReasonInstance, "get", `/${reasonCode}`);
};

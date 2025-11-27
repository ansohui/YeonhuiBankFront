import { scheduleInstance } from "./instance";
import { request } from "../utils/request";

// 예약 목록 조회 (모두): GET /api/schedules
export const fetchSchedules = () => {
  return request(scheduleInstance, "get", "/");
};

// 예약 생성: POST /api/schedules
export const createSchedule = (payload) => {
  return request(scheduleInstance, "post", "/", payload);
};

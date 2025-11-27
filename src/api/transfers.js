import { transactionInstance } from "./instance";
import { request } from "../utils/request";

// 입금: POST /api/transactions/deposit
export const deposit = (payload) => {
  return request(transactionInstance, "post", "/deposit", payload);
};

// 출금: POST /api/transactions/withdraw
export const withdraw = (payload) => {
  return request(transactionInstance, "post", "/withdraw", payload);
};

// 이체: POST /api/transactions/transfer
export const createTransfer = (payload) => {
  return request(transactionInstance, "post", "/transfer", payload);
};

// 내가 보낸 거래 조회: GET /api/transactions/sent
export const fetchSentTransactions = (params) => {
  return request(transactionInstance, "get", "/sent", { params });
};

// 내가 받은 거래 조회: GET /api/transactions/received
export const fetchReceivedTransactions = (params) => {
  return request(transactionInstance, "get", "/received", { params });
};

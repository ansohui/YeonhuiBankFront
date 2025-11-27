import axios from "axios";

const API_PREFIX = (process.env.REACT_APP_URL || "").replace(/\/$/, "");
const API_BASE = `${API_PREFIX}/api`;

// 공통 /api prefix 인스턴스 (기본)
const apiInstance = axios.create({
  baseURL: API_BASE || "/api",
});

// 필요 시 기본 인스턴스 별칭
const defaultInstance = apiInstance;

// /api 하위 인스턴스들
const userInstance = axios.create(apiInstance.defaults);
userInstance.defaults.baseURL += "/users";

const accountInstance = axios.create(apiInstance.defaults);
accountInstance.defaults.baseURL += "/accounts";

const transactionInstance = axios.create(apiInstance.defaults);
transactionInstance.defaults.baseURL += "/transactions";

const scheduledTxInstance = axios.create(apiInstance.defaults);
scheduledTxInstance.defaults.baseURL += "/scheduled-transactions";

const scheduledRunInstance = axios.create(apiInstance.defaults);
scheduledRunInstance.defaults.baseURL += "/scheduled-transfer-runs";

const abnTransferInstance = axios.create(apiInstance.defaults);
abnTransferInstance.defaults.baseURL += "/abn-transfers";

const logInstance = axios.create(apiInstance.defaults);
logInstance.defaults.baseURL += "/logs";

const transferLimitInstance = axios.create(apiInstance.defaults);
transferLimitInstance.defaults.baseURL += "/transfer-limits";

const failureReasonInstance = axios.create(apiInstance.defaults);
failureReasonInstance.defaults.baseURL += "/failure-reasons";

const attachToken = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
};

[
  defaultInstance,
  apiInstance,
  userInstance,
  accountInstance,
  transactionInstance,
  scheduledTxInstance,
  scheduledRunInstance,
  abnTransferInstance,
  logInstance,
  transferLimitInstance,
  failureReasonInstance,
].forEach(attachToken);

export {
  defaultInstance,
  apiInstance,
  userInstance,
  accountInstance,
  transactionInstance,
  scheduledTxInstance,
  scheduledRunInstance,
  abnTransferInstance,
  logInstance,
  transferLimitInstance,
  failureReasonInstance,
};

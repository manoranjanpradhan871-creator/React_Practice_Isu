import API from "./axiosInstance";

export const submitReport = (payload) => {
  return API.post("/CBOI/reports/querysubmit_username", payload);
};

export const getReportStatus = (queryId) => {
  return API.get(`/CBOI/reports/get_report_status/${queryId}`);
};
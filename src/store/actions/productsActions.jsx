export const setFetching = (data) => ({
  type: "FETCHING",
  payload: data,
});

export const setFetched = (data) => ({
  type: "FETCHED",
  payload: data,
});

export const setFailed = (data) => ({
  type: "FAILED",
  payload: data,
});

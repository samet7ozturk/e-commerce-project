export const loginUserSuccess = (data) => ({
  type: "LOGIN_USER_SUCCESS",
  payload: data,
});

export const loginUserVerify = (data) => ({
  type: "LOGIN_USER_VERIFY",
  payload: data,
});

export const loginUserFailure = (data) => ({
  type: "LOGIN_USER_FAILURE",
  payload: data,
});

export const loginExit = () => ({
  type: "USER_EXIT",
});

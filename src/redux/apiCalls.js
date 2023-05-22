import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../Url/url";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/fine/auth/login", user);

    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

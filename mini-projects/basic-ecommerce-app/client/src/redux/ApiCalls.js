import { loginFailure, loginStart, loginSuccess } from "./UserReducer";
import { userRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// export const logoutuser = async (dispatch, user) => {
//     dispatch(logout())
// }

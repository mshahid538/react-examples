import { loginFailure, loginStart, loginSuccess } from "./UserReducer";
import { userRequest } from "../requestMethod";

//login function
export const login = async (dispatch, username, password) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", { username, password });
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// export const logoutuser = async (dispatch, user) => {
//     dispatch(logout())
// }

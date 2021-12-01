import axios from "axios";
import {
  ADDUSER,
  GETUSERS,
  GETUSER,
  UPDATEUSER,
  DELETEUSER,
} from "./userTypes";

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3333/users", user);
    dispatch({
      type: ADDUSER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsers = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3333/users");
  dispatch({
    type: GETUSERS,
    payload: response.data,
  });
};

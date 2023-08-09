import React, { useReducer } from 'react'
import { ROLES } from '../../constants';
import { AUTH_ACTION, AUTH_API_PATHS } from '../../constants/auth';
import axios from 'axios';
import { AUTH_API } from '../../config';




const inintalState = {
  isAuth: false,
  user: null,
  token: null,
  role: ROLES.GUEST,
  error: '',
  isLoading: false,

}


const reduser = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    // "هين خليناها AUTHORIZE مش لوقن او ساين اب عشان نفس العمليةهتم على الحالتين تقريبا عشان هيك هاد مجرد تسمية عشان تشمل لتنين"
    case AUTH_ACTION.AUTHORIZE:

      const token = action.payload.token || state.token;  // هبك لانو بالقت بروفايل مش هيكون فيه توكن يعني نلل
      const role = action.payload.isAdmin ? ROLES.ADMIN : ROLES.USER;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(action.payload.user));

      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: token,
        role: role,
        error: null,
        isLoading: false,
      }
    case AUTH_ACTION.LOGOUT:
      ['user', 'token', 'role'].forEach((item) => (localStorage.removeItem(item)));

      return inintalState

    case AUTH_ACTION.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }

    default:
      return state

  }
};




const useAuth = () => {

  const [state, dispatch] = useReducer(reduser, inintalState);
  const token = state.token || localStorage.getItem('token');
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }

  const login = async (body) => {
    dispatch({ type: AUTH_ACTION.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.LOGIN, body);
      dispatch({ type: AUTH_ACTION.AUTHORIZE, payload: data?.data });
    } catch (error) {
      dispatch({ type: AUTH_ACTION.SET_ERROR, payload: error.message });
    }
  };


  const signup = async (body) => {
    dispatch({ type: AUTH_ACTION.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.SIGNUP, body);
      dispatch({ type: AUTH_ACTION.AUTHORIZE, payload: data?.data });
    } catch (error) {
      dispatch({ type: AUTH_ACTION.SET_ERROR, payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: AUTH_ACTION.LOGOUT })
  }

  const getProfileData = async () => {

    dispatch({ type: AUTH_ACTION.SET_LOADING });
    try {
      const { data } = await axios.get(
        AUTH_API + AUTH_API_PATHS.PROFLE, 
        config
      );
      dispatch({ type: AUTH_ACTION.AUTHORIZE, payload: data?.data })
    } catch (error) {
      dispatch({ type: AUTH_ACTION.SET_ERROR, payload: error.message })
    }
  }


  return {
    ...state,
    login,
    signup,
    logout,
    getProfileData,
  };
};


export default useAuth;  
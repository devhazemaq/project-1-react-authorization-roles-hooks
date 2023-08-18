import { useReducer } from 'react'
import { ROLES } from '../constants';
import { AUTH_ACTION, AUTH_API_PATHS } from '../constants/auth';
import axios from 'axios';
import { AUTH_API } from '../config';




const getisAuth = () => localStorage.getItem("isAuth") || false;
const getRole = () => localStorage.getItem("role") || ROLES.GUEST;
const getUser = () => JSON.parse(localStorage.getItem("user")) || null;
const getToken = () => localStorage.getItem("token") || null;


const inintalState = {
  isAuth: getisAuth(),
  user: getUser(),
  token: getToken(),
  role:  getRole(),
  error: null,
  isLoading: false,
};



const reduser = (state, action) => {
  
  switch (action.type) {
    case AUTH_ACTION.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    // "هين خليناها AUTHORIZE مش لوقن او ساين اب عشان نفس العملية هتم على الحالتين تقريبا عشان هيك هاد مجرد تسمية عشان تشمل لتنين"
    case AUTH_ACTION.AUTHORIZE:

      const token = action?.payload?.token || state?.token || localStorage.getItem("token");  ;  // هبك لانو بالقت بروفايل مش هيكون فيه توكن يعني نلل
      const role = action?.payload?.isAdmin ? ROLES.ADMIN : ROLES.USER ;

      // const _dev_user
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(action?.payload));
      localStorage.setItem("isAuth", true);
      
      console.log(
        JSON.stringify(action?.payload)
      );
      console.log(action?.payload);
      console.log(action?.payload?.name);
      console.log(action?.payload?.user);
      return {
        // ...state,
        isAuth: true,
        user: action?.payload,
        token: token,
        role: role,
        error: null,
        isLoading: false,

      }
    case AUTH_ACTION.LOGOUT:
      ['user', 'token', 'role', 'isAuth'].forEach((item) => (localStorage.removeItem(item)));

      return {
        isAuth: false,
        user: null,
        token: null,
        role: ROLES.GUEST,
        isLoading: false,
        error: null,
      };

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
      // const { data } = await axios.post(`https://react-tt-api.onrender.com/api${AUTH_API_PATHS.LOGIN}`, body);
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.LOGIN, body);
      
      dispatch({ type: AUTH_ACTION.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTION.SET_ERROR, payload: error.message })
      console.log("خطأ من اللوقن");
    }
  };


  const signup = async (body) => {
    dispatch({ type: AUTH_ACTION.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.SIGNUP, body);
      dispatch({ type: AUTH_ACTION.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTION.SET_ERROR, payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: AUTH_ACTION.LOGOUT })
  };

  const getProfileData = async () => {
    const token = localStorage.getItem('token');
    if(!token) return
    
    dispatch({ type: AUTH_ACTION.SET_LOADING });
    try {
      // AUTH_API + AUTH_API_PATHS.PROFLE, 
      const { data } = await axios.get( `https://react-tt-api.onrender.com/api/users/profile`, config);
      dispatch({ type: AUTH_ACTION.AUTHORIZE, payload: data?.data || data })
      return data
    } catch (error) {
      dispatch({ type: AUTH_ACTION.SET_ERROR, payload: error.message })
      console.log("هاد الخطأ من القت بروفايل داتا")
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
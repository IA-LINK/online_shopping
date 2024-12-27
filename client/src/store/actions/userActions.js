import axios from 'axios'; 
import { apiUrl } from '../../config'; // Import API URL from config

export const loginUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(`${apiUrl}/api/users/login`, userData);
        // Dispatch action to update user state in Redux
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        return response;
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
        throw error;
    }
};

// Implement registerUser action similarly

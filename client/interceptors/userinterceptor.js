import axios from "axios";
import cookies from "js-cookie"; 

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3005",
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {

        if (error.response.status === 401) {

            // const response = await axiosInstance("/refresh-token");
            // localStorage.setItem("userToken", response.data.accessToken);            
            // window.location.reload();
            
            // localStorage.clear()
            // window.location.href = "/"
        }
        return Promise.reject(error);
    }
);

// Attach Token
axiosInstance.interceptors.request.use(

    (request) => {
        const token = cookies.get('accessToken');
        console.log(token,"__________InToken");
        
        if (token) {
            console.log("insideToken");
            
            // request.withCredentials = true;
            request.headers.Authorization = token; // Bearer token format
        }
        return request;
    },
    (error) => error
);

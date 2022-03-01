import axios from "axios";
import CookieService from "./CookieService";

const expiresAt = 60 * 24;

function AuthService() {

  async function doUserLogin(credentials) {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", credentials);
      return response.data;
    } catch (error) {
      console.error("Error", error.response);
      return false;
    }
  }

  function handleLoginSuccess(response) {
    if (true) {
      const options = { path: "/" };
      CookieService.set("access_token", response.access_token, options);
      return true;
    }

    let date = new Date();
    date.setTime(date.getTime() + expiresAt * 60 * 1000);
    const options = { path: "/", expires: date };
    CookieService.set("access_token", response.access_token, options);
    return true;
  }
}

export default AuthService;
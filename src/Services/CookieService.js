import Cookie from "universal-cookie";
 
const cookie = new Cookie();

function CookieService() {

 function get(key) {
    return cookie.get(key);
  }

  function set(key, value, options) {
    cookie.set(key, value, options);
  }

  function remove(key) {
    cookie.remove(key);
  }
}

export default CookieService;
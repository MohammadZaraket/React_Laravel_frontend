import Cookie from "universal-cookie";
 


const cookie = new Cookie();

function CookieService() {

 function get(key, string) {
    return cookie.get(key);
  }

  function set(key, string, value, string, options, object) {
    cookie.set(key, value, options);
  }

  function remove(key, string) {
    cookie.remove(key);
  }
}

export default CookieService;
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import SignIn from "../pages/SignIn";


export const ABOUTUS_ROUTE = {
    path:'/AboutUs',
    name:'AboutUs',
    component:AboutUs,
}

export const CONTACTUS_ROUTE = {
    path:'/ContactUs',
    name:'ContactUs',
    component:ContactUs
}


export const SERVICES = {
    path:'/Services',
    name:'Services',
    component:Services
}

export const SIGNIN_ROUTE = {
    path:'/login',
    name:'Login',
    component:SignIn
}

export const NAVBAR_ROUTE = [
    SIGNIN_ROUTE,
    SERVICES,
    ABOUTUS_ROUTE,
    CONTACTUS_ROUTE
]
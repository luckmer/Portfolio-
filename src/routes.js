import {Home,IncorrectPage} from "./Export"


export const routes = [
    { path: "/", Component: Home, name: "home" },
    { path: "*", Component: IncorrectPage, name: "IncorrectPage" },
]
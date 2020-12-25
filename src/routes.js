import {Home,IncorrectPage,ProjectsContextFilter,TotalProjects,Contact} from "./Export"


export const routes = [
    { path: "/", Component: Home, name: "home" },
    { path: "/projects", Component: TotalProjects, name: "TotalProjects" },
    { path: "/Contact", Component: Contact, name: "Contact" },
    { path: "/:_id", Component: ProjectsContextFilter, name: "ProjectsContextFilter" },
    { path: "/*", Component: IncorrectPage, name: "IncorrectPage" },
]
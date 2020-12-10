import {Home,IncorrectPage,ProjectsContextFilter,TotalProjects} from "./Export"


export const routes = [
    { path: "/", Component: Home, name: "home" },
    { path: "/projects", Component: TotalProjects, name: "TotalProjects" },
    { path: "/:_id", Component: ProjectsContextFilter, name: "ProjectsContextFilter" },
    { path: "*", Component: IncorrectPage, name: "IncorrectPage" },
]
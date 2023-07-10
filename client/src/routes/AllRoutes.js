import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";

const routes = [
    { path: "/", component: HomePage, exact: true },
    { path: "/about", component: DashboardPage, exact: true },
    // Add more routes as needed
];

export default routes;

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import RecipeDetails from "@/views/RecipeDetails";
import NotFound from "@/views/NotFound";

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/register",
		name: "register",
		component: Register,
	},
	{
		path: "/recipe/:id",
		name: "recipe",
		component: RecipeDetails,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;


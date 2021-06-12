export const Routes = [
	{
		path: ["/", "home"],
		exact: true,
		component: "App",
	},
	// {
	// 	path: ["/home", "home"],
	// 	component: "Home"
	// },
	{
		path: ["/hook", "hook"],
		component: "App"
	},
	{
		path: ["/lazyhook", "lazyhook"],
		component: "Lazyhook"
	},
	{
		path: ["/lazyhook2", "lazyhook2"],
		component: "Lazyhook2"
	},
	{
		path: ["/lazyhook3", "lazyhook3"],
		component: "Lazyhook3"
	},
	{
		path: ["/todo", "todo"],
		component: "SimpleTodo"
	},
	{
		path: ["/todo2", "todo2"],
		component: "AppTodo"
	},




	{
		path: ["/login", "login"],
		component: "Login"
	},

	// ,
	// {
	// 	path: ["/posts", "posts"],
	// 	component: "Posts"
	// },
	// {
	// 	path: ["/post/:id", "post"],
	// 	component: "Post"
	// },
	{
		path: ["/about", "about"],
		component: "About"
	}
];
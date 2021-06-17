export const Routes = [
	{
		path: ["/", "menu"],
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
		component: "Todo2"
	},
	{
		path: ["/services", "services"],
		component: "Services"
	},
	{
		path: ["/service/:id", "service"],
		component: "Service"
	},
	{
		path: ["/serviceadd/", "serviceadd"],
		component: "ServiceAdd"
	},

	{
		path: ["/products", "products"],
		component: "Products"
	},
	{
		path: ["/product/:id", "product"],
		component: "Product"
	},
	{
		path: ["/productadd/", "productadd"],
		component: "ProductAdd"
	},
	{
		path: ["/uploadimage/", "uploadimage"],
		component: "UploadImageContainer"
	},
	{
		path: ["/menu/", "menu"],
		component: "Menu"
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
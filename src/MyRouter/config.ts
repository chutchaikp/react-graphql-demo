export const Routes = [
	{
		path: ["/", "menu"],
		exact: true,
		component: "ServicesPage", // "ProductTypes",
	},
	// {
	// 	path: ["/home", "home"],
	// 	component: "Home"
	// },
	// {
	// 	path: ["/hook", "hook"],
	// 	component: "App"
	// },
	// {
	// 	path: ["/lazyhook", "lazyhook"],
	// 	component: "Lazyhook"
	// },
	// {
	// 	path: ["/lazyhook2", "lazyhook2"],
	// 	component: "Lazyhook2"
	// },
	// {
	// 	path: ["/lazyhook3", "lazyhook3"],
	// 	component: "Lazyhook3"
	// },
	// {
	// 	path: ["/todo", "todo"],
	// 	component: "SimpleTodo"
	// },
	// {
	// 	path: ["/todo2", "todo2"],
	// 	component: "Todo2"
	// },
	{
		path: ["/services-page", "services"],
		component: "ServicesPage"
	},
	{
		path: ["/service-page/:id", "service"],
		component: "ServicePage"
	},
	{
		path: ["/service-add-page/", "serviceadd"],
		component: "ServiceAddPage"
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
		path: ["/producttypes", "producttypes"],
		component: "ProductTypesPage"
	},
	{
		path: ["/producttypepage/:id", "producttypepage"],
		component: "ProductTypePage"
	},
	{
		path: ["/product-type-add-page", "producttypeadd"],
		component: "ProductTypeAddPage"
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
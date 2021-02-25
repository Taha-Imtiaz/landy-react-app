const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/signin"],
    exact: true,
    component: "SignIn",
  },
  {
    path: ["/signup"],
    exact: true,
    component: "SignUp",
  },
];

export default routes;

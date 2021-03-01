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
  {
    path: ["/addproject"],
    exact: true,
    component: "AddProject",
  },
  {
    path: ["/userprofile"],
    exact: true,
    component: "Profile",
  },
];

export default routes;

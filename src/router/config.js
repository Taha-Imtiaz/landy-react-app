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
    path: ["/add-project"],
    exact: true,
    component: "AddProject",
  },
  {
    path: ["/profile"],
    exact: true,
    component: "Profile",
  },
  {
    path: ["/project-detail/:id"],
    exact: true,
    component: "ProjectDetails",
  },
];

export default routes;

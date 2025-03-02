import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/saas", "routes/saas.tsx"),
  route("/blog", "routes/blog.tsx"),
  route("/resources", "routes/resources.tsx"),
  route("/projects", "routes/projects.tsx"),
] satisfies RouteConfig;

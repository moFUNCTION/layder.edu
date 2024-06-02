import React from "react";
import { AuthRoutes } from "./AuthRoutes";
import { Route } from "react-router-dom";
import { HomeRoutes } from "./HomeRoutes";
import { ProfileRoutes } from "./ProfileRoutes";

const AppRoutes = [AuthRoutes, HomeRoutes, ProfileRoutes];
const renderRoutes = (routes) => {
  return routes.flat(1).map((route, index) => (
    <React.Fragment key={index}>
      {route.index && (
        <Route key={`${route.path[0]}/index`} element={route.element} index />
      )}
      {Array.isArray(route.path)
        ? route.path.map((path, index) => (
            <Route
              path={path}
              key={`${path}/${index}`}
              element={route.element}
            />
          ))
        : route.path && <Route element={route.element} path={route.path} />}
      {route.nested && renderRoutes(route.nested)}
    </React.Fragment>
  ));
};
export const AppRouter = renderRoutes(AppRoutes);

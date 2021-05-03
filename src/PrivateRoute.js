import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./Contexts/AuthProvider";

export function PrivateRoute({ path, ...props }) {
  const { user } = useAuth();
  console.log(" In PrivateRout");
  return (
    <>
      {user.user ? (
        <Route {...props} path={path} />
      ) : (
        <Navigate state={{ from: path }} replace to="/" />
      )}
    </>
  );
}

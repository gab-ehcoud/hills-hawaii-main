import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const AuthGuard = ({ children, requiredRole }) => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userInfo.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthGuard;

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
  requiredRole: PropTypes.string,
};

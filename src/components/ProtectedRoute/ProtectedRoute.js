import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => {
  return loggedIn ? children : <Navigate to='/' />;
};

export default ProtectedRoute;

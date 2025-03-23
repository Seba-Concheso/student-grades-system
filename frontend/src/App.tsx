import AppRouter from "./AppRouter";
import Layout from "./layouts/Layout";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";

  return isLoginRoute ? (
    <AppRouter />
  ) : (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;

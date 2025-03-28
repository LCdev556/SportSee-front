//import "./style/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import AppRoutes from "./routes/Routes";


function App() {
  return (
    <Router>
      <Layout>
        {<AppRoutes />}
      </Layout>
    </Router>
  )
}

export default App

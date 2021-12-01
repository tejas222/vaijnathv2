import "./App.css";
import Admin from "./components/admin/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./components/store";
import Nav1 from "./components/admin/Navbars/Nav1";
function App() {
  return (
    <>
      <Provider store={store}>
        <Nav1 />
        <Admin />
      </Provider>
    </>
  );
}

export default App;

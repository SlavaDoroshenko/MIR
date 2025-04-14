import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoutes } from "../const";
import Client from "../pages/client";
import Master from "../pages/master";
import { StoreContext } from "../store-context";
import RootStore from "../stores/root-store";

function App() {
  return (
    <StoreContext.Provider value={new RootStore()}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Client} element={<Client />} />
          <Route path={AppRoutes.Master} element={<Master />} />
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;

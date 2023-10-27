import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Features/Cart/CartOverview";
import Header from "./Header";
import Loading from "./Loading";
// import Menu from "../Features/Menu/Menu";

function AppLayout() {
  const navigation = useNavigation();
  const isloading = navigation.state === "loading";

  return (
    <div className="layout">
      {isloading && <Loading />}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

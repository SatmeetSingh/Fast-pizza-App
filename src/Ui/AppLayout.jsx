import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Features/Cart/CartOverview";
import Header from "./Header";
import Loading from "./Loading";
// import Menu from "../Features/Menu/Menu";

function AppLayout() {
  const navigation = useNavigation();
  const isloading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isloading && <Loading />}

      <Header />
      <div className="overflow-scroll ">
        <main className="  mx-auto ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

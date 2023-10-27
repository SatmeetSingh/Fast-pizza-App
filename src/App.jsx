import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Ui/Home";
import Menu, { loader as menuloader } from "./Features/Menu/Menu";
import Cart from "./Features/Cart/Cart";
import CreateOrder, {
  action as createorderAction,
} from "./Features/Order/CreateOrder";
import Order, { loader as orderloader } from "./Features/Order/Order";
import AppLayout from "./Ui/AppLayout";
import Error from "./Ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuloader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createorderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderloader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

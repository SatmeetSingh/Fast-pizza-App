import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gettotalCartPrice, gettotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../Utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(gettotalCartQuantity);
  const totalCartprice = useSelector(gettotalCartPrice);
  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 uppercase text-stone-200 px-4 py-4 sm:px-6 text-sm md:text-base ">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartprice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

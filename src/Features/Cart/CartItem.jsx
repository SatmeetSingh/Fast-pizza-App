import PropTypes from "prop-types";
import { formatCurrency } from "../../Utils/helpers";
import DeleteButton from "./DeleteButton";
import Updateitems from "./Updateitems";
import { getCurrentQuantitybyid } from "./cartSlice";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantitybyid(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Updateitems pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

CartItem.prototype = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    pizzaId: PropTypes.number.isRequired,
  }),
};

export default CartItem;

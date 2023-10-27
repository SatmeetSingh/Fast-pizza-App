import { formatCurrency } from "../../Utils/helpers";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

CartItem.prototype = { item: PropTypes.shape().isRequired };

export default CartItem;

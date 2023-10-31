/* eslint-disable react/prop-types */
import { formatCurrency } from "../../Utils/helpers";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function OrderItem({ item, isLoadingingredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold ">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-slate-500 space-y-1 ">
        {isLoadingingredients ? "Loading..." : ingredients.join(",")}
      </p>
    </li>
  );
}
OrderItem.propTypes = {
  // isLoadingIngredients: PropTypes.bool,
  // ingredients: PropTypes.number,
  ingredients: PropTypes.array.isRequired,
  item: PropTypes.shape({
    quantity: PropTypes.number,
    name: PropTypes.string,
    totalPrice: PropTypes.number,
  }),
};

export default OrderItem;

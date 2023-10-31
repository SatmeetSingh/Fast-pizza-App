import Button from "../../Ui/Button";
import { formatCurrency } from "../../Utils/helpers";
import PropTypes from "prop-types";
import { addItem, getCurrentQuantitybyid } from "../Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "../Cart/DeleteButton";
import Updateitems from "../Cart/Updateitems";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantitybyid(id));

  function handleAdd() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}
          {currentQuantity > 0 && (
            <div className="flex items-center gap-3 sm:gap-8">
              <Updateitems pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteButton pizzaId={id} />
            </div>
          )}
          {!soldOut && currentQuantity === 0 && (
            <Button type="small" onClick={handleAdd}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    ingredients: PropTypes.string,
    soldOut: PropTypes.string,
    imageUrl: PropTypes.imageUrl,
  }).isRequired,
};

export default MenuItem;

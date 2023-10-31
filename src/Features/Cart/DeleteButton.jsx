import { useDispatch } from "react-redux";
import Button from "../../Ui/Button";
import { deleteItem } from "./cartSlice";
import Proptype from "prop-types";

// eslint-disable-next-line react/prop-types
function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

DeleteButton.proptype = {
  pizzaId: Proptype.number,
};

export default DeleteButton;

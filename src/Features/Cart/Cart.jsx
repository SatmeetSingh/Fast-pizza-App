import { useDispatch, useSelector } from "react-redux";
import Button from "../../Ui/Button";
import LinkButton from "../../Ui/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart, getUsername } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="my-7 font-semibold text-xl">Your cart, {username}</h2>
      <ul className="divide-y divide-stone-300 border-b mt-3 border-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;

import { PropTypes } from "prop-types";
import { Link } from "react-router-dom/dist";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 uppercase font-semibold tracking-wide text-stone-800 inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4 ",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "border-2 text-sm border-stone-300 uppercase font-semibold tracking-wide text-stone-400 inline-block rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-6 md:py-3.5",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // node can be any valid React node
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.string,
};

export default Button;

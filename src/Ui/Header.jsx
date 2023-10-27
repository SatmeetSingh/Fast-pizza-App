import { Link } from "react-router-dom";
import SearchOrder from "../Features/Order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <h1>Nishant</h1>
    </div>
  );
}

export default Header;

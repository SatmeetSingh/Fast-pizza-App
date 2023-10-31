import { Link } from "react-router-dom";
import SearchOrder from "../Features/Order/SearchOrder";
import Username from "../Features/User/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-7 border-stone-200 bg-yellow-400 uppercase px-4 py-3 sm:px-6 font-sans">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;

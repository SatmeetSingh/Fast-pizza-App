import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="text-xl text-yellow-500 font-semibold text-center">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      <Link to="/menu">&larr; Back to menu</Link>
    </div>
  );
}

export default Home;

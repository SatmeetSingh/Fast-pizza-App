import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../Services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <h1 className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </h1>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

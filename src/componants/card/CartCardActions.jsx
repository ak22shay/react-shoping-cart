import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
import DeleteIcon from "@mui/icons-material/Delete";
export function CartCardActions(props) {
  const { cartItems, addToCart, removeFromCart, deleteFromcart } =
    useContext(ShopContext);
  return (
    <div>
      <button
        style={{ margin: "10px" }}
        onClick={() => removeFromCart(props.id)}
      >
        -
      </button>
      <span>{cartItems[props.id]}</span>
      <button style={{ margin: "10px" }} onClick={() => addToCart(props.id)}>
        +
      </button>

      <DeleteIcon fontSize="small" onClick={() => deleteFromcart(props.id)} />
    </div>
  );
}

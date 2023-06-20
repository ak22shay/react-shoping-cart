import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
import { Button, Badge } from "@mui/material";

export function HomeCardActions(props) {
  const { cartItems, addToCart } = useContext(ShopContext);
  return (
    <div>
      <Button variant="contained" size="small">
        Buy
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={() => addToCart(props.id)}
      >
        Add to cart
      </Button>
      <span style={{ marginLeft: "20px" }}>
        {cartItems[props.id] > 0 && (
          <Badge
            color="secondary"
            badgeContent={cartItems[props.id]}
            variant="standard"
          ></Badge>
        )}
      </span>
    </div>
  );
}

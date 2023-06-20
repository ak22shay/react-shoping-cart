import { Container, Typography, Grid, Button } from "@mui/material";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
import useStyles from "../../styles/styles.js";
import { PRODUCTS } from "../../products.js";
import Product from "../home/Product.jsx";
import { useNavigate } from "react-router-dom";

function Cart() {
  const classes = useStyles();
  const { cartItems, addToCart, totalCartItems, totalCartPrice, restAll } =
    useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <Container className={classes.container}>
      <div style={{ marginTop: "50px" }}>
        <Typography variant="h2">Cart</Typography>
      </div>
      <div>
        <Grid
          container
          spacing={10}
          justifyContent="center"
          className={classes.cardGrid}
        >
          {Object.keys(cartItems).map((productId) => {
            const pid = parseInt(productId);
            const product = PRODUCTS.find((prod) => prod.id === pid);
            return <Product data={product} view="cart" />;
          })}
        </Grid>
      </div>
      {totalCartItems > 0 && (
        <div>
          <Typography variant="h4">
            Total Cart Price : ${totalCartPrice}
          </Typography>
        </div>
      )}

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <Button
          color="primary"
          size="large"
          variant="contained"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </Button>
        <Button
          color="primary"
          size="large"
          variant="contained"
          onClick={() => {
            navigate("/checkout");
            restAll();
          }}
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
}

export default Cart;

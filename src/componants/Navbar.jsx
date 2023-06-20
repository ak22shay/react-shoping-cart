import { Button, AppBar, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "../styles/styles.js";
import { ShopContext } from "../context/ShopContext.jsx";
import { useContext } from "react";

function Navbar() {
  const navigate = useNavigate();
  const classes = useStyles();
  const { cartItems, totalCartItems } = useContext(ShopContext);
  return (
    <AppBar className={classes.appBar}>
      <div className={classes.appBarContainer}>
        <div className={classes.appBarLeftContent}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </div>
        <div className={classes.appBarRightContent}>
          <Typography variant="caption">
            <Link to="/cart">
              <Badge
                color="warning"
                badgeContent={totalCartItems}
                variant="standard"
              >
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            </Link>
          </Typography>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;

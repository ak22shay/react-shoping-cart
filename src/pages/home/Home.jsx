import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  makeStyles,
} from "@mui/material";

import { PRODUCTS } from "../../products.js";
import Product from "./Product.jsx";
import useStyles from "../../styles/styles.js";
import { useContext } from "react";

function Home() {
  const classes = useStyles();
  return (
    <main>
      <div style={{ marginTop: "50px" }}>
        <Typography variant="h2">Happy Shopping</Typography>
      </div>
      <div>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          className={classes.cardGrid}
        >
          {PRODUCTS.map((product) => (
            <Product data={product} view="home" />
          ))}
        </Grid>
      </div>
    </main>
  );
}

export default Home;

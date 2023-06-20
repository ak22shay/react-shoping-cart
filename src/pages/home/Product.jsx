import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  makeStyles,
  Badge,
} from "@mui/material";
import useStyles from "../../styles/styles.js";
import { HomeCardActions } from "../../componants/card/HomeCardActions.jsx";
import { CartCardActions } from "../../componants/card/CartCardActions.jsx";

function Product(props) {
  const classes = useStyles();
  const { id, productName, price, productImage } = props?.data;
  const view = props.view;
  return (
    <Grid item sm={3}>
      <Card className={classes.card}>
        <CardMedia
          image={productImage}
          title={productName}
          className={classes.cardMedia}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle1" component="div">
            <b>{productName}</b>
          </Typography>
          <Typography variant="subtitle2">${price}</Typography>
        </CardContent>
        <CardActions>
          {view === "home" ? (
            <HomeCardActions id={id} />
          ) : (
            <CartCardActions id={id} />
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Product;

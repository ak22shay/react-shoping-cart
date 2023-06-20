import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#e9e8eb",
    marginTop: "80px",
    padding: "20px 20px",
  },
  cardGrid: {
    padding: "30px 30px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    padding: "50%",
  },
  cardContent: {
    flexGrow: 1,
  },
  appBar: {
    paddingTop: "10px",
    paddingBottom: "10px",
    justifyContent: "space-between",
    position: "fixed",
  },
  appBarContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBarRightContent: {
    marginRight: "20px",
  },
  appBarLeftContent: {
    marginLeft: "20px",
  },
}));

export default useStyles;

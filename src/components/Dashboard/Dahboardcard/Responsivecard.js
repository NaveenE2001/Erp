import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Graph from "./Graph.js";
import "./card.css";
import { useNavigate } from "react-router-dom";

export default function Responsivecard(props) {
  const { btnshine, Products, prod } = props;
  const navigate = useNavigate();

  const handleProductClick = () => {
    if (Products === "Products") {
      navigate("/product");
    } else {
      navigate("/order");
    }
  };

  return (
    <Card>
      <>
        <CardMedia height="140">
          <h3
            className={btnshine === "btn-shine1" ? "btn-shine1" : "btn-shine2"}
          >
            {Products === "Products" ? "Products" : "Orders"}
          </h3>
          <Graph prod />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total {Products === "Products" ? "Products" : "Orders"}:{" "}
          </Typography>
          <Typography>{prod === 8500 ? 8500 : 500}</Typography>
          <Typography variant="body2" color="text.secondary">
            To view the Product details click below Product button for more
            details
          </Typography>
        </CardContent>
      </>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={handleProductClick}>
          View {Products === "Products" ? "Products" : "Orders"}
        </Button>
      </CardActions>
    </Card>
  );
}

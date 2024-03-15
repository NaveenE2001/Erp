import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import CardProd from "./CardProd.js";
import "./producr.css";
import { useNavigate } from "react-router-dom";

function ResponsiveProduct() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/");
  };
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 3,
          marginRight: 5,
        }}
      >
        <Button variant="contained" onClick={handleclick}>
          Home
        </Button>
      </div>{" "}
      <h1 className="btn-shine">Product List:</h1>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ backgroundColor: "#FFF3C7", marginTop: 3, marginLeft: 3 }}
        >
          <h2 className="card-entnt">Electonics</h2>
          <Stack direction={"row"}>
            {" "}
            <CardProd /> <CardProd /> <CardProd />
            <CardProd />
            <CardProd />
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ backgroundColor: "#FFF3C7", marginTop: 7, marginLeft: 3 }}
        >
          <h2 className="card-entnt">Mobiles</h2>
          <Stack direction={"row"}>
            {" "}
            <CardProd /> <CardProd /> <CardProd />
            <CardProd />
            <CardProd />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResponsiveProduct;

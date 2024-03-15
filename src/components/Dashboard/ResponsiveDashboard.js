import { Grid, Divider } from "@mui/material";
import React from "react";
import Responsivecard from "./Dahboardcard/Responsivecard.js";

export default function ResponsiveDashboard() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Responsivecard
            btnshine={"btn-shine1"}
            Products={"Products"}
            prod={8500}
          />
        </Grid>
        <Divider />
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Responsivecard
            btnshine={"btn-shine2"}
            Products={"Orders"}
            prod={500}
          />
        </Grid>
      </Grid>
    </>
  );
}

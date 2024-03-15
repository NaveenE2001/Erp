import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function CardProd() {
  return (
    <Card sx={{ maxWidth: 300, m: 1 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image="logo.jpeg"
        style={{
          borderRadius: "22%",
          width: "50%",
          marginLeft: "23%",
          boxShadow: "inherit",
        }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Laptop
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Tooltip title="Add" arrow>
          <AddBoxIcon
            sx={{ "&:hover": { color: "green", cursor: "pointer" }, mr: 1 }}
          />
        </Tooltip>
        <Tooltip title="Run with Errors" arrow>
          <RunningWithErrorsIcon
            sx={{ "&:hover": { color: "red", cursor: "pointer" } , mr: 1}}
          />
        </Tooltip>
        <Tooltip title="Edit" arrow>
          <BorderColorIcon
            sx={{ "&:hover": { color: "blue", cursor: "pointer" } , mr: 1}}
          />
        </Tooltip>
        <Tooltip title="Delete" arrow>
          <DeleteForeverSharpIcon
            sx={{ "&:hover": { color: "purple", cursor: "pointer" } }}
          />
        </Tooltip> */}
        <Button size="small" variant="contained">
          Add
        </Button>{" "}
        <Button size="small" variant="contained">
          Edit
        </Button>{" "}
        <Button size="small" variant="contained">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

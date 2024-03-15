import { Grid, Button } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "A C",
    uv: 4000,
    Total: 2400,
    amt: 2400,
  },
  {
    name: "clothing",
    uv: 3000,
    Total: 1398,
    amt: 2210,
  },
  {
    name: "shooes",
    uv: 2000,
    Total: 9800,
    amt: 2290,
  },
  {
    name: "Bicycals",
    uv: 2780,
    Total: 3908,
    amt: 2000,
  },
  {
    name: "Fans",
    uv: 1890,
    Total: 4800,
    amt: 2181,
  },
  {
    name: "T V",
    uv: 2390,
    Total: 3800,
    amt: 2,
  },
  {
    name: "Phones",
    uv: 3490,
    Total: 4300,
    amt: 2100,
  },
  {
    name: "Table",
    uv: 3490,
    Total: 4300,
    amt: 2100,
  },
];

export default function Graph(props) {
  const { prod } = props;
  console.log(prod);
  return (
    <div style={{ width: "100%" }}>
      <Grid
        container
        sx={{ paddingRight: "30px", paddingBottom: "20px", direction: "rtl" }}
      >
        <Button variant="contained" style={{ margin: "10px" }}>
          Daily
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#f3f3f3",
            color: "#4a4a4a",
            margin: "10px",
          }}
        >
          Weekly
        </Button>
        <Button
          variant="contained"
          sx={{ background: "#f3f3f3", color: "#4a4a4a", margin: "10px" }}
        >
          Monthly
        </Button>
      </Grid>

      <Grid xs={12} sm={12} md={9}>
        <div style={{ width: "100%", height: "100%" }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 0,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label value="" offset={0} position="insideBottom" />
              </XAxis>
              <YAxis />
              <Tooltip />
              <Bar dataKey="Total" fill="#189dd4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Grid>
    </div>
  );
}

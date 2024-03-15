import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import "./order.css";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "id", label: "ID", minWidth: 50 ,align: "center"},
  { id: "country", label: "NAME", minWidth: 130, align: "center" },
  { id: "name", label: "COUNTRY", minWidth: 130, align: "center" },
  { id: "code", label: "ISO\u00a0Code", minWidth: 70, align: "center" },
  {
    id: "population",
    label: "ORDER ITEM",
    minWidth: 150,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "EMAIL",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "MODIFICATION",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(id, country, name, code, population, size) {
  const density = population / size;
  return { id, country, name, code, population, size, density };
}

const rows = [
  createData(
    1,
    "Naveen E ",
    "India",
    "IN",
    "Tele vission",
    "naveenreddye123@gmail.com"
  ),
  createData(
    2,
    "Joy  E ",
    "China",
    "CN",
    "Tele vission",
    "Naveen9596961@gmail.com"
  ),
  createData(
    3,
    "Naveen E ",
    "Italy",
    "IT",
    "Tele vission",
    "Naveen301340@gmail.com"
  ),
  createData(
    4,
    "Naveen E ",
    "United States",
    "US",
    "Tele vission",
    "Naveen9833520@gmail.com"
  ),
  createData(
    5,
    "Naveen E ",
    "Canada",
    "CA",
    "Tele vission",
    "Naveen9984670@gmail.com"
  ),
  createData(
    6,
    "Naveen E ",
    "Australia",
    "AU",
    "Tele vission",
    "Naveen7692024@gmail.com"
  ),
  createData(
    7,
    "Naveen E ",
    "Germany",
    "DE",
    "Tele vission",
    "Naveen357578@gmail.com"
  ),
  createData(
    8,
    "Naveen E",
    "Ireland",
    "IE",
    "Tele vission",
    "Naveen70273@gmail.com"
  ),
  createData(
    9,
    "Naveen E ",
    "Mexico",
    "MX",
    "Tele vission",
    "Naveen1972550@gmail.com"
  ),
  createData(
    10,
    "Naveen E ",
    "Japan",
    "JP",
    "Tele vission",
    "Naveen377973@gmail.com"
  ),
  createData(
    11,
    "Naveen E ",
    "France",
    "FR",
    "Tele vission",
    "Naveen640679@gmail.com"
  ),
  createData(
    12,
    "Naveen E ",
    "United Kingdom",
    "GB",
    "Tele vission",
    "Naveen242495@gmail.com"
  ),
  createData(
    13,
    "Naveen E ",
    "Russia",
    "RU",
    "Tele vission",
    "Naveen17098246@gmail.com"
  ),
  createData(
    14,
    "Naveen E ",
    "Nigeria",
    "NG",
    "Tele vission",
    "Nav923768@gmail.com"
  ),
  createData(15, "Naveen E ", "Brazil", "BR", 210147125, 8515767),
];

export default function ResponsiveOrder() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 8,
          marginRight: 5,
          marginBottom: 15,
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          Home
        </Button>
      </div>{" "}
      <h2 className="btn-shine">Order View:</h2>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 480 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "density" ? (
                              <div>
                                <Tooltip title="Add" arrow>
                                  <AddBoxIcon
                                    sx={{
                                      color: "green",
                                      "&:hover": {
                                        color: "#4CCD99",
                                        cursor: "pointer",
                                      },
                                      mr: 3,
                                    }}
                                  />
                                </Tooltip>

                                <Tooltip title="Edit" arrow>
                                  <BorderColorIcon
                                    sx={{
                                      color: "blue",
                                      "&:hover": {
                                        color: "orange",
                                        cursor: "pointer",
                                      },
                                      mr: 2,
                                    }}
                                  />
                                </Tooltip>
                                <Tooltip title="Delete" arrow>
                                  <DeleteForeverSharpIcon
                                    sx={{
                                      color: "#820300",
                                      "&:hover": {
                                        color: "red",
                                        cursor: "pointer",
                                      },
                                    }}
                                  />
                                </Tooltip>
                              </div>
                            ) : column.format && typeof value === "number" ? (
                              column.format(value)
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

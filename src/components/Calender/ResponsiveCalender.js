import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import "../Product/producr.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const initialValue = dayjs("2024-02-17");

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Badge
        key={day.toString()}
        overlap="circular"
        badgeContent={isSelected ? "🌚" : undefined}
        onClick={handleClick}
      >
        <PickersDay {...other} day={day} />
      </Badge>
      {isSelected ? (
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Picked Day</DialogTitle>
          <DialogContent>
            <Typography variant="h6">Selected Day Orders:</Typography>
            <table style={{ border: 1, width: "100%" }}>
              <tbody style={{ padding: 5 }}>
                <tr>
                  <td>ID :</td>
                  <td>1</td>
                  <td>Email:</td>
                  <td>Snow@gmail.com</td>
                  <td>Full  Name:</td>
                  <td>Jon</td>
                  <td>product:</td>
                  <td>Shooes</td>
                </tr>
                <tr>
                  <td>ID :</td>
                  <td>2</td>
                  <td>Email:</td>
                  <td>Lannister@gmail.com</td>
                  <td>Full  Name:</td>
                  <td>Cersei</td>
                  <td>product:</td>
                  <td>Bag</td>
                </tr>
                <tr>
                  <td>ID :</td>
                  <td>3</td>
                  <td>Email:</td>
                  <td>Lannister@gmail.com</td>
                  <td>Full  Name:</td>
                  <td>Jaime</td>
                  <td>product:</td>
                  <td>Chairs</td>
                </tr>
                <tr>
                  <td>ID :</td>
                  <td>4</td>
                  <td>Email:</td>
                  <td>Stark@gmail.com</td>
                  <td>Full  Name:</td>
                  <td>Arya</td>
                  <td>product:</td>
                  <td>Camara</td>
                </tr>
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} variant="contained">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        ""
      )}
    </>
  );
}

export default function ResponsiveCalender() {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
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
          marginTop: 3,
          marginRight: 5,
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          Home
        </Button>
      </div>{" "}
      <Grid container>
        <Grid item xs={12} sm={10} md={6}>
          {" "}
          <div style={{ width: "100%", height: "100%", margin: 10 }}>
            <h2 className="btn-shine">Calender View:</h2>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                defaultValue={initialValue}
                loading={isLoading}
                onMonthChange={handleMonthChange}
                renderLoading={() => <DayCalendarSkeleton />}
                slots={{
                  day: ServerDay,
                }}
                slotProps={{
                  day: {
                    highlightedDays,
                  },
                }}
                CalendarProps={{
                  style: { width: 800, height: 800 }, // Adjust width and height as needed
                }}
              />
            </LocalizationProvider>
          </div>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <Typography
            variant="h5"
            sx={{ marginBottom: "2vh", textDecoration: "underline" }}
          >
            Upcoming Orders:
          </Typography>
          <Box>
            {" "}
            <marquee behavior="alternate" direction="">
              <ul style={{ listStyleType: "square", margin: 1 }}>
                <li>
                  id: 1, Full Name: "Jon Snow", product: "Shooes",email:
                  "JonSnow@gmail.com"
                </li>
                <li>
                  id: 2, Full Name: "Cersei Lannister", product: "Bag",email:
                  "CerseiLannister@gmail.com"
                </li>{" "}
                <li>
                  id: 3, Full Name: "Jaime Lannister", product: "Chairs",email:
                  "JaimeLannister@gmail.com"
                </li>{" "}
                <li>
                  {" "}
                  id: 4, Full Name: "Arya Stark", product: "Camara",email:
                  "AryaStark@gmail.com"
                </li>{" "}
              </ul>
            </marquee>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

// import * as React from "react";
// import dayjs from "dayjs";
// import Badge from "@mui/material/Badge";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { PickersDay } from "@mui/x-date-pickers/PickersDay";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
// import "../Product/producr.css";
// import { Box, Divider, Grid, Typography } from "@mui/material";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function getRandomNumber(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

// /**
//  * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
//  * ⚠️ No IE11 support
//  */
// function fakeFetch(date, { signal }) {
//   return new Promise((resolve, reject) => {
//     const timeout = setTimeout(() => {
//       const daysInMonth = date.daysInMonth();
//       const daysToHighlight = [1, 2, 3].map(() =>
//         getRandomNumber(1, daysInMonth)
//       );

//       resolve({ daysToHighlight });
//     }, 500);

//     signal.onabort = () => {
//       clearTimeout(timeout);
//       reject(new DOMException("aborted", "AbortError"));
//     };
//   });
// }

// const initialValue = dayjs("2024-02-17");

// function ServerDay(props) {
//   const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

//   const isSelected =
//     !props.outsideCurrentMonth &&
//     highlightedDays.indexOf(props.day.date()) >= 0;

//   const [openDialog, setOpenDialog] = React.useState(false);

//   const handleClick = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <>
//       <Badge
//         key={day.toString()}
//         overlap="circular"
//         badgeContent={isSelected ? "🌚" : undefined}
//         onClick={handleClick}
//       >
//         <PickersDay {...other} day={day} />
//       </Badge>
//       {isSelected ? (
//         <Dialog open={openDialog} onClose={handleCloseDialog}>
//           <DialogTitle>Picked Day</DialogTitle>
//           <DialogContent>
//             <p>The selected day is: {day.$d.toDateString()}</p>
//             <Typography>
//               id: 1, lastName: "Snow", firstName: "Jon", product: "Shooes"
//             </Typography>
//             <Typography>
//               id: 2, lastName: "Lannister", firstName: "Cersei", product: "Bag"
//             </Typography>
//             <Typography>
//               id: 3, lastName: "Lannister", firstName: "Jaime", product:
//               "Chairs"
//             </Typography>
//             <Typography>
//               {" "}
//               id: 4, lastName: "Stark", firstName: "Arya", aproduct: "Camara"
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog} variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }

// export default function ResponsiveCalender() {
//   const requestAbortController = React.useRef(null);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

//   const fetchHighlightedDays = (date) => {
//     const controller = new AbortController();
//     fakeFetch(date, {
//       signal: controller.signal,
//     })
//       .then(({ daysToHighlight }) => {
//         setHighlightedDays(daysToHighlight);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         // ignore the error if it's caused by `controller.abort`
//         if (error.name !== "AbortError") {
//           throw error;
//         }
//       });

//     requestAbortController.current = controller;
//   };

//   React.useEffect(() => {
//     fetchHighlightedDays(initialValue);
//     // abort request on unmount
//     return () => requestAbortController.current?.abort();
//   }, []);

//   const handleMonthChange = (date) => {
//     if (requestAbortController.current) {
//       // make sure that you are aborting useless requests
//       // because it is possible to switch between months pretty quickly
//       requestAbortController.current.abort();
//     }

//     setIsLoading(true);
//     setHighlightedDays([]);
//     fetchHighlightedDays(date);
//   };

//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/");
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "flex-end",
//           marginTop: 3,
//           marginRight: 5,
//         }}
//       >
//         <Button variant="contained" onClick={handleClick}>
//           Home
//         </Button>
//       </div>{" "}
//       <Grid container>
//         <Grid item xs={12} sm={10} md={6}>
//           {" "}
//           <div style={{ width: "100%", height: "100%", margin: 10 }}>
//             <h2 className="btn-shine">Calender View:</h2>

//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DateCalendar
//                 defaultValue={initialValue}
//                 loading={isLoading}
//                 onMonthChange={handleMonthChange}
//                 renderLoading={() => <DayCalendarSkeleton />}
//                 slots={{
//                   day: ServerDay,
//                 }}
//                 slotProps={{
//                   day: {
//                     highlightedDays,
//                   },
//                 }}
//                 CalendarProps={{
//                   style: { width: 800, height: 800 }, // Adjust width and height as needed
//                 }}
//               />
//             </LocalizationProvider>
//           </div>
//         </Grid>
//         <Divider />
//         <Grid item xs={12} sm={10} md={6}>
//           <Typography
//             variant="h5"
//             sx={{ marginBottom: "2vh", textDecoration: "underline" }}
//           >
//             Upcoming Orders:
//           </Typography>
//           <Box>
//             {" "}
//             <marquee behavior="alternate" direction="">
//               <ul style={{ listStyleType: "square", margin: 1 }}>
//                 <li>
//                   id: 1, Full  Name: "Jon Snow", product: "Shooes",email:
//                   "JonSnow@gmail.com"
//                 </li>
//                 <li>
//                   id: 2, Full Name: "Cersei Lannister", product: "Bag",email:
//                   "CerseiLannister@gmail.com"
//                 </li>{" "}
//                 <li>
//                   id: 3, Full Name: "Jaime Lannister", product: "Chairs",email:
//                   "JaimeLannister@gmail.com"
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   id: 4, Full Name: "Arya Stark", product: "Camara",email:
//                   "AryaStark@gmail.com"
//                 </li>{" "}
//               </ul>
//             </marquee>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

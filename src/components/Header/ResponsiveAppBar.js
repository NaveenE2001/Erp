import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/calender");
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar src="logo.jpeg" alt="logo" sx={{ marginRight: 1 }} />
          <Typography
            variant="h6"
            noWrap
            className="headingtext"
            href="#app-bar-with-responsive-menu"
            sx={{}}
          >
            EnterPrise Resource Planning
          </Typography>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Button
              variant="text"
              size="small"
              maxWidth={5}
              onClick={handleclick}
              sx={{
                color: "white",
                mx: 4,
                backgroundColor: "#B4B4B8",
                p: 1,
              }}
            >
              Calender View
            </Button>
            <Avatar
              alt="User"
              src="/static/images/avatar/2.jpg"
              onClick={handleOpenUserMenu}
              sx={{ cursor: "pointer" }}
            />{" "}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

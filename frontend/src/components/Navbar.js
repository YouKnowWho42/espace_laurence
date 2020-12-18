import React from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  list,
  Typography,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  Button,
  Grid,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import createSpacing from "@material-ui/core/styles/createSpacing";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("sm")]: { flexGrow: 1 },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="nav" className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="h6"
            className={classes.title}
            align="center"
          >
            Espace Laurence
          </Typography>
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                style={{ color: "white" }}
                aria-lavel="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Ecriture</MenuItem>
                <MenuItem onClick={handleClose}>Photo</MenuItem>
                <MenuItem onClick={handleClose}>Enseignement</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Menu>
            </div>
          ) : (
            <div className={classes.headerOptions}>
              <Button>
                <Typography
                  style={{ color: "white" }}
                  variant="h7"
                  component="h7"
                  color="primary"
                >
                  Home
                </Typography>
              </Button>
              <Button>
                <Typography
                  style={{ color: "white" }}
                  variant="h7"
                  component="h7"
                  color="primary"
                >
                  Ecriture
                </Typography>
              </Button>
              <Button>
                <Typography
                  style={{ color: "white" }}
                  variant="h7"
                  component="h7"
                  color="primary"
                >
                  Photo
                </Typography>
              </Button>
              <Button>
                <Typography
                  style={{ color: "white" }}
                  variant="h7"
                  component="h7"
                  color="primary"
                >
                  Enseignement
                </Typography>
              </Button>
              <Button>
                <Typography
                  style={{ color: "white" }}
                  variant="h7"
                  component="h7"
                  color="primary"
                >
                  About
                </Typography>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

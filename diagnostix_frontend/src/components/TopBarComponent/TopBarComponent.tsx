import { FormGroup, FormControlLabel, AppBar, Toolbar, IconButton, MenuItem, makeStyles, Typography, Menu } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { FC } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { useUserContext } from "../../context/UserContext";

const TopBarComponent: FC = () => {
  const open = false;
  const classes = useStyles();
  const user = useUserContext();
  return (
    <div className={classes.root}>
      <AppBar position={"relative"}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Diagnostix
          </Typography>
          {user.isLoggedIn() && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className={classes.title}
                onClick={() => user.logout()}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
}));


export default TopBarComponent;
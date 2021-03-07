import { FormGroup, FormControlLabel, AppBar, Toolbar, IconButton, MenuItem, makeStyles, Typography, Menu, CardContent, Card, CardActions, Button, Fab } from "@material-ui/core";
import { AccountCircle, AddCircleOutlined } from "@material-ui/icons";
import React, { FC } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';

import { useUserContext } from "../../context/UserContext";
import { useCardContext } from "../../context/CardContext";

export interface ICardComponent {
  title: string;
  desc: string;
  none: boolean;
  openCreateModal: Function;
}
const CardComponent: FC<ICardComponent> = ({ none, title, desc, openCreateModal}: ICardComponent) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const card = useCardContext();
  const { user } = useUserContext();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        {none ? <Fab color="primary" aria-label="add" onClick={() => openCreateModal()}
           >
            <AddIcon />
          </Fab>  : <>
          <Typography className={classes.desc} color="textSecondary" gutterBottom>
            {desc}
          </Typography>
        </>}
      </CardContent>
      {none ? <></> : <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>}

    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  },
  desc: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    height: 65
  }
});

export default CardComponent;
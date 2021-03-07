import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, makeStyles, TextField, Theme, useRadioGroup } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import CardComponent from "../../components/CardComponent";
import TopBarComponent from "../../components/TopBarComponent";
import { useCardContext } from "../../context/CardContext";
import { useUserContext } from "../../context/UserContext";


const CardDashboardScreen: FC = () => {
  const { user } = useUserContext();
  const card = useCardContext();
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const classes = useStyles();
  useEffect(() => {
    if (!user) return;
    card.updateCards(user.email);
  }, [user])
 const handleClose = () => {
  setOpen(false);
 }
const handleOpen = () => {
  setOpen(true);
}
 const handleCreate = () => {
  if (!user) {handleClose(); return;}

  console.log(title);
  card.createCard(title, desc, user.email);
  handleClose();
}
  if (user && user.accountType == 0) {
    return (
      <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Diagnosis</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Check all symptoms that apply.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            label="Description"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {card.cards.map((value) => (
              <Grid key={JSON.stringify(value)} item>
                <CardComponent title={value.title} desc={value.description} none={false} openCreateModal={handleOpen} />
              </Grid>
            ))}
            <Grid item>
              <CardComponent title={"New Diagnosis"} desc={"Create"} none={true} openCreateModal={handleOpen}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </>
    );
  } else if (user && user.accountType == 1) {
    return (
      <>
      </>
    );
  }
  else {
    return (
      <>
        Error
      </>
    );
  }
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default CardDashboardScreen;
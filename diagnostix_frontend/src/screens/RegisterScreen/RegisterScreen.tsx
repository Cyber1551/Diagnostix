import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, InputLabel, Link, makeStyles, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import React, { FC, useState } from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useUserContext } from '../../context/UserContext';
import { AccountType } from "../../Api";

const RegisterScreen: FC = () => {
    const classes = useStyles();
    const user = useUserContext();
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [accountType, setAccountType] = useState<any>(AccountType.Patient);
    const onSubmit = () => {
        user.register(email, password, fname, lname, accountType, () => { }, () => { });
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <h1>DIAGNOSTIX</h1>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            value={fname}
                            onChange={(event) => setFname(event.target.value)}
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            value={lname}
                            onChange={(event) => setLname(event.target.value)}
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Select
                            labelId="accountType"
                            variant={"outlined"}
                            id="accountType"
                            required
                            fullWidth
                            value={accountType}
                            onChange={(event) => {
                                setAccountType(event.target.value);
                                console.log(event.target.value);
                            }}
                            label="Account Type"
                        >
                            <MenuItem value={0}>Patient</MenuItem>
                            <MenuItem value={1}>Doctor</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={onSubmit}
                >
                    Sign Up
                    </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            Already have an account? Sign in
                     </Link>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default RegisterScreen;
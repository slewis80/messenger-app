import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import bubble from './assets/images/bubble.svg';
import bgImg from './assets/images/bg-img.png';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh'
  },
  button: {
    margin: '20px 10px 30px 10px',
    padding: '10px 50px',
  },
  heading: {
    margin: '10px 10px 10px 0px',
    padding: '10px 30px 10px 0px',
  },
  sidebar: {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    width: '100%',
    backgroundSize: 'cover',
    margin: '0',
  },
  sidebarOverlay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to top, #3A8DFF, #86B9FF)',
    opacity: '85%',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    color: 'white',
    fontFamily: 'OpenSans - semibold, regular',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 50px',
    marginLeft: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  }
}));

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center" className={classes.root}>

      <Grid item xs={false} sm={false} md={5} lg={5} className={classes.sidebar}>
        <Box className={classes.sidebarOverlay}>
          <img src={bubble} alt="chat bubble"
            className={classes.button} />
          <Typography variant="h4" className={classes.button}>
            Converse with anyone<br/>with any language
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={7} lg={7}>

      <Box className={classes.paper}>

        <Grid container justifyContent="flex-end" alignItems="center" md={12}>
          <Typography className={classes.heading}>Need to register?</Typography>
          <Button onClick={() => history.push("/register")}
            className={classes.heading}
            color="primary" size="large">Register</Button>
        </Grid>

        <form onSubmit={handleLogin} className={classes.form}>
          <Grid container md={9} >

            <Typography variant="h5" justify="flex-start" className={classes.heading}>Welcome Back!</Typography>

            <Grid container justifyContent="center" md={12}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  color="primary"
                  margin="normal"
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <TextField
                  color="primary"
                  margin="normal"
                  label="password"
                  aria-label="password"
                  type="password"
                  name="password"
                  InputProps={{ endAdornment:
                    <InputAdornment position="end">
                      <Button color="primary">Forgot?</Button>
                    </InputAdornment>
                  }}
                />
              </FormControl>
            </Grid>

            <Grid container item justifyContent="center" md={12}>
              <Button type="submit" variant="contained" size="large" color="primary"
                className={classes.button}>
                Login
              </Button>
            </Grid>

          </Grid>
        </form>

      </Box>
      </Grid>

    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

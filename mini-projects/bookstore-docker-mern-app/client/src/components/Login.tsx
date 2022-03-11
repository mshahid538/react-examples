import React from "react";
import { 
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { userLogin } from "../services/AuthService";
 

const Login = ({ updateLoginUser }: any) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validation, setValidation] = React.useState(true);
  const [isLoginFaild, setIsLoginFaild] = React.useState(false);

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 400,
    margin: "20px auto",
  };

  const formComponentStyle = {
    margin: "5px 0",
  };

  const handleChange = (e: any) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = async () => {
    if (username === "" || password === "") {
      setValidation(false);
      return;
    }

    !validation && setValidation(true);

    const response = await userLogin({ username, password });

    if (response?.status !== 200) {
      console.log(`Error: ${response.status} : ${response.statusText}`);
      setIsLoginFaild(true);
      return;
    }

    updateLoginUser(response.data);
  };

  return (
    <Grid container>
      {/* <Paper elevation={10} style={paperStyle}> */}
        <Grid> 
          <Typography variant="h4"> Login</Typography>

          <br />
          {!validation && (
            <Typography style={{ color: "red" }}>
              Please Fill Required Fields ..{" "}
            </Typography>
          )}
          <TextField
            label="Username"
            name="username"
            placeholder="username"
            fullWidth
            variant="outlined"
            value={username}
            onChange={handleChange}
            required
            style={formComponentStyle}
          />
          <br />
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="password"
            fullWidth
            onChange={handleChange}
            variant="outlined"
            required
            style={formComponentStyle}
          />

          <br />
          <Button
            style={formComponentStyle}
            type="submit"
            color="primary"
            onClick={onSubmit}
            variant="contained"
            fullWidth
          >
            Sign In
          </Button>
          {isLoginFaild && (
            <Typography style={{ color: "red" }}>
              Incorrect Usrname or Password...{" "}
            </Typography>
          )}
        </Grid>
      {/* </Paper> */}
    </Grid>
  );
};

export default Login;

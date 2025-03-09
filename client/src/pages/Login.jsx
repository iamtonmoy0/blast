import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginToggle = () => setIsLogin(!isLogin);
  return (
    <Container
      component={"main"}
      maxWidth={"xs"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant={"h5"}>Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem", padding: "1rem" }}>
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography color="initial" textAlign={"center"} m={"1rem"}>
                or
              </Typography>
              <Button variant="outlined" fullWidth onClick={handleLoginToggle}>
                {"Register"}
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant={"h5"}>Sign up</Typography>
            <form style={{ width: "100%", marginTop: "1rem", padding: "1rem" }}>
              <TextField
                required
                fullWidth
                label="name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
              >
                Register
              </Button>
              <Typography color="initial" textAlign={"center"} m={"1rem"}>
                or
              </Typography>
              <Button variant="outlined" fullWidth onClick={handleLoginToggle}>
                {" Login"}
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
}

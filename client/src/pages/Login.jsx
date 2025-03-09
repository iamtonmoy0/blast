import React, { useState } from "react";
import { Container, Paper } from "@mui/material";
export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Container component={"main"} maxWidth={"sx"}>
      <Paper
        elevation={3}
        style={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></Paper>
    </Container>
  );
}

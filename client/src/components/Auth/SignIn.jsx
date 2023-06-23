import { Box, Button, TextField, Typography, Container } from "@mui/material";
import React from 'react'

const SignIn = () => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            팀명
          </Typography>
          <TextField
            margin="normal"
            label="이메일"
            color="success"
            required
            fullWidth
            name="email"
            autoComplete="email"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            autoFocus
          />
          <TextField
            margin="normal"
            label="비밀번호"
            type="password"
            color="success"
            required
            fullWidth
            name="password"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2, fontSize: 15 }}
          >
            로그인 하기
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default SignIn

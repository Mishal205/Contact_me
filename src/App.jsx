import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import backgroundImage from "./assets/background.jpg";

const App = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Reason, setReason] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "reason":
        setReason(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    console.log("Name:", Name);
    console.log("Email", Email);
    console.log("Phone Number", Phone);
    console.log("Reason", Reason);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        height={700}
        width={500}
        my={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        gap={4}
        p={2}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      >
        <Typography variant="h2" gutterBottom>
          CONTACT ME
        </Typography>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={Name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={Email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          id="phone"
          label="phone number"
          variant="outlined"
          value={Phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          id="reason"
          label="Reason"
          multiline
          rows={4}
          value={Reason}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" onClick={handleSubmit}>
          submit
        </Button>
      </Box>
    </Box>
  );
};

export default App;

import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import FlexCenter from "../components/FlexCenter";

const initialState = {
  name: "",
  age: "",
  address: "",
  phone: "",
};

const ALAN_KEY = `Your ALAN AI integration key`;

const FormAlanAI = () => {
  const [userData, setUserData] = useState(initialState);

  // Uncomment below code once you have added you ALAN key
  /*
  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: (commandData) => {
        console.log(commandData);
        setUserData((prevState) => ({
          ...prevState,
          [commandData.command]: commandData.data,
        }));
      },
    });
  }, []);
  */

  const handleFormFieldChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData(initialState);
  };

  return (
    <FlexCenter width="100%" sx={{ flexDirection: "column" }}>
      <Typography variant="h3" m="2rem" fontWeight="bold">
        Auto Fill
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Box
          width="100%"
          display="grid"
          gap="1rem"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleFormFieldChange}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Age"
            type="text"
            name="age"
            value={userData.age}
            onChange={handleFormFieldChange}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Address"
            type="text"
            name="address"
            value={userData.address}
            onChange={handleFormFieldChange}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Phone"
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleFormFieldChange}
            sx={{ gridColumn: "span 4" }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </FlexCenter>
  );
};

export default FormAlanAI;

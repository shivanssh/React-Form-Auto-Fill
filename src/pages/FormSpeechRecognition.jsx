import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { MicOffOutlined, MicOutlined } from "@mui/icons-material";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import FlexCenter from "../components/FlexCenter";

const initialState = {
  name: "",
  age: "",
  address: "",
  phone: "",
};

const FormSpeechRecognition = () => {
  const [userData, setUserData] = useState(initialState);
  const [isListening, setIsListening] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

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

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleNameChange = (e, name) => {
    setIsListening((prev) => !prev);

    if (!isListening) {
      return SpeechRecognition.startListening();
    }

    SpeechRecognition.stopListening();
    setUserData((prev) => ({ ...prev, [name]: transcript }));
  };

  const micButton = (isListening, name) => ({
    endAdornment: (
      <InputAdornment key={name} position="end">
        <IconButton key={name} onClick={(e) => handleNameChange(e, name)}>
          {isListening ? <MicOutlined /> : <MicOffOutlined />}
        </IconButton>
      </InputAdornment>
    ),
  });

  console.log(transcript, "----script");
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
            InputProps={{
              endAdornment: (
                <InputAdornment key={name} position="end">
                  <IconButton
                    key={name}
                    onClick={(e) => handleNameChange(e, "name")}
                  >
                    {isListening ? <MicOutlined /> : <MicOffOutlined />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
            InputProps={{
              endAdornment: (
                <InputAdornment key={name} position="end">
                  <IconButton
                    key={name}
                    onClick={(e) => handleNameChange(e, "age")}
                  >
                    {isListening ? <MicOutlined /> : <MicOffOutlined />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
            InputProps={micButton(isListening, "address")}
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
            InputProps={micButton(isListening, "phone")}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </FlexCenter>
  );
};

export default FormSpeechRecognition;

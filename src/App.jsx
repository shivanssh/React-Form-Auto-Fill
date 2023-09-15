import { Box } from "@mui/material";
import "regenerator-runtime/runtime";

import FormAlanAI from "./pages/FormAlanAI";
import FormSpeechRecognition from "./pages/FormSpeechRecognition";

const App = () => {
  return (
    <Box width="100%" height="100%">
      {/* <FormAlanAI />  */}
      <FormSpeechRecognition />
    </Box>
  );
};

export default App;

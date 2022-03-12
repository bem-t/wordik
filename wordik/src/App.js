import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Box, Paper, Typography} from "@mui/material";

function App() {
  const [word, setWord] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://random-word-api.herokuapp.com/word?number=1"
    );

    setWord(data[0].split(""));
  };

  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      {word.map((letter) => {
        return (
          <>
            <Paper elevation={3}><Typography variant="h1" component="h2" ml={4} >{letter}</Typography></Paper>
          </>
        );
      })}
    </Box>
    
    <Button variant="contained" onClick={() => getData()}>
    Contained
  </Button>
  </>
  );
}

export default App;

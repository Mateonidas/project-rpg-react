import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Main from "./components/Main";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return <>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Main />
        </ThemeProvider>
    </>
}

export default App;

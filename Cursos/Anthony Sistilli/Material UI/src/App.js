import {createMuiTheme, ThemeProvider } from "@material-ui/core";
import CenteredGrid from "./Grids";

const theme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
      <CenteredGrid />
		</ThemeProvider>
	);
}

export default App;

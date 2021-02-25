import { createMuiTheme } from "@material-ui/core/styles";
import { grey, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: orange[700],
		},
		secondary: {
			main: grey[800],
		},
	},
});

export default theme;

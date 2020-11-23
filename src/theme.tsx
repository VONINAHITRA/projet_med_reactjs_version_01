import { grey, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[900],
      contrastText: '#FFFFFF',
      light: red[200],
      dark: red[900],
    },
    secondary: {
      main: grey[700],
      dark: grey[900],
      light: grey[200],
      contrastText: '#FFFFFF',
    },
    common: {},
  },
});
export default theme;

import { createMuiTheme } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#488cff',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            // light: will be calculated from palette.primary.main,
            main: '#ffffff',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },    },
});

//const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

// const theme = React.useMemo(
//   () =>
//     createMuiTheme({
//       palette: {
//         type: prefersDarkMode ? 'dark' : 'light',
//         primary: '#488cff',
//         secondar: white,
//       },
//     }),
//   [prefersDarkMode],
// );

export default theme;
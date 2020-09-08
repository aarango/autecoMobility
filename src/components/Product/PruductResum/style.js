import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(6),
    //padding: theme.spacing(6),
    maxWidth: '1200px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  typography: {
    color: '#333333',
  },
  button: {
    fontStyle: 'italic',
  },
}));

export const theme = createMuiTheme();
theme.typography.h1 = {
  textAlign: 'left',
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
    color: '#333333',
  },
};

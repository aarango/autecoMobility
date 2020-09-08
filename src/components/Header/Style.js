import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    display: 'none',
    backgroundColor: 'white',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& > img': {
      width: '100px',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '999px',
    padding: '5px',
    backgroundColor: '#eff2f5',
    '&:hover': {
      backgroundColor: '#ececec',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    marginTop: 'width',
    height: '30px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#000000',
  },
  inputInput: {
    padding: '10px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


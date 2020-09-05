import { fade, makeStyles } from '@material-ui/core/styles'

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: 'black',
    size: '75rem',
    paddingLeft: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logo: {
    display: 'none',
    color: 'black',
    paddingLeft: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderColor: '#000000',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    //marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    color: '#000000',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#0000f',
    maxWidth: '100%',
  },
  inputInput: {
    variant: 'filled',
    padding: theme.spacing(1, 1, 1, 0),
    height: '30px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1rem + ${theme.spacing(10)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50rem',

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


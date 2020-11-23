import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 320;
const useHeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      display: 'flex',
      border: 0,
      borderRadius: 3,
      padding: '0.625rem 0',
      //marginBottom: 20,
      color: '#555',
      width: '100%',
      boxShadow:
        '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
      transition: 'all 150ms ease 0s',
      alignItems: 'center',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-start',
      position: 'relative',
      zIndex: 'unset',
    },
    appBarOpac: {
      backgroundColor: theme.palette.background.paper,
    },
    appBarTransparent: {
      backgroundColor: 'transparent !important',
    },
    absolute: {
      position: 'absolute',
      zIndex: 1100,
    },
    fixed: {
      position: 'fixed',
      zIndex: 99999,
    },
    container: {
      minHeight: 50,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      flexWrap: 'nowrap',
      ...theme.mixins.toolbar,
    },
    flex: {
      flex: 1,
    },
    title: {
      lineHeight: '30px',
      fontSize: '18px',
      borderRadius: '3px',
      textTransform: 'none',
      color: 'inherit',
      padding: '8px 16px',
      letterSpacing: 'unset',
      '&:hover,&:focus': {
        color: 'inherit',
        background: 'transparent',
      },
    },
    appResponsive: {
      margin: '20px 10px',
    },
    // primary: {
    //   backgroundColor: theme.palette.primary.main,
    //   color: '#FFFFFF',
    //   boxShadow:
    //     '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)',
    // },
    // info: {
    //   backgroundColor: infoColor,
    //   color: '#FFFFFF',
    //   boxShadow:
    //     '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)',
    // },
    // success: {
    //   backgroundColor: successColor,
    //   color: '#FFFFFF',
    //   boxShadow:
    //     '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)',
    // },
    // warning: {
    //   backgroundColor: warningColor,
    //   color: '#FFFFFF',
    //   boxShadow:
    //     '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)',
    // },
    // danger: {
    //   backgroundColor: dangerColor,
    //   color: '#FFFFFF',
    //   boxShadow:
    //     '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)',
    // },
    // rose: {
    //   backgroundColor: roseColor,
    //   color: '#FFFFFF',
    //   boxShadow:
    //     '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)',
    // },
    transparent: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none',
      paddingTop: '25px',
      color: '#FFFFFF',
    },
    dark: {
      color: theme.palette.background.paper,
      backgroundColor: '#212121 !important',
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)',
    },
    white: {
      border: 0,
      padding: '0.625rem 0',
      marginBottom: 20,
      color: '#555',
      backgroundColor: '#fff !important',
      boxShadow:
        '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
    },
    drawerPaper: {
      border: 'none',
      bottom: '0',
      transitionProperty: 'top, bottom, width',
      transitionDuration: '.2s, .2s, .35s',
      transitionTimingFunction: 'linear, linear, ease',
      width: drawerWidth,
      position: 'fixed',
      display: 'block',
      top: 0,
      height: '100vh',
      //right: 0,
      left: 'auto',
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: 0,
      paddingLeft: 0,
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerlocale: {
      height: 400,
      backgroundColor: theme.palette.secondary.main,
    },
    drawerSocial: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);
export default useHeaderStyle;

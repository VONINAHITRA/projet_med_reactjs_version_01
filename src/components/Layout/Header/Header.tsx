import React, { FC, ReactNode, useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// core components
import useHeaderStyles from '../../../assets/styles/header.styles';
import clsx from 'clsx';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

enum COLOR {
  primary,
  info,
  success,
  warning,
  danger,
  transparent,
  white,
  rose,
  dark,
}
interface IProps {
  color: string;
  brand: string;
  fixed: boolean;
  absolute?: boolean;
  changeColorOnScroll: {
    height: number;
    color: string | COLOR;
  };
  rightLinks?: ReactNode;
  leftLinks?: ReactNode;
}
const Header: FC<IProps> = ({
  color,
  changeColorOnScroll,
  children,
  absolute,
  brand,
  fixed,
  rightLinks,
  leftLinks,
}) => {
  const [isOpac, setIsOpac] = useState(false);
  const classes = useHeaderStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      // document.body
      //   .getElementsByTagName('header')[0]
      //   .classList.remove(classes[color]);
      // document.body
      //   .getElementsByTagName('header')[0]
      //   .classList.add(classes[changeColorOnScroll.color]);
      setIsOpac(true);
    } else {
      // document.body
      //   .getElementsByTagName('header')[0]
      //   .classList.add(classes[color]);
      // document.body
      //   .getElementsByTagName('header')[0]
      //   .classList.remove(classes[changeColorOnScroll.color]);
      setIsOpac(false);
    }
  };
  const appBarClasses = classNames({
    [classes.appBar]: true,
    // [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.appBarOpac]: isOpac,
    [classes.appBarTransparent]: !isOpac,
  });
  const brandComponent = <Button className={classes.title}>{brand}</Button>;
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          //  className={classes.navLinks}
        >
          <Link to={'/'}>
            <FormattedMessage id="home.title" />
          </Link>
        </Box>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {children}
        </Hidden>
      </Toolbar>
      <Drawer
        variant={'permanent'}
        // anchor={'left'}
        open={mobileOpen}
        className={clsx(classes.drawer, {
          [classes.drawerPaper]: !mobileOpen,
          [classes.drawerClose]: mobileOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerPaper]: !mobileOpen,
            [classes.drawerClose]: mobileOpen,
          }),
        }}
        onClose={handleDrawerToggle}
      >
        <div className={classes.appResponsive}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          <div className={classes.drawerlocale}>
            {leftLinks}
            {rightLinks}
          </div>
          <div className={classes.drawerSocial}>
            <FacebookIcon />
            <LinkedinIcon />
            <MailIcon />
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
};
export default Header;
// Header.defaultProp = {
//   color: 'white',
// };

// Header.propTypes = {
//   color: PropTypes.oneOf([
//     'primary',
//     'info',
//     'success',
//     'warning',
//     'danger',
//     'transparent',
//     'white',
//     'rose',
//     'dark',
//   ]),

//   brand: PropTypes.string,
//   fixed: PropTypes.bool,
//   absolute: PropTypes.bool,
//   // this will cause the sidebar to change the color from
//   // props.color (see above) to changeColorOnScroll.color
//   // when the window.pageYOffset is heigher or equal to
//   // changeColorOnScroll.height and then when it is smaller than
//   // changeColorOnScroll.height change it back to
//   // props.color (see above)
//   changeColorOnScroll: PropTypes.shape({
//     height: PropTypes.number.isRequired,
//     color: PropTypes.oneOf([
//       'primary',
//       'info',
//       'success',
//       'warning',
//       'danger',
//       'transparent',
//       'white',
//       'rose',
//       'dark',
//     ]).isRequired,
//   }),
// };

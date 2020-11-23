import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Header from './Header/Header';
interface IProps {}
const dashboardRoutes: any = [];

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header
        color="transparent"
        // routes={dashboardRoutes}
        brand="MED"
        //rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
      />
      <>{children}</>
    </>
  );
};
export default Layout;

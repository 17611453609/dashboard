import React, { Fragment, useState } from 'react';
import classNames from 'classnames';

import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

import styles from './sidebar-jss';
import SidebarContent from './SidebarContent';

function Sidebar(props: any) {

  const {
    classes,
    loadTransition,
    turnDarker,
    leftSidebar,
    dataMenu,
  } = props;
  return (
    <Fragment>
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawer,
            classes.drawerPaper,
          ),
        }}
        open={true}
        anchor="left"
      >
        <SidebarContent
          drawerPaper={true}
          leftSidebar={leftSidebar}
          turnDarker={turnDarker}
          loadTransition={loadTransition}
          dataMenu={dataMenu}
          status={status}
        />
      </Drawer>
    </Fragment>
  );
}

export default withStyles(styles as any)(Sidebar);

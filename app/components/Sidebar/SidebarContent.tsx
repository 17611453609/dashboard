import React, { useState } from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import MainMenu from './MainMenu';
import styles from './sidebar-jss';

function SidebarContent(props: any) {
  const {
    classes,
    dataMenu,
    turnDarker,
    drawerPaper,
    loadTransition,
    toggleDrawerOpen,
  } = props;

  return (
    <div
      className={classNames(
        classes.drawerInner,
        !drawerPaper ? classes.drawerPaperClose : ''
      )}
    >
      <div
        id="sidebar"
        className={classNames(classes.menuContainer, classes.rounded)}
      >
        <MainMenu
          dataMenu={dataMenu}
          loadTransition={loadTransition}
          toggleDrawerOpen={toggleDrawerOpen}
          drawerPaper={drawerPaper}
        />
      </div>
    </div>
  );
}

export default withStyles(styles as any)(SidebarContent);

import React from 'react';
import classNames from 'classnames';
import { withStyles,Button,Grid,Toolbar,AppBar,Tooltip  } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { NavLink } from 'react-router-dom';
import styles from './header-jss';

function Header(props: any) {
  const {classes} = props;

  return (
    <AppBar
      position={'sticky'}
      className={classNames(
        classes.appBar,
        classes.floatingBar
      )}
    >
      <Toolbar className={classes.aiHeader}>
        <div className={classes.headerTitle}>
          <Grid container>
            受害人群图表展示系统
          </Grid>
        </div>
        <div className={classes.headerContent}>
          <NavLink to="/" exact >
            <Tooltip title="退出登录" aria-label="add">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
              >
                <PowerSettingsNewIcon style={{ color: '#FFF',fontSize: 25 }}/>
              </Button>
            </Tooltip>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default withStyles(styles as any)(Header);



import React, { useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { withStyles, withTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './sidebar-jss';

function MainMenu(props: any) {
  const {
    classes,
    dataMenu,
  } = props;

  const [activeItem, setActiveItem] = useState('年龄');

  const getMenus = menuArray =>
    menuArray.map((item, index) => {
      return (
        <ListItem
          key={index.toString()}
          button
          className={classNames(
            item.name === activeItem && classes.activeItem,
            classes.nested,
          )}
          component={Link}
          to={item.link}
          disabled={item.disabled}
          onClick={() => setActiveItem(item.name)}
        >
          <ListItemText
            classes={{ primary: classes.primary }}
            primary={item.name}
            className={classes.mainMenuItemText}
          />
          </ListItem>
      );
    });
  return (
    <div>
      <div className={classes.division}></div>
      {getMenus(dataMenu.filter(item => !item.disabled))}
      <div className={classes.divisionDisabled}></div>
    </div>
  );
}


export default withTheme<any>(
  withStyles(styles as any)(MainMenu)
);

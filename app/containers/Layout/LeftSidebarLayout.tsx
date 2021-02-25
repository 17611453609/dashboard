import React, { Fragment, useEffect } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import dataMenu from './menu';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import styles from './appStyles-jss';

function LeftSidebarLayout(props: any) {
  const {
    classes,
    children,
  } = props;

  useEffect(() => {}, []);
  return (
    <div className={classNames(classes.appFrameInner, classes.sideNav)}>
      <Fragment>
        <Header/>
        <Sidebar
          dataMenu={dataMenu}
          leftSidebar
        />
        <main
          className={classNames(
            classes.content,
            classes.contentPaddingLeftTaskOpen
          )}
          id="mainContent"
        >
          <section
            className={classNames(classes.mainWrap, classes.sidebarLayout)}
          >
            {children}
          </section>
        </main>
      </Fragment>
    </div>
  );
}

export default withStyles(styles as any)(LeftSidebarLayout);

import React from 'react';
import rtl from 'jss-rtl';
import Loading from 'react-loading-bar';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import {
  withTheme,
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import '../../styles/components/vendors/react-loading-bar/index.css';
import applicationTheme from '../../styles/theme/applicationTheme';

const styles = {
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1,
  },
};

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function ThemeWrapper(props: any) {
  const { classes, children } = props;
  const theme = createMuiTheme(applicationTheme('huarenTheme'));

  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Loading
            color="rgba(255,255,255,.9)"
            showSpinner={false}
          />
            {children}
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default withTheme<any>(withStyles(styles)(ThemeWrapper));

import { size } from 'config';
const headerHeight = size.headerHeight;

const styles = theme => ({
  aiHeader: {
    minHeight: headerHeight,
    display: 'flex',
    fontFamily: theme.typography.fontFamily,
    '@media (min-width:1920px)': {
      minHeight: headerHeight,
    },
  },
  appBar: {
    background: theme.background.header,
    boxShadow: '0px 1px 4px 0px rgba(0,21,41,0.12)',
    zIndex: theme.zIndex.drawer,
    '&$left': {
      '& $headerTitle': {
        left: 10 * 2,
      },
    },
    '&$right': {
      '& $headerTitle': {
        right: 10 * 2,
      },
      '& > div': {
        flexDirection: 'row-reverse',
      },
      '& $flex': {
        textAlign: 'left',
      },
    },
  },
  attachedbar: {
    position: 'relative',
    '& $wrapper': {
      [theme.breakpoints.down('lg')]: {
        border: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  floatingBar: {
    position: 'fixed',
  },
  headerContent: {
    position: 'fixed',
    right: 0,
    display: 'flex',
    alignItems: 'center',
  },
});

export default styles;

/*
 * @Author: Ren jieyun
 * @Date:   2020-02-20 11:37:41
 * @Last Modified by: jieyun ren
 * @Last Modified time: 2020-11-04 16:42:14
 */
import { fade } from '@material-ui/core/styles/colorManipulator';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';

import { size } from 'config';

const drawerWidth = size.sidebarWidth;
const drawerFoldWidth = size.sidebarFoldWidth;
const headerHeight = size.headerHeight;

const styles = theme => ({
  user: {
    justifyContent: 'center',
  },
  drawerPaper: {
    position: 'relative',
    height: `calc(100% - ${headerHeight}px)`,
    overflow: 'hidden',
    border: 'none',
    background: 'none',
    color: theme.color.main,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    top: headerHeight,
  },
  swipeDrawerPaper: {
    width: drawerWidth,
  },
  opened: {
    '& $primary, & $icon': {
      color: '#FEFEFE',
    },
  },
  openedList: {
    backgroundColor: '',
  },
  activeItem: {
    color: `${theme.text.white} !important`,
    background: `${theme.background.navHover} !important`,
    '& span': {
      color: `${theme.text.white} !important`,
    },
  },
  nested: {
    padding: '0 0 0 20px',
    height: 40,
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 10 * 2,
    },
    color: `${theme.text.icon} !important`,
  },
  icon: {
    fill: theme.text.icon,
    color: theme.text.icon,
    minWidth: 15,
    marginRight: 10,
    '& svg': {
      fill: '#ffffff',
      width: 17,
    },
  },
  iconImg: {
    width: 14,
    height: 14,
    marginRight: 15,
  },
  drawerInner: {
    height: '100%',
    position: 'fixed',
    backgroundColor: theme.background.sidebar,
    borderRight: `1px solid ${theme.borderColor.menu}`,
  },
  drawerInnerMobile: {
    height: '100%',
    backgroundColor:
      theme.palette.type === 'dark'
        ? fade(theme.palette.background.paper, 0.75)
        : fade(theme.palette.background.paper, 0.95),
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 48,
    height: 48,
    boxShadow: theme.glow.light,
  },
  darker: {
    background: 'none',
  },
  child: {
    '& a': {
      paddingLeft: 10 * 6,
    },
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    paddingLeft: 10 * 10,
    marginTop: 10 * 3,
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '28px',
    fontWeight: 'bold',
  },
  dense: {
    margin: '-2px 0 0 0',
    paddingTop: 5,
    paddingBottom: 2,
    '& > $title:first-child': {
      margin: '0',
    },
  },
  active: {
    color: `${theme.text.icon} !important`,
    '& $primary': {
      color: theme.color.lightGray,
    },
    '& $icon': {
      color: theme.color.lightGray,
    },
    '& $icon svg': {
      fill: theme.color.lightGray,
    },
    '&:hover': {
      color: theme.background.navHover,
    },
    '&:focus': {
      color: `${theme.text.icon} !important`,
      backgroundColor: `${theme.background.navHover} !important`,
    },
    '&:active': {
      color: `${theme.text.icon} !important`,
      backgroundColor: `${theme.background.navHover} !important`,
    },
  },
  nolist: {
    listStyle: 'none',
  },
  primary: {
    whiteSpace: 'nowrap',
    fontSize: 14,
  },
  shrink: {
    width: 30,
    height: 30,
    cursor: 'pointer',
  },
  iconed: {},
  head: {
    padding: '5px 0 1px',
    margin: `10px 0 0`,
    borderRadius: `0 30px 30px 0`,
    paddingLeft: 26,
    '& $icon': {
      color: theme.color.lightGray,
      width: '10px',
    },
    '& $iconed': {
      paddingLeft: 26,
    },
    '& svg[class^="MuiSvgIcon"]': {
      left: -20,
      position: 'relative',
      fill: theme.color.lightGray,
    },
    '& $primary': {
      marginLeft: 10,
    },
  },
  childItemIcon: {
    width: '12px',
    height: '2px',
    marginLeft: '5px',
    marginRight: '10px',
  },
  headCapital: {
    padding: `10px 0 10px 30px`,
    left: 10 * -1.5,
    position: 'relative',
    textTransform: 'uppercase',
    borderRadius: `0 30px 30px 0`,
    margin: `10px`,
    '& span': {
      fontSize: 14,
    },
  },
  copyright: {
    color: theme.color.orange,
    background: theme.background.light,
    padding: 10 * 2,
    position: 'fixed',
    [theme.breakpoints.up('lg')]: {
      background: 'none',
      position: 'absolute',
    },
    bottom: 0,
    left: 10 * 3,
    lineHeight: '24px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 3px',
    height: 48,
    position: 'relative',
    textDecoration: 'none',
    fontSize: 18,
    margin: 0,
    fontWeight: 500,
    color: theme.color.white,
    '& img': {
      width: 160,
      marginTop: -4,
    },
  },
  brandBig: {
    paddingTop: 10 * 4,
    position: 'relative',
    textAlign: 'center',
    '& img': {
      width: 68,
    },
    '& h3': {
      fontSize: 18,
      marginTop: 10 * 2,
      fontWeight: 500,
      color: theme.color.main,
    },
  },
  profile: {
    height: 120,
    width: '100%',
    display: 'flex',
    fontSize: 14,
    padding: 10,
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    position: 'absolute',
    margin: `${10 * 2}px 0`,
    zIndex: 0,
    '& h4': {
      fontSize: 18,
      marginBottom: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 110,
    },
    '& button': {
      fontSize: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: 110,
      display: 'block',
      overflow: 'hidden',
      textTransform: 'capitalize',
      padding: 0,
      minHeight: 20,
      marginTop: 4,
    },
  },
  statusMenu: {
    '& li': {
      width: 100,
    },
  },
  dotStatus: {
    width: 10,
    height: 10,
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: 10 / 2,
  },
  online: {
    backgroundColor: lightGreen[500],
  },
  bussy: {
    backgroundColor: red[500],
  },
  idle: {
    backgroundColor: amber[500],
  },
  offline: {
    backgroundColor: grey[500],
  },
  rounded: {
    backgroundColor: theme.palette.primary.Upper,
  },
  landingNav: {},
  withProfile: {},
  menuContainer: {
    width: drawerWidth,
    position: 'relative',
    display: 'block',
    '&$withProfile': {
      paddingTop: 10 * 18,
    },
    '&$landingNav': {
      [theme.breakpoints.up('lg')]: {
        paddingTop: 10 * 5,
      },
      [theme.breakpoints.down('lg')]: {
        height: 'calc(100% - 100px)',
        paddingTop: 10 * 5,
      },
    },
    '&$rounded': {
      paddingRight: 0,
    },
    '&::-webkit-scrollbar': {
      width: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.4)',
      },
    },
  },
  divider: {
    marginTop: 10,
  },
  badge: {
    height: 'auto',
  },
  displayNone: {
    display: 'none',
  },
  mainMenuItemText: {
    padding: 0,
    '& $primary': {
      fontSize: '14px',
      marginLeft: 10,
    },
  },
  drawerPaperClose: {
    width: drawerFoldWidth,
    position: 'absolute',
    overflow: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& $user': {
      justifyContent: 'flex-start',
    },
    '& $bigAvatar': {
      width: 40,
      height: 40,
    },
    '& nav': {
      display: 'none',
    },
    '& $brand': {
      display: 'none',
    },
    '& $profile': {
      flexDirection: 'row',
      top: 10 * 6,
      padding: 10 / 2,
    },
    '& $avatar': {
      marginRight: 10 * 3,
    },
    '& $menuContainer': {
      '&$menuContainer': {
        paddingBottom: 0,
      },
    },
  },
  paperClose: {
    '& $primary': {
      marginLeft: 50,
    },
  },
  wspIcon: {
    fontSize: 16,
  },
  wspCurName: {
    marginLeft: 10,
    width: 108,
    overflow: 'hidden',
    fontSize: 14,
    whiteSpace: 'nowrap',
    fontWeight: 'normal',
    lineHeight: '30px',
  },
  wspMenuIcon: {
    cursor: 'pointer',
    width: 10,
    '& .iconfont': {
      fontSize: 12,
    },
  },
  wspMenuPaper: {
    width: 172,
    marginTop: 42,
    marginLeft: -149,
    borderRadius: 1,
    boxShadow: '0px 1px 9px 0px rgba(32,1,0,0.06)',
  },
  wspMenuList: {
    paddingTop: 0,
  },
  wspCreateBtn: {
    width: 184,
    height: 38,
    marginBottom: 20,
    marginLeft: 8,
    textAlign: 'left',
    padding: 0,
    paddingTop: 5,
    backgroundColor: theme.background.sidebar,
    border: '1px solid rgba(176,176,176,1)',
    color: theme.color.white,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: 'rgba(240,241,245,1)',
      color: 'black',
    },
  },
  wspName: {
    width: '100%',
    overflow: 'hidden',
  },
  wspRenameInpt: {
    '& input': {
      fontSize: 13,
      color: theme.color.gray,
    },
  },
  wspListItem: {
    display: 'flex',
    height: 40,
    color: theme.color.white,
    fontSize: 14,
    padding: '10px 10px 10px 15px',
    cursor: 'pointer',
    marginBottom: 5,
    '&:hover': {
      backgroundColor: theme.background.light,
      '& img': {
        display: 'block',
      },
    },
  },
  menuIcon: {
    height: 54,
  },
  wsImg: {
    width: 14,
    height: 14,
    marginLeft: 5,
    marginRight: 25,
    marginTop: 3,
  },
  division: {
    width: '100%',
    height: 1,
    backgroundColor: theme.background.navLine,
  },
  divisionDisabled: {
    width: '100%',
    height: 1,
    marginTop: 10,
    marginBottom: 8,
    backgroundColor: theme.background.navLine,
  },
  menuButton: {
    marginLeft: 13,
  },
  list: {
    width: 250,
  },
  edit: {
    width: 16,
    height: 16,
    marginLeft: 35,
    marginRight: 5,
    display: 'none',
    '&:hover': {
      display: 'block',
    },
    position: 'absolute',
    left: 100,
    top: 1,
  },
  delete: {
    width: 16,
    height: 16,
    display: 'none',
    '&:hover': {
      color: 'red',
    },
  },
  rename: {
    position: 'relative',
  },
  rename_font: {
    fontSize: 12,
    position: 'absolute',
    left: 44,
    width: 70,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  wsImgH_hover: {
    marginTop: 4,
    width: 14,
    height: 14,
    marginLeft: 5,
  },
  editNameIpt: {
    border: '1px solid #e0e0e0',
    borderRadius: 0,
    color: theme.color.white,
    maxWidth: 90,
    '&:after': {
      border: 'none',
      borderRadius: 0,
      boxShadow: 'none',
    },
    '& .MuiInput-input': {
      fontSize: 12,
      padding: 0,
      height: 15,
    },
  },
  addIcon: {
    width: 36,
    height: 36,
    border: '1px solid rgba(176,176,176,1)',
    marginLeft: 10,
    marginBottom: 20,
  },
  addiconfont: {
    color: theme.color.white,
    display: 'inline-block',
    padding: '3px 0 0 6px',
  },
  root: {
    height: 'unset',
  },
});
export default styles;

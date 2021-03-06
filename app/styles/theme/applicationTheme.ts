/*
 * @Author: Ren jieyun
 * @Date:   2020-02-18 16:33:05
 * @Last Modified by: jieyun ren
 * @Last Modified time: 2020-11-04 16:42:13
 */
import curTheme from './themes';

const applicationTheme = (theme: string) => ({
  palette: {
    type: 'dark',
    primary: curTheme[theme].palette.primary,
    secondary: curTheme[theme].palette.secondary,
    inherit: curTheme[theme].palette.inherit,
    action: {
      hover: 'rgba(80,80,80, 0.9)',
      hoverOpacity: 0.05,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['微软雅黑', 'PingFang', 'Open Sans', 'sans-serif'].join(','),
    fontSize: 12,
    title: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 500,
    },
    fontWeightMedium: 600,
  },
  shade: {
    light: '0 10px 15px -5px rgba(62, 57, 107, .07)',
  },
  glow: {
    light: `0 2px 20px -5px ${curTheme[theme].palette.primary.main}`,
    medium: `0 2px 40px -5px ${curTheme[theme].palette.primary.main}`,
    dark: `0 2px 40px 0px ${curTheme[theme].palette.primary.main}`,
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px',
  },
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)',
    '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)',
    '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)',
    '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)',
    '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)',
    '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)',
    '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)',
    '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)',
    '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)',
    '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)',
    '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)',
    '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)',
    '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)',
    '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)',
    '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)',
    '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)',
    '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)',
    '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)',
    '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)',
    '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)',
    '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)',
    '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)',
    '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)',
    '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)',
    '0px 2px 4px 0px rgba(0,0,0,0.09)',
  ],
  overrides: {
    MuiPaper: {
      root: {
        fontFamily: ['微软雅黑', 'PingFang', 'Open Sans', 'sans-serif'].join(
          ','
        ),
      },
      rounded: {
        borderRadius: 8,
      },
      elevation1: {
        boxShadow: 0,
        background: '#ffffff',
        color: curTheme[theme].color.gray,
      },
      elevation2: {
        color: curTheme[theme].color.gray,
        fontSize: 13,
        background: curTheme[theme].background.elevation2,
        boxShadow: 0,
        borderRadius: 2,
        padding: 10,
        minHeight: 60,
      },
      elevation4: {
        boxShadow: '1px 0px 26px 0px rgba(229,234,239,1)',
      },
    },
    MuiTouchRipple: {
      root: {
        display: 'none',
      },
    },
    MuiButton: {
      contained: {
        boxShadow: 'none',
        height: '36px',
        overflow: 'hidden',
        minWidth: '108px',
        backgroundColor: curTheme[theme].background.main,
        //boxShadow: '0px 1px 2px 0px rgba(68,97,163,0.2)',
        borderRadius: '4px',
        color: curTheme[theme].color.btn,
        fontSize: '14px',
        fontWeight: '400',
        '&:hover': {
          backgroundColor: curTheme[theme].background.main,
        },
      },
      root: {
        borderRadius: '2px',
        fontWeight: 400,
        transition: 'none',
        touchAction: 'none',
        textTransform: 'none',
        webkitTapHighlightColor: 'none',
      },
      // fab: {
      //   boxShadow: '0 2px 20px -3px rgb(128, 128, 128)',
      // },
      sizeSmall: {
        minWidth: '54px',
        padding: '8px 0 6px',
        textAlign: 'center',
        marginRight: '22px',
        border: 'none',
        backgroundColor: 'rgba(62,81,101,1)',
        '&:hover': {
          backgroundColor: '#222C3C',
        },
        '& svg': {
          fill: '#ffffff',
        },
      },
      containedPrimary: {
        border: 'none',
      },
      // containedInherit: {
      //   padding: '0 10px',
      //   minWidth: '55px',
      //   height: '28px',
      //   lineHeight: '14px',
      //   backgroundColor: 'rgba(250, 250, 250, 1)',
      //   color: 'rgba(51,51,51,1)',
      //   border: '1px solid rgba(222, 222, 222, 1)',
      //   borderRadius: '1px',
      // },
      containedSecondary: {
        border: 'none',
      },
      colorInherit: {
        padding: '0 10px',
        minWidth: '55px',
        height: '28px',
        lineHeight: '14px',
        backgroundColor: 'rgba(250, 250, 250, 1)',
        color: 'rgba(51,51,51,1)',
        border: '1px solid rgba(222, 222, 222, 1)',
        borderRadius: '1px',
      },
    },
    MuiTypography: {
      button: {
        fontWeight: 600,
      },
    },
    MuiInput: {
      root: {
        border: `1px solid ${curTheme[theme].borderColor.gray}`,
        borderRadius: 4,
        alignItems: 'center',
        transition: 'none',
        width: '100%',
        userSelect: 'auto',
        //transition: 'border 0.3s ease',
      },
      underline: {
        '&:after': {
          borderBottom: 'none',
          transition: 'none',
          // height: 'calc(100% + 1px)',
          // borderRadius: 6,
          // bottom: -1,
          //boxShadow: `0 0 1px ${curTheme.palette.secondary.main}`,
          //borderBottom: `2px solid ${curTheme.palette.secondary.main}`,
        },
        '&:before': {
          display: 'none',
        },
      },
      input: {
        padding: '6px 10px',
        fontSize: 14,
      },
      multiline: {
        padding: 0,
      },
    },
    MuiInputLabel: {
      formControl: {
        top: 12,
        left: 10,
        transform: 'translate(0, 22px) scale(1)',
      },
      shrink: {
        zIndex: 1,
        transform: 'translate(0, 13px) scale(0.7)',
      },
      filled: {
        transform: 'translate(2px, 6px) scale(1)',
        '&$shrink': {
          transform: 'translate(0px, -6px) scale(0.75)',
        },
      },
      outlined: {
        transform: 'translate(2px, 6px) scale(1)',
        '&$shrink': {
          transform: 'translate(4px, -16px) scale(0.75)',
        },
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: 14,
      },
    },
    MuiFormHelperText: {
      root: {
        paddingLeft: 5,
      },
    },
    MuiSelect: {
      root: {
        borderRadius: 6,
      },
      icon: {
        top: 'calc(50% - 10px)',
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
        '& label + div': {
          alignItems: 'flex-end',
          '& input, select, > div > div': {
            padding: '24px 8px 4px',
          },
          '&[role="radiogroup"]': {
            alignItems: 'flex-start',
          },
        },
      },
    },
    MuiInputAdornment: {
      root: {
        alignItems: 'flex-end',
        '& button': {
          width: 32,
          height: 32,
          padding: 0,
        },
        '& p': {
          lineHeight: 2,
        },
      },
      positionStart: {
        marginLeft: 8,
      },
      positionEnd: {
        marginRight: 8,
        marginTop: 32,
      },
    },
    MuiToolbar: {
      root: {
        borderRadius: 8,
      },
    },
    MuiTableCell: {
      root: {
        verticalAlign: 'middle',
        borderBottom: `1px ${curTheme[theme].borderColor.table} solid`,
      },
      head: {
        fontWeight: 400,
        background: curTheme[theme].background.tableCellHead,
        borderBottom: 0,
      },
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 16,
      },
      bar: {
        borderRadius: 16,
      },
      colorPrimary: {
        backgroundColor: '#616161',
      },
    },
    MuiTablePagination: {
      input: {
        marginRight: 32,
        marginLeft: 8,
      },
      selectRoot: {
        marginLeft: 0,
        marginRight: 0,
      },
      select: {
        paddingRight: 24,
      },
      selectIcon: {
        top: 4,
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        borderRadius: 0,
        boxShadow: 'inset 0 -30px 120px -30px rgba(0, 0, 0, 0.3)',
      },
    },
    MuiPickersClock: {
      clock: {
        backgroundColor: 'none',
        border: `1px solid ${curTheme[theme].palette.primary.main}`,
      },
    },
    MuiPickersClockPointer: {
      thumb: {
        boxShadow: `0 1px 10px 0px ${curTheme[theme].palette.primary.main}`,
      },
    },
    MuiPickerDTTabs: {
      tabs: {
        backgroundColor: 'transparent',
        color: curTheme[theme].palette.primary.main,
      },
    },
    MuiSlider: {
      thumb: {
        boxShadow:
          '0px 1px 5px 0px rgba(80,80,80, 0.2), 0px 2px 2px 0px rgba(80,80,80, 0.14), 0px 3px 1px -2px rgba(80,80,80, 0.12)',
      },
    },
    MuiExpansionPanel: {
      root: {
        '&:first-child': {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
        '&:last-child': {
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        },
      },
      '&$expanded': {
        borderRadius: 8,
        boxShadow: `0px 0px 0px 1px ${curTheme[theme].palette.primary.main}`,
        '& + div': {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
      },
    },
    MuiDialogTitle: {
      root: {
        position: 'relative',
        marginBottom: 32,
        '&:after': {
          content: '""',
          position: 'absolute',
          width: 60,
          height: 4,
          background: curTheme[theme].palette.primary.main,
          bottom: 0,
          left: 26,
        },
        '& h2': {
          color: curTheme[theme].palette.primary.light,
        },
      },
    },
    MuiDialog: {
      paperFullWidth: {
        width: '531px',
      },
    },
    MuiDialogContent: {
      root: {
        padding: '8px 24px 0',
      },
    },
    MuiDialogActions: {
      root: {
        padding: '0 0 50px',
      },
    },
    MuiSnackbarContent: {
      root: {
        '@media (min-width: 960px)': {
          borderRadius: 32,
        },
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
      colorPrimary: {
        backgroundColor: '#EEF1F7',
      },
    },
    MuiTabs: {
      root: {
        borderRadius: 10,
      },
      indicator: {
        borderRadius: '10px 10px 0 0',
        height: 4,
      },
    },
    MuiToggleButtonGroup: {
      root: {
        borderRadius: 20,
        boxShadow: 'none !important',
        border: `1px solid ${curTheme[theme].palette.secondary.main}`,
      },
    },
    MuiToggleButton: {
      root: {
        boxShadow: 'none !important',
      },
    },
    MUIDataTableToolbarSelect: {
      root: {
        boxShadow: 'none',
        backgroundColor: curTheme[theme].palette.secondary.dark,
      },
      deleteIcon: {
        color: '#FFF',
      },
    },
    MuiTreeItem: {
      root: {
        '&:focus > $content': {
          backgroundColor: curTheme[theme].color.white,
        },
      },
      content: {
        backgroundColor: curTheme[theme].color.white,
        '&:hover': {
          backgroundColor: curTheme[theme].color.white,
        },
      },
    },
    MuiChip: {
      deleteIcon: {
        width: 18,
        height: 18,
      },
    },
  },
  ...curTheme[theme],
});

export default applicationTheme;

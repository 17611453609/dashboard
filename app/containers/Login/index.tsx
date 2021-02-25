import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Toast from '../../components/Toast';
import Registered from '../Registered';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    border: '1px solid grey',
    borderRadius: 5,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  login: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: '#FFF',
    textDecoration: 'none'
  },
  registered:{
    color: 'black',
  }
}));

function Login() {

  const classes = useStyles();
  const [uname, setUname] = useState('');
  const [pword, setPword] = useState('');
  const handleChangeUname = (e: any) => {
    setUname(e.target.value)
  }

  const handleChangePword = (e: any) => {
    setPword(e.target.value)
  }

  const handeSignIn = () => {
    if(uname=='admin' && pword=='admin'){
      return Toast('success', '登录成功');
    }else{
      return Toast('error', '账号密码错误!');
    }
  }

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const DialogDemo = () =>{
    return(
      <div>
      <Grid style={{cursor:'pointer'}} onClick={handleClickOpen}>
        注册用户
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>注册</DialogTitle>
        <DialogContent>
          <Registered />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            确定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <div className={classes.root}>
          <Typography style={{ fontSize: 35, fontWeight: 600, marginBottom: 50 }}>
            受害人群图表展示系统
          </Typography>
          <div className={classes.form}>
            <TextField
              value={uname}
              variant="outlined"
              id="email"
              placeholder="用户名"
              autoComplete="off"
              onChange={e => handleChangeUname(e)}
            />
            <TextField
              value={pword}
              variant="outlined"
              margin="normal"
              placeholder="密码"
              type="password"
              id="password"
              autoComplete="off"
              onChange={e => handleChangePword(e)}
            />
            {
              uname=='admin' && pword=='admin' ?
              <NavLink
                to="/app/age"
                className={classes.link}
                exact
              >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.login}
                disabled={uname && pword ? false : true}
                onClick={handeSignIn}
              >
              登录
            </Button>
            </NavLink>:
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.login}
                disabled={uname && pword ? false : true}
                onClick={handeSignIn}
              >
                登录
              </Button>
          }
          </div>
            {/* <NavLink
                to="/registered"
                className={classes.registered}
                exact
              >
                <Grid>注册用户</Grid>
            </NavLink> */}
            <DialogDemo />
        </div>
      </Container>
    </div>
  );
}

export default Login;

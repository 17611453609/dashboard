import React, { useState } from 'react';
import {Container,Typography, Grid, makeStyles,TextField,Button} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Toast from '../../components/Toast';


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
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


function Registered () {
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
    if(uname  && pword ){
      return Toast('success', '注册成功');
    }else{
      return Toast('error', '注册失败!');
    }
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <div className={classes.root}>
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
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.login}
                disabled={uname && pword ? false : true}
                onClick={handeSignIn}
              >
                确定
              </Button> */}
            </div>
          </div>
      </Container>
    </div>
  );
}

export default Registered;

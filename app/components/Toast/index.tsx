import React from 'react';
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss';

const Toast = (
  type,
  message,
  onClose?: () => void,
) => {
  const options: any = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: false,
    onClose,
  };

  const Msg: any = ({ closeToast }) => (
    <Grid container wrap="nowrap" alignItems="center" className="wrapper">
      <Grid item className="toast-font">
        {message}
      </Grid>
    </Grid>
  );

  return toast(<Msg />, {
    ...options,
    className: `ui-toast toast-${type}`,
    bodyClassName: `toast-${type}-body`,
  });
};

export default Toast;

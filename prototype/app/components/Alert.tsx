import Alert from '@mui/material/Alert';


export default function AlertComponent({severity,children}:Alert) {

  return (
    <Alert severity={severity}>{children}</Alert>
  )
}

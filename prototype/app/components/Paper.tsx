'use client'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme,...props }) => ({
    width: '100%',
    height: 'auto',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    borderRadius: '10px',
    border: '1px solid #F5F5F5',
    boxShadow: '2px 2px 10px #F5F5F5',
  }));
export default function ClothFrame(props:any) {
    const {children,variant,elevation,sx} = props  

    return (
        <DemoPaper variant={variant} elevation={elevation} square={false} sx={sx} >{children}</DemoPaper>
    )
}

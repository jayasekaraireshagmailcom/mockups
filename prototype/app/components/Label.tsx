import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Label(props:any) {
const {sx,variant,text,prodCount} = props
  return (
    <Box sx={sx}>
      <Typography variant={variant} gutterBottom sx={sx}   fontSize={{
            lg: prodCount ? (prodCount >=12) ? 5 : 20 : sx?.fontSize,
            md: 15,
            sm: 10,
            xs: 5
      }}>
        {text}
      </Typography>
    </Box>
  );
}
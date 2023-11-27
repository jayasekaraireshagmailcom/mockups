import { Grid } from '@mui/material'
export default function Item({
    children,
    xs,    
    sm,
    md
  }:Partial<Item>) {
  return (
    <Grid item xs={xs} sm={sm} md={md} >{children}</Grid>
  )
}

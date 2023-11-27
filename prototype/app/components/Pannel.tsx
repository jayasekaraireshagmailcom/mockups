import { Grid } from '@mui/material'
export default function Pannel(props:any) {
const {
    children,
    spacing, 
    columns,
  } = props
  return (
    <Grid container spacing={spacing} columns={columns}>{children}</Grid>
  )
}

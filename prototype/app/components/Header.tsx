import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
export default function Header(props: Props) {
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar component="nav" style={{ background: '#fff' }}>
        <Toolbar>            
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{color:"#000",fontWeight: "bold"}} align="center">
                Modern Walk
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
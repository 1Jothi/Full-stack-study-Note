import { Box, Button, Grid, Paper } from "@mui/material"
import { MyNavbar } from "../components/MyNavbar"
import { MyImage } from "../components/MyImage"
import myresume from '../static/12.pdf'
import { MyProjectCard } from "../components/MyProjectCard"

export const Portfolio:React.FC<{}>=()=>{
    return <>
    <Box sx={{m:2}}>
        <Grid>
        <MyNavbar/>
        </Grid>
        <br />
        <Grid 
        container 
        direction="row"
  justifyContent="center"
  alignItems="center">
    <Grid xs={6}> <MyImage/></Grid>
    <Grid xs={6}><h1>my namehe ll im very good developer</h1> 
    <a href={myresume} download>
    <Button variant="contained" color="warning">download my resume</Button></a></Grid>
  </Grid>
  <br />
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
<MyProjectCard/>
  </Grid>
  <Grid item xs={6}>
<MyProjectCard/>
  </Grid>
  <Grid item xs={6}>
<MyProjectCard/>
  </Grid>
  <Grid item xs={6}>
<MyProjectCard/>
  </Grid>
</Grid>
       
 









    </Box>
    
    </>
}
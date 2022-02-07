import Avatar         from '@mui/material/Avatar'
import axios          from 'axios'
import Box            from '@mui/material/Box'
import Card           from '@mui/material/Card'
import CardContent    from '@mui/material/CardContent'
import CardMedia      from '@mui/material/CardMedia'
import Grid           from '@mui/material/Grid'
import List           from '@mui/material/List'
import ListItem       from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText   from '@mui/material/ListItemText'
import React          from 'react'
import Tab            from '@mui/material/Tab'
import Tabs           from '@mui/material/Tabs'
import Typography     from '@mui/material/Typography'


const TabPanel = ({ children, index, value, ...other }) => (
  <div
    role='tabpanel'
    hidden={ value !== index }
    id={ `super-tabs-tabpanel-${ index }` }
    aria-labelledby={ `super-tabs-tab-${ index }`}
  >
    { value === index && (
      <Box sx={{ p : 3 }}>
        <Typography>{ children }</Typography>
      </Box>
    ) }
  </div>
)

const a11yProps = index => {
  return {
    id : `super-tabs-tab-${ index }`,

    'aria-controlers' : `super-tabs-tabpanel-${ index }`
  }
}

export default function Dashboard () {
  const [ heroes, setHeroes ] = React.useState([])
  const [ value, setValue ]   = React.useState(0)

  axios.get(process.env.REACT_APP_API_PATH)
    .then(response => {
      setHeroes(response.data)
    })
    .catch(error => console.error(error))

  const handleChange = (event, newValue) => setValue(newValue)

  return (
    <Box sx={{ width : '100%' }}>
      <Box sx={{ borderBottom : 1, borderColor : 'divider' }}>
        <Tabs value={ value } onChange={ handleChange } aria-label='super tabs'>
          <Tab label='List View' { ...a11yProps(0) } />
          <Tab label='Grid View' { ...a11yProps(1) } />
        </Tabs>
      </Box>

      <TabPanel value={ value } index={ 0 }>
        <List sx={{ width : '100%', backgroundColor : 'background.paper' }}>
          { heroes.map((hero, index) => (
            <ListItem key={ index }>
              <ListItemAvatar>
                <Avatar>{ hero.id }</Avatar>
              </ListItemAvatar>
              <ListItemText primary={ hero.name } secondary={ hero.biography['full-name'] } />
            </ListItem>
          )) }
        </List>
      </TabPanel>

      <TabPanel value={ value } index={ 1 }>
        <Grid spacing={ 4 } container>
          { heroes.map((hero, index) => (
            <Grid key={ index } sm={ 6 } md={ 4 } xl={ 3 } item>
              <Card>
                <CardContent>
                  <CardMedia
                    component='img'
                    height='194'
                    image={ hero.image.url }
                    alt={ hero.name }
                  />
                  <Typography variant='body1' color='text.secondary'>
                    { hero.name }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )) }
        </Grid>
      </TabPanel>
    </Box>
  )
}

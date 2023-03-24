import React, {useState} from "react"
import { CircularProgress, Grid, Typography, 
    InputLabel, MenuItem, FormControl, Select } from "@material-ui/core"
import useStyles  from './styles'
import PlaceDetails from '../PlaceDetails/PlaceDetails'


const List = ({ places }) => {
    const classes = useStyles()
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')
    const [country, setCountry] = useState('')

    // const places =[
    //     {name: 'Cool Place'},
    //     {name: 'Best Beer'},
    //     {name: 'Best Steak'},
    // ]
    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Tourist Attractions</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurant</MenuItem>
                    <MenuItem value="hotels">Hotel</MenuItem>
                    <MenuItem value="attractions">Tourist Attraction</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5 </MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>EA Country</InputLabel>
                <Select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <MenuItem value="kenya">Kenya</MenuItem>
                    <MenuItem value="tanzania">Tanzania</MenuItem>
                    <MenuItem value="uganda">Uganda</MenuItem>
                    <MenuItem value="rwanda">Rwanda</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default List
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DisplayWeather from './DisplayWeather.js';
import './App.css';


const MainWeather = () => {
    
    const [city, setCity] = useState("Toronto&country=CA");
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = (async(city) => {
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=371d4e84f04f4e6eafe38174f3de11e5`)
        const data = await response.json();
        setForecast(data);
        setLoading(false)
        console.log(data.data[0].datetime);
    });

    useEffect(() => {
        getData(city);
    }, []);

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    
    const classes = useStyles();
    
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleClick = () => {
        getData(city);
    }
    
    return (
        <div className="Main-weather-component">
            <Card>
                <Card.Header className="Card-Header" style={{backgroundColor: "#2a2a2a"}}>Weather Forrecast <a href="" className="close" style={{color: "#ffffff", fontSize:"30px", lineHeight: 1.5, fontWeight: 300, textDecoration: "none"}}>X</a></Card.Header>
                <Card.Body>
                <Card.Title className="Subtitle" style={{fontSize: 28, fontWeight: "bold", marginBottom: -6, marginLeft: -10}}>City</Card.Title>
                <FormControl variant="filled" className={classes.formControl} style={{minWidth: 800}}>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={city}
                            onChange={handleChange}
                            style={{fontSize: 28, textAlign: "left", lineHeight: 0.5}}
                        >
                        <MenuItem value={"Toronto&country=CA"}>Toronto</MenuItem>
                        <MenuItem value={"Vancouver&country=CA"}>Vancouver</MenuItem>
                        <MenuItem value={"Montreal&country=CA"}>Montreal</MenuItem>
                        <MenuItem value={"Calgary&country=CA"}>Calgary</MenuItem>
                        <MenuItem value={"Ottawa&country=CA"}>Ottawa</MenuItem>
                        </Select>
                    </FormControl>
                </Card.Body>
                <DisplayWeather forecast={forecast} loading={loading}/>
                <Button variant="danger" onClick={handleClick} className="Apply-Button" style={{fontSize: "28px", borderRadius: 0}}>Apply</Button>
            </Card>
        </div>
    );
    }
export default MainWeather;
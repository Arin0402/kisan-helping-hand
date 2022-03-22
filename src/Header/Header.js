import React from 'react'
import logo from "../logo_1.jpg"
import { Button } from '@mui/material'
import "../Header/Header.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  
  palette: {
    
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});

const Districtnames = [
  'English',
  'Hindi',
  'Gharwali',
  'kumaoni'
];

const [language, setlanguage] = React.useState('');

const handleChange = (event) => {
  console.log(event.target.value)
  setlanguage(event.target.value);
};

function Header() {
  return (
    <div>
        <div className='Homepage_middle_header'>            
            <img src = {logo} className ="header_logo" />

            <div>
              <FormControl sx={{ m: 1, minWidth: 120}}>
                  <Select
                    value={language}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    style ={{backgroundColor : "white"}}
                  >                  
                    <MenuItem disabled value=""><em>Select your district</em></MenuItem>
                    {Districtnames.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  
              </FormControl>
            </div>
            <ThemeProvider theme={theme}>
              <Button variant='outlined' color="neutral" className='header_Button'>Register</Button>
              <Button variant='outlined' color="neutral"  className='header_Button'>Log in</Button>
            </ThemeProvider>
            
        </div>           
        <div className='Homepage_lower_header'>
            <div className='Homepage_lower_header_sub_1'>
              <div className='Homepage_lower_header_tab'>Home</div>
              <div className='Homepage_lower_header_tab'>Agriculture</div>
              <div className='Homepage_lower_header_tab'>Animal husbandry</div>
              <div className='Homepage_lower_header_tab'>Organic</div>
              <div className='Homepage_lower_header_tab'>Government schemes</div>
              <div className='Homepage_lower_header_tab'>Experts QA</div>
              <div className='Homepage_lower_header_tab'>Partner with us</div>
              <div className='Homepage_lower_header_tab'>Blog</div>
            </div>
            
        </div>           
    </div>
  )
}

export default Header
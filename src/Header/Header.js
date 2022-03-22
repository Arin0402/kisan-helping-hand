import React from 'react'
import logo from "../logo_1.jpg"
import { Button } from '@mui/material'
import "../Header/Header.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const theme = createTheme({
  
  palette: {
    
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});

const languages = [
  'English',
  'Hindi',
  'Gharwali',
  'kumaoni'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



function Header() {

  const [language, setlanguage] = React.useState('');
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target.value)
    setlanguage(event.target.value);
  };

  
  return (

    <div className='main_header' >
        <div className='Homepage_middle_header'>            
            <img src = {logo} className ="header_logo" />

            <div className='language_select'>
              
                  <Select
                    value={language}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    style ={{ backgroundColor : "white", height : "30px"}}
                  >                  
                    <MenuItem disabled value=""><em>Select language</em></MenuItem>
                    {languages.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
              
            </div>

                      
            <div className='login_buttons'>
              <ThemeProvider theme={theme}>
                <Button variant='outlined' color="neutral" style ={{float :"right" , marginLeft :"10px" , marginRight : "10px", marginTop :"20px" }}>Register</Button>
                <Button variant='outlined' color="neutral"  style ={{float :"right" , marginLeft :"10px" , marginRight : "10px", marginTop :"20px" }}>Log in</Button>
              </ThemeProvider>
            </div>
            
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
import React from 'react'
import { Button } from '@material-ui/core';

const Tabs = (props) => (
  
  <ul className='country_info'>
   <li>
     <Button fullWidth={true} onClick={props.getCountryNews}> 
     Australia
     </Button>
  </li>

   <li>
       <Button fullWidth={true} onClick={props.getCountryNews}>
       Canada
       </Button>
    </li>

   <li> 
      <Button fullWidth={true} variant="contained" color="primary" className={props.button} onClick={props.getNews}>
      Search Results
      </Button>
    </li>

    <li>  
      <Button fullWidth={true} onClick={props.getCountryNews}> 
      India
      </Button>
    </li>

   <li>  
      <Button fullWidth={true} onClick={props.getCountryNews}>
      US
      </Button>
     </li>

  </ul>
)

export default Tabs

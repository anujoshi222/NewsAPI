import React from 'react'
import { Button } from '@material-ui/core';

const Tabs = (props) => (
  
  <ul className='country_info'>
   <li>
     <Button fullWidth={true} onClick={props.UpdateState}> 
     Australia
     </Button>
  </li>

   <li>
       <Button fullWidth={true} onClick={props.UpdateState}>
       Canada
       </Button>
    </li>

   <li> 
      <Button fullWidth={true}  className={props.button} onClick={props.UpdateState}>
      Search Results
      </Button>
    </li>

    <li>  
      <Button fullWidth={true}onClick={props.UpdateState}> 
      India
      </Button>
    </li>

   <li>  
      <Button fullWidth={true}onClick={props.UpdateState}>
      US
      </Button>
     </li>

  </ul>
)

export default Tabs

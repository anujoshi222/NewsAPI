import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  textField: {
    display: 'flex',
    margin: theme.spacing.unit,
  },
  button: {
      
    margin: theme.spacing.unit
    
  },
  
  
})

const Form = (props) => (
  
  <form onSubmit={props.getval}>
       <TextField
        className={props.classes.textField}
        id="outlined-search"
        label="Search field"
        name='search'
        type="search"
        margin="normal"
        variant="outlined"
        fullWidth={true}
        
       

      />

        <Button
                variant="contained"
                color="primary"
                size="large"
                type='submit'
                fullWidth={true}
                id="submit"
            >
            Search
        </Button>
    </form>

)

export default withStyles(styles)(Form)

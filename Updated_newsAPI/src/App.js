import React, { Component } from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import Form from './Components/Form'
import Tabs from './Components/Tabs'
import CountryNews from './Components/CountryNews'
import EverythingNews from './Components/EverythingNews';

class App extends Component {
    state = {
    searchval:'bitcoin',
    value: 'us',
  }

componentWillMount(){
    this.setState({value: this.state.value})
    this.setState({searchval: this.state.value})
  }

componentWillReceiveProps(nextProps) {
  if (nextProps !== this.props) {
    this.setState({ value: nextProps.default })
    this.setState({searchval: this.nextProps.default})
   }

}

UpdateState=(e)=>{

  let country = e.target.innerText
  console.log(country)
  if(country=== 'AUSTRALIA'){
    this.setState({value : 'au'})
  }else if(country==='CANADA'){
    this.setState({value : 'ca'})
  }else if(country==='INDIA'){
    this.setState({value : 'in'})
  }else if(country==='US'){
    this.setState({value : 'us'})
  } 
  }

getval=(event)=>{
event.preventDefault()
const {search}=event.target.elements
console.log(search.value)
this.setState({searchval: search.value})

}



render() {
    return (

      <div className="wrapper">
           

      <div className="main">
      <div width="100%" className="header-footer"></div>
      <h1>AJ News</h1>
      <h2 className="subtitle">Because the action never stops.....</h2>
      
         <Grid 
         container
         direction="row"
         justify="center"
         alignItems="center"
         >
         <Form 
         getval={this.getval}/>
        </Grid>
        <Grid >
        </Grid>
      <Tabs 
      UpdateState={this.UpdateState}/>

     {
      <CountryNews default={this.state.value}
      />
     }
     <EverythingNews default={this.state.searchval}/>
        </div>
      </div>
      
    );
  }
}

export default App;

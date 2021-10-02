import logo from './logo.svg';
import {useEffect,useState} from 'react'
import './App.css';
import {BrowserRouter as Router ,Route, Switch,Link} from 'react-router-dom'
import Summary from './components/summary/summary'
import Home from './components/home/home'
import axios from 'axios';
function App() {
  const [data,setData]=useState([])
 useEffect(()=>{
   axios.get("https://api.tvmaze.com/search/shows?q=all")
   .then(res=>{
     console.log(res.data);
     setData(res.data);
   })
   .catch(err=>{
     console.log(err)
   })
 },[])
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={()=>{return (<Home data={data}/>)}}/>
       
        <Route path="/summary/:id" component={()=>{return (<Summary data={data}/>)}}/>
          
      </Switch>
    </Router>
   
  );
}

export default App;

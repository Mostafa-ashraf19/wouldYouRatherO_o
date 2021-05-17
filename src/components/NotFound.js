import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../assets/NotFound.png'

class NotFoundPage extends React.Component{
    render(){
        return <div style={{margin: '70px auto'}} >
            <img src={NotFound}  style={{display:'block', margin: '0px auto'}} alt='NotFound' />

            <p style={{textAlign:"center"}}>
              <Link className='Question-btn' to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;

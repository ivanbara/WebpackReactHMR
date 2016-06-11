import React from 'react';
import { Link } from 'react-router';

class MainPage extends React.Component {

  componentDidMount(){

	}

  render() {
    return (
    	<div className='wrapper'>
    		<div className='header'>
        	<div className='titleDiv'>
            <Link to={'/'} className='title'> 
                Page Title
            </Link>
        	</div>
          <div className='navbar'>
              Navigation bar
          </div>
        </div>
    		{this.props.children}
    		<div className='footer'>
    			Company Co  -  all rights reserved
    		</div>
    	</div>
    );
  }
}

export default MainPage;
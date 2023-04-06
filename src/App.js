import './App.css';
import Side from './Side'
import React, { Component} from 'react';
import Main from "./Main";
import { Link, Route, Routes } from 'react-router-dom';
class App extends Component {

  state = {
    userName: '',
    mess: false,
    mesCounter: 0
  }

  currentName = (name) => {
    this.setState({userName : name});  
  }

  isMessageSent = () => {
    this.setState({mess : true});
    this.setState({mesCounter: this.state.mesCounter + 1})
  }


  render(){
    const HOME_ROUTE = '/';
    const SIDE_PAGE = 'side_page'

    let isThereAnyMessages = this.state.mess;

    return (
      <div className="App">
        <nav>
          <div className='leftSide'>
            My Chat App
          </div>

          <div className='rightSide'>
            <ul>
              <li><Link className='router-link' to={HOME_ROUTE} onClick={() => {this.setState({mesCounter: 0}); this.setState({mess: false})}} >Home</Link></li>

              {isThereAnyMessages ? (
                <li><Link className='router-link' to={SIDE_PAGE}>Hello User Click me</Link></li>
              ) : (<></>)
              }
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path={HOME_ROUTE} element={<Main  isMessageSent={this.isMessageSent} currentName={this.currentName} />} />
          <Route path={SIDE_PAGE} element={<Side userName={this.state.userName} mesCount={this.state.mesCounter}/>} />
        </Routes>
    </div>
    );
}
}

export default App;

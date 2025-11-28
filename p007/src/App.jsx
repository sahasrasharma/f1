import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <div className='logo'>Validation</div>
        </header>
        <section>
          <div className='content'>
            <div className='grid'>
              <div>
                <label>First Name *</label>
                <input type='text' />
                <p className='error'></p>
              </div>
              <div>
                <label>Last Name *</label>
                <input type='text' />
                <p className='error'></p>
              </div>
            </div>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
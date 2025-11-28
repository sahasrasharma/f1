import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <>
        <header>
          <div className='logo'>Grid Demo</div>
        </header>
        <section>
          <div className='card'>
            <img src='/1.jpeg' alt='' />
            <label>Image 01</label>
          </div>
          <div className='card'>
            <img src='/2.jpeg' alt='' />
            <label>Image 02</label>
          </div>
          <div className='card'>
            <img src='/3.jpeg' alt='' />
            <label>Image 03</label>
          </div>
          <div className='card'>
            <img src='/4.jpeg' alt='' />
            <label>Image 04</label>
          </div>
          <div className='card'>
            <img src='/5.jpeg' alt='' />
            <label>Image 05</label>
          </div>
          <div className='card'>
            <img src='/6.jpeg' alt='' />
            <label>Image 06</label>
          </div>
          <div className='card'>
            <img src='/7.jpeg' alt='' />
            <label>Image 07</label>
          </div>
          <div className='card'>
            <img src='/8.jpeg' alt='' />
            <label>Image 08</label>
          </div>
          <div className='card'>
            <img src='/9.jpeg' alt='' />
            <label>Image 09</label>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
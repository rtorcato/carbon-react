import React from 'react';
import logo from './logo.svg';
import './app.scss';
import './App.css';
import { Button, Slider, InlineLoading } from 'carbon-components-react';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button>Test</Button>
        <Button disabled>Test</Button>
        <button onClick={() => alert('hello')} tabIndex={0} className="some-class bx--btn bx--btn--primary" disabled={false} type="button">
          Button
        </button>
        <Slider />
        <InlineLoading style={{ marginLeft: '1rem' }} description="Submitting..." />
      </header>
    </div>
  );
};

export default App;

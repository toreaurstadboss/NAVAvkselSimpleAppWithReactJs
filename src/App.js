import logo from './logo.svg';
import { useRef } from 'react';
import "@navikt/ds-css";
import { Button } from "@navikt/ds-react";
import './App.css';

function App() {

  const ref = useRef<HTMLButtonElement | null>(null);
  // let useEffect = null;
  // useEffect(() => {
  //   ref.current && ref.current.focus();
  // }, []);

  return (


    <div className="App">
      <header className="App-header">

        <p>We are learning to install and run React JS Project.</p>

        <Button variant="primary">Send inn søknad</Button>
        <Button variant="primary-neutral">Send inn søknad</Button>
        <Button variant="secondary">Send inn søknad</Button>
        <Button variant="secondary-neutral">Send inn søknad</Button>
        <Button variant="tertiary">Send inn søknad</Button>
        <Button variant="tertiary-neutral">Send inn søknad</Button>
        <Button variant="danger">Send inn søknad</Button>

        {/* <Button ref={ref}>Focus on load!</Button> */}



        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [userPyInput, setUserPyInput] = useState('');
  const [userJavaInput, setUserJavaInput] = useState('');
  const [userCInput, setUserCInput] = useState('');
  const [userGoInput, setUserGoInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const onTabChange = (tabIndex) => {
  if (tabIndex === 0) {
    setUserInput('');
  } else if (tabIndex === 1) {
    setUserPyInput('');
  }
  setApiOutput('');
}
const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/jsgenerate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}

// Python generate call
const pythonGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/pygenerate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userPyInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}

// C++ generate call
const CGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/pygenerate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userCInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}

// Java generate call
const JavaGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/pygenerate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userJavaInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}

// Go generate call
const GoGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/pygenerate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userGoInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}
// JS text area
  const onUserChangedText = (event) => {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  };

  // PY text area
  const onPyChangedText = (event) => {
    // console.log(event.target.value);
    setUserPyInput(event.target.value);
  };
    // C++ text area
    const onCChangedText = (event) => {
      // console.log(event.target.value);
      setUserCInput(event.target.value);
    };
     // Java text area
     const onJavaChangedText = (event) => {
      // console.log(event.target.value);
      setUserJavaInput(event.target.value);
    };
      // Go text area
      const onGoChangedText = (event) => {
        // console.log(event.target.value);
        setUserGoInput(event.target.value);
      };
  return (
    <div className="root">
       <ChakraProvider>
      <Head>
        <title>RixAI | Data structures Assistant</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>RixAI</h1>
          </div>
          <div className="header-subtitle">
            <h2>Use RixAI to ace your data structures and algorithms interviews effortlessly</h2>
          </div>
        </div>
        <Tabs colorScheme='green' onChange={onTabChange}>
        <TabList>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
          <Tab>C++</Tab>
          <Tab>Java</Tab>
          <Tab>Go</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <div className="prompt-container">
          <textarea 
            className="prompt-box"
            placeholder="start typing here"
            value={userInput}
            onChange={onUserChangedText}
          />
          <div className="prompt-buttons">
            <a className={isGenerating ? 'generate-button loading' : 'generate-button'} 
            onClick={callGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
          </div>
          </a>
        </div>
            {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
          </TabPanel>
          <TabPanel>
          <div className="prompt-container">
          <textarea 
            className="prompt-box"
            placeholder="start typing here"
            value={userPyInput}
            onChange={onPyChangedText}
          />
          <div className="prompt-buttons">
            <a className={isGenerating ? 'generate-button loading' : 'generate-button'} 
            onClick={pythonGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
          </div>
          </a>
        </div>
            {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
          </TabPanel>
          <TabPanel>
          <div className="prompt-container">
          <textarea 
            className="prompt-box"
            placeholder="start typing here"
            value={userCInput}
            onChange={onCChangedText}
          />
          <div className="prompt-buttons">
            <a className={isGenerating ? 'generate-button loading' : 'generate-button'} 
            onClick={CGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
          </div>
          </a>
        </div>
            {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
          </TabPanel>
          <TabPanel>
          <div className="prompt-container">
          <textarea 
            className="prompt-box"
            placeholder="start typing here"
            value={userJavaInput}
            onChange={onJavaChangedText}
          />
          <div className="prompt-buttons">
            <a className={isGenerating ? 'generate-button loading' : 'generate-button'} 
            onClick={JavaGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
          </div>
          </a>
        </div>
            {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
          </TabPanel>
          <TabPanel>
          <div className="prompt-container">
          <textarea 
            className="prompt-box"
            placeholder="start typing here"
            value={userGoInput}
            onChange={onGoChangedText}
          />
          <div className="prompt-buttons">
            <a className={isGenerating ? 'generate-button loading' : 'generate-button'} 
            onClick={GoGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
          </div>
          </a>
        </div>
            {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
          </TabPanel>
      </TabPanels>
        </Tabs>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
      </ChakraProvider>
    </div>
  );
};

export default Home;

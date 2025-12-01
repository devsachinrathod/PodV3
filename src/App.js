import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Themes';
import React from 'react';
import Sidebar from './Component/Sidebar';

const Container = styled.div`
background-color: ${({ theme }) => theme.bg};
height: 100vh;
display: flex;
overflow-x: hidden;
overflow-y: hidden;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`;


function App() {

  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container >

        <h1>Hello, World!</h1>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
        <Sidebar />
      </Container>
    </ThemeProvider>
  );
}

export default App;

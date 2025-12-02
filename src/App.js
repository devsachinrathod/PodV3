import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Themes';
import React from 'react';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import { BrowserRouter } from 'react-router-dom';

const Container = styled.div`
display: flex;
background-color: ${({ theme }) => theme.bg};
height: 100vh;
width: 100%;
overflow: hidden;
overflow-y: auto;
`;

const Frame = styled.div`
 display: flex;
 flex-direction: column;
 flex: 3;
`;


function App() {

  const [darkMode, setDarkMode] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>


        <Container >
          {/* 
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button> */}
          <Sidebar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setDarkMode={setDarkMode}
            darkMode={darkMode}

          />
          <Frame>
            <Navbar />
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

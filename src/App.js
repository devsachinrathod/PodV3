import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Themes';
import React from 'react';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Dashboard  from './pages/Dashboard';
import Search from './pages/Search';
import PodcastDisplay from './pages/Displaypodcast';
import Faviorate from './pages/Faviorate';
import Profile from './pages/Profile';
import PodcastDetails from './pages/PodcastDetails';


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
            <Routes>
              <Route path="/" element={<Dashboard></Dashboard>} />
              <Route path="/favorites" element={<Faviorate/>} />
              <Route path="/podcast/:id" element={<PodcastDetails/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/displaypodcast/:type" exact element={<PodcastDisplay/>} />
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

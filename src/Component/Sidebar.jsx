import styled from "styled-components";
import { HomeRounded, CloseRounded, FavoriteRounded, UploadRounded, LightRounded, LogoutOutlined, LogoutRounded, SearchRounded, CloudRounded, DarkModeRounded, RecordVoiceOverRounded, CommuteRounded, SpeakerGroupRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text_primary};
  border-right: 1px solid ${({ theme }) => theme.text_secondary + 20};
  padding: 20px 12px;
  transition: all 0.3s ease;


  @media (max-width: 1168px) {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(0);
    z-index: 999;
      left: ${({ menuOpen }) => (menuOpen ? "0" : "-260px")};
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: red;
  text-align: left;
  padding: 12px 0;
  margin-top: -24px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Close = styled.div`
  display: none;

  @media (max-width: 1168px) {
    display: block;
    cursor: pointer;
    padding: 8px;
  }
`;

const Element = styled.div`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text_secondary};
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
    color: ${({ theme }) => theme.text_primary};
  }
`;
const Hr = styled.hr`
  margin: 12px 0;
  border: 0.5px solid ${({ theme }) => theme.text_secondary + 20};
  padding: 0 16px;
`;

const NavText = styled.div``;

export default function Sidebar( { menuOpen ,setMenuOpen, setDarkMode, darkMode }) {
    
const menuItem = [
    {
        link: "/",
        name: "Dashboard",
        icon: <HomeRounded />,
    },
    {
         link: "/Search",
        name: "Search",
        icon: <SearchRounded />,
    },
  
    {
        link: "/Favorites",
        name: "Favorites",
        icon: <FavoriteRounded />,
    },

]
const buttonItem = [
    {

        link: "/",
        name: "Upload",
        icon: <CloudRounded />,
    },
    {
        
        fun: () => { setDarkMode(!darkMode) },
        name: darkMode ? "Light Mode" : "Dark Mode",
        icon: <DarkModeRounded />,
    },
    {
        link: "/",
        name: "Log Out",
        icon: <LogoutRounded />,
    }
    
];
    return (
        <MenuContainer menuOpen={menuOpen}>
             <Logo>PodV3</Logo>
            <Flex>
                <Close onClick={setMenuOpen.bind(this, false)}>
                    <CloseRounded />
                </Close>
            </Flex>
            {
                menuItem.map((item, index) => (
                    <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }} key={index}>
                        <Element  onClick={item.fun}>
                            {item.icon}
                            <NavText>{item.name}</NavText>
                        </Element>
                    </Link>
                ))
            }
            <Hr />
            {
                 buttonItem.map((item, index) => (
                    <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }} key={index}>
                        <Element  onClick={item.fun}>
                            {item.icon}
                            <NavText>{item.name}</NavText>
                        </Element>
                    </Link>
                ))
            }
   
           

            {/* Add more menu items here */}
        </MenuContainer>
    );
}

import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #2f3136;
    color: white;
    padding: 20px;
    border-radius: 10px;
`;

const Logo = styled.div`
    width: 100%;
    height: 100px;
    background-color: #2f3136;
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
`;

const Closed = styled.div`
    width: 100%;
    background-color: #2f3136;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Element = styled.div`
    width: 100%;
    background-color: #2f3136;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const NavText = styled.div`
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
`;

function Sidebar() {
    return (
        <MenuContainer>
            <Logo>Logo</Logo>

            <Closed>
                <CloseRounded />
            </Closed>

            <Element>
                <HomeRounded />
                <NavText>Dashboard</NavText>
            </Element>
        </MenuContainer>
    );
}

export default Sidebar;

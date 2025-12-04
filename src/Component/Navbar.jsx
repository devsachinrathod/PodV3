import styled from "styled-components";
import { Menu as MenuIcon, PersonRounded } from "@mui/icons-material";


const NavBardiv = styled.div`
display: flex;
justify-content: space-between;
height: 40px;
padding: 16 40px;
align-items: center;
color: ${({ theme }) => theme.text_primary};
gap: 24px;
background-color: ${({ theme }) => theme.bg};
border-radius: 6px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backfrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);

`;

const ButtonDiv = styled.div`
display: flex;
align-items: flex-end;
justify-content: ;
gap: 8px;
font-size: 14px;
color: ${({ theme }) => theme.text_primary};
cursor: pointer;
padding: 18px 22px;

`
export default function Navbar(menuOpen, setMenuOpen) {
    return (
        <NavBardiv>
            <MenuIcon onCLick={() => setMenuOpen(true)} style={{ cursor: "pointer" }} />
            <ButtonDiv>
                <PersonRounded />
                Login
            </ButtonDiv>
        </NavBardiv>
    )
}
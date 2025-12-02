import styled from "styled-components";
import { Menu as MenuIcon, PersonRounded } from "@mui/icons-material";


const NavBardiv = styled.div`
display: flex;
justify-content: between;
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
justify-content: end;
gap: 8px;
font-size: 54px;
color: ${({ theme }) => theme.text_primary};
cursor: pointer;
margin-left:80px;
`
export default function Navbar() {
    return (
        <NavBardiv>
       <MenuIcon />
       <ButtonDiv>
        <PersonRounded/>
        Waiting of 2026
        </ButtonDiv>
        </NavBardiv>
    )
}
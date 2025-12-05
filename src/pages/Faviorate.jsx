
import PodcastDetails from "../Component/PodcastCard";
import styled from "styled-components";

const Container = styled.div`
padding:20px 30px;
padding-bottom:200px;
overflow-y: scroll;
height: 100%;
display: flex;
flex-direction: column;
gap:20px;
@media(max-width: 768px){
    padding:20px 10px;
    padding-bottom:200px;
    overflow-y: scroll;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap:20px;
}
    
`;
const Topic = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 24px;
font-weight: 600;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
    font-size: 18px;
`;


const FaviorateContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 14px;
padding: 18px 6px;
`;
export default function Faviorate() {

    return (
        <Container>
            <Topic>Favirates</Topic>
            <FaviorateContainer>
                <PodcastDetails></PodcastDetails>
                <PodcastDetails></PodcastDetails>
                <PodcastDetails></PodcastDetails>
            </FaviorateContainer>

        </Container>
    )
}
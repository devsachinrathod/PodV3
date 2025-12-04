import styled from "styled-components";
import { Link } from "react-router-dom";
import Podcastcard from "../Component/PodcastCard";
const dashboardMain = styled.div`
padding: 20px 40px;
padding-bottom: 200px;
height:100%;
overflow-y: hidden ;
display: flex;
gap: 24px;
flex-direction: column;
@media (max-width: 768px) {
    padding: 6px 10px; 

`;

const FilterContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.bg};
border-radius: 10px;
padding: 20px 30px;
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

const Span = styled.div`
display: flex;
color: ${({ theme }) => theme.text_primary};
font-size: 16px;
fint-weight: 500;
cursor: pointer;
@media (max-width: 768px) {
    font-size: 14px;
`;
const Podcasts = styled.div`
`;
function Dashboard() {
    return (
        <dashboardMain>
            <FilterContainer>
                <Topic>
                    Most Popular
                    <Link
                        style={{ TextDecoder: "none" }} to="/displaypodcast/popular">
                        <Span>Show all</Span></Link>
                </Topic>
                <Podcasts></Podcasts>
            </FilterContainer>
            <FilterContainer>
                <Topic>
                    Comedy
                    <Link
                        style={{ TextDecoder: "none" }} to="/displaypodcast/popular">
                        <Span>Show all</Span></Link>
                </Topic>
                <Podcasts>
                    <Podcastcard></Podcastcard>
                </Podcasts>
            </FilterContainer>
        </dashboardMain>
    )
}
export default Dashboard;
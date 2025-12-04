import styled from "styled-components";
import Avatar from "@mui/icons-material";
import { IconButton } from "@mui/material";


const Card = styled.div``;
const Top = styled.div``;
const FaviorateIcon = styled.div``;
const CardImage = styled.img``;
const CardInformation = styled.div``;
const MainInfo = styled.div``;
const Title = styled.h1``;
const Description = styled.p``;
const Creater = styled.div``;
const CreaterName = styled.span``;
const Views = styled.span``;


function PodcastDetails() {
  return (

    <Card>
      <Top>
        <FaviorateIcon />
        <CardImage src={podcast.image} />
      </Top>
      <CardInformation>
        <MainInfo>
          <Title></Title>
          <Description></Description>
          <Creater>
            <Avatar></Avatar>
            <CreaterName></CreaterName>
          </Creater>
          <Views>- 12 views</Views>
        </MainInfo>
      </CardInformation>
    </Card>
  );
}
export default PodcastDetails;
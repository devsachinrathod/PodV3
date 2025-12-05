import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { Headphones, PlayArrow } from "@mui/icons-material";

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  overflow: hidden;
  width: 230px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative; /* Required to position PlayIcon */

  &:hover {
    transform: translateY(-4px);
  }

  &:hover div.play-icon {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  @media (max-width: 600px) {
    margin: 8px;
    width: 95%;
  }
`;

/* Header Section */
const Top = styled.div`
  padding: 0;
  position: relative;
`;

const FavoritesButton = styled(IconButton)`
  position: absolute !important;
  right: 8px;
  top: 8px;
  background: rgba(0, 0, 0, 0.08) !important;
  color: #000 !important;
  font-size: 14px !important;
  padding: 4px !important;

  &:hover {
    background: rgba(0, 0, 0, 0.15) !important;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 135px;
  background: #dcdcdc;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* Body Section */
const CardContent = styled.div`
  padding: 16px;
  font-size: 1em;
  color: #333;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #111;
  margin-bottom: 6px;
`;

const Description = styled.div`
  font-size: 13px;
  color: #555;
  margin-bottom: 10px;
`;

/* Footer Section */
const CardFooter = styled.div`
  background-color: #f5f5f5;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Creator = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const CreatorName = styled.div`
  font-size: 12px;
  color: #444;
`;

const Views = styled.div`
  font-size: 11px;
  color: #555;
`;
const PlayIcon = styled.div`
  position: absolute;
  top: 46%;
  left: 85%;
  transform: translate(-50%, -50%) scale(0.5);
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #b40fd8ff;
  color: #fff;
  border-radius: 50%;

  cursor: pointer;
  opacity: 0;
  transition: 0.3s ease-in-out;
  z-index: 5;
`;



function PodcastDetails() {
  return (
    <Card>
      <Top>
        <FavoritesButton>❤️</FavoritesButton>
        <CardImage>
          <img src="https://picsum.photos/200/150" alt="Podcast" />
        </CardImage>
      </Top>

      <CardContent>
        <Title>How AI is Transforming the Future</Title>
        <Description>A short podcast explaining AI trends and innovations.</Description>
      </CardContent>

      <CardFooter>
        <Creator>
          <Avatar sx={{ width: 22, height: 22 }} />
          <CreatorName>John Doe</CreatorName>
        </Creator>
        <Views>1.2K views</Views>
      </CardFooter>
      <PlayIcon className="play-icon">
        {"video" === "video" ? (
          <PlayArrow style={{ width: "28px" }} />
        ) : (
          <Headphones style={{ width: "28px" }} />
        )}
      </PlayIcon>

    </Card>
  );
}

export default PodcastDetails;

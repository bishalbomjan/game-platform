import { Card, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <GameCardContainer>
        <Card>
          <Image src={getCroppedImage(game.background_image)} />
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between" paddingX="10px">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Card>
      </GameCardContainer>
    </>
  );
};

export default GameCard;

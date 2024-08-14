import React from "react";
import useGenre from "../hooks/useGenres";
import { HStack, Image, Text } from "@chakra-ui/react";
const GenreList = () => {
  const { genres } = useGenre();
  return (
    <>
      {genres.map((genre) => (
        <HStack paddingY={1}>
          <Image src={genre.image_background} boxSize="32px" borderRadius={8} />
          <Text key={genre.id}>{genre.name}</Text>
        </HStack>
      ))}
    </>
  );
};

export default GenreList;

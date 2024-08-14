import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Image, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      {data.map((genre) => (
        <HStack paddingY={1}>
          <Image src={genre.image_background} boxSize="32px" borderRadius={8} />
          <Text key={genre.id}>{genre.name}</Text>
        </HStack>
      ))}
    </>
  );
};

export default GenreList;

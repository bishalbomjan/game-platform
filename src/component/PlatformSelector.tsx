import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform } from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data } = usePlatform();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Plaform
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem onClick={() => onSelectPlatform(platform)}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;

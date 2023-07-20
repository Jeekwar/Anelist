"use client";
import { css } from "@emotion/css";
import Image from "next/image";
import {
  Text,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  const menu = [
    {
      label: "Home",
      href: "",
    },
    {
      label: "Category",
      href: "/category",
    },
    {
      label: "Collection",
      href: "/collection",
    },
  ];

  const color = "white";
  return (
    <Box position={"sticky"} top={0} zIndex={3}>
      <Flex
        justify={"space-between"}
        align={"center"}
        px={12}
        py={4}
        bg={" rgba(21,2,2,0, 0)"}
      >
        <div>
          <Image
            src={
              "/assets/img/anelist-high-resolution-logo-color-on-transparent-background.png"
            }
            width={100}
            height={20}
            alt={""}
          />
        </div>

        <div>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <BiSearch fontSize={24} color="crimson" />
            </InputLeftElement>
            <Input type="tel" placeholder="search" paddingLeft={24} />
          </InputGroup>
        </div>
      </Flex>
    </Box>
  );
};

export default Header;

"use client";
import { useQuery, gql } from "@apollo/client";
import queryList from "@/src/config/query";
import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const ListAnime = ({ ...props }) => {
  const { loading, error, data } = useQuery(queryList.GET_LISTANIME, {
    variables: {
      perPage: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if (data) {
    console.log("data: ", data);
  }

  return (
    <Box p={12} {...props} position={"relative"} background={"black"}>
      <div className="shadow-jumbotron"></div>
      <SimpleGrid
        columns={[2, 5]}
        justifyContent={"center"}
        pt={12}
        spacing={5}
        spacingY={12}
      >
        {data.Page.media.map((item: any, index: number) => {
          return (
            <GridItem key={index}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Flex justify={"center"}>
                  <Image
                    src={item.coverImage.large}
                    width={160}
                    height={240}
                    alt={""}
                    borderRadius="md"
                  />
                </Flex>
                <Flex justify={"center"} height={"100%"}>
                  <Text size={"0.8rem"} color={"white"} align={"center"}>
                    {item.title.romaji}
                  </Text>
                </Flex>
              </motion.div>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ListAnime;

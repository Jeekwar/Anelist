"use client";
import { useQuery, gql } from "@apollo/client";
import queryList from "@/src/config/query";
import { Box, Card, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
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
    <Box p={12} {...props}>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        justifyContent={"center"}
        rowGap={8}
      >
        {data.Page.media.map((item: any, index: number) => {
          return (
            <GridItem key={index} colSpan={1}>
              <Flex justify={"center"}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Card overflow={"hidden"}>
                    <Image
                      src={item.coverImage.large}
                      width={160}
                      height={240}
                      alt={""}
                      borderRadius="md"
                    />
                    <motion.div
                      whileHover={{
                        bottom: 0,
                      }}
                      style={{
                        position: "absolute",
                        bottom: -78,
                        minHeight: "100px",
                        width: "100%",
                        borderRadius: "4px",
                        background:
                          "linear-gradient(to top, black 100%, transparent)",
                      }}
                    >
                      <Flex justify={"center"} height={"100%"}>
                        <Text size={"0.8rem"} color={"white"}>
                          {item.title.romaji}
                        </Text>
                      </Flex>
                    </motion.div>
                  </Card>
                </motion.div>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ListAnime;
"use client";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import ListAnime from "@/src/component/molecules/List";
import { Box, ChakraProvider, Image } from "@chakra-ui/react";
import customTheme from "./theme.styles.global";
import Hero from "../component/molecules/Hero";
import Header from "../component/Header";
import CollectionList from "../component/molecules/Collection";

export default function Home() {
  const client = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new InMemoryCache(),
  });

  return (
    <ChakraProvider theme={customTheme}>
      <ApolloProvider client={client}>
        <>
          <Header />
          <Hero />
          <ListAnime />
          {/* <CollectionList /> */}
        </>
      </ApolloProvider>
    </ChakraProvider>
  );
}

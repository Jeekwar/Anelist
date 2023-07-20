"use client";
import { Box, Image } from "@chakra-ui/react";
import React, {
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import queryList from "@/src/config/query";
import { useQuery } from "@apollo/client";
import { EmblaOptionsType } from "embla-carousel-react";
import EmblaCarouselAutoPlay from "../../template/EmblaCarousel/EmblaCarouselAutoPlay";

const Hero = () => {
  // const { scrollYProgress } = useScroll();

  const { loading, error, data } = useQuery(queryList.GET_LISTANIME, {
    variables: {
      perPage: 10,
    },
  });
  const OPTIONS: EmblaOptionsType = {};
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setList(data.Page.media);
    }

    // console.log("list: ", list);
    // console.log("scrollYProgress: ", scrollYProgress);
    // console.log("translateY: ", translateY);
  }, [data]);

  return (
    <Box position={"sticky"} overflow={"hidden"} top={0}>
      <EmblaCarouselAutoPlay list={list} options={OPTIONS} />
    </Box>
  );
};

export default Hero;

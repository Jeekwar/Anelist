"use client";
import { Box, Image } from "@chakra-ui/react";
import React, { use, useCallback, useEffect, useRef, useState } from "react";
import queryList from "@/src/config/query";
import { useQuery } from "@apollo/client";
import { EmblaOptionsType } from "embla-carousel-react";
import EmblaCarouselAutoPlay from "../../template/EmblaCarousel/EmblaCarouselAutoPlay";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  // const scaleY = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const { loading, error, data } = useQuery(queryList.GET_LISTANIME, {
    variables: {
      perPage: 10,
    },
  });
  const OPTIONS: EmblaOptionsType = {};
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    scrollYProgress.current = 0;
  });

  useEffect(() => {
    if (data) {
      setList(data.Page.media);
    }

    console.log("list: ", list);
    console.log("scrollYProgress: ", scrollYProgress);
    console.log("translateY: ", translateY);
  }, [data, translateY, scrollYProgress]);

  return (
    <Box position={"relative"} overflow={"hidden"} top={0}>
      <EmblaCarouselAutoPlay list={list} options={OPTIONS} />
      <motion.div
        className="shadow-jumbotron"
        style={{
          // scaleY: scaleY,
          translateY: translateY,
        }}
      />
    </Box>
  );
};

export default Hero;

import queryList from "@/src/config/query";
import EmblaCarouselArrow from "../../template/EmblaCarouselArrow";
import { useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CollectionList = () => {
  const { loading, error, data } = useQuery(queryList.GET_LISTCOLLECTION, {
    variables: {
      userName: "johndoe",
    },
  });
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setList(data.Page.media);
      console.log("data Collection: ", data);
    }
  }, [data]);

  return (
    <Box>
      <EmblaCarouselArrow list={list} />
    </Box>
  );
};

export default CollectionList;

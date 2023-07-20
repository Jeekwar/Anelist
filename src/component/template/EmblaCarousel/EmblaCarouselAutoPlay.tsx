import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  options?: EmblaOptionsType;
  list: string[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, list } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {list.map((item: any, index: number) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={item.bannerImage}
                alt="alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

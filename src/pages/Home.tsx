// pages/Home.tsx
import { Box } from "@chakra-ui/react";
import { Hero } from "../components/home-page/Hero";
import { ArtGallery } from "../components/home-page/ArtGallery";
import { Categories } from "../components/home-page/Categories";
import { ArtistSpotlight } from "../components/home-page/ArtistSpotlight";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Home.css";

const Home = () => {
  return (
    <Box>
      <Hero />
      <ArtGallery />
      <Categories />
      <ArtistSpotlight />
    </Box>
  );
};

export default Home;

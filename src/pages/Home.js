import { Announcement } from "../components/Announcement";
import { Categories } from "../components/Categories";
import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </>
  );
};

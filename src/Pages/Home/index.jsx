import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import dropimg from "../../assets/vv.svg";
import { Button } from "flowbite-react";
import CarouselImage from "../../components/CarouselImage/CarouselImage";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Navbar
        navLocation={"Store Location: Lincoln- 344, Illinois, Chicago, USA"}
        stylelocation={{ backgroundColor: "#DAE5DA" }}
        stylenav={{ color: "#2B572E" }}
        naveng={"Eng"}
        navusd={"Usd"}
        imgdown={dropimg}
        imgdrop={dropimg}
        styleEng={{ color: "#2B572E" }}
        styleUsd={{ color: "#2B572E" }}
      />
      {/* <Hero /> */}
      <CarouselImage />
      <Tabs aria-label="Tabs with underline" variant="underline">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Profile tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={MdDashboard}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
      <Button color="blue" pill>
        Blue
      </Button>
      <Button color="blue" pill>
        Blue
      </Button>
      <Button color="blue" pill>
        Blue
      </Button>
     

     

      {/* Slider */}

      {/* card ships */}

      <Footer />
    </>
  );
};

export default Home;

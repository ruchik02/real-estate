import React from "react";
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";

const icon1 = React.createElement(HiShieldCheck, null); // Creating a React element
const icon2 = React.createElement(MdCancel, null); // Creating another React element
const icon3 = React.createElement(MdAnalytics, null);
const data = [
  {
    icon: icon1,
    heading: "Best interest rates on the market",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: icon2,
    heading: "Prevent unstable prices",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: icon3,
    heading: "Best price on the market",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
];
export default data;

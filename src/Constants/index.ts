import { IModalData } from "../Containers/Projects/interfaces";
import cyberImg from "../Images/cyber.jpg";
import laboratoryImg from "../Images/laboratory.jpg";
import streamImg from "../Images/stream.jpg";

export const colors = {
  theme: "#212121",
  orange: "#bf360c",
};

export const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

export const cardData = [
  {
    img: laboratoryImg,
    cardHeading: "Laboratory Instrumental",
    description:
      "A web-based utilization of laboratory techniques and analytical methods to maintain process control and compliance.",
    tools: "ReactJS, Ant Design, TypeScript, Redux tool kit, Hooks",
  },
  {
    img: cyberImg,
    cardHeading: "Thread Informed Defense",
    description:
      "A web-based threat-informed defense platform that empowers enterprises to efficiently assess, organize and optimize their cyber defenses based on a deep understanding of the threats and adversaries that are most relevant to them.",
    tools:
      "ReactJS, TypeScript, Redux tool kit, Hooks, and RTL (React testing library)",
  },
  {
    img: streamImg,
    cardHeading: "Streaming Platform",
    description:
      "The project includes streaming and broadcasting of your video to multiple platforms.",
    tools: "React, Redux-saga, Hooks and TypeScript.",
  },
];

export const modalDataBase: IModalData = {
  img: "",
  description: "",
  cardHeading: "",
  tools: "",
};

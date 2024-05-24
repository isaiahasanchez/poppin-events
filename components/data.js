import {
  FaceSmileIcon,
  DevicePhoneMobileIcon,
  SparklesIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/heart-balloon.jpg";




const benefitOne = {
  title: "Why trust us to plan your next event?",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Professional and Trendsetting Aesthetics",
      desc: "We bring the latest trends and innovative ideas to every event, creating a unique and beautiful experience that reflects your vision.",
      icon: <SparklesIcon />,
    },
    {
      title: "Streamlined Planning",
      desc: "Our efficient planning process saves you time and eliminates stress.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Unmatched Service",
      desc: "We prioritize each customer above all, ensuring unbeatable communication every step of the way.",
      icon: <DevicePhoneMobileIcon />,
    },
  ],
};




export {benefitOne};

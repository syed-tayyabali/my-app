import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { ICompanyLinks } from "../Types";

export const companyDes = [
  {
    title: "Innovation",
    description:
      "We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale.",
  },
  {
    title: "Modernization",
    description:
      "Unleash the value of your existing technology by re-architecting it for the future. We help you modernize platforms and applications for high performance, better user experience, scale, and security.",
  },
  {
    title: "Digitalization",
    description:
      "Automate manual business processes and optimize the customer experience for better efficiency and engagement. We implement intelligent digital platforms and solutions that drive productivity.",
  },
  {
    title: "Augmentation",
    description:
      "Extend your agile development teams with a high-performance partner. We help you accelerate your digital journey through faster software delivery to outpace the competition.",
  },
];

export const companyLinks: ICompanyLinks[] = [
  { link: "https://10pearls.com/", icon: LanguageIcon },
  { link: "https://www.instagram.com/10pearls/", icon: InstagramIcon },
  {
    link: "https://www.facebook.com/10pearls.pakistan?mibextid=LQQJ4d",
    icon: FacebookIcon,
  },
];

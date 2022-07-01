import { v4 as uuidv4 } from "uuid";
import Homepage from "pages/home";

export const links = [
  {
    id: uuidv4(),
    name: "Home",
    url: "/#hero",
    component: <Homepage />,
  },
  {
    id: uuidv4(),
    name: "About",
    url: "/#about",
    component: <Homepage />,
  },
  {
    id: uuidv4(),
    name: "Pricing",
    url: "/#pricing",
    component: <Homepage />,
  },
  {
    id: uuidv4(),
    name: "Contact",
    url: "/#contact",
    component: <Homepage />,
  },
];

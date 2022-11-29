import { CgStopwatch } from "react-icons/cg";
import { FaConciergeBell } from "react-icons/fa";
import { MdOutlineToys } from "react-icons/md";
export const footerLinks = [
  {
    header: "Contact",
    links: ["Email", "Phone", "Adress"],
  },
  {
    header: "Menu",
    links: ["Pizzas", "Drinks", "Desserts"],
  },
  {
    header: "Payment",
    links: ["Visa", "Mastercard", "Paypal"],
  },
  {
    header: "Offers",
    links: ["Happy Hour", "Online deals", "Kids Menu"],
  },
  {
    header: "Stores",
    links: ["Kalamata", "Piraeus", "Agios Dimirios", "Brylissia"],
  },
];

export const homeOffers = [
  {
    header: "Happy Hour",
    headerIcon: <CgStopwatch />,
    timeRange: "Monday-Thursday",
    description: "Add 2 or more large or giga pizzas and get 20% off!",
  },
  {
    header: "-10% Online",
    headerIcon: <FaConciergeBell />,
    timeRange: "Monday-Friday",
    description: "Get -10% by ordering online, through our website or our app!",
  },
  {
    header: "Kids Menu",
    headerIcon: <MdOutlineToys />,
    timeRange: "Always",
    description:
      "Enjoy playfull meals with healthy options for kids and toys included!",
  },
];

export const pizzaOffers = [
  {
    title: "Pizza Special",
    desc: "Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms",
    img: "pizza3",
  },
  {
    title: "Ham Pizza",
    desc: "Tomato sauce, Gouda",
    img: "hampizza",
  },
  {
    title: "Pizza Pepperoni",
    desc: "Peperoni, Bacon, Green pepper, Mushrooms",
    img: "pepperoni",
  },
];

import {
  blackImg,
  blueImg,
  cardicon,
  carrier,
  deli,
  exploreShop,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  multiplepeopleicon,
  specialistTalk,
  tradeIn,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];


export const shopOptions = [
  {
    id: 1,
    imgSrc: tradeIn,
    title: "Don't miss out on extra trade-in credit.",
    subtext: "Get $200–$650 in credit toward iPhone 15 Pro when you trade in iPhone 11 or higher. Offer ends June 3."
  },
  {
    id: 2,
    imgSrc: cardicon,
    title: "Pay over time, interest‑free.",
    subtext: "When you choose to check out with Apple Card Monthly Installments."
  },
  {
    id: 3,
    imgSrc: carrier,
    title: "iPhone carrier deals.\nRight here at Apple.\nFor as low as $0.",
    subtext: "Includes trade‑in and carrier credits. AT&T: up to $1000. T‑Mobile: up to $800. Verizon: up to $830."
  },
  {
    id: 4,
    imgSrc: deli,
    title: "Get flexible delivery and easy pickup.",
    subtext: "Choose two‑hour delivery from an Apple Store, free delivery, or easy pickup options."
  },
  {
    id: 5,
    imgSrc: specialistTalk,
    title: "Shop live with a Specialist.",
    subtext: "Let us guide you live over video and answer all your questions."
  },
  {
    id: 6,
    imgSrc: multiplepeopleicon,
    title: "Get to know your iPhone.",
    subtext: "Learn how to get the most out of your new iPhone with a free one‑on‑one Personal Session."
  },
  {
    id: 7,
    imgSrc: exploreShop,
    title: "Explore a shopping experience designed around you.",
    subtext: "When you shop in the Apple Store app."
  },
]
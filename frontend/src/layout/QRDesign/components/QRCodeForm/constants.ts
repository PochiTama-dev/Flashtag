export const defaultImages = [
  { label: "Facebook", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
  { label: "X", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Twitter_X.png/640px-Twitter_X.png" },
  { label: "Instagram", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" },
  { label: "TikTok", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/640px-Tiktok_icon.svg.png" },
  { label: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/IOS_Google_icon.png/640px-IOS_Google_icon.png" },
  { label: "WhatsApp", url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
  { label: "Tripadvisor", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tripadvisor_Logo_stacked.svg/640px-Tripadvisor_Logo_stacked.svg.png" },
  { label: "Brubank", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Brubank_logo.png/640px-Brubank_logo.png" }
];

export const cornerSquareTypes = [
  { value: "square", img: "assets/formasQR/1.png", label: "Square" },
  { value: "rounded", img: "assets/formasQR/2.png", label: "Rounded" },
  { value: "classy-rounded", img: "assets/formasQR/3.png", label: "Classy Rounded" },
  { value: "classy", img: "assets/formasQR/4.png", label: "Classy" },
  { value: "extra-rounded", img: "assets/formasQR/5.png", label: "Extra Rounded" },
  { value: "dot", img: "assets/formasQR/6.png", label: "Dot" },
];

export const dotTypes = [
  { value: "square", img: "assets/formasQR/1.png", label: "Square" },
  { value: "rounded", img: "assets/formasQR/2.png", label: "Rounded" },
  { value: "classy-rounded", img: "assets/formasQR/3.png", label: "Classy Rounded" },
  { value: "classy", img: "assets/formasQR/4.png", label: "Classy" },
  { value: "extra-rounded", img: "assets/formasQR/5.png", label: "Extra Rounded" },
  { value: "dots", img: "assets/formasQR/6.png", label: "Dots" },
];




export const defaultDesigns = [
  {
    label: "Diseño 1",
    options: {
      dotType: "square",
      cornerSquareColor: "#000000",
      cornerSquareType: "square",
      cornerDotColor: "#000000",
      cornerDotType: "square",
      image: defaultImages[0].url,
      imageSize: 0.4,
      imageMargin: 0,
    },
  },
  {
    label: "Diseño 2",
    options: {
      dotType: "rounded",
      cornerSquareColor: "#1776F2",
      cornerSquareType: "rounded",
      cornerDotColor: "#1776F2",
      cornerDotType: "rounded",
      image: defaultImages[4].url,
      imageSize: 0.5,
      imageMargin: 10,
    },
  },
  {
    label: "Diseño 3",
    options: {
      dotType: "classy-rounded",
      cornerSquareColor: "#C32629",
      cornerSquareType: "classy-rounded",
      cornerDotColor: "#C32629",
      cornerDotType: "classy-rounded",
      image: defaultImages[1].url,
      imageSize: 0.6,
      imageMargin: 5,
    },
  },
  {
    label: "Diseño 4",
    options: {
      dotType: "classy",
      cornerSquareColor: "#CD17F2",
      cornerSquareType: "classy",
      cornerDotColor: "#CD17F2",
      cornerDotType: "classy",
      image: defaultImages[4].url,
      imageSize: 0.4,
      imageMargin: 8,
    },
  },
  {
    label: "Diseño 5",
    options: {
      dotType: "extra-rounded",
      cornerSquareColor: "#3CC326",
      cornerSquareType: "extra-rounded",
      cornerDotColor: "#3CC326",
      cornerDotType: "extra-rounded",
      image: defaultImages[1].url,
      imageSize: 0.5,
      imageMargin: 12,
    },
  },
];
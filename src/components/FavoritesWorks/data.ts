import subbiLogos from "./assets/logos/subbi.webp";
import subbiPreview from "./assets/images/subbi.webp";

import reactLogos from "./assets/logos/react.webp";
import reactPreview from "./assets/images/react.webp";

import storybookLogos from "./assets/logos/storybook.webp";
import storybookPreview from "./assets/images/storybook.webp";

export const PROJECT = [
  {
    images: {
      logos: subbiLogos,
      preview: subbiPreview,
    },
    title: "Subbi –– The free subscriptions manager",
    description:
      "Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
    link: {
      name: "Download App",
      path: "#1",
    },
  },
  {
    images: {
      logos: reactLogos,
      preview: reactPreview,
    },
    title: "React Documentation",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
    link: {
      name: "Visit Site",
      path: "#2",
    },
  },
  {
    images: {
      logos: storybookLogos,
      preview: storybookPreview,
    },
    title: "Storybook Documentation",
    description:
      "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
    link: {
      name: "Visit Site",
      path: "#3",
    },
  },
];

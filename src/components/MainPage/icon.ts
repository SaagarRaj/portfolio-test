// icons/icons.ts
import android from "./icons/icons8-android-studio-color/icons8-android-studio-96.png";
import htmlIcon from "./icons/icons8-html-color/icons8-html-48.png";
import cssIcon from "./icons/icons8-css-windows-11-color/icons8-css-48.png";
import javascriptIcon from "./icons/icons8-javascript-color/icons8-javascript-48.png";
import typescriptIcon from "./icons/icons8-typescript-windows-11-color/icons8-typescript-48.png";
import reactIcon from "./icons/icons8-react-js-color/icons8-react-js-96.png";
import nodeIcon from "./icons/NodeIcon.png";
import tailwindIcon from "./icons/icons8-tailwind-css-windows-11-color/icons8-tailwind-css-96.png";
import MongoDBIcon from "./icons/icons8-mongo-db-color/icons8-mongo-db-96.png";
import pythonIcon from "./icons/icons8-python-color/icons8-python-96.png";
import firebaseIcon from "./icons/icons8-google-firebase-console-color/icons8-google-firebase-console-96.png";
import sqlIcon from "./icons/icons8-sql-50.png";
import linkedInIcon from "./icons/linkedin-brands-solid.svg";
import githubIcon from "./icons/github-brands-solid.svg";
import mailIcon from "./icons/envelope-solid.svg";
import React2 from "./icons/React-2.png";
const icons = {
  android,
  htmlIcon,
  cssIcon,
  javascriptIcon,
  typescriptIcon,
  reactIcon,
  nodeIcon,
  tailwindIcon,
  MongoDBIcon,
  pythonIcon,
  firebaseIcon,
  sqlIcon,
  linkedInIcon,
  githubIcon,
  mailIcon,
  React2,
};

export type IconType = keyof typeof icons;
export default icons;

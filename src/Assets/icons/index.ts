// icons/icons.ts
import androidIcon from './icons/icons8-android-studio-color/icons8-android-studio-96.png';
import htmlIcon from './icons/icons8-html-color/icons8-html-48.png';
import cssIcon from './icons/icons8-css-windows-11-color/icons8-css-48.png';
import javascriptIcon from './icons/icons8-javascript-color/icons8-javascript-48.png';
import typescriptIcon from './icons/icons8-typescript-windows-11-color/icons8-typescript-48.png';
import reactIcon from './icons/React-2.png';
import nodeIcon from './icons/NodeIcon.png';
import tailwindIcon from './icons/icons8-tailwind-css-windows-11-color/icons8-tailwind-css-96.png';
import MongoDBIcon from './icons/icons8-mongo-db-color/icons8-mongo-db-96.png';
import pythonIcon from './icons/icons8-python-color/icons8-python-96.png';
import firebaseIcon from './icons/icons8-google-firebase-console-color/icons8-google-firebase-console-96.png';
import sqlIcon from './icons/icons8-sql-50.png';
import linkedInIcon from './icons/linkedin-brands-solid.svg';
import githubIcon from './icons/github-brands-solid.svg';
import mailIcon from './icons/envelope-solid.svg';
import awsIcon from './icons/aws.png';
import awsDynamoDbIcon from './icons/DynamoDB.png';
import awsElastiCacheIcon from './icons/ElastiCache.png';
import redisIcon from './icons/redis.png';
import memcachedIcon from './icons/memcached.png';
import kafkaIcon from './icons/Managed Streaming for Apache Kafka.png';

const icons = {
  androidIcon,
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
  awsDynamoDbIcon,
  awsElastiCacheIcon,
  awsIcon,
  redisIcon,
  memcachedIcon,
  kafkaIcon,
};

export type IconType = keyof typeof icons;
export default icons;

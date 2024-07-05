import green1 from "../assets/projects/Green-Plant1.jpg";
import green2 from "../assets/projects/Green-Plant2.jpg";
import green3 from "../assets/projects/Green-Plant3.jpg";
import green4 from "../assets/projects/Green-Plant4.jpg";
import green5 from "../assets/projects/Green-Plant5.jpg";
import analyzer1 from "../assets/projects/Analyzer1.jpg";
import analyzer2 from "../assets/projects/Analyzer2.jpg";
import analyzer3 from "../assets/projects/Analyzer3.jpg";
import analyzer4 from "../assets/projects/Analyzer4.jpg";
import analyzer5 from "../assets/projects/Analyzer5.jpg";
import eye1 from "../assets/projects/Eye-Care.jpg";
import eye2 from "../assets/projects/Eye-Care (1).jpg";
import eye3 from "../assets/projects/Eye-Care (2).jpg";
import eye4 from "../assets/projects/Eye-Care (3).jpg";
import eye5 from "../assets/projects/Eye-Care (4).jpg";
import eye6 from "../assets/projects/Eye-Care (5).jpg";

export const projectData = [
  {
    _id: 1,
    name: "Green Plant",
    title: "A Plant Selling Website",
    live_link: "https://green-plant-247.web.app/",
    client_link: "https://github.com/suman-chandra-barman/green-plant",
    server_link: "https://github.com/suman-chandra-barman/green-plant-server",
    features: [
      "Users can register and log in as a buyer with an email-password or Google.",
      "Buyers can click on the product to see all the information about the product.",
      "The customer can add any product to his card and order by paying money with the card.",
    ],
    technology: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Firebase",
    ],

    images: [green1, green2, green3, green4, green5],
    descriptions:
      "This is a plant selling website. User can buy the plants of his choice from this site. In this project I used React JS, React Router, Bootstrap, NodeJS, ExpressJS, MongoDB, Firebase and more.",
  },
  {
    _id: 2,
    name: "Analyzer",
    title: "A income and expense analyzer application",
    live_link: "A income and expense analyzer application",
    client_link:
      "https://github.com/suman-chandra-barman/used_laptop_shop_serverside",
    server_link:
      "https://github.com/suman-chandra-barman/used_laptop_shop_clientside",
    features: [
      "Users can store his income-expenditure by date, time and category.",
      " He can see his remaining balance income expenditure amount and all his transactions",
      " The picture of how much total income has come from which sector and how much expenditure has been spent on which sector can be seen.",
    ],
    technology: [
      "React.js",
      "JavaScript",
      "Tailwind",
      "React Router",
      "Material UI",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Firebase",
    ],

    images: [analyzer1, analyzer2, analyzer3, analyzer4, analyzer5],
    descriptions:
      "A income and expense analyzer application.Through this application you can keep and view the final account of your income - expenditure. In this project I used React JS, React Router,Tailwind, DaisyUI, NodeJS, ExpressJS, MongoDB, Firebase and more.",
  },
  {
    _id: 3,
    name: "Eye Care",
    title: "Eye doctor consultation website",
    live_link: "https://eye-care-service.web.app/",
    client_link: "https://github.com/suman-chandra-barman/eye-care",
    server_link: "https://github.com/suman-chandra-barman/eye-care-server",
    features: [
      "Users can register and log in as a buyer with an email-password or Google",
      "On the service details page, patients can see service details information and the feedback of other patients in this service.",
      " After login you can give feedback on the service you have taken.",
    ],
    technology: [
      "React",
      "React Router",
      "Tailwind",
      "DaisyUI",
      "Node JS",
      "Express JS",
      "Mongodb",
      "Firebase",
    ],

    images: [eye1, eye2, eye3, eye4, eye5, eye6],
    descriptions:
      "Eye doctor consultation website. The patient can contact the doctor and get the desired service through this site. I used In this project React JS, React Router, Tailwind CSS, DaisyUI, NodeJS, ExpressJS, MongoDB, Firebase and more.",
  },
];

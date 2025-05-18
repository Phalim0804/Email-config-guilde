import React from "react";
import ArrayList from "../../ListData/Arraylist";
import Sent1 from "../../../assets/Outlook/Guilde/step1.png";
import Sent2 from "../../../assets/Outlook/Guilde/step2.png";

const data = [
  {
    title: "Step 1",
    image: Sent1,
    text: <li>Click the 'New Mail' button in the top left toolbar.</li>,
  },
  {
    title: "Step 2",
    image: Sent2,
    text: <li>Type your message in the main body area and press send.</li>,
  },
  
];

const guild = () => {
  return (
    <div>
      <ArrayList data={data} />
    </div>
  );
};

export default guild;

import React, { useState } from "react";
import './Accordion.css'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const Accordion = ({question, answer, sNo}) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const handleAccordion =() =>{
    setShowAnswer(!showAnswer)

  }
  return (
    <div className="accordion_container">
      <div className="accordion_question" onClick={handleAccordion}>
        <div className="accordion_sNo">0{sNo}</div>
        <div className="accordion_data">{question}</div>
        <div className="accordion_logo">
          {
            showAnswer ? 
            <ExpandLessIcon />
            : 
            <ExpandMoreIcon />
          }
        </div>
      </div>
      {
        showAnswer &&
        <div className="accordion_answer">
          {answer}
        </div>
        
      }
      </div>
  );
};

export default Accordion;

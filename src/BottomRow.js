import React, {useState} from "react";
import "./App.css";

function BottomRow(){
  
  const [quarter, quarterScore] = useState(0);
  const [ball, setballOn] = useState(0);
  const [injury, setInjury] = useState(0);
  
  


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">injuries</h3>
        <div className="down__value"onClick ={() => setInjury(injury + 1)} >{injury}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value"onClick ={() => setballOn(ball + 10)}>{ball}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">half</h3>
        <div className="quarter__value"onClick ={()=> quarterScore(quarter + 1)}>{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;

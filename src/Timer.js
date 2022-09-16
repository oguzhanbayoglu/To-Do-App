import React, { useState } from "react";

function Timer() {
  const [count, setcount] = useState(0);
  function updateTime() {
    setcount(() => count + 1);
  }

  const tmo = setTimeout(updateTime, 1000);

  setTimeout(console.log("a"), 1000);

  if (count > 10) {
    clearTimeout(tmo);
  }

  return <div className="timer">{count}</div>;
}

export default Timer;

import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushi] = useState ([])
  const [] = useState()

  useEffect (async ()  => {
    const res = await fetch(API)
    const sushiData = await res.json()

  setSushi(sushiData)

  }, [])

  return (
    <div className="app">
      <SushiContainer />
      <Table />
    </div>
  );
}

export default App;

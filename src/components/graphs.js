import React, { Component } from "react";
// <!-- import Sensor from "./Sensor.js"; -->

const Graph = () => {
  return (
    <div>
      {/* <h1>ESW - Smart Farming </h1> */}
      <div className="lol">
        <iframe
          width="450"
          height="260"
          style="border: 1px solid #cccccc;"
          src="https://thingspeak.com/channels/1904954/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
        ></iframe>
      </div>
      ;
    </div>
  );
};

export default Graph;

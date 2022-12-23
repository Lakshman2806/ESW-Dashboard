import React, { Component } from "react";
import { useEffect, useState } from "react";

const Sensor = () => {
  // fields1 = [];
  // fields2 = [];
  // fields3 = [];
  // fields4 = [];
  // fields5 = [];
  // // const [fields1, setfields1];
  const [fields1, setfields1] = useState([]);
  const [fields2, setfields2] = useState([]);
  const [fields3, setfields3] = useState([]);
  const [fields4, setfields4] = useState([]);
  const [fields5, setfields5] = useState([]);

  const updateValues = async () => {
    let url1 = "https://api.thingspeak.com/channels/1904954/fields/1.json";
    let data1 = await fetch(url1);
    let parseddata1 = await data1.json();

    let url2 = "https://api.thingspeak.com/channels/1904954/fields/2.json";
    let data2 = await fetch(url2);
    let parseddata2 = await data2.json();

    let url3 = "https://api.thingspeak.com/channels/1904954/fields/3.json";
    let data3 = await fetch(url3);
    let parseddata3 = await data3.json();

    let url4 = "https://api.thingspeak.com/channels/1904954/fields/4.json";
    let data4 = await fetch(url4);
    let parseddata4 = await data4.json();

    let url5 = "https://api.thingspeak.com/channels/1904954/fields/5.json";
    let data5 = await fetch(url5);
    let parseddata5 = await data5.json();
    // console.log(parseddata.feeds);
    // this.setState({ fields1: parseddata1.feeds });
    // this.setState({ fields2: parseddata2.feeds });
    // this.setState({ fields3: parseddata3.feeds });
    // this.setState({ fields4: parseddata4.feeds });
    // this.setState({ fields5: parseddata5.feeds });
    setfields1(parseddata1.feeds);
    setfields2(parseddata2.feeds);
    setfields3(parseddata3.feeds);
    setfields4(parseddata4.feeds);
    setfields5(parseddata5.feeds);
  };

  // useEffect(() => {
  //   updateValues();
  // }, []);

  useEffect(() => {
    // first
    updateValues();
    return () => clearInterval(updateValues);
  }, [fields1, fields2, fields3, fields4, fields5]);

  // render() {
  // console.log(this.fields)
  // let title = "THIS";
  let value1 = "loading";
  let value2 = "loading";
  let value3 = "loading";
  let value4 = "loading";
  let value5 = "loading";

  {
    fields1.map((element) => {
      if (element.field1 != null) value1 = element.field1;
    });
  }
  {
    fields2.map((element) => {
      if (element.field2 != null) value2 = element.field2;
    });
  }
  {
    fields3.map((element) => {
      if (element.field3 != null) value3 = element.field3;
    });
  }
  {
    fields4.map((element) => {
      if (element.field4 != null) value4 = element.field4;
    });
  }
  {
    fields5.map((element) => {
      if (element.field5 != null) value5 = element.field5;
    });
  }

  // console.log(value);
  return (
    <div className="con">
      <div id="root">
        <div className="container pt-5">
          <div className="row align-items-stretch">
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  CO2
                  <svg
                    className="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span className="hind-font caption-12 c-dashboardInfo__count">
                  {value1}
                </span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Mositure
                  <svg
                    className="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span className="hind-font caption-12 c-dashboardInfo__count">
                  {value2}
                </span>
                {/* <span className="hind-font caption-12 c-dashboardInfo__subInfo">
                  Exceeded the limit
                </span> */}
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Temperature
                  <svg
                    className="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span className="hind-font caption-12 c-dashboardInfo__count">
                  {value3}
                </span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Humidity
                  <svg
                    className="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span className="hind-font caption-12 c-dashboardInfo__count">
                  {value4}
                </span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Luminosity
                  <svg
                    className="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span className="hind-font caption-12 c-dashboardInfo__count">
                  {value5}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>GRAPHS</h1>
      <div className="lol">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1904954/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
        ></iframe>
      </div> */}
    </div>
  );
};
// }
export default Sensor;

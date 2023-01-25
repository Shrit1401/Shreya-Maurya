import HorizontalTimeline from "react-horizontal-timeline";
import React from "react";
import { TiMELINE_VALUES, timeline } from "@/data/data";

export default class Tabs extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <>
        <div className="bg-white mt-14 w-full pt-14  pb-32" id="timeline">
          <h1 className="beatrice text-center mt-10 text-black ml-0 sm:ml-5 text-[3rem] sm:mb-16 mb-0 sm:text-[5rem] whitespace-nowrap">
            Timeline
          </h1>
          {/* Bounding box for the Timeline */}
          <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
            <HorizontalTimeline
              index={this.state.value}
              indexClick={(index) => {
                this.setState({ value: index, previous: this.state.value });
              }}
              values={TiMELINE_VALUES}
            />
          </div>
          <div className="text-center  adiue sm:pl-56 sm:pr-56 pl-14 pr-14 text-black">
            {/* any arbitrary component can go here */}
            <h1 className="sm:text-6xl text-2xl text-left adiue">
              {timeline[this.state.value].title}
            </h1>

            <p className="sm:text-3xl text-lg text-left adiue">
              {timeline[this.state.value].description}
            </p>
          </div>
        </div>
        <div className="gradient" />
      </>
    );
  }
}

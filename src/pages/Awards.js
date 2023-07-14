import React from "react";
import "../styles/Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import GoldMedal from "../assets/markusCWSF_large.jpg";
import Hillier from "../assets/hillier.jpg";

function Awards() {
  return (
    <div className="awards">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--award"
          date="2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<EmojiEventsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Schulich Leader Scholarship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Toronto
          </h4>
          <p>
            Received one of the fifty Schulich Leader Scholarships awarded
            across Canada. This is Canada's most coveted undergraduate STEM
            scholarship, valued at $100,000. I was one of the two students
            chosen from U of T Engineering.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--award"
          date="2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<EmojiEventsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Canada Wide Science Fair Excellence Award - Senior Gold Medalist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Youth Science Canada
          </h4>
          <img
            className="horizontalImg"
            src={GoldMedal}
            alt="CWSF Gold Medal"
          />
          <p>
            Recieved a gold medal from the 2018 Canada Wide Science Fair in the
            senior division for my engineering project "The Echo Belt", a
            navigation aid for the visually impaired. A gold medal excellence
            award is given to the top 10 projects for each age category.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--award"
          date="2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<EmojiEventsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            James Hillier Foundation Scholarship{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            James Hillier Foundation
          </h4>
          <img
            className="verticalImg"
            src={Hillier}
            alt="Hillier Scholarship"
          />
          <p>
            One of three recipients of a $20,000 scholarship awarded to
            graduating students in Brant County pursuing a degree in STEM.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Awards;

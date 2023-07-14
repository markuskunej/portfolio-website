import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";
import "../styles/Timeline.css";
import Button from "@material-ui/core/Button";

function Media() {
  return (
    <div className="media">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--article"
          date="June 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            "Meet U of T Engineering Schulich Leaders who want to make a
            difference on campus and in the world"
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Toronto Engineering News
          </h4>
          <p>
            <Button
              variant="contained"
              href="https://news.engineering.utoronto.ca/meet-u-of-t-engineering-schulich-leaders-who-want-to-make-a-difference-on-campus-and-in-the-world/"
            >
              View Article
            </Button>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--article"
          date="June 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            "Meet U of T's four Schulich Leaders who want to make a difference
            on campus and in the world"
          </h3>
          <h4 className="vertical-timeline-element-subtitle">U of T News</h4>
          <p>
            <Button
              variant="contained"
              href="https://www.utoronto.ca/news/meet-u-t-s-four-schulich-leaders-who-want-make-difference-campus-and-world"
            >
              View Article
            </Button>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--article"
          date="June 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            "He's top of the class"
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The Brantford Expositor
          </h4>
          <p>
            <Button
              variant="contained"
              href="https://www.brantfordexpositor.ca/2018/06/25/hes-top-of-the-class"
            >
              View Article
            </Button>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--article"
          date="June 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            "North Park Collegiate Grad Earns Significant Scholarship"
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Grand Erie District School Board
          </h4>
          <p>
            <Button
              variant="contained"
              href="https://www.granderie.ca/board/community/newsroom/feature-stories/2017-18/north-park-collegiate-grad-earns-significant-scholarship"
            >
              View Article
            </Button>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--article"
          date="June 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            "Students receive Hillier scholarships"
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The Brantford Expositor
          </h4>
          <p>
            <Button
              variant="contained"
              href="https://www.brantfordexpositor.ca/2018/06/13/students-receive-hillier-scholarships"
            >
              View Article
            </Button>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Media;

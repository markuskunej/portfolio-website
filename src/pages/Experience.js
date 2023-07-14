import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Toronto, Toronto, Ontario
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Applied Science in Engineering Science
          </h4>
          <p>
            Engineering Science, Majoring in Machine Intelligence with a
            Certificate in Engineering Business
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021-2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - Huawei Technologies Canada
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Markham, ON</h4>
          <p>
            Worked on Huawei's open-source AI computing framework, Mindspore:
          </p>
          <p>
            <ol style={{ listStyleType: "disc" }}>
              <li>
                Developed a new feature to offload dataset operations from the
                CPU to GPU or Huawei’s Ascend accelerator (C++, Python). This
                improved training speeds on networks like ResNet and AlexNet.
              </li>
              <li>
                Wrote CPU, GPU, and/or Huawei Ascend kernels (C++, CUDA) for
                Mindspore operations. Created unit tests for them (bash,
                python).
              </li>
              <li>
                Ran performance tests of AI networks (ResNet, MobileNet, etc.).
                Analyzed loss, accuracy and memory data to find bottlenecks.
              </li>
            </ol>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hardware Engineer Intern - Untether AI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            Assisted with the launch of their first AI chip, the speedAI240,
            through the following tasks:
          </p>
          <p>
            <ol style={{ listStyleType: "disc" }}>
              <li>
                Wrote python scripts to test the boundary scan architecture
                (JTAG) of the chip
              </li>
              <li>
                Developed firmware to control their board's GPIO pins and
                voltages
              </li>
              <li>Created RTL tests using cocotb and Synopses VCS</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            North Park Collegiate and Vocational School, Brantford, Ontario
          </h3>
          <p> Ontario Secondary School Diploma </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

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
                CPU to either a GPU or AI accelerator device, reducing training
                times by 20% on networks such as ResNet and AlexNet. (C++,
                Python)
              </li>
              <li>
                Wrote CPU, GPU, and AI accelerator kernels for MindSpore
                operations, allowing for additional AI networks to be supported
                by their AI framework. (C++, CUDA)
              </li>
              <li>
                Created and ran performance tests on AI networks, analyzing
                loss, accuracy and memory data to locate bottlenecks in the
                system. (Bash, Python)
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
            Assisted with the launch of their first AI chip, the runAI200®,
            through the following tasks:
          </p>
          <p>
            <ol style={{ listStyleType: "disc" }}>
              <li>
                Designed Python scripts to test the boundary scan architecture
                (JTAG) of their first-generation AI chip, the runAI200®. Ran
                these scripts on a FPGA device in the lab. (Python, Bash)
              </li>
              <li>
                Wrote firmware used to control the General Purpose Input/Output
                pins and voltages on the tsunAImi® accelerator card. (C)
              </li>
              <li>
                Created register-transfer level (RTL) tests using the cocotb
                verification framework and Synopsys VCS verification. (Python)
              </li>
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

import Thesis from "../assets/Air-pollution-city.webp";
import Capstone from "../assets/remmie.png";
import DistrSys from "../assets/distr_sys.jpg";
import MatchPredictor from "../assets/soccer-ball-goal.webp";
import Rps from "../assets/rps.jpg";
import Chess from "../assets/chess.jpg";
import EchoBelt from "../assets/echobelt.jpg";

export const ProjectList = [
  {
    name: "Forecasting Air Pollution - Undergrad Thesis",
    image: Thesis,
    description:
      "Modelled air pollution levels in heavy construction sites in downtown Toronto as part of my undergraduate thesis project. I treated this as a multi-variate time series problem, utilizing Vector Auto Regressive Moving Average Models to accurately (80%+) predict short-term air pollution levels, and performed Sobol Sensitivity Analysis to understand the first and secondary correlations between the various air pollutants and weather data. The result was that 5 out of the 8 air pollutants were most influenced by a weather variable (wind speed, humidity, etc.), rather then the pollutant's own past values as one would expect.",
    skills:
      "Python, Numpy, Jupyter Notebook, Statistical Modelling, Sensitivity Analysis, Research Document Writing",
    link: "https://github.com/markuskunej/air-pollution-thesis",
  },
  {
    name: "Diagnosing Ear Disease using ML",
    image: Capstone,
    description:
      "4th Year Capstone Project with Remmie Health. The goal was to improve their consumer otoscope (camera for ears) by utilizing machine learning to help identify cases of ear infection (Otitis Media) without the need for a doctor. The goal evolved into improving the quality of photos that users would take through the use of a object detection network, by locating various landmarks of the ear canal.",
    skills: "Python, Machine Learning, Pytorch, Object Detection, AWS S3",
    link: "",
  },
  {
    name: "Soccer Match Predictor",
    image: MatchPredictor,
    description:
      "Used a Multi-Layer Perceptron network to predict the outcome of professional soccer matches in the English Premier League. Statistical analysis (boxplots, histograms, density graphs) was done to select only the most significant input variables.",
    skills: "Python, Machine Learning, Pytorch, Data Analysis, Web Scraping",
    link: "https://github.com/markuskunej/MatchPredictor",
  },
  {
    name: "Distributed Cloud Storage Service",
    image: DistrSys,
    description:
      "Distributed and Replicated storage service with message encryption created for ECE419: Distributed Systems",
    skills:
      "Java, Scalable Storage, Key-Value Storage, External Configuration Service, Server Failure Detection & Reconciliation, Consistent Hashing, Data Replication, Message Encryption",
    link: "https://github.com/ds-uot/ms3-gr45",
  },
  {
    name: "Modified Rock Paper Scissors Agent",
    image: Rps,
    description:
      "Modified RPS (Rock Paper Scissors) game agent created for ROB311: Intro to Artificial Intelligence. Utilizes a discrete markov chain with decay.",
    skills: "Python, AI Game Agent, Discrete Markov Chains, Numpy",
    link: "https://github.com/markuskunej/Modified-RPS-Agent",
  },
  {
    name: "Python Chess AI",
    image: Chess,
    description:
      "Python chess engine created in CSC190, Data structures and algorithms at the University of Toronto. Features an adjustable depth, general tree storing and traversal, and an alpha-pruning algorithm to increase the efficiency of the program.",
    skills:
      "Python, General Tree Storage and Traversal, Alpha-beta Pruning Search",
    link: "https://github.com/markuskunej/chessAI",
  },
  {
    name: "The Echo Belt",
    image: EchoBelt,
    description:
      "A mobility aid I created for the visually impaired. It is a belt with 6 ultrasonic sensors and vibration motors which alert the wearer of obstacles around them using haptic feedback.",
    skills:
      "Arduino, Circuit Design, Soldering, Poster Board Design, Public Speaking",
    link: "https://github.com/markuskunej/The-Echo-Belt",
  },
];

import Thesis from "../assets/papers/Thesis_Markus.pdf";
import Capstone from "../assets/papers/Capstone_Paper_Remmie.pdf";
import MatchPredictor from "../assets/papers/MatchPredictor_Report.pdf";
import Music from "../assets/papers/AI_Music_Ethics.pdf";

import MatchPredictorImg from "../assets/soccer-ball-goal.webp";
import CapstoneImg from "../assets/remmie.png";
import ThesisImg from "../assets/Air-pollution-city.webp";
import MusicImg from "../assets/openai-jukebox.png.webp";

export const PaperList = [
  {
    name: "Forecasting Air Pollution - Undergrad Thesis",
    image: ThesisImg,
    description:
      "Modelled air pollution levels in heavy construction sites in downtown Toronto as part of my undergraduate thesis project. I treated this as a multi-variate time series problem, utilizing Vector Auto Regressive Moving Average Models to accurately (80%+) predict short-term air pollution levels, and performed Sobol Sensitivity Analysis to understand the first and secondary correlations between the various air pollutants and weather data. The result was that 5 out of the 8 air pollutants were most influenced by a weather variable (wind speed, humidity, etc.), rather then the pollutant's own past values as one would expect.",
    file: Thesis,
  },
  {
    name: "Remmie Health Capstone Report",
    image: CapstoneImg,
    description:
      "4th Year Capstone Project with Remmie Health. The goal was to improve their consumer otoscope (camera for ears) by utilizing machine learning to help identify cases of ear infection (Otitis Media) without the need for a doctor. The goal evolved into improving the quality of photos that users would take through the use of a object detection network, by locating various landmarks of the ear canal.",
    file: Capstone,
  },
  {
    name: "Soccer Match Predictor Report",
    image: MatchPredictorImg,
    description:
      "Used a Multi-Layer Perceptron network to predict the outcome of professional soccer matches in the English Premier League. Statistical analysis (boxplots, histograms, density graphs) was done to select only the most significant input variables.",
    file: MatchPredictor,
  },
  {
    name: "The Treble with AI-Generated Music",
    image: MusicImg,
    description:
      "An exploration of the ethical implications resulting from AI-generated art, specifically generative adversarial networks (GANs) and OpenAI's music generative system, Jukebox. Three different ethical frameworks, Consequentialist, Duty, and Virtue are used to provide varying viewpoints.",
    file: Music,
  },
];

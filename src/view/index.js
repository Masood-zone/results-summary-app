import React from "react";
import Container from "../components/container";
import ScoreBoard from "../components/scoreBoard/score";
import BlueCard from "../components/card/card";
import SummaryCard from "../components/card/summaryCard";
import "../index.css";
import Button from "../components/button/button";
import Bar from "../components/bar/bar";
import reactIcon from "../assets/images/icon-reaction.svg";
import memoryIcon from "../assets/images/icon-memory.svg";
import verbalIcon from "../assets/images/icon-verbal.svg";
import visualIcon from "../assets/images/icon-visual.svg";

const ResultsPage = () => {
  return (
    <div>
      <Container>
        <BlueCard heading="Your result">
          <ScoreBoard score="76" />
          <div className="flex flex-col items-center mt-4 w-[75%] ">
            <h2 className="text-3xl font-semibold text-white mb-3">Great</h2>
            <p className="ash-text">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </BlueCard>
        <SummaryCard title="Summary">
          <div className="flex flex-col w-full mx-auto">
            <Bar
              icon={reactIcon}
              text="Reaction"
              score="80"
              color="hsl(0, 100%, 67%)"
              backgroundColor="hsl(0, 100%, 67%)"
            />
            <Bar
              icon={memoryIcon}
              text="Memory"
              score="90"
              color="hsl(39, 100%, 56%)"
              backgroundColor="hsl(39, 100%, 56%)"
            />
            <Bar
              icon={verbalIcon}
              text="Verbal"
              score="61"
              color="hsl(166, 100%, 37%)"
              backgroundColor="hsl(166, 100%, 37%)"
            />
            <Bar
              icon={visualIcon}
              text="Visual"
              score="72"
              color="hsl(234, 85%, 45%)"
              backgroundColor="hsl(234, 85%, 45%)"
            />
          </div>
          <Button title="Continue" />
        </SummaryCard>
      </Container>
    </div>
  );
};

export default ResultsPage;

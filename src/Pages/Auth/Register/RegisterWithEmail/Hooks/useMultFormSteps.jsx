import React, { useState } from "react";

export const useMultFormSteps = ({ steps, stepInitial }) => {
  const [step, setStep] = useState(stepInitial || 0);
  const HandleNext = () => {
    setStep(step + 1);
  };
  const HandlePrev = () => {
    setStep(step - 1);
  };
  const HandleNaviateTo = (index) => {
    setStep(index);
  };
  return {
    HandleNext,
    HandlePrev,
    HandleNaviateTo,
    step,
    isFirst: step === 0,
    isLast: step + 1 === steps.length,
    RenderedElement: steps[step].element,
    stepsLength: steps.length,
    steps,
  };
};

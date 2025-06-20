interface IndicatorProps {
  step: number;
}

export default function Indicator({ step }: IndicatorProps) {
  const getIndicatorColor = (index: number) => {
    if (step) {
      const color = step === index ? "bgPurple" : "bgWhite";
      return color;
    }
    return "bgColor";
  };

  return (
    <div className="flex gap-[10px]">
      <div
        className={`h-[8px] w-[8px] rounded-[8px] ${getIndicatorColor(1)}`}
      />
      <div
        className={`h-[8px] w-[8px] rounded-[8px] ${getIndicatorColor(2)}`}
      />
      <div
        className={`h-[8px] w-[8px] rounded-[8px] ${getIndicatorColor(3)}`}
      />
    </div>
  );
}

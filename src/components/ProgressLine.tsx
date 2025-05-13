import { FC, useEffect, useState } from "react";

interface IProgressLine {
  label: string;
  visualParts: {
    percentage: string;
    color: string;
  }[];
}

export const ProgressLine: FC<IProgressLine> = ({
  label,
  visualParts = [
    {
      percentage: "0%",
      color: "white",
    },
  ],
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return "0%";
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <div className="d-flex flex-row align-items-center progressBar">
      <div className="progressBar-label me-4">{label}</div>
      <div
        className="progressBar-full w-100 d-flex flex-row rounded-4"
        style={{
          backgroundColor: "rgba(188, 188, 192, 0.5)",
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index],
                backgroundColor: item.color,
              }}
              className="progressBar-part rounded-5"
            />
          );
        })}
      </div>
    </div>
  );
};

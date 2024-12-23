import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div style={{ margin: "20px 0" }}>
      <div
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#ddd",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
            transition: "width 0.3s",
          }}
        ></div>
      </div>
      <p>
        {current}/{total}
      </p>
    </div>
  );
};

export default ProgressBar;

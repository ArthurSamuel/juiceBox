import React from "react";
import styles from "./Icon.module.css";

interface IconProps {
  children: React.ReactElement;
  onClick(): void;
  width?: number;
  height?: number;
}

export default function Icon({ children, onClick, height, width }: IconProps) {
  return (
    <div
      className={styles.iconContainer}
      onClick={onClick}
      style={{ height, width }}
    >
      {children}
    </div>
  );
}

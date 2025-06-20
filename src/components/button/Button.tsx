"use client";

import styles from "./Button.module.css";

interface IButton {
  color: "Primary" | "Secondary" | "Transparent";
  text: string;
  onClick(): void;
}

export default function Button({ color, onClick, text }: IButton) {
  const textColor = color === "Transparent" ? "var(--white)" : "var(--black)";

  const getAttribute = () => {
    switch (color) {
      case "Primary":
        return {
          bg: "var(--purple)",
          border: "transparent",
        };
      case "Secondary":
        return {
          bg: "var(--white)",
          border: "5px solid #242528",
        };
      case "Transparent":
        return {
          bg: "transparent",
          border: "1px solid rgba(255, 255, 255, 0.6)",
        };
    }
  };

  const attribute = getAttribute();

  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: attribute.bg,
        border: attribute.border,
        color: textColor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

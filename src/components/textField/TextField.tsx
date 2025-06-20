import Image from "next/image";
import style from "./TextField.module.css";

interface TextFieldProps {
  onClick(): void;
  onChange(value: string): void;
  placholder: string;
  value: string;
}

export default function TextField({
  onClick,
  onChange,
  placholder,
  value,
}: TextFieldProps) {
  const handleOnClick = () => {
    onClick();
  };

  const handleOnChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        placeholder={placholder}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <div className={style.iconContainer} onClick={handleOnClick}>
        <Image
          alt="icon-arrow"
          src="/assets/arrow-up.svg"
          width={10}
          height={13}
        />
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Icon from "../icon/Icon";
import NavbarVectorIcon from "./__components/NavbarVectorIcon";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const shouldShowBackButton = pathname !== "/";

  const handleOnGoBackClick = () => {
    router.back();
  };

  const handleOnReloadClick = () => {
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center moduleSpacingTop moduleSpacingBottom moduleSpacingLeft moduleSpacingRight">
      <div style={{ visibility: shouldShowBackButton ? "inherit" : "hidden" }}>
        <Icon width={46} height={46} onClick={handleOnGoBackClick}>
          <Image
            alt="icon-left"
            src="/assets/arrow-left.svg"
            width={13}
            height={13}
          />
        </Icon>
      </div>
      <div>
        <NavbarVectorIcon />
      </div>
      <div>
        <Icon width={46} height={46} onClick={handleOnReloadClick}>
          <Image alt="reload" src="/assets/reload.svg" width={13} height={13} />
        </Icon>
      </div>
    </div>
  );
}

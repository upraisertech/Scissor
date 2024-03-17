import React from "react";
import { Icon } from "@iconify/react";
// import { SelectedPage } from "./types";


type Props = {
  showPasswordToggle: any;
  onClick: any;
};

const ShowHidePassword = ({ showPasswordToggle, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className="toggle-password-button">
      {showPasswordToggle ? (
        <Icon icon="mdi:eye" className="w-[24px]" color="#0065FE" />
        ) : (
          <Icon icon="mdi:eye-off" className="w-[24px]" color="#0065FE" />
      )}
    </button>
  );
};

export default ShowHidePassword;

type ConfirmProps = {
  confirmPasswordToggle: any;
  onClick: any;
};
export const ConfirmPassword = ({ confirmPasswordToggle, onClick } : ConfirmProps) => {
  return (
    <button type="button" onClick={onClick} className="toggle-password-button">
      {confirmPasswordToggle ? (
           <Icon icon="mdi:eye" className="w-[24px]" color="#d0c9d6" />
      ) : (
        <Icon icon="mdi:eye-off" className="w-[24px]" color="#d0c9d6" />
      )}
    </button>
  );
};


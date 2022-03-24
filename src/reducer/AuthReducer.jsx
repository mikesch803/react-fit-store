import { PassWordNotShowIcon, PassWordShowIcon } from "../icons/icons";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FIELD":
      return {
        ...state,
        field: { ...state.field, [action.payload.name]: action.payload.value },
      };

    case "CHANGE_TYPE":
      return state.passwordType === "text"
        ? {
            ...state,
            passwordType: "password",
            showPasswordIcon: <PassWordNotShowIcon />,
          }
        : {
            ...state,
            passwordType: "text",
            showPasswordIcon: <PassWordShowIcon />,
          };

    default:
      return state;
  }
};

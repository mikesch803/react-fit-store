import { PassWordNotShowIcon, PassWordShowIcon } from "../icons/icons";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FIELD":
      return {
        ...state,
        field: { ...state.field, [action.payload.name]: action.payload.value },
      };

    case "EMAIL_ERR":
      return state.field.email.indexOf('@') === -1 ? {
        ...state, emailErrState:true
      } : {...state, emailErrState : false }

    case "PASSWORD_ERR":
      return state.field.password.length < 8 ? {
        ...state, passwordErrState:true
      } : {...state, passwordErrState: false}

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

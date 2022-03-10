import { colors } from "../../constants";

export const styles = {
  btn: {
    justifyContent: "center",
    width: "320px",
    height: "56px",
    backgroundColor: colors["darkBlue"],
    color: "white",
    alignItems: "center",
    fontSize: "16px",
    borderRadius: "32px",
    marginTop: "32px",
    marginLeft: "auto",
    marginRight: "auto",
    "&:hover": {
      cursor: "pointer",
    },
  },
};

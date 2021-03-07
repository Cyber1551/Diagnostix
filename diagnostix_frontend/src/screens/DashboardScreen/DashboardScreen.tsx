import { useRadioGroup } from "@material-ui/core";
import React, { FC } from "react";
import TopBarComponent from "../../components/TopBarComponent";
import { useUserContext } from "../../context/UserContext";
import CardDashboardScreen from "../CardDashboardScreen";


const DashboardScreen: FC = () => {
    const {user} = useUserContext();
    if (user && user.accountType == 0) {
      return (
        <CardDashboardScreen />
      );
    }
    else if (user && user.accountType == 1) {
      return (
        <>
        </>
      );
    }
    else {
      return (
        <>
        Error
        </>
      );
    }

}
export default DashboardScreen;
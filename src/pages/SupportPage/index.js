import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

//Importing Components
import NavBar from "../../components/NavBar";

const useStyles = makeStyles((theme) => ({}));
function SupportPage() {
  const classes = useStyles();
  return <div>This is the support page</div>;
}

export default SupportPage;

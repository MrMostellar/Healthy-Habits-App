import React from "react";
import { Redirect } from "expo-router";

export default function Index(){
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  return(
    isSignedIn ? 
    <Redirect href={'/app'}/>:
    <Redirect href={'/signin'}/>
  )
}
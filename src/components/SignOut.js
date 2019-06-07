import React from "react";
import { Menu, Button } from "semantic-ui-react";


const SignOut = ({signIn}) => {
  return (
    <Menu.Item position="right">
    <Button  onClick={signIn} basic inverted content="Login" />
    <Button basic inverted content="Register" />
  </Menu.Item>
 
  )
};
export default SignOut;

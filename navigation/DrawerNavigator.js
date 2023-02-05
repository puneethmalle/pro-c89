import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";
import firebase from "firebase";

import CustomSidebarMenu from "../screens/CustomSidebarMenu";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true
    };
  }

  componentDidMount() {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function(snapshot) {
        theme = snapshot.val().current_theme;
      });
    this.setState({ light_theme: theme === "light" ? true : false });
  }
  async Addpost(){
    if(
      this.state.caption
    ){
      let postData = {
        preview_image:this.state.previewImage,
        caption:this.state,caption,
        author:firebase.auth().currentUsers.displayName,
        created_on:new Data(),
        author_uid:firebase.auth().currentUser.uid,
        profile_image:this.state.profile_image,
        likes:0
      };
      await firebase
      .database()
      .ref("/posts/"+Math.random().toString(36).slice(2))
      .set(postData)
      .then(function(snapshot){ });
      this.props.setUpdateTrue();
      this.props.navigation.navigate("Feed");
    }else{
      Alert.alert(
        "Error",
        "All Fields required!",
        [{text:"ok",onpress:()=>console.log("OK pressed") }],
        {cancelable:false}
      );
    }
  }
  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          inactiveTintColor: this.state.light_theme ? "black" : "white",
          itemStyle: { marginVertical: 5 }
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="MyHome"
          component={StackNavigator}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}

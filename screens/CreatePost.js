import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
export default class CreatePost extends Component{
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          previewImage: "image_1",
          dropdownHeight: 40,
        };
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
    render(){
        if (!this.state.fontsLoaded) {
            return <AppLoading />;
          } else {
            return (
              <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                  <View style={styles.appIcon}>
                    <Image
                      source={require("../assets/logo.png")}
                      style={styles.iconImage}
                    ></Image>
                  </View>
                  <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>New Post</Text>
                  </View>
                </View>
                <View style={styles.fieldsContainer}>
                  <Image
                    source={preview_images[this.state.previewImage]}
                    style={styles.previewImage}
                  ></Image>
                  <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                    <DropDownPicker
                      items={[
                        { label: "Image 1", value: "image_1" },
                        { label: "Image 2", value: "image_2" },
                        { label: "Image 3", value: "image_3" },
                        { label: "Image 4", value: "image_4" },
                        { label: "Image 5", value: "image_5" },
                      ]}
                      defaultValue={this.state.previewImage}
                      open={this.state.dropdownHeight == 170 ? true : false}
                      onOpen={() => {
                        this.setState({ dropdownHeight: 170 });
                      }}
                      onClose={() => {
                        this.setState({ dropdownHeight: 40 });
                      }}
                      style={{
                        backgroundColor: "transparent",
                        borderWidth: 1,
                        borderColor: "white",
                      }}
                      textStyle={{
                        color: this.state.dropdownHeight == 170 ? "black" : "white",
                        fontFamily: "Bubblegum-Sans",
                      }}
                      onSelectItem={(item) =>
                        this.setState({
                          previewImage: item.value,
                        })
                      }
                    />
                  </View>
                  <ScrollView>
                    <TextInput
                      style={styles.inputFont}
                      onChangeText={(title) => this.setState({ title })}
                      placeholder={"Title"}
                      placeholderTextColor="white"
                    />
      
                    <TextInput
                      style={[
                        styles.inputFont,
                        styles.inputFontExtra,
                        styles.inputTextBig,
                      ]}
                      onChangeText={(description) => this.setState({ description })}
                      placeholder={"Description"}
                      multiline={true}
                      numberOfLines={4}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={[
                        styles.inputFont,
                        styles.inputFontExtra,
                        styles.inputTextBig,
                      ]}
                      onChangeText={(story) => this.setState({ story })}
                      placeholder={"Story"}
                      multiline={true}
                      numberOfLines={20}
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={[
                        styles.inputFont,
                        styles.inputFontExtra,
                        styles.inputTextBig,
                      ]}
                      onChangeText={(moral) => this.setState({ moral })}
                      placeholder={"Moral of the story"}
                      multiline={true}
                      numberOfLines={4}
                      placeholderTextColor="white"
                    />
                  </ScrollView>
                  <TouchableOpacity
                  onPress = {()=>{
                    Addpost()
                  }}>Submit</TouchableOpacity>
                </View>
                <View style={{ flex: 0.08 }} />
              </View>
            );
          }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c",
    },
    droidSafeArea: {
      marginTop:
        Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row",
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center",
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans",
    },
    fieldsContainer: {
      flex: 0.85,
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain",
    },
    inputFont: {
      height: RFValue(40),
      borderColor: "white",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "white",
      marginTop: RFValue(10),
      fontFamily: "Bubblegum-Sans",
    },
    inputFontExtra: {
      marginTop: RFValue(15),
    },
    inputTextBig: {
      textAlignVertical: "top",
      padding: RFValue(5),
    },
    postCardLight:{
      margin: RFValue(20),
      backgroundColor:"#eaeaea",
      borderRadius:RFvAlue(20)
  },
  authorNameText:{
      color:"white",
      fontSize:RFValue(20)
  },
  authorNameTextLight:{
      color:"black",
      fontSize:RFValue(20)
  }
  });
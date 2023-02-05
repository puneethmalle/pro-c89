import React, {Component} from 'react';
import {View,Text,Image,SafeAreaView,FlatList,StyleSheet} from "react-native";
import PostCard from "./PostCards";
export default class Feed extends Component{

    renderItem = ({ item: post }) => {
        return <PostCard post={post} navigation = {this.props.navigation}/>;
      };

    render(){
        return(
            <View style = {styles.container}>
            <SafeAreaView style = {styles.driodSafeArea}/>
            <View style = {styles.AppTitle}>
                <View styles = {styles.appIcon}>
                    <Image
                    source = {require("../assets/logo.png")}
                    style = {styles.iconImage}
                    ></Image>
                </View>
                <View style = {styles.appTitleContainer}>
                    <Text style = {styles.appTitleText}>Spectagram</Text>
                </View>
            </View>
            <View style = {styles.cardContainer}>
                <FlatList>
                    keyExtractor = {this.keyExtractor}
                    data = {posts}
                    renderItem = {this.renderItem}
                </FlatList>
            </View>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.85
    }
  });
import React, { Component } from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
export default class StoryCard extends Component {
    render() {
          return (
            <View style = {styles.container}>
                <View style = {styles.cardContainer}>
                <View style = {style.authorContainer}>
                    <View style = {styles.authorImageContainer}>
                        <Image
                        source = {require("../assets/profile_img.png")}
                        style = {styles.profileImage}
                        ></Image>
                    </View>
                    <View style = {styles.authorNameContainer}>
                        <Text style = {style.authorNameText}></Text>
                    </View>
                </View>
                <Image 
                source = {require("../assets/post.jpeg")}
                style = {styles.postImage}/>
                <View style = {styles.captionContainer}>
                    <Text style = {styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>
                <View style = {styles.actionContainer}>
                    <View style = {styles.likeButton}>
                        <Ionicons name = {"heart"} size = {RFValue(30)} color = {"white"} />
                        <Text style = {styles.likeText}>12k</Text>
                    </View>
                </View>
                </View>
            </View>
          );
            
          
        }
      }
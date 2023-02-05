import React, {Component} from 'react';
import {View,text,StyleSheet} from 'react-native';
export default class PostScreen extends Component{
    render(){
        return(
            
        fetchUser = () =>{
            let theme;
            firebase
            .database()
                .ref("/users/"+ firebase.auth().currentUser.uid)
                .on("value",(snapshot) =>{
                    theme = snapshot.val().current_theme
                    this.setState({light_theme:theme === "light"})
                })
            
        }
            
        )
    }
}
const styles = StyleSheet.create({
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
})

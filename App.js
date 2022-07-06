import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	textAlign: 'center', 
	fontWeight: 'bold',
	fontSize: 50,
	backgroundColor: 'pink',width: 300,
  height: 300,
  /*Add the border radius for left right of top and bottom*/
  borderBottomEndRadius:10,
  borderTopEndRadius:10,
  borderRightEndRadius:10,
  borderLeftEndRadius:10,
 /*Add font as Times New Roman*/
 fontFamily:"Times New Roman",
    /*Add the shadowcolor */
    textShadowColor:"red",
    
  textShadowOffset:{width: 10, height: 10},
    textShadowRadius:8,
    }}>HAPPY BIRTHDAY MY DEAR FRIEND:)</Text>
  
    );
  }
}



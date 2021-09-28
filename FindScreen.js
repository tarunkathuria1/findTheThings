import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
export default class FindScreen extends Component {
render(){
  return(
    <View>
    <ScrollView> 
     <Text
          style={{justifyContent:'center',
   alignSelf:'center',
   fontSize:40,
   color:'brown',
   margin:30}}
          >Jyoti Wine Shop</Text>
           <Text
          style={{justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#fb5b5a'}}
          >Available Brand's </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,  fontSize:20,}}> 100 Piper Whisky  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> 100 Piper Whisky 12 Yr </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> 8 P.M </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Absolute Wodka Lime </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Absolute Wodka Mandarin  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Antiquity  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> B.P.Gold Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Backardi Black  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Backardi Limon </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Backardi Pineapple  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Backardi Superior  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Ballantiness Finest Sch  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Black & White  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Black Dog Centenari </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Black Dog Schotch  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Blender Pride Res  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Blender Pride  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Camino Real Tequila  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> DGP 007 Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Director SP. Black Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Director SP.Whisky  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Doctor Brandy  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Finliandia Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Glenfiddich 12 Yr Scotch Wh </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Goa Dry Gin  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Grand Master Canberry Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Grand Master Mango Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Grand Master Melon Vodka   </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Gray Groose Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Imperial Blue Whisky  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> J & B Rare Scotch Whisky  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> JW Black Label  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> JW Double Black Label  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> JW Red Label  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> JW Blue Label  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Jack Daniel Black  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Jack Daniel Honey  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Jaiselmer Carf Indian Gin  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Apple Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Choclate Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Orange Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Lemon Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Canberry Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Magic Moment Plain Vodka  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mansion House French Brandy  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Maqintosh Silver Whisky  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Master Blend Whisky  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mc Dowells Celebration Rum  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mc Dowells No.1 Whisky  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mc Dowells No.1 Luxury Prem  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Mc Dowells No.1 Platinum Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Morpheus Blue Brandy  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Oaksmith Gold Inter Blend  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Oaksmith Gold Whisky  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Officer Choice Blue Pure Gain  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Officer Choice Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Old Monk Legend Rum </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Old Monk Rum </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Papa 888 Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rock Ford Reserve </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rock Ford Classic Balned Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Romanov Vodka </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Romanov Vodka Apple </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Royal Challenge Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Royal Stag Barrel </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Royal Stag Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sagar Samrat Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Signature P Grain </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Signature Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Simronoff Vodka </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Simronoff Apple Twist </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Simronoff Orange Twist </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Simronoff Vanilla Twist </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sterling Reserve B-10 </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Sterling Reserve B-7 </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Teacher 50 Scotch </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20,}}> Teacher H.L. Cream Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Vat 69 Whisky </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> White Mischief Vodka </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> William Lawson Scotch </Text>
      <Text style={{height: 65, borderColor: 'white', borderWidth: 1,fontSize:40, color:"orange"}}> Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Amstel Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Beck Ice Strong Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Budweiser Strong Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Budweiser Mild Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Carlsberg Strong Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Carlsberg Mild Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Corona Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Haywards 2000 Strong </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Hoegaarden Belgian Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Khajuraho Strong Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Kingfisher Mild Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Kingfisher Strong Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Kingfisher Storm Strong  </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Kingfisher Ultra </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Knock Out Strong </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Tuborg Classic Strong </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Tuborg Mild Beer </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Tuborg Strong </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Tuborg Strong White </Text>
      <Text style={{height: 65, borderColor: 'white', borderWidth: 1,fontSize:40, color:"orange"}}> Wine </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Bacardi Breezer Black Berry </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Bacardi Breezer Canberry </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Bacardi Breezer Jamaican </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Defizza Strong Spar.Red W. </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> G.9 Red Wine </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> G9 Plus </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Resvera Lite Jamun </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Reserve Pure Jamun </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rio Spritzer Canberry </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rio Strong Extra </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Rio Strong Fizzy </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Seven Peaks Port Strong 7000 Wine </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Brut Tropical </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Cabernet RW </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Cabernet Shiraz Red Wine </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Port 1000 Wine </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Satori Red Wine </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Seco Methode Classic</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Sula Vineyards Zinfandel</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Yellow Tail Chardonaay</Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Yellow Tail Merlot </Text>
      <Text style={{height: 35, borderColor: 'white', borderWidth: 1,fontSize:20}}> Yellow Tail Shiraz </Text>




 <TouchableOpacity
            style= {{height: 100,
    width: 100,
    justifyContent: "right",
    padding: 10,}}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
            
            }}
          >
            <Text style={{fontSize:15}}>Log Out</Text>
          </TouchableOpacity>



    </ScrollView>
    </View>
  );
}
}
import { StyleSheet } from "react-native";
import colors from "../../../style/colors";
export default StyleSheet.create({
  container:{
    flex:1,
    
  },
  body:{
    flex:1,
    backgroundColor:colors.darkGreen,
  },
  welcomeView:{
    borderStyle:"dashed",
    borderRadius:10,
    borderWidth:1.3,
    borderColor:'white',
    margin:10,
    flexDirection:'row',
    padding:5,
    justifyContent:'center',
    alignItems:'center',
  },
  welcomeText:{
    color:'white',
    fontSize:20,
  }
})
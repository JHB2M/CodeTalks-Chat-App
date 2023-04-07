import { StyleSheet } from "react-native";
import colors from "../../style/colors";
export default StyleSheet.create({
  container:{
    padding:10,
    flexDirection:'row',
   
    backgroundColor:'white',
    alignItems:'center',
  },
  backTitle:{
    
    fontSize:18,
    color:colors.darkGreen,
  },
  headerArea:{
    marginLeft:50,
    flex:1
  },
  backArea:{
   
    
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  image1:{
    width:25,
    height:25,
  },
  signOut:{
    marginTop:8,

  },
  image2:{
    
    height:25,
    width:25,
  },
  header:{
    
    fontSize:25,
    color:colors.darkGreen,
  }
})
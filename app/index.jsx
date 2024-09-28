import { Text, View,Image, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginHorizontal:12,
        backgroundColor:'white',
      }}
    >
      <ImageBackground source={require('./../assets/images/bgi.png')}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 480 / 219,
        }}
      ><Text style={{fontWeight:'bold', color:'#abfc08',fontSize:26,alignSelf:"center",marginTop:17}}>Refer a Friend</Text>
      <Text style={{fontWeight:"bold", color:'white', alignSelf:"center", fontSize:15.5}}>And Earn 1000 Per referral</Text>
      <TouchableOpacity style={styles.referButton}><Text style={{color:'#5ff7f8',fontSize:16}}>REFER NOW</Text></TouchableOpacity>
      </ImageBackground>
      <View style={{flexDirection:'row', paddingTop:20,paddingBottom:20, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)',}}>
        <View style={{flexDirection:"column", marginLeft:16}}>
         <Text style={{fontWeight:'bold'}}> Sr.No.</Text>
         <Text> 1 </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Date</Text>
         <Text> 03/06/24 </Text>
        </View>

        <View style={{flexDirection:"column", marginLeft:100}}>
         <Text style={{fontWeight:'bold'}}> Refer</Text>
         <Text> Usama Mehfooz Khan </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Course</Text>
         <Text> Full-Stack Development</Text>
         <Text> Basic</Text>
        </View>
      </View>


      <View style={{flexDirection:'row', paddingTop:20,paddingBottom:20, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)',}}>
        <View style={{flexDirection:"column", marginLeft:16}}>
         <Text style={{fontWeight:'bold'}}> Sr.No.</Text>
         <Text> 2 </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Date</Text>
         <Text> 04/06/24 </Text>
        </View>

        <View style={{flexDirection:"column", marginLeft:100}}>
         <Text style={{fontWeight:'bold'}}> Refer</Text>
         <Text> Esther Howard </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Course</Text>
         <Text> Full-Stack Development</Text>
         <Text> Advance</Text>
        </View>
      </View>


      <View style={{flexDirection:'row', paddingTop:20,paddingBottom:20, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)',}}>
        <View style={{flexDirection:"column", marginLeft:16}}>
         <Text style={{fontWeight:'bold'}}> Sr.No.</Text>
         <Text> 3 </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Date</Text>
         <Text> 04/06/24 </Text>
        </View>

        <View style={{flexDirection:"column", marginLeft:100}}>
         <Text style={{fontWeight:'bold'}}> Refer</Text>
         <Text> Jacob Jones </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Course</Text>
         <Text> Full-Stack Development</Text>
         <Text> Basic</Text>
        </View>
      </View>


      <View style={{flexDirection:'row', paddingTop:20,paddingBottom:20, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)',}}>
        <View style={{flexDirection:"column", marginLeft:16}}>
         <Text style={{fontWeight:'bold'}}> Sr.No.</Text>
         <Text> 4 </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Date</Text>
         <Text> 04/06/24 </Text>
        </View>

        <View style={{flexDirection:"column", marginLeft:100}}>
         <Text style={{fontWeight:'bold'}}> Refer</Text>
         <Text> Courtney Henry </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Course</Text>
         <Text> Full-Stack Development</Text>
         <Text> Basic</Text>
        </View>
      </View>


      <View style={{flexDirection:'row', paddingTop:20,paddingBottom:20, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)',}}>
        <View style={{flexDirection:"column", marginLeft:16}}>
         <Text style={{fontWeight:'bold'}}> Sr.No.</Text>
         <Text> 5 </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Date</Text>
         <Text> 04/06/24 </Text>
        </View>

        <View style={{flexDirection:"column", marginLeft:100}}>
         <Text style={{fontWeight:'bold'}}> Refer</Text>
         <Text> Devon Lane </Text>

         <Text style={{fontWeight:'bold',marginTop:27}}> Course</Text>
         <Text> Full-Stack Development</Text>
         <Text> Basic</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  referButton:{
    borderRadius: 12,
    backgroundColor:'black',
    alignSelf:"center", 
    paddingHorizontal:30,
    paddingVertical:9,
    marginTop: 35,
    borderWidth:1,
    borderColor:'#5ff7f8',
}
})
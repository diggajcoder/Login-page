import { Text, View, ImageBackground, Image, TouchableOpacity, ScrollView} from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal:15,
        backgroundColor:'white',
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
    
    <ImageBackground source={require('./../assets/images/bgi.png')}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 328 / 322,
          borderRadius: 20,
          overflow:"hidden",
          marginBottom:20
        }}
    >
      <Text style={{color:'#43dbea',marginLeft:27,marginTop:15,fontWeight:"bold",fontSize:17, textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 8,}}>Full-Stack Development Basic</Text>
      <View>
      <Text style={{color:"white",fontSize:15.2,marginLeft:37, marginTop:27, textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 12,}}>•  Learning Material : Access to content with</Text>
      <Text style={{color:"white",fontSize:15.2,marginLeft:49,textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 12,}}>voiceovers - Practical Experience: 15+ case</Text>
      <Text style={{color:"white",fontSize:15.2,marginLeft:49,textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 12,}}>studies and projects</Text>

      <Text style={{color:"white",fontSize:15.2,marginLeft:37, marginTop:27, textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 12,}}>•  Support: Weekend doubt clearing sessions</Text>
      <Text style={{color:"white",fontSize:15.2,marginLeft:49,textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 12,}}>with SMEs - Assessment: AI-enable</Text>
      <Text style={{color:"white",fontSize:15.2,marginLeft:49,textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 12,}}>proctored assessment</Text>

      <Text style={{color:"white",fontSize:15.2,marginLeft:37, marginTop:27, textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 12,}}>•  Platform - Certifications: 6 certificates</Text>
      <Text style={{color:"white",fontSize:15.2,marginLeft:49,textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 12,}}>for the price of 1</Text>

      <Text style={{color:"white",fontSize:15.2,marginLeft:37, marginTop:27, textShadowColor: 'black',textShadowOffset: { width: 2, height: 2 },textShadowRadius: 12,}}>•  Salary Potential : Up to ₹8 LPA</Text>
      </View>
    </ImageBackground>
    <View style={{backgroundColor:'#f5f9ff',borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5}}>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:'#9BA2AC', fontWeight:'bold', fontSize:13}}>1st Month</Text>
      <Text style={{marginLeft:30}}>1 August 2024</Text>
    </View>
    <Text>Course Fee <Text style={{fontWeight:"bold"}}>3000 + 1000</Text> For Reserve a Seat</Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{color:'#9BA2AC', fontWeight:'bold'}}>Payment Done</Text>
    <Image source={require('./../assets/images/mark.png')}
        style={{
          width: '6%',
          height: undefined,
          aspectRatio: 20 / 20,
          marginLeft:5,
          borderRadius:20
      }}
    />
    </View>
    </View>

    <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9}}>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:'#9BA2AC', fontWeight:'bold', fontSize:13}}>2nd Month</Text>
      <Text style={{marginLeft:30}}>1 September 2024</Text>
    </View>
    <Text>Course Fee <Text style={{fontWeight:"bold"}}>3000</Text></Text>
    <View style={{flexDirection:"row"}}>
    <TouchableOpacity style={{borderWidth:1,paddingHorizontal:18,paddingVertical:4, borderRadius:15,borderColor:'#ecf1f6'}}><Text style={{color:'#138f53', fontWeight:"bold"}}>Pay Now</Text></TouchableOpacity>
    </View>
    </View>

    <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginBottom:9}}>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:'#9BA2AC', fontWeight:'bold', fontSize:13}}>3rd Month</Text>
      <Text style={{marginLeft:30}}>1 October 2024</Text>
    </View>
    <Text>Course Fee <Text style={{fontWeight:"bold"}}>3000</Text></Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{color:'#9BA2AC', fontWeight:'bold'}}>Payment Pending</Text>
    </View>
    </View>

    <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5, marginBottom:9}}>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:'#9BA2AC', fontWeight:'bold', fontSize:13}}>4th Month</Text>
      <Text style={{marginLeft:30}}>1 November 2024</Text>
    </View>
    <Text>Course Fee <Text style={{fontWeight:"bold"}}>3000</Text></Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{color:'#9BA2AC', fontWeight:'bold'}}>Payment Pending</Text>
    </View>
    </View>

    <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5, marginBottom:9}}>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:'#9BA2AC', fontWeight:'bold', fontSize:13}}>5th Month</Text>
      <Text style={{marginLeft:30}}>1 December 2024</Text>
    </View>
    <Text>Course Fee <Text style={{fontWeight:"bold"}}>3000</Text></Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{color:'#9BA2AC', fontWeight:'bold'}}>Payment Pending</Text>
    </View>
    </View>

    <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5, marginBottom:9}}>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:'#9BA2AC', fontWeight:'bold', fontSize:13}}>6th Month</Text>
      <Text style={{marginLeft:30}}>1 January 2025</Text>
    </View>
    <Text>Course Fee <Text style={{fontWeight:"bold"}}>3000</Text></Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{color:'#9BA2AC', fontWeight:'bold'}}>Payment Pending</Text>
    </View>
    </View>

    <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5, marginBottom:9}}>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:'#9BA2AC', fontWeight:'bold', fontSize:13}}>7th Month</Text>
      <Text style={{marginLeft:30}}>2 February 2025</Text>
    </View>
    <Text>Course Fee <Text style={{fontWeight:"bold"}}>3000</Text></Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{color:'#9BA2AC', fontWeight:'bold'}}>Payment Pending</Text>
    </View>
    </View>

    <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5, marginBottom:9}}>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:'#9BA2AC', fontWeight:'bold', fontSize:13}}>8th Month</Text>
      <Text style={{marginLeft:30}}>1 March 2025</Text>
    </View>
    <Text>Course Fee <Text style={{fontWeight:"bold"}}>3000</Text></Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{color:'#9BA2AC', fontWeight:'bold'}}>Payment Pending</Text>
    </View>
    </View>

    <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5, marginBottom:9}}>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:'#9BA2AC', fontWeight:'bold', fontSize:13}}>9th Month</Text>
      <Text style={{marginLeft:30}}>1 April 2025</Text>
    </View>
    <Text>Course Fee <Text style={{fontWeight:"bold"}}>3000</Text></Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{color:'#9BA2AC', fontWeight:'bold'}}>Payment Pending</Text>
    </View>
    </View>

    </ScrollView>
  );
}

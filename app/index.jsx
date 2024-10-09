import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:'white'
        // justifyContent: "center",
        // alignItems: "center",
      }}
    ><ImageBackground source={require('./../assets/images/bgi.png')}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 718 / 282,
          justifyContent: "center",
          alignItems: "center",
        }}
    >
    
    <Text style={{color:'#48eaf0',fontWeight:"bold",fontSize:22}}>Diggaj Coder Community</Text>
    </ImageBackground>
    <View style={{backgroundColor:'#eff4f9'}}>
     <Text style={{marginVertical:20,marginLeft:15,fontWeight:'bold',fontSize:22,paddingRight:38}}>Join The Diggaj Coder Community On Slack!</Text>
     <Text style={{marginLeft:15,fontSize:16,paddingRight:45, marginBottom:20}}>Leave your query and we'll reach out to you. For admissions related query, our expert learning consultant will help you carve a career path for you.</Text>
    </View>
    <Text style={{marginLeft:14,fontWeight:'bold',fontSize:18,marginVertical:25,color:'#0f60d5'}}>Benefits</Text>
    <View style={{marginHorizontal:20}}>
     <Text style={{fontWeight:'bold',fontSize:15}}>• Mentorship</Text>
     <Text style={{fontSize:15, marginLeft:10}}>Get guidance from experienced professionals in the field.</Text>

     <Text style={{fontWeight:'bold',fontSize:15,marginTop:25}}>• Collaborative Learning</Text>
     <Text style={{fontSize:15, marginLeft:10}}>Work on projects and learn Collaboratively.</Text>

     <Text style={{fontWeight:'bold',fontSize:15,marginTop:25}}>• Exclusive Resources</Text>
     <Text style={{fontSize:15, marginLeft:10}}>Access to tutorials, webinars, and more.</Text>
     
     <Text style={{fontWeight:'bold',fontSize:15,marginTop:25}}>• Networking</Text>
     <Text style={{fontSize:15, marginLeft:10}}>Connect with peers, industry experts, and potential employers.</Text>
     
     <Text style={{fontWeight:'bold',fontSize:15,marginTop:25}}>• Support</Text>
     <Text style={{fontSize:15, marginLeft:10}}>Receive help on coding challenges and career advice.</Text>
    </View>

    <TouchableOpacity style={{alignSelf:"center",marginTop:25,backgroundColor:'#3a5267',paddingHorizontal:78,paddingVertical:9,justifyContent:"center",marginBottom:25,borderRadius:5}}><Text style={{color:'white',fontSize:16}}>Join Our Slack Community</Text></TouchableOpacity>
    </ScrollView>
  );
}

import { Text, View,Image, TouchableOpacity, ScrollView} from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:'white'
        //justifyContent: "center",
        //alignItems: "center",
      }}
    >
      <Image source={require('./../assets/images/header.png')}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 716 / 278,
        }}
      />
       <ScrollView style={{marginTop:10}} horizontal={true}>
        <TouchableOpacity style={{borderWidth:1,paddingVertical:4,borderRadius:18,borderColor:'#ecf1f6', marginHorizontal:15, backgroundColor:'#2e81f7', paddingHorizontal:21, paddingVertical:8}}><Text style={{color:'white',fontWeight:"bold"}}>Full-Stack Development</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,paddingVertical:4,borderRadius:18,borderColor:'#ecf1f6', paddingHorizontal:21, paddingVertical:8}}><Text style={{color:'#80868d',fontWeight:"bold"}}>Internship</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,paddingVertical:4,borderRadius:18,borderColor:'#ecf1f6', paddingHorizontal:21, paddingVertical:8, marginHorizontal:15}}><Text style={{color:'#80868d',fontWeight:"bold"}}>Refer & Earn</Text></TouchableOpacity>
       </ScrollView>
       <Text style={{marginTop:30, marginLeft:17,fontWeight:"bold",fontSize:17}}>Frequently Asked Questions</Text>
       <Text style={{marginTop:33, marginLeft:17,fontWeight:"bold",fontSize:17,color:'#0671ea'}}>Eligibility</Text>
       
       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <Text style={{fontWeight:"bold"}}>What are the eligibility criteria to receive Reffral Bonus after referring a friend?</Text>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>

       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <View>
        <Text style={{fontWeight:"bold"}}>Do I need to be an upGrad student to refer my friends?</Text>
        <Text style={{paddingRight:1}}>No, every user who has signed up on upGrad can be a part of upGrad's referral reward program. Benifits vary for an enrolled and not enrolled</Text>
        <Text>user as per the terms and conditions.</Text>
        </View>
        <Image source={require('./../assets/images/sub.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
      </View>

      <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <Text style={{fontWeight:"bold", paddingRight:120}}>Who is a "Not enrolled" user?</Text>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>

       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <Text style={{fontWeight:"bold", paddingRight:139}}>Who is an "enrolled" user?</Text>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>

       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <Text style={{fontWeight:"bold", paddingRight:27}}>My friend missed applying my referral code</Text>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>

       <Text style={{marginTop:12, marginLeft:17,fontWeight:"bold",fontSize:17,color:'#0671ea'}}>How to Use</Text>

       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <Text style={{fontWeight:"bold", paddingRight:40}}>How can I refer my friends/ connections?</Text>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>

       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <Text style={{fontWeight:"bold", paddingRight:127}}>Where can I find my code? </Text>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>

       <Text style={{marginTop:12, marginLeft:17,fontWeight:"bold",fontSize:17,color:'#0671ea'}}>Payouts</Text>

       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <View>
         <Text style={{fontWeight:"bold", marginRight:30}}>When can you expect to receive a Referral</Text>
         <Text style={{fontWeight:"bold"}}>Bonus?</Text>
        </View>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>

       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <View>
         <Text style={{fontWeight:"bold", marginRight:36}}>I have still not received my referral bonus</Text>
        </View>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>
       
       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <View>
         <Text style={{fontWeight:"bold", marginRight:27}}>When are the Referee benefits (fee waiver)</Text>
         <Text style={{fontWeight:"bold"}}>applied/credited?</Text>
        </View>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>

       <View style={{borderRadius:12,borderWidth:1,borderColor:'#ebf0f5',padding:15, gap:12.5,marginVertical:9,marginHorizontal:17,flexDirection:"row"}}>
        <View>
         <Text style={{fontWeight:"bold", marginRight:30}}>The referral benefit I have received is incorrect ( Example: instead of ₹30,000, ₹28,500 is credited).</Text>
        </View>
        <Image source={require('./../assets/images/add.png')}
        style={{
          width: '05%',
          height: undefined,
          aspectRatio: 149 / 149,
        }}
      />
       </View>


      </ScrollView>
  );
}

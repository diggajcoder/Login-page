import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";

export default function Index() {
  return (
    <ScrollView
    style={{
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: "center",
        // alignItems: "center",
      }}>
      <View>
      <Text style={{fontSize:16,fontWeight:"bold", marginVertical: 15, marginLeft: 17}}>Sudeep Makwana</Text>
      <Image source={require('./../assets/images/profile.png')}
        style={{
          width: '35%',
          height: undefined,
          aspectRatio: 521 / 533,
          marginLeft:20
        }}
      />
      <Text style={{fontSize:16,fontWeight:"bold", marginVertical: 15, marginLeft: 17 , color: '#3470C5'}}>FULL-STACK DEVELOPER</Text>
      <View style={{flexDirection: "row"}}>
       <Image source={require('./../assets/images/check.png')}
        style={{width: '4.5%', height: undefined, aspectRatio: 133 / 133, marginLeft:20, marginRight:9,marginTop:2
         }}
       />
       <Text style={{fontSize:16,fontWeight:490}}>No coding experience required</Text>
      </View>
      <View style={{flexDirection: "row",marginTop:12}}>
       <Image source={require('./../assets/images/check.png')}
        style={{width: '4.5%', height: undefined, aspectRatio: 133 / 133, marginLeft:20, marginRight:9,marginTop:2
         }}
       />
       <Text style={{fontSize:16,fontWeight:490}}>100% placement assistance</Text>
      </View>
      <View style={{flexDirection: "row",marginTop:12}}>
       <Image source={require('./../assets/images/check.png')}
        style={{width: '4.5%', height: undefined, aspectRatio: 133 / 133, marginLeft:20, marginRight:9,marginTop:2
         }}
       />
       <Text style={{fontSize:16,fontWeight:490}}>Interview prepration</Text>
      </View><View style={{flexDirection: "row",marginTop:12}}>
       <Image source={require('./../assets/images/check.png')}
        style={{width: '4.5%', height: undefined, aspectRatio: 133 / 133, marginLeft:20, marginRight:9,marginTop:2
         }}
       />
       <Text style={{fontSize:16,fontWeight:490}}>Live online classes</Text>
      </View><View style={{flexDirection: "row",marginTop:12}}>
       <Image source={require('./../assets/images/check.png')}
        style={{width: '4.5%', height: undefined, aspectRatio: 133 / 133, marginLeft:20, marginRight:9,marginTop:2
         }}
       />
       <Text style={{fontSize:16,fontWeight:490}}>Professional certificate</Text>
      </View><View style={{flexDirection: "row",marginTop:12}}>
       <Image source={require('./../assets/images/check.png')}
        style={{width: '4.5%', height: undefined, aspectRatio: 133 / 133, marginLeft:20, marginRight:9,marginTop:2
         }}
       />
       <Text style={{fontSize:16,fontWeight:490}}>Lifetime Placement Assistance</Text>
      </View>
      <View style={{paddingVertical:30,  borderBottomWidth: 2,borderTopWidth: 2, borderBottomColor: '#E8E8E8',  borderTopColor: '#E8E8E8', marginHorizontal: 21, marginVertical:27}}>
        <View style={{marginLeft: 27}}>
         <Text style={{fontSize:16,fontWeight:"bold", color: '#3470C5'}}>Monday - Friday</Text>
         <Text style={{color:'	#282828', marginTop:7, marginBottom:30}}>9:00PM - 10PM</Text>
         <Text style={{fontSize:16,fontWeight:"bold", color: '#3470C5'}}>Saturday</Text>
         <Text style={{color:'	#282828', marginTop:7}}>Coding Practice / assignment</Text>
         <Text style={{marginBottom:30}}>2PM-6PM</Text>
         <Text style={{fontSize:16,fontWeight:"bold", color: '#3470C5'}}>Batch Start Date</Text>
         <Text style={{color:'	#282828', marginTop:7}}>1st August 2024</Text>
        </View>
      </View>
      <View style={{flexDirection: "row", backgroundColor: '#eafff0', marginHorizontal: 17, borderRadius: 4, borderWidth:1, borderColor:'#ccebd5',overflow: 'hidden',paddingVertical: 17}}>
      <Image source={require('./../assets/images/bulletin.png')}
        style={{width: '4.5%', height: undefined, aspectRatio: 133 / 133, marginLeft:20, marginRight:9,marginTop:2
         }}
       />
       <View>
       <Text>The batch start date may change based on</Text>
       <Text>student registration. We will notify all registered</Text>
       <Text>students of any changes. Decisions are made by </Text>
       <Text>the company. Thank you for your understanding.</Text>
       </View>
      </View>
      <View style={{flexDirection:"row", marginLeft: 17, justifyContent: "center",gap:27}}>
        <TouchableOpacity style={styles.buttonLeft}><Text style={{fontSize:16}}>Apply Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonRight}><Text style={{fontSize:16,color:'white'}}>Apply Now</Text></TouchableOpacity>
      </View>
      </View>

      <View style={{paddingLeft: 17}}>
      <Text style={{fontSize:16,fontWeight:"bold"}}>Tution Fee (No ISA)</Text>
      <View style={{flexDirection: "row", justifyContent: "center", gap:50,marginLeft:-20}}>
       <View>
        <Text style={{fontSize:15,fontWeight:"bold",marginTop:20}}>Reserve a seat</Text>
        <Text style={{fontSize:20,fontWeight:"bold", color:"#226ed8"}}>INR 1000/-</Text>
        <Text style={{fontSize:12.5,fontWeight:"bold", color:"#B5BBC1"}}>For Reserve a Seat</Text>
       </View>
       <Image source={require('./../assets/images/plus.png')}
        style={{width: '5%', height: undefined, aspectRatio: 135 / 145, marginTop:42
         }}
        />
        <View>
        <Text style={{fontSize:15,fontWeight:"bold",marginTop:20}}>Upfront Fee</Text>
        <Text style={{fontSize:20,fontWeight:"bold", color:"#226ed8"}}>INR 3000/-</Text>
        <Text style={{fontSize:12.5,fontWeight:"bold", color:"#B5BBC1"}}>Monthly Till 9 Months</Text>
       </View>
       </View>
       <Image source={require('./../assets/images/plus.png')}
        style={{width: '5%', height: undefined, aspectRatio: 135 / 145, marginVertical:27, marginLeft:10
         }}
        />
        <View style={{marginLeft:1}}>
         <Text style={{fontSize:15,fontWeight:"bold"}}>Pay After Placement</Text>
         <Text style={{fontSize:20,fontWeight:"bold", color:"#226ed8"}}>INR 7500/-</Text>
         <Text style={{fontSize:12.5,fontWeight:"bold", color:"#B5BBC1"}}>Monthly Till 36 Months</Text>
        </View>
      </View>
      <View style={{paddingLeft:17, marginTop:40}}>
       <Text style={{fontSize:16,fontWeight:"bold", marginBottom: 30}}>Program Highlights</Text>
        <View style={{flexDirection:"row"}}>
          <Image source={require('./../assets/images/Icon 1.png')}
           style={{width: '5%', height: undefined, aspectRatio: 133 / 128, marginLeft:2, marginRight:9,marginTop:2
            }}
          />
          <Text>160+ Hours Instructor-Led Sessions</Text>
        </View>

        <View style={{flexDirection:"row", marginTop: 19}}>
         <Image source={require('./../assets/images/Icon 2.png')}
          style={{width: '5%', height: undefined, aspectRatio: 133 / 138, marginLeft:2, marginRight:9,marginTop:2
           }}
         />
         <Text>35 Hours of Live Master Session by Industry</Text>
       </View>

       <Text style={{marginLeft:31}}>Experts</Text>
       <View style={{flexDirection:"row", marginTop: 19}}>
         <Image source={require('./../assets/images/Icon 3.png')}
          style={{width: '5%', height: undefined, aspectRatio: 140 / 124, marginLeft:2, marginRight:9,marginTop:2
           }}
         />
         <Text>287+ Hands-On Exercises</Text>
       </View>

       <View style={{flexDirection:"row", marginTop: 19}}>
         <Image source={require('./../assets/images/Icon 4.png')}
          style={{width: '5%', height: undefined, aspectRatio: 138 / 133, marginLeft:2, marginRight:9,marginTop:2
           }}
         />
         <Text>10+ Real-World Projects</Text>
       </View>

       <View style={{flexDirection:"row", marginTop: 19}}>
         <Image source={require('./../assets/images/Icon 5.png')}
          style={{width: '5%', height: undefined, aspectRatio: 133 / 124, marginLeft:2, marginRight:9,marginTop:2
           }}
         />
         <Text>30+ Auto-Graded Assessments</Text>
       </View>

       <View style={{flexDirection:"row", marginTop: 19}}>
         <Image source={require('./../assets/images/Icon 6.png')}
          style={{width: '5%', height: undefined, aspectRatio: 138 / 145, marginLeft:2, marginRight:9,marginTop:2
           }}
         />
         <Text>50+ Hours of Live Interactive Doubts-Solving</Text>
       </View>
       <Text style={{marginLeft:31}}>Sessions</Text>

       <View style={{flexDirection:"row", marginTop: 19}}>
         <Image source={require('./../assets/images/Icon 5.png')}
          style={{width: '5%', height: undefined, aspectRatio: 133 / 124, marginLeft:2, marginRight:9,marginTop:2
           }}
         />
         <Text>80+ Hours of Cloud Labs-Enabled Learning</Text>
       </View>

       <View style={{flexDirection:"row", marginTop: 19}}>
         <Image source={require('./../assets/images/Icon 8.png')}
          style={{width: '5%', height: undefined, aspectRatio: 149 / 126, marginLeft:2, marginRight:9,marginTop:2
           }}
         />
         <Text>300 Hours of Cloud Labs-Enabled Learning</Text>
       </View>

       <View style={{flexDirection:"row", marginTop: 19}}>
         <Image source={require('./../assets/images/Icon 9.png')}
          style={{width: '5%', height: undefined, aspectRatio: 133 / 138, marginLeft:2, marginRight:9,marginTop:2
           }}
         />
         <Text>2 Hackathons and 3 Mock Interviews</Text>
       </View>

       <View style={{flexDirection:"row", marginTop: 19}}>
         <Image source={require('./../assets/images/Icon 10.png')}
          style={{width: '5%', height: undefined, aspectRatio: 137 / 143, marginLeft:2, marginRight:9,marginTop:2
           }}
         />
         <Text>16+ Hours at Career Coaching</Text>
       </View>
      </View>
      <View>
      <Image source={require('./../assets/images/Footer.png')}
          style={{width: '100%', height: undefined, aspectRatio: 668 / 563, marginRight:9,marginTop:17
           }}
         />
      </View>
    </ScrollView>
  );
}const styles = StyleSheet.create({
 buttonLeft: {
    width:160,
    height: 50,
    marginTop:15,
   alignItems: "center",
   justifyContent: "center",
   borderRadius: 8,
   marginBottom:35,
   borderColor: '#000',
   borderWidth: 1,
   marginLeft:-15
  },
  buttonRight: {
    width:160,
    height: 50,
    marginTop:15,
   alignItems: "center",
   justifyContent: "center",
   borderRadius: 8,
   marginBottom:35,
   borderColor: '#000',
   borderWidth: 1,
   backgroundColor: '#2e81f7'
  }
})
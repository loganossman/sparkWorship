import React from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { List } from 'react-native-paper';
import { stylesSummary } from "../../styles/summary.js";

export default function SparkSummary({ navigation }) {

  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{borderColor: "#F2905B", borderWidth: 10, width: '85%', alignSelf: "center", height: 300, top: 50, borderRadius: 10}}></Text>
    </View>
    );


    const SecondRoute = () => (
        <ScrollView style={{ flex: 1, backgroundColor: 'white'}}>
            <List.Section title="Instruments">
              <List.Accordion style={styles.accordian} title="Guitar">
                <List.Subheader style={{left: 15}}>General Experience</List.Subheader>
                <List.Subheader style={{left: 15}}>Worship Experience</List.Subheader>
                <List.Subheader style={{left: 15}}>Additional Notes</List.Subheader>
              </List.Accordion>
              <List.Accordion style={styles.accordian} title="Piano">
                <List.Subheader style={{left: 15}}>General Experience</List.Subheader>
                <List.Subheader style={{left: 15}}>Worship Experience</List.Subheader>
                <List.Subheader style={{left: 15}}>Additional Notes</List.Subheader>
              </List.Accordion>
              <List.Accordion style={styles.accordian} title="Trumpet">
                <List.Subheader style={{left: 15}}>General Experience</List.Subheader>
                <List.Subheader style={{left: 15}}>Worship Experience</List.Subheader>
                <List.Subheader style={{left: 15}}>Additional Notes</List.Subheader>
              </List.Accordion>
            </List.Section>
          <Text style={{fontSize: 14, left: 15}}>Skilled Genres</Text>
          <View style={[styles.row2, {top: 20, justifyContent: 'space-evenly'}]}>
            <View style={styles.genres}>
              <Text style={{fontSize: 16, color: 'white'}}>Rock</Text>
            </View>
            <View style={styles.genres}>
              <Text style={{fontSize: 16, color: 'white'}}>Country</Text>
            </View>
            <View style={styles.genres}>
              <Text style={{fontSize: 16, color: 'white'}}>Jazz</Text>
            </View>
          </View>
          <View>
            <Text style={{marginTop:"5%", color: 'white'}}>a</Text>
          </View>
        </ScrollView>
      );
      
    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Text style={{borderColor: "#F2905B", borderWidth: 7, width: '85%', alignSelf: "center", height: 75, top: 50, borderRadius: 10, fontSize: 25, textAlign: 'center', padding: 10}}>Church Name</Text>
          <Text style={{borderColor: "#006175", borderWidth: 7, width: '75%', alignSelf: "center", height: 65, top: 50, borderRadius: 10, fontSize: 20, textAlign: 'center', padding: 10, marginTop: 20}}>Denomination</Text>
          <Text style={{borderColor: "#006175", borderWidth: 7, width: '75%', alignSelf: "center", height: 65, top: 50, borderRadius: 10, fontSize: 20, textAlign: 'center', padding: 10, marginTop: 20}}>Location</Text>
        </View>
      );

    const FourthRoute = () => (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={[styles.socialsBox, {marginTop: 35}]}/>
          <View style={styles.socialsBox}/>
          <View style={styles.socialsBox}/>
          <View style={styles.socialsBox}/>
        </View>
      );
    const FifthRoute = () => (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={[styles.socialsBox, {marginTop: 35}]}/>
        <View style={styles.socialsBox}/>
        <View style={styles.socialsBox}/>
        <View style={styles.socialsBox}/>
      </View>
    );
    
      
      
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Bio' },
        { key: 'second', title: 'Music' },
        { key: 'third', title: 'Church' },
        { key: 'fourth', title: 'Socials' },
        { key: 'fifth', title: 'Boonies' },
    ]);
    
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
        fifth: FifthRoute
    });

    const renderTabBar = props => (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#006175' }}
        style={{ backgroundColor: 'rgb(219, 233, 236)'}}
      />
    );

  return(
    <View style={styles.MainContainer}>
    <View style={styles.topBorder}>
      <View style={[styles.row2, {justifyContent: 'space-between', marginLeft: 20, marginRight: 20, top: '16%', alignItems: 'center'}]}>
        <TouchableOpacity><Image style={{height: 40, width: 40}} source={require('../../../assets/friendicon.png')}></Image></TouchableOpacity>
        <Text style={styles.titleText}>My Profile</Text>
        <TouchableOpacity><Image style={{height: 40, width: 40}} source={require('../../../assets/editprofileicon.png')}></Image></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Image style={styles.profilePicture} source={require('../../../assets/blankprofilepic.png')}></Image>
        <View style={styles.column}>
          <Text style={{fontSize: 25, fontWeight: '500', marginBottom: 10}}>FirstName LastName</Text>
          <Text style={{fontSize: 20, fontWeight: '400', marginBottom: 13}}>Instrumentalist</Text>
          <View style={styles.row2}>
            <Image style={{height: 20, width: 20}} source={require('../../../assets/locationpin.png')}></Image>
            <Text>Location</Text>
          </View>
        </View>
      </View>
    <View style={[styles.row, {marginLeft: 20, marginRight: 20, top: 135}]}>
      <Image style={{height: 40, width: 40}} source={require('../../../assets/filledStar.png')}></Image>
      <Image style={{height: 40, width: 40}} source={require('../../../assets/filledStar.png')}></Image>
      <Image style={{height: 40, width: 40}} source={require('../../../assets/filledStar.png')}></Image>
      <Image style={{height: 40, width: 40}} source={require('../../../assets/emptyStar.png')}></Image>
      <Image style={{height: 40, width: 40}} source={require('../../../assets/emptyStar.png')}></Image>
    </View>
    </View>
    <View style={styles.content}>
      <TabView navigationState={{ index, routes }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex}/>
    </View>
    <View style={styles.navigation}>
      <Image style={{width: '100%', height: '100%'}} source={require('../../../assets/navigation.png')}></Image>
    </View>
</View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "white",
    height: "100%",
  },

  topBorder:{
    height: "40%",
    width: "100%",
    backgroundColor: "rgb(219, 233, 236)",
  },

  content: {
    height: '51%'
  },

  titleText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '500'
  },

  row: {
    flexDirection: 'row',
    top: '22%',
    justifyContent: 'space-evenly'
  },

  row2: {
    flexDirection: 'row',
  },

  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  profilePicture: {
    height: 125,
    width: 125,
  },

  accordian: {
    backgroundColor: '#F2905B',
    height: 50,
    marginLeft: '5%',
    marginRight: '5%', 
    marginBottom: '4%',
    borderRadius: 10
  },

  navigation: {
    backgroundColor: "rgb(219, 233, 236)",
    height: "7%"
  }, 
  
  genres: {
    backgroundColor: '#006175',
    borderRadius: 55,
    height: 105, 
    width: 105,
    justifyContent: 'center',
    alignItems: 'center'
  },

  socialsBox: {
    backgroundColor: "#F2905B",
    borderRadius: 10,
    width: "85%",
    height: 60,
    marginBottom: "6%",
    alignSelf: "center",
    flexDirection: "row",
    alignContent: 'center'
  },

  socialsLogo: {
    height: "70%",
    width: "10%",
    left: "20%"
  },

})
import React, {useEffect} from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { List } from 'react-native-paper';
import Routes from '../Navigation/constants/Routes';
import { FirebaseButler } from '../../components/classes';
import ProfileImage from '../../components/profileImage.js';

import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const screenWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function PSPersonal({ route, navigation }) {
    let props = route.params;
    let userId = props?.userId || "pgFfrUx2ryd7h7iE00fD09RAJyG3";
 
    const SparkRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{borderColor: "#F2905B", borderWidth: 10, width: '85%', alignSelf: "center", height: 300, top: 50, borderRadius: 10, padding: 20, flexWrap: "wrap"}}>{MyBio}</Text>
    </View>
    );


    const MusicRoute = () => {
      function instrumentRender(object) {
        return(
          <List.Accordion
          title={object.item.instrumentName}
          style = {styles.accordian}
          titleStyle = {accordianStyles.headerText}
          >   
            <View style={accordianStyles.listItemContainer}>
              <View style={accordianStyles.listItemHeader}>
                <Text style={[accordianStyles.accordionHeaderText]}> General Experience </Text>
              </View>
              <View style={accordianStyles.listItemContent}>
                <Text style={accordianStyles.contentText}>
                  {object.item.generalExperience}
                </Text>
              </View>
            </View>

            <View style={accordianStyles.listItemContainer}>
              <View style={accordianStyles.listItemHeader}>
                <Text style={[accordianStyles.accordionHeaderText]}> Worship Experience </Text>
              </View>
              <View style={accordianStyles.listItemContent}>
                <Text style={accordianStyles.contentText}>
                  {object.item.worshipExperience}
                </Text>
              </View>
            </View>

            <View style={accordianStyles.listItemContainer}>
              <View style={accordianStyles.listItemHeader}>
                <Text style={[accordianStyles.accordionHeaderText]}> Additional Notes </Text>
              </View>
              <View style={accordianStyles.listItemContent}>
                <Text style={accordianStyles.contentText}>
                  {object.item.additionalNotes}
                </Text>
              </View>
            </View>
            
          </List.Accordion>
        );
      }
      return( 
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <List.Section title="Instruments">
              <FlatList
                data = {myInstruments}
                style = {{height: "100%", width: "100%"}}
                renderItem = {instrumentRender}/>
            </List.Section>
          </View>
      );
    }
      
    const ChurchRoute = () => (
        <View style={styles.content}>
          <Image style={styles.churchIcon} source={require('../../../assets/churchIcon.png')}/>
          <Text style={{alignSelf: "center", marginTop: "5%", fontSize: height/40, textAlign: 'center'}}>{MyChurchName}</Text>
          <Text style={{alignSelf: "center", marginTop: "5%", fontSize: height/45, textAlign: 'center'}}>Denomination: {MyDenomination}</Text>
          <Text style={{alignSelf: "center", marginTop: "5%", fontSize: height/45, textAlign: 'center'}}>{MyChurchLocation}</Text>
          <Text style={{alignSelf: "center", marginTop: "5%", fontSize: height/45, textAlign: 'center', color: "rgb(0, 97, 117)"}}>www.gracepoint.com</Text>
        </View>
      );

    const SocialsRoute = () => (
        <View style={styles.content}>
          <View style={[styles.socialsBox, {marginTop: 35}]}>
            <Image style={[styles.socialsLogo, {height: 45}]} source={require('../../../assets/tiktoklogo.png')}/>
            <Text>tiktok_handle</Text>
          </View>
          <View style={styles.socialsBox}>
            <Image style={styles.socialsLogo} source={require('../../../assets/instagramlogo.png')}/>
            <Text>instagram_handle</Text>
          </View>
          <View style={styles.socialsBox}>
            <Image style={styles.socialsLogo} source={require('../../../assets/facebooklogo.png')}/>
            <Text>facebook_handle</Text>
          </View>
          <View style={styles.socialsBox}>
            <Image style={[styles.socialsLogo, {height: 32}]} source={require('../../../assets/twitterlogo.png')}/>
            <Text>twitter_handle</Text>
          </View>
        </View>
      );
      
      
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Sparks' },
        { key: 'second', title: 'Music' },
        { key: 'third', title: 'Church' },
        { key: 'fourth', title: 'Socials' },
    ]);
    
    const renderScene = SceneMap({
        first: SparkRoute,
        second: MusicRoute,
        third: ChurchRoute,
        fourth: SocialsRoute
    });

    const renderTabBar = props => (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#006175' }}
        scrollEnabled= {true}
        labelStyle={{color:"#006175"}}
        style={{ backgroundColor: 'rgb(219, 233, 236)'}}
      />
    );

    const [MyName, setMyName] = React.useState("Name not set");

    async function setName() {
      let name = await FirebaseButler.fbGet(`Users/${userId}/info/name`);
      if (name) {
        setMyName(name);
      }
    }

    const [MyRole, setMyRole] = React.useState("Role is not set");

    async function setRole() {
      let role = await FirebaseButler.fbGet(`Users/${userId}/role`);
      if (role) {
        setMyRole(role);
      }
    }

    const [MyLocation, setMyLocation] = React.useState("Location is not set");

    async function setLocation() {
      let location = await FirebaseButler.fbGet(`Users/${userId}/info/location`);
      if (location) {
        setMyLocation(location);
      }
    }

    const [MyBio, setMyBio] = React.useState("Bio is not set");

    async function setBio() {
      //bio = userObj.bio;
      let bio = await FirebaseButler.fbGet(`Users/${userId}/info/bio`);
      if (bio) {
        setMyBio(bio);
      }
    }

    const [MyChurchName, setMyChurchName] = React.useState("Church Name is not set");

    async function setChurchName() {
      let churchName = await FirebaseButler.fbGet(`Users/${userId}/info/churchName`);
      if (churchName) {
        setMyChurchName(churchName);
      }
    }

    const [MyDenomination, setMyDenomination] = React.useState("Denomination is not set");

    async function setDenomination() {
      let denomination = await FirebaseButler.fbGet(`Users/${userId}/info/denomination`);
      if (denomination) {
        setMyDenomination(denomination);
      }
    }

    const [MyChurchLocation, setMyChurchLocation] = React.useState("Church Location is not set");

    async function setChurchLocation() {
      let churchLocation = await FirebaseButler.fbGet(`Users/${userId}/info/churchStreetAddress`);
      if (churchLocation) {
        setMyChurchLocation(churchLocation);
      }
    }

    const [myInstruments, setMyInstruments] = React.useState(null);

    async function setInstruments() {
      let instruments = await FirebaseButler.fbGet(`Users/${userId}/info/instruments`);
      if (instruments) {
        setMyInstruments(() => [...instruments]);
      }
    }

    // -----------------------
    // Demo Friend Code
    // -----------------------

    async function logFriends() {
      //get current friends list, which is a list of userIds
      let friendsListObj = await FirebaseButler.fbGet(`Users/${userId}/friends`) || {};
      let friendsList = Object.values(friendsListObj);

      //populate full friends list
      let fullFriendsList = [];
      for (let friendIndex in friendsList) {
        let friendId = friendsList[friendIndex];
        let friendName = await FirebaseButler.fbGet(`Users/${friendId}/info/name`);
        fullFriendsList.push(friendName);
      }

      console.log("Friends", fullFriendsList);
    }

    useEffect(() => {
      setName();
      setRole();
      setLocation();
      setBio();
      setChurchName();
      setDenomination();
      setChurchLocation();
      setInstruments();
      //getPhoto();
    }, [])

      return (
        <View style={styles.MainContainer}>
            <View style={styles.topBorder}>
              <View style={[styles.row2, {justifyContent: 'space-between', marginLeft: 20, marginRight: 20, alignItems: 'center'}]}>
                {/* <TouchableOpacity onPress = {() => logFriends()}><Image style={{height: 40, width: 40}} 
                source={require('../../../assets/friendicon.png')}></Image></TouchableOpacity> */}
                <IconButton onPress = {() => navigation.navigate(Routes.chatList, route.params)}
              icon = "users-outline" style = {{position: "absolute", left: "0%"}}/>
                <IconButton onPress = {() => navigation.navigate(Routes.chatList, route.params)}
              icon = "pencil-outline" style = {{position: "absolute", right: "0%"}}/>
                <Text style={styles.titleText}>My Profile</Text>
                {/* friend list & profile edit icon */}
                {/* <TouchableOpacity onPress = {() => navigation.navigate(Routes.profileCreation, props)}>
                  <Image style={{height: 40, width: 40}} source={require('../../../assets/editprofileicon.png')}</Image>
                  </TouchableOpacity> */}
              </View>
              <View style={styles.row} >
                <ProfileImage size = "large" userId = {userId} />
                <View style={styles.column}>
                  <Text style={{fontSize: height/35, fontWeight: '500', marginBottom: 10}}>{MyName}</Text>
                  <Text style={{fontSize: height/45, fontWeight: '400', marginBottom: 13}}>Instrumentalist</Text>
                  <View style={styles.row2}>
                    <Image style={{height: 20, width: 20}} source={require('../../../assets/locationpin.png')}></Image>
                    <Text>{MyLocation}</Text>
                  </View>
                </View>
              </View>
            <View style={[styles.row, {marginLeft: 70, marginRight: 70, top: "20%", alignItems: "center"}]}>
              <Image style={{height: 25, width: 25}} source={require('../../../assets/filledspark.png')}></Image>
              <Image style={{height: 25, width: 25}} source={require('../../../assets/filledspark.png')}></Image>
              <Image style={{height: 25, width: 25}} source={require('../../../assets/filledspark.png')}></Image>
              <Image style={{height: 25, width: 25}} source={require('../../../assets/emptyspark.png')}></Image>
              <Image style={{height: 25, width: 25}} source={require('../../../assets/emptyspark.png')}></Image>
              <Text style={{marginLeft: 15, fontSize: 14, color: "#006175"}}>324 sparks</Text>
            </View>
            </View>
            <View style={styles.content}>
              <TabView navigationState={{ index, routes }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex}/>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    MainContainer: {
      backgroundColor: "white",
      height: "100%",
    },

    topBorder:{
      height: "35%",
      width: "100%",
      backgroundColor: "rgb(219, 233, 236)",
    },

    content: {
      height: '60%'
    },

    churchIcon: {
      alignSelf: "center",
      height: 100,
      width: 100,
      marginTop: "7%",
      marginBottom: "3%"
    },

    titleText: {
      fontSize: height/40,
      textAlign: 'center',
      color: "black"
    },

    row: {
      flexDirection: 'row',
      marginTop: "5%",
      justifyContent: 'space-evenly'
    },

    row2: {
      flexDirection: 'row',
      paddingTop: "3%"
    },

    column: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    accordian: {
      backgroundColor: '#F2905B',
      padding: 10,
      marginLeft: '5%',
      marginRight: '5%', 
      marginBottom: '4%',
      borderRadius: 10
    },

    // The orange box that holds the social media logo and the user's handle
    socialsBox: {
      backgroundColor: "#F2905B",
      borderRadius: 10,
      width: "85%",
      height: 60,
      marginBottom: "6%",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: 'center'
    },

    // Formatting for the social media logos on the socials page
    socialsLogo: {
      height: 40,
      width: 40,
      marginLeft: "5%",
      marginRight: "5%"
    },

})

const accordianStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    flexDirection: "column"
  },
  section: {
    backgroundColor: "white",
    width: "100%"
  },
  listItemContainer: {
    backgroundColor: "white",
    paddingTop: "2%",
    paddingBottom: "2%",
    width: "85%"
  },
  listItemHeader: {
    padding: "2%",
    alignItems: "flex-start",
  },
  contentText: {
    flexWrap: "wrap"
  },
  listItemContent: {
    padding: "5%"
  },
  header: {
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  accordionList: {
    width: "100%",
    top: "5%",
    height: "30%"
  },
  accordionHeaderText: {
    fontSize: 15,
    fontFamily: "RNSMiles"
  }

});
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIcon from '../components/AppIcon';

const content = {
  Alerts: ['Safety updates', 'Wind advisory', 'Wind may reach 27 km/h after 1 PM. Monitor conditions before leaving harbour.'],
  'Start trip': ['Trip monitoring', 'Ratnagiri Coast', 'Live location, route warnings and emergency support will remain active while your trip is running.'],
  'Safe route': ['Recommended route', '8.4 km to fishing zone', 'This route avoids the nearby restricted area and follows calmer water.'],
  'Share update': ['Community update', 'Share an observation', 'Your update is shared with nearby fishers after moderation.'],
  'Personal information': ['Personal information', 'Ramesh Kumar', 'Mobile number and account details'],
  'Vessel information': ['Vessel information', 'MFB Sagarika', 'Registered fishing vessel details'],
  'Emergency contact': ['Emergency contact', 'Sunita Koli', 'Primary contact for emergency alerts'],
  'Home port': ['Home port', 'Ratnagiri, Maharashtra', 'Used for local safety advisories'],
  Notifications: ['Notifications', 'Safety alerts enabled', 'Critical and emergency alerts are always enabled.'],
  'Offline mode': ['Offline mode', 'Cached marine data', 'Download the latest conditions before leaving network coverage.'],
};

export default function Details({ navigation, route }) {
  const type = route.params?.type || 'Alerts';
  const [title, heading, description] = content[type] || content.Alerts;
  const [message, setMessage] = useState('');
  const isComposer = type === 'Share update';
  const isTrip = type === 'Start trip';
  const finish = () => {
    Alert.alert(isComposer ? 'Update submitted' : isTrip ? 'Trip started' : 'Saved', isComposer ? 'Your update is ready for moderation.' : isTrip ? 'ORCA is now monitoring your route and conditions.' : 'Your preference has been saved.');
    if (isTrip) navigation.navigate('MainTabs', { screen: 'Home' });
  };

  return <SafeAreaView style={styles.container}>
    <View style={styles.header}><TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}><AppIcon name="back" /></TouchableOpacity><Text style={styles.headerTitle}>{title}</Text></View>
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.hero}><AppIcon name={isTrip ? 'boat' : isComposer ? 'community' : 'safety'} size={30} color="#0B3C61" /><Text style={styles.eyebrow}>ORCA</Text><Text style={styles.title}>{heading}</Text><Text style={styles.description}>{description}</Text></View>
      {isComposer && <TextInput value={message} onChangeText={setMessage} placeholder="Describe what you are seeing…" placeholderTextColor="#93A7AF" multiline style={styles.input} />}
      {type === 'Alerts' && <View style={styles.alert}><Text style={styles.alertTitle}>Moderate risk</Text><Text style={styles.alertText}>Check the Plan and Map tabs for the latest route and condition details.</Text></View>}
      <TouchableOpacity style={styles.primary} onPress={finish}><Text style={styles.primaryText}>{isComposer ? 'Post update' : isTrip ? 'Start monitoring' : 'Save changes'}</Text></TouchableOpacity>
    </ScrollView>
  </SafeAreaView>;
}

const styles = StyleSheet.create({ container:{flex:1,backgroundColor:'#F6F9FC'},header:{height:64,paddingHorizontal:18,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderColor:'#DCE9F3',backgroundColor:'#fff'},back:{width:34,height:34,alignItems:'center',justifyContent:'center',borderRadius:17,backgroundColor:'#EAF1F7'},headerTitle:{fontSize:17,fontWeight:'700',color:'#152A38',marginLeft:12},content:{padding:18},hero:{backgroundColor:'#EAF4FB',borderRadius:20,padding:22,borderWidth:1,borderColor:'#D0E4F0'},eyebrow:{fontSize:11,fontWeight:'700',letterSpacing:1,color:'#146FAE',marginTop:14},title:{fontSize:23,fontWeight:'700',color:'#152A38',marginTop:5},description:{fontSize:14,lineHeight:21,color:'#59717C',marginTop:10},input:{minHeight:130,textAlignVertical:'top',backgroundColor:'#fff',borderWidth:1,borderColor:'#DCE9F3',borderRadius:16,padding:15,fontSize:14,color:'#152A38',marginTop:16},alert:{marginTop:16,backgroundColor:'#FFF5E5',borderRadius:16,padding:16},alertTitle:{fontWeight:'700',color:'#9A7412'},alertText:{fontSize:13,lineHeight:19,color:'#80651D',marginTop:5},primary:{marginTop:22,backgroundColor:'#146FAE',padding:15,borderRadius:14,alignItems:'center'},primaryText:{color:'#fff',fontSize:14,fontWeight:'700'} });

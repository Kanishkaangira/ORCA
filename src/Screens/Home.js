import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

const actions = [
  ['Plan trip', 'calendar-outline', 'Plans', '#146FAE', '#E3F1FB'],
  ['Check weather', 'partly-sunny-outline', 'Plans', '#E08A2B', '#FBEEDD'],
  ['Fishing zones', 'fish-outline', 'Map', '#1E9A66', '#E4F5EC'],
  ['Safe route', 'navigate-outline', 'Map', '#146FAE', '#E3F1FB'],
  ['Safety alerts', 'warning-outline', 'Details', '#B58510', '#FBF2D8'],
  ['Emergency SOS', 'call-outline', 'Details', '#E94F4F', '#FCE6E6'],
];

function Action({ item, navigation }) {
  const [label, icon, screen, tint, tintBg] = item;
  const danger = label === 'Emergency SOS';
  const open = () => screen === 'Details'
    ? navigation.navigate('Details', { type: danger ? 'Start trip' : 'Alerts' })
    : navigation.navigate(screen);
  return <TouchableOpacity onPress={open} style={[styles.action, danger && styles.actionDanger]} activeOpacity={0.8}>
    <View style={[styles.actionIcon, { backgroundColor: tintBg }]}><Ionicons name={icon} size={22} color={tint} /></View>
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>;
}

function StatusMetric({ icon, label, value, alert }) {
  return <View style={styles.statusMetric}>
    <View style={[styles.statusMetricIcon, alert && styles.statusMetricIconAlert]}>
      <Ionicons name={icon} size={18} color={alert ? '#F0803F' : '#146FAE'} />
    </View>
    <Text style={styles.statusMetricLabel}>{label}</Text>
    <Text style={[styles.statusMetricValue, alert && styles.statusMetricAlert]}>{value}</Text>
  </View>;
}

export default function Home({ navigation }) {
  return <SafeAreaView style={styles.safe} edges={['top']}>
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>

      <View style={styles.header}>
        {/* soft decorative glow, purely visual — sits behind everything in the header */}
        <View style={styles.headerGlowOne} />
        <View style={styles.headerGlowTwo} />

        <View style={styles.headerTop}>
          <View style={styles.logo}><Ionicons name="fish" size={25} color="#146FAE" /></View>
          <View style={styles.brand}>
            <Text style={styles.brandName}>ORCA</Text>
            <Text style={styles.brandTag}>Marine intelligence & safety</Text>
          </View>
        </View>

        {/* Floating notification + profile rail — bell on top, avatar hangs below it */}
        <View style={styles.headerRail}>
          <TouchableOpacity
            style={styles.headerNotification}
            onPress={() => navigation.navigate('Details', { type: 'Alerts' })}
            activeOpacity={0.85}
          >
            <Ionicons name="notifications-outline" size={18} color="#FFFFFF" />
            <View style={styles.notifDot} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.avatarTouchable}
            onPress={() => navigation.navigate('Profile')}
            activeOpacity={0.85}
          >
            <View style={styles.avatarRing}>
              <View style={styles.avatarCore}>
                <Text style={styles.headerInitials}>RK</Text>
              </View>
            </View>
            <View style={styles.avatarStatusDot} />
          </TouchableOpacity>
        </View>

        <Text style={styles.greeting}>Good morning, Ramesh</Text>
        <Text style={styles.greetingDetail}>Here is your marine situation for today.</Text>
      </View>

      <View style={styles.status}>
        <View style={styles.statusTop}>
          <View>
            <Text style={styles.statusHeading}>MARINE CONDITIONS</Text>
            <Text style={styles.statusTitle}>Moderate risk</Text>
          </View>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>YELLOW</Text>
          </View>
        </View>
        <View style={styles.updated}>
          <Text style={styles.statusText}>Updated 4 min ago · Ratnagiri coast</Text>
          <Text style={styles.sim}>SIM</Text>
        </View>
        <View style={styles.statusMetrics}>
          <StatusMetric icon="navigate-outline" label="Wind" value="18 km/h" />
          <StatusMetric icon="water-outline" label="Waves" value="1.4 m" />
          <StatusMetric icon="notifications-outline" label="Alerts" value="1 active" alert />
        </View>
      </View>

      <TouchableOpacity style={styles.ask} onPress={() => navigation.navigate('Chatbot')} activeOpacity={0.9}>
        <View style={styles.askGlow} />
        <View style={styles.askMark}><Ionicons name="sparkles-outline" size={20} color="#fff" /></View>
        <View style={styles.askCopy}>
          <Text style={styles.askTitle}>Ask ORCA</Text>
          <Text style={styles.askText}>Fishing, weather, routes or safety.</Text>
        </View>
        <View style={styles.askArrow}><Ionicons name="arrow-forward" size={18} color="#146FAE" /></View>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Quick access</Text>
      <View style={styles.actionGrid}>{actions.map(item => <Action item={item} navigation={navigation} key={item[0]} />)}</View>

      <TouchableOpacity style={styles.mapCard} onPress={() => navigation.navigate('Map')} activeOpacity={0.9}>
        <View style={styles.coast} />
        <View style={[styles.zone, styles.zoneOne]} />
        <View style={[styles.zone, styles.zoneTwo]} />
        <View style={[styles.zone, styles.zoneThree]} />
        <View style={styles.mapShade} />
        <View style={styles.pfz}><Ionicons name="fish-outline" size={13} color="#fff" /><Text style={styles.pfzText}>Potential fishing zone</Text></View>
        <View style={styles.mapCircle}><Ionicons name="map-outline" size={18} color="#146FAE" /></View>
        <Text style={styles.mapCaption}>8.4 km away · High potential</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  safe:{flex:1,backgroundColor:'#146FAE'},
  scroll:{flex:1,backgroundColor:'#EAF3FA'},
  content:{paddingBottom:28},

  header:{backgroundColor:'#146FAE',padding:20,paddingTop:12,paddingBottom:34,borderBottomLeftRadius:30,borderBottomRightRadius:30,overflow:'hidden'},
  headerGlowOne:{position:'absolute',width:180,height:180,borderRadius:90,backgroundColor:'rgba(255,255,255,0.07)',top:-90,left:-50},
  headerGlowTwo:{position:'absolute',width:130,height:130,borderRadius:65,backgroundColor:'rgba(58,153,231,0.35)',top:30,right:-55},

  headerTop:{flexDirection:'row',alignItems:'center',paddingRight:60},
  logo:{width:44,height:44,borderRadius:15,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',shadowColor:'#03263F',shadowOpacity:0.25,shadowRadius:8,shadowOffset:{width:0,height:4},elevation:4},
  brand:{flex:1,marginLeft:12},
  brandName:{fontSize:25,fontWeight:'800',color:'#fff',letterSpacing:0.5},
  brandTag:{fontSize:10.5,color:'#D9EEFA',marginTop:1,letterSpacing:0.2},

  /* floating bell + avatar rail, top-right of header */
  headerRail:{position:'absolute',top:12,right:16,alignItems:'center',zIndex:5},
  headerNotification:{width:38,height:38,borderRadius:19,backgroundColor:'rgba(255,255,255,0.18)',borderWidth:1,borderColor:'rgba(255,255,255,0.4)',alignItems:'center',justifyContent:'center'},
  notifDot:{position:'absolute',top:6,right:6,width:8,height:8,borderRadius:4,backgroundColor:'#F0803F',borderWidth:1.5,borderColor:'#146FAE'},

  /* redesigned profile icon: layered ring + two-tone core + status dot */
  avatarTouchable:{marginTop:10,alignItems:'center',justifyContent:'center'},
  avatarRing:{
    width:58,height:58,borderRadius:29,
    backgroundColor:'rgba(255,255,255,0.9)',
    alignItems:'center',justifyContent:'center',
    shadowColor:'#03263F',shadowOpacity:0.3,shadowRadius:8,shadowOffset:{width:0,height:5},elevation:6,
  },
  avatarCore:{
    width:48,height:48,borderRadius:24,
    backgroundColor:'#0B3C61',
    borderWidth:2,borderColor:'#3A99E7',
    alignItems:'center',justifyContent:'center',
  },
  headerInitials:{fontSize:15,fontWeight:'800',color:'#fff',letterSpacing:0.5},
  avatarStatusDot:{
    position:'absolute',bottom:1,right:1,
    width:13,height:13,borderRadius:7,
    backgroundColor:'#2BAE73',borderWidth:2,borderColor:'#146FAE',
  },

  greeting:{fontSize:22,fontWeight:'800',color:'#fff',marginTop:26},
  greetingDetail:{fontSize:13,color:'#D9EEFA',marginTop:3},

  status:{backgroundColor:'#E8F5FE',borderWidth:1,borderColor:'#B7DCF3',marginHorizontal:16,marginTop:-18,borderRadius:22,padding:20,shadowColor:'#0B3C61',shadowOpacity:0.08,shadowRadius:14,shadowOffset:{width:0,height:6},elevation:3},
  statusTop:{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'},
  statusHeading:{fontSize:11,fontWeight:'800',color:'#4E7C9E',letterSpacing:0.8},
  statusTitle:{fontSize:22,fontWeight:'800',color:'#152A38',marginTop:6},
  badge:{flexDirection:'row',alignItems:'center',gap:6,backgroundColor:'#FCF4D8',borderRadius:18,paddingHorizontal:12,paddingVertical:8,borderWidth:1,borderColor:'#EFDFA0'},
  badgeDot:{width:7,height:7,borderRadius:4,backgroundColor:'#B58510'},
  badgeText:{fontSize:11,fontWeight:'800',color:'#9D7613',letterSpacing:0.3},
  updated:{width:'100%',marginTop:11,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  statusText:{fontSize:12,color:'#7891A0'},
  sim:{fontSize:9,fontWeight:'800',color:'#F0803F',backgroundColor:'#FBE8D7',borderRadius:10,paddingHorizontal:9,paddingVertical:3},
  statusMetrics:{width:'100%',flexDirection:'row',gap:9,marginTop:16},
  statusMetric:{flex:1,backgroundColor:'#FFFFFF',borderRadius:16,paddingVertical:14,alignItems:'center',shadowColor:'#0B3C61',shadowOpacity:0.05,shadowRadius:6,shadowOffset:{width:0,height:2},elevation:1},
  statusMetricIcon:{width:34,height:34,borderRadius:11,backgroundColor:'#E3F1FB',alignItems:'center',justifyContent:'center'},
  statusMetricIconAlert:{backgroundColor:'#FCEADD'},
  statusMetricLabel:{fontSize:11.5,color:'#8AA1AF',marginTop:8},
  statusMetricValue:{fontSize:15.5,fontWeight:'800',color:'#152A38',marginTop:3},
  statusMetricAlert:{color:'#F0803F'},

  sectionTitle:{marginHorizontal:16,marginTop:25,fontSize:16.5,fontWeight:'800',color:'#152A38',letterSpacing:0.1},

  actionGrid:{marginHorizontal:16,marginTop:11,flexDirection:'row',flexWrap:'wrap',gap:10},
  action:{width:'48.5%',height:84,borderRadius:17,backgroundColor:'#fff',borderWidth:1,borderColor:'#E1EDF4',padding:13,flexDirection:'row',alignItems:'center',shadowColor:'#0B3C61',shadowOpacity:0.05,shadowRadius:8,shadowOffset:{width:0,height:3},elevation:1},
  actionDanger:{borderColor:'#F5D3D3'},
  actionIcon:{width:40,height:40,borderRadius:13,alignItems:'center',justifyContent:'center'},
  actionText:{flex:1,marginLeft:10,fontSize:11.5,fontWeight:'800',color:'#263F50'},

  ask:{marginHorizontal:16,marginTop:19,borderRadius:19,backgroundColor:'#146FAE',padding:15,flexDirection:'row',alignItems:'center',overflow:'hidden',shadowColor:'#146FAE',shadowOpacity:0.35,shadowRadius:14,shadowOffset:{width:0,height:8},elevation:6},
  askGlow:{position:'absolute',width:140,height:140,borderRadius:70,backgroundColor:'rgba(255,255,255,0.08)',top:-60,right:-40},
  askMark:{width:44,height:44,borderRadius:14,backgroundColor:'#3A99E7',alignItems:'center',justifyContent:'center'},
  askCopy:{flex:1,marginLeft:12},
  askTitle:{fontSize:15.5,fontWeight:'800',color:'#fff'},
  askText:{fontSize:11.5,color:'#D9EEFA',marginTop:3},
  askArrow:{width:32,height:32,borderRadius:16,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'},

  mapCard:{height:170,marginHorizontal:16,marginTop:20,marginBottom:6,borderRadius:19,backgroundColor:'#237B9E',overflow:'hidden',shadowColor:'#0B3C61',shadowOpacity:0.18,shadowRadius:14,shadowOffset:{width:0,height:8},elevation:5},
  coast:{position:'absolute',left:-40,top:-25,width:145,height:225,borderRadius:82,backgroundColor:'#789B70'},
  mapShade:{position:'absolute',left:0,right:0,bottom:0,height:70,backgroundColor:'rgba(11,60,97,0.35)'},
  zone:{position:'absolute',borderRadius:30,backgroundColor:'#2BAE73',shadowColor:'#D7FF20',shadowOpacity:.9,shadowRadius:17,elevation:7},
  zoneOne:{width:50,height:38,left:72,top:82},
  zoneTwo:{width:47,height:29,left:158,top:49,backgroundColor:'#EFB223'},
  zoneThree:{width:37,height:24,left:203,top:100,backgroundColor:'#EF5B57'},
  pfz:{position:'absolute',top:11,left:11,flexDirection:'row',alignItems:'center',gap:5,backgroundColor:'#146FAE',borderRadius:14,paddingHorizontal:10,paddingVertical:6},
  pfzText:{fontSize:10,fontWeight:'800',color:'#fff'},
  mapCircle:{position:'absolute',right:11,bottom:12,width:35,height:35,borderRadius:18,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',shadowColor:'#03263F',shadowOpacity:0.3,shadowRadius:6,shadowOffset:{width:0,height:3},elevation:3},
  mapCaption:{position:'absolute',left:12,bottom:18,fontSize:10.5,fontWeight:'800',color:'#fff'},
});
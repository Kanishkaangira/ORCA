import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import Home from '../Screens/Home';
import Community from '../Screens/Community';
import Map from '../Screens/map';
import Plans from '../Screens/Plans';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

const tabMeta = {
  Home: { label: 'Home', icon: 'home-outline', iconActive: 'home' },
  Plans: { label: 'Plan', icon: 'calendar-outline', iconActive: 'calendar' },
  Map: { label: 'Map', icon: 'map-outline', iconActive: 'map' },
  Community: { label: 'Community', icon: 'people-outline', iconActive: 'people' },
  Profile: { label: 'Profile', icon: 'person-outline', iconActive: 'person' },
};

function OrcaTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();
  const bottomSpace = Math.max(insets.bottom, 10);

  return (
    <View style={[styles.bar, { height: 70 + bottomSpace, paddingBottom: bottomSpace }]}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const { options } = descriptors[route.key];
        const meta = tabMeta[route.name];
        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
          if (!focused && !event.defaultPrevented) navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity key={route.key} accessibilityRole="button" accessibilityState={focused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel} testID={options.tabBarButtonTestID} onPress={onPress}
            onLongPress={() => navigation.emit({ type: 'tabLongPress', target: route.key })} style={styles.item} activeOpacity={0.72}>
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Ionicons
                name={focused ? meta.iconActive : meta.icon}
                size={focused ? 22 : 20}
                color={focused ? '#FFFFFF' : '#78909C'}
              />
            </View>
            <Text style={[styles.label, focused && styles.labelActive]}>{meta.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const renderOrcaTabBar = props => <OrcaTabBar {...props} />;

export default function HomeBottomNavigation() {
  return (
    <Tab.Navigator tabBar={renderOrcaTabBar} screenOptions={{ headerShown: false, sceneStyle: { paddingBottom: 88 } }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Plans" component={Plans} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(20,111,174,0.11)',
    shadowColor: '#0B3C61',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    elevation: 14,
  },
  item: { flex: 1, alignItems: 'center', justifyContent: 'center', minHeight: 52 },
  /* bigger pill, transparent when inactive so it doesn't crowd the icon */
  iconWrap: {
    width: 44,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  /* solid teal, sized up, with a soft shadow so it reads clearly as "active" */
  iconWrapActive: {
    width: 50,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#146FAE',
    shadowColor: '#146FAE',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  label: { marginTop: 4, fontSize: 9.5, lineHeight: 11, fontWeight: '700', color: '#78909C' },
  labelActive: { color: '#146FAE', fontWeight: '800' },
});
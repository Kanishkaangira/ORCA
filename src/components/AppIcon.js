import React from 'react';
import { Ionicons } from '@react-native-vector-icons/ionicons';

const icons = {
  home: 'home-outline',
  plan: 'calendar-outline',
  map: 'map-outline',
  community: 'people-outline',
  profile: 'person-outline',
  bell: 'notifications-outline',
  location: 'locate-outline',
  route: 'navigate-outline',
  assistant: 'sparkles-outline',
  boat: 'boat-outline',
  wind: 'cloudy-outline',
  wave: 'water-outline',
  weather: 'sunny-outline',
  safety: 'alert-circle-outline',
  chevron: 'chevron-forward',
  back: 'chevron-back',
  send: 'arrow-up',
  settings: 'settings-outline',
  logout: 'log-out-outline',
};

export default function AppIcon({ name, size = 20, color = '#146FAE', style }) {
  return <Ionicons name={icons[name] || 'ellipse-outline'} size={size} color={color} style={style} />;
}

import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@react-native-vector-icons/ionicons';

const SUGGESTIONS = [
  { label: 'Safe to go out?', icon: 'shield-checkmark-outline', preset: 'Is it safe to go fishing today?' },
  { label: 'Fishing zones', icon: 'fish-outline', preset: 'Show me nearby fishing zones' },
  { label: 'Wind & waves', icon: 'water-outline', preset: 'What is the wind and wave condition right now?' },
];

export default function Chatbot({ navigation }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'orca', text: 'Hello, Ramesh. Ask me about conditions, fishing zones or safety.', time: '9:02 AM' },
  ]);

  const send = (preset) => {
    const question = (preset || input).trim();
    if (!question) return;
    setMessages((current) => [
      ...current,
      { role: 'user', text: question, time: 'now' },
      {
        role: 'orca',
        text: 'Conditions near the coast are suitable: wind is 14 km/h and waves are 0.8 m. Check the Map before you leave harbour.',
        time: 'now',
      },
    ]);
    setInput('');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerGlow} />

          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()} activeOpacity={0.85}>
            <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.headerAvatar}>
            <Ionicons name="sparkles" size={17} color="#146FAE" />
          </View>

          <View style={styles.headerText}>
            <Text style={styles.title}>Ask ORCA</Text>
            <View style={styles.statusRow}>
              <View style={styles.statusDot} />
              <Text style={styles.status}>Marine assistant online</Text>
            </View>
          </View>
        </View>

        {/* MESSAGES */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.messages}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((item, index) => {
            const isUser = item.role === 'user';
            return (
              <View
                key={`${item.role}-${index}`}
                style={[styles.row, isUser ? styles.rowUser : styles.rowOrca]}
              >
                {!isUser && (
                  <View style={styles.orcaAvatar}>
                    <Ionicons name="sparkles" size={13} color="#146FAE" />
                  </View>
                )}

                <View style={[styles.bubble, isUser ? styles.user : styles.orca]}>
                  <Text style={[styles.bubbleText, isUser && styles.userText]}>{item.text}</Text>
                  <Text style={[styles.time, isUser && styles.timeUser]}>{item.time}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        {/* SUGGESTIONS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.suggestionsScroll}
          contentContainerStyle={styles.suggestions}
        >
          {SUGGESTIONS.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.chip}
              activeOpacity={0.85}
              onPress={() => send(item.preset)}
            >
              <Ionicons name={item.icon} size={13} color="#146FAE" />
              <Text style={styles.chipText}>{item.label}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={styles.chip}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('MainTabs', { screen: 'Map' })}
          >
            <Ionicons name="map-outline" size={13} color="#146FAE" />
            <Text style={styles.chipText}>Open marine map</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* COMPOSER */}
        <View style={styles.composer}>
          <View style={styles.inputWrap}>
            <Ionicons name="mic-outline" size={18} color="#93A7AF" />
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Ask ORCA anything…"
              placeholderTextColor="#93A7AF"
              style={styles.input}
              onSubmitEditing={() => send()}
              returnKeyType="send"
            />
          </View>

          <TouchableOpacity
            style={[styles.send, !input.trim() && styles.sendDisabled]}
            onPress={() => send()}
            activeOpacity={0.85}
          >
            <Ionicons name="send" size={17} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#146FAE' },

  /* HEADER */
  header: {
    backgroundColor: '#146FAE',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    overflow: 'hidden',
  },
  headerGlow: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(58,153,231,0.3)',
    top: -70,
    right: -40,
  },
  back: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: { flex: 1 },
  title: { fontSize: 16.5, fontWeight: '800', color: '#FFFFFF' },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 2 },
  statusDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#6EE7A8' },
  status: { fontSize: 11, color: '#D9EEFA' },

  /* MESSAGES */
  scroll: { flex: 1, backgroundColor: '#EAF3FA' },
  messages: { padding: 16, gap: 12, flexGrow: 1 },

  row: { flexDirection: 'row', alignItems: 'flex-end', gap: 8, maxWidth: '90%' },
  rowOrca: { alignSelf: 'flex-start' },
  rowUser: { alignSelf: 'flex-end' },

  orcaAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#E3F1FB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bubble: {
    maxWidth: '86%',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  orca: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1EDF4',
    borderBottomLeftRadius: 4,
  },
  user: {
    backgroundColor: '#146FAE',
    borderBottomRightRadius: 4,
  },
  bubbleText: { fontSize: 14, lineHeight: 20, color: '#152A38' },
  userText: { color: '#FFFFFF' },
  time: { fontSize: 9.5, color: '#9AAAB0', marginTop: 6, alignSelf: 'flex-end' },
  timeUser: { color: 'rgba(255,255,255,0.75)' },

  /* SUGGESTIONS */
  suggestionsScroll: { backgroundColor: '#EAF3FA', flexGrow: 0 },
  suggestions: { paddingHorizontal: 16, paddingBottom: 12, flexDirection: 'row', gap: 8 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1EDF4',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 16,
  },
  chipText: { fontSize: 12, fontWeight: '700', color: '#0B3C61' },

  /* COMPOSER */
  composer: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E1EDF4',
  },
  inputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F1F6FA',
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 48,
  },
  input: { flex: 1, color: '#152A38', fontSize: 14 },
  send: {
    backgroundColor: '#146FAE',
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#146FAE',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  sendDisabled: { backgroundColor: '#9FC3DD' },
});
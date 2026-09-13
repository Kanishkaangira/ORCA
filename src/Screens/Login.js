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

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // Temporary navigation for prototype
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >

          {/* HERO */}
          <View style={styles.hero}>
            <View style={styles.heroGlowOne} />
            <View style={styles.heroGlowTwo} />

            <View style={styles.logoRing}>
              <View style={styles.logoCore}>
                <Ionicons name="fish" size={34} color="#FFFFFF" />
              </View>
            </View>

            <Text style={styles.brand}>ORCA</Text>
            <Text style={styles.brandTag}>Marine intelligence & safety</Text>
          </View>

          {/* FORM CARD */}
          <View style={styles.card}>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>
              Sign in with your mobile number to get fishing, weather and safety guidance.
            </Text>

            <Text style={styles.label}>Mobile number</Text>

            <View style={[styles.inputWrap, phone.length > 0 && styles.inputWrapActive]}>
              <View style={styles.countryCode}>
                <Text style={styles.countryCodeText}>🇮🇳 +91</Text>
              </View>

              <View style={styles.inputDivider} />

              <Ionicons name="call-outline" size={17} color="#8AA1AF" style={{ marginRight: 8 }} />

              <TextInput
                style={styles.input}
                placeholder="98765 43210"
                placeholderTextColor="#9AAAB0"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                maxLength={10}
              />
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              activeOpacity={0.9}
            >
              <Text style={styles.loginText}>Continue</Text>
              <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Trusted by coastal communities</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.trustRow}>
              <View style={styles.trustItem}>
                <Ionicons name="shield-checkmark-outline" size={15} color="#146FAE" />
                <Text style={styles.trustText}>Verified data</Text>
              </View>
              <View style={styles.trustItem}>
                <Ionicons name="notifications-outline" size={15} color="#146FAE" />
                <Text style={styles.trustText}>Live alerts</Text>
              </View>
              <View style={styles.trustItem}>
                <Ionicons name="call-outline" size={15} color="#146FAE" />
                <Text style={styles.trustText}>Emergency SOS</Text>
              </View>
            </View>

            <Text style={styles.info}>
              By continuing, you agree to use ORCA's marine advisory services and safety alerts.
            </Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#146FAE' },
  scrollContent: { flexGrow: 1 },

  /* HERO */
  hero: {
    backgroundColor: '#146FAE',
    paddingTop: 36,
    paddingBottom: 56,
    alignItems: 'center',
    overflow: 'hidden',
  },
  heroGlowOne: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(255,255,255,0.07)',
    top: -110,
    left: -60,
  },
  heroGlowTwo: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(58,153,231,0.35)',
    top: 20,
    right: -60,
  },

  logoRing: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoCore: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: '#0B3C61',
    borderWidth: 2,
    borderColor: '#3A99E7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  brand: { fontSize: 30, fontWeight: '800', color: '#FFFFFF', letterSpacing: 0.6 },
  brandTag: { fontSize: 12.5, color: '#D9EEFA', marginTop: 4 },

  /* CARD */
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -28,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 30,
  },

  title: { fontSize: 22, fontWeight: '800', color: '#152A38' },
  subtitle: { fontSize: 13, lineHeight: 19, color: '#7891A0', marginTop: 8, marginBottom: 26 },

  label: { fontSize: 12.5, fontWeight: '700', color: '#3F5A69', marginBottom: 9 },

  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    borderWidth: 1.5,
    borderColor: '#E1EDF4',
    borderRadius: 14,
    paddingHorizontal: 14,
    backgroundColor: '#F8FBFD',
  },
  inputWrapActive: {
    borderColor: '#146FAE',
    backgroundColor: '#FFFFFF',
  },
  countryCode: { paddingRight: 10 },
  countryCodeText: { fontSize: 14, fontWeight: '700', color: '#152A38' },
  inputDivider: { width: 1, height: 24, backgroundColor: '#E1EDF4', marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: '#152A38', fontWeight: '600' },

  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 54,
    borderRadius: 14,
    backgroundColor: '#146FAE',
    marginTop: 22,
    shadowColor: '#146FAE',
    shadowOpacity: 0.32,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  loginText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 28,
    marginBottom: 18,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#EEF3F6' },
  dividerText: { fontSize: 10.5, color: '#9AAAB0', fontWeight: '600' },

  trustRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trustItem: { alignItems: 'center', gap: 6, flex: 1 },
  trustText: { fontSize: 10.5, fontWeight: '700', color: '#5B7386' },

  info: {
    marginTop: 26,
    fontSize: 11,
    color: '#9AAAB0',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default Login;
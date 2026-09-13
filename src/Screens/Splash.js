import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

const Splash = ({ navigation }) => {
  const fade = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(16)).current;
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(rise, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();

    const loop = Animated.loop(
      Animated.timing(pulse, {
        toValue: 1,
        duration: 1600,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      })
    );
    loop.start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2200);

    return () => {
      clearTimeout(timer);
      loop.stop();
    };
  }, [navigation]);

  const pulseScale = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.6] });
  const pulseOpacity = pulse.interpolate({ inputRange: [0, 0.4, 1], outputRange: [0.4, 0.2, 0] });

  return (
    <View style={styles.container}>
      <View style={styles.glowOne} />
      <View style={styles.glowTwo} />

      <Animated.View style={{ opacity: fade, transform: [{ translateY: rise }], alignItems: 'center' }}>

        <View style={styles.logoWrap}>
          <Animated.View
            style={[
              styles.pulseRing,
              { opacity: pulseOpacity, transform: [{ scale: pulseScale }] },
            ]}
          />
          <View style={styles.logoRing}>
            <View style={styles.logoCore}>
              <Ionicons name="fish" size={38} color="#FFFFFF" />
            </View>
          </View>
        </View>

        <Text style={styles.title}>ORCA</Text>

        <Text style={styles.subtitle}>Ocean Risk & Coastal Advisory</Text>

        <View style={styles.tagRow}>
          <Text style={styles.tagWord}>PLAN</Text>
          <View style={styles.tagDot} />
          <Text style={styles.tagWord}>MONITOR</Text>
          <View style={styles.tagDot} />
          <Text style={styles.tagWord}>RESPOND</Text>
        </View>
      </Animated.View>

      <View style={styles.footer}>
        <View style={styles.loaderTrack}>
          <Animated.View
            style={[
              styles.loaderFill,
              {
                transform: [
                  {
                    translateX: pulse.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-90, 90],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
        <Text style={styles.footerText}>Marine intelligence & safety platform</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#146FAE',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  glowOne: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(255,255,255,0.06)',
    top: -120,
    left: -80,
  },
  glowTwo: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(58,153,231,0.35)',
    bottom: -90,
    right: -70,
  },

  logoWrap: {
    width: 118,
    height: 118,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  pulseRing: {
    position: 'absolute',
    width: 118,
    height: 118,
    borderRadius: 59,
    backgroundColor: '#FFFFFF',
  },
  logoRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCore: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#0B3C61',
    borderWidth: 2,
    borderColor: '#3A99E7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 5,
  },

  subtitle: {
    fontSize: 13.5,
    color: '#D9EEFA',
    marginTop: 8,
  },

  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 30,
  },
  tagWord: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.85)',
    letterSpacing: 1.2,
  },
  tagDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },

  footer: {
    position: 'absolute',
    bottom: 56,
    alignItems: 'center',
  },
  loaderTrack: {
    width: 90,
    height: 3,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    overflow: 'hidden',
    marginBottom: 14,
  },
  loaderFill: {
    width: 40,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },
  footerText: {
    fontSize: 10.5,
    color: 'rgba(255,255,255,0.7)',
  },
});

export default Splash;
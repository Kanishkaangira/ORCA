import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@react-native-vector-icons/ionicons';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerGlowOne} />
          <View style={styles.headerGlowTwo} />

          <View style={styles.headerTop}>
            <View>
              <Text style={styles.headerTitle}>Profile</Text>
              <Text style={styles.headerSubtitle}>Your ORCA account</Text>
            </View>

            <TouchableOpacity
              style={styles.headerIconBtn}
              onPress={() => navigation.navigate('Details', { type: 'Notifications' })}
              activeOpacity={0.85}
            >
              <Ionicons name="settings-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* PROFILE CARD (floats over header, same pattern as Home status card) */}
        <View style={styles.profileCard}>
          <View style={styles.avatarRing}>
            <View style={styles.avatarCore}>
              <Text style={styles.avatarText}>RK</Text>
            </View>
            <View style={styles.avatarStatusDot} />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Ramesh Kumar</Text>
            <Text style={styles.role}>Fisherman</Text>

            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={13} color="#4E7C9E" />
              <Text style={styles.location}>Ratnagiri Coast</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('Details', { type: 'Personal information' })}
            activeOpacity={0.85}
          >
            <Ionicons name="pencil-outline" size={13} color="#146FAE" />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* QUICK STATS */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons name="boat-outline" size={17} color="#146FAE" />
            </View>
            <Text style={styles.statValue}>Sagar Rani</Text>
            <Text style={styles.statLabel}>Vessel</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIcon, styles.statIconAlt]}>
              <Ionicons name="navigate-outline" size={17} color="#1E9A66" />
            </View>
            <Text style={styles.statValue}>32</Text>
            <Text style={styles.statLabel}>Trips logged</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIcon, styles.statIconWarn]}>
              <Ionicons name="shield-checkmark-outline" size={17} color="#B58510" />
            </View>
            <Text style={styles.statValue}>Verified</Text>
            <Text style={styles.statLabel}>Account</Text>
          </View>
        </View>

        {/* ACCOUNT */}
        <Text style={styles.sectionTitle}>Account</Text>

        <View style={styles.sectionCard}>
          <ProfileItem
            icon="person-outline"
            title="Personal information"
            subtitle="Name, phone and account details"
            onPress={() => navigation.navigate('Details', { type: 'Personal information' })}
          />

          <ProfileItem
            icon="boat-outline"
            title="Vessel information"
            subtitle="Boat and fishing details"
            border
            onPress={() => navigation.navigate('Details', { type: 'Vessel information' })}
          />

          <ProfileItem
            icon="call-outline"
            title="Emergency contact"
            subtitle="Contact used during emergencies"
            border
            tint="#E94F4F"
            tintBg="#FCE6E6"
            onPress={() => navigation.navigate('Details', { type: 'Emergency contact' })}
          />

          <ProfileItem
            icon="location-outline"
            title="Home port"
            subtitle="Ratnagiri, Maharashtra"
            border
            onPress={() => navigation.navigate('Details', { type: 'Home port' })}
          />
        </View>

        {/* PREFERENCES */}
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.sectionCard}>
          <ProfileItem
            icon="language-outline"
            title="Language"
            subtitle="English"
          />

          <ProfileItem
            icon="notifications-outline"
            title="Notifications"
            subtitle="Alerts and safety updates"
            border
            onPress={() => navigation.navigate('Details', { type: 'Notifications' })}
          />

          <ProfileItem
            icon="cloud-download-outline"
            title="Offline mode"
            subtitle="Use cached information when offline"
            border
            onPress={() => navigation.navigate('Details', { type: 'Offline mode' })}
          />
        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.85}
          onPress={() => navigation.getParent()?.reset({ index: 0, routes: [{ name: 'Login' }] })}
        >
          <Ionicons name="log-out-outline" size={17} color="#C03939" />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>ORCA · Version 1.0</Text>

      </ScrollView>
    </SafeAreaView>
  );
};


/* PROFILE ITEM */

const ProfileItem = ({ icon, title, subtitle, border, onPress, tint = '#146FAE', tintBg = '#E3F1FB' }) => {
  return (
    <TouchableOpacity
      style={[styles.profileItem, border && styles.itemBorder]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={[styles.itemIcon, { backgroundColor: tintBg }]}>
        <Ionicons name={icon} size={19} color={tint} />
      </View>

      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color="#9DB3BE" />
    </TouchableOpacity>
  );
};


/* STYLES */

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#146FAE' },
  scroll: { flex: 1, backgroundColor: '#EAF3FA' },
  content: { paddingBottom: 40 },

  /* HEADER */
  header: {
    backgroundColor: '#146FAE',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 56,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  headerGlowOne: {
    position: 'absolute', width: 180, height: 180, borderRadius: 90,
    backgroundColor: 'rgba(255,255,255,0.07)', top: -90, left: -50,
  },
  headerGlowTwo: {
    position: 'absolute', width: 130, height: 130, borderRadius: 65,
    backgroundColor: 'rgba(58,153,231,0.35)', top: 10, right: -55,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTitle: { fontSize: 26, fontWeight: '800', color: '#FFFFFF', letterSpacing: 0.3 },
  headerSubtitle: { fontSize: 12.5, color: '#D9EEFA', marginTop: 4 },
  headerIconBtn: {
    width: 38, height: 38, borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center', justifyContent: 'center',
  },

  /* PROFILE CARD */
  profileCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: -40,
    borderRadius: 22,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1EDF4',
    shadowColor: '#0B3C61',
    shadowOpacity: 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  avatarRing: {
    width: 66, height: 66, borderRadius: 33,
    backgroundColor: '#E3F1FB',
    alignItems: 'center', justifyContent: 'center',
  },
  avatarCore: {
    width: 56, height: 56, borderRadius: 28,
    backgroundColor: '#0B3C61',
    borderWidth: 2, borderColor: '#3A99E7',
    alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { color: '#FFFFFF', fontSize: 18, fontWeight: '800', letterSpacing: 0.4 },
  avatarStatusDot: {
    position: 'absolute', bottom: 2, right: 2,
    width: 14, height: 14, borderRadius: 7,
    backgroundColor: '#2BAE73', borderWidth: 2, borderColor: '#FFFFFF',
  },

  profileInfo: { flex: 1, marginLeft: 14 },
  name: { fontSize: 17.5, fontWeight: '800', color: '#152A38' },
  role: { fontSize: 13, color: '#5B7386', marginTop: 2 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  location: { fontSize: 12, color: '#4E7C9E', marginLeft: 4, fontWeight: '600' },

  editButton: {
    flexDirection: 'row', alignItems: 'center', gap: 5,
    paddingHorizontal: 12, paddingVertical: 8,
    borderRadius: 10, backgroundColor: '#E3F1FB',
  },
  editText: { color: '#146FAE', fontSize: 12.5, fontWeight: '700' },

  /* STATS */
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 16,
    marginTop: 14,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#0B3C61',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  statIcon: {
    width: 34, height: 34, borderRadius: 11,
    backgroundColor: '#E3F1FB',
    alignItems: 'center', justifyContent: 'center',
  },
  statIconAlt: { backgroundColor: '#E4F5EC' },
  statIconWarn: { backgroundColor: '#FBF2D8' },
  statValue: { fontSize: 12.5, fontWeight: '800', color: '#152A38', marginTop: 8, textAlign: 'center' },
  statLabel: { fontSize: 10.5, color: '#8AA1AF', marginTop: 2 },

  /* SECTIONS */
  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '800',
    color: '#152A38',
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    overflow: 'hidden',
    shadowColor: '#0B3C61',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },

  /* ITEMS */
  profileItem: {
    minHeight: 70,
    paddingHorizontal: 16,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBorder: {
    borderTopWidth: 1,
    borderTopColor: '#EEF3F6',
  },
  itemIcon: {
    width: 40, height: 40, borderRadius: 13,
    alignItems: 'center', justifyContent: 'center',
  },
  itemContent: { flex: 1, marginLeft: 13 },
  itemTitle: { fontSize: 14.5, fontWeight: '700', color: '#193D47' },
  itemSubtitle: { fontSize: 11.5, color: '#7A8B91', marginTop: 3 },

  /* LOGOUT */
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 54,
    marginHorizontal: 16,
    marginTop: 26,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F0C6C6',
    backgroundColor: '#FFF6F6',
  },
  logoutText: { color: '#C03939', fontSize: 15, fontWeight: '700' },

  versionText: {
    textAlign: 'center',
    fontSize: 11,
    color: '#9AAAB0',
    marginTop: 16,
  },
});

export default Profile;
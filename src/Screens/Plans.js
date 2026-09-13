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

const bestDays = [
  { day: 'Tue', date: '15 Sep', icon: 'sunny-outline', tint: '#146FAE', tintBg: '#E3F1FB' },
  { day: 'Wed', date: '16 Sep', icon: 'partly-sunny-outline', tint: '#146FAE', tintBg: '#E3F1FB' },
  { day: 'Thu', date: '17 Sep', icon: 'sunny-outline', tint: '#146FAE', tintBg: '#E3F1FB' },
];

const outlook = [
  { day: 'Monday', date: '14 September', icon: 'partly-sunny-outline', risk: 'MODERATE', wind: '18 km/h', waves: '1.2 m', best: '6–10 AM' },
  { day: 'Tuesday', date: '15 September', icon: 'sunny-outline', risk: 'LOW', wind: '12 km/h', waves: '0.7 m', best: '5–11 AM' },
  { day: 'Wednesday', date: '16 September', icon: 'partly-sunny-outline', risk: 'LOW', wind: '13 km/h', waves: '0.8 m', best: '6–11 AM' },
  { day: 'Thursday', date: '17 September', icon: 'sunny-outline', risk: 'LOW', wind: '14 km/h', waves: '0.9 m', best: '6–10 AM' },
  { day: 'Friday', date: '18 September', icon: 'cloudy-outline', risk: 'MODERATE', wind: '20 km/h', waves: '1.4 m', best: '6–9 AM' },
];

function RiskBadge({ risk }) {
  const low = risk === 'LOW';
  return (
    <View style={[styles.riskBadge, low ? styles.riskBadgeLow : styles.riskBadgeModerate]}>
      <View style={[styles.riskDot, low ? styles.riskDotLow : styles.riskDotModerate]} />
      <Text style={[styles.riskText, low ? styles.riskTextLow : styles.riskTextModerate]}>
        {low ? 'LOW RISK' : 'MODERATE'}
      </Text>
    </View>
  );
}

function DayCard({ item }) {
  return (
    <View style={styles.dayCard}>
      <View style={styles.dayHeader}>
        <View style={styles.dayIconChip}>
          <Ionicons name={item.icon} size={20} color="#146FAE" />
        </View>
        <View style={styles.dayHeaderText}>
          <Text style={styles.dateText}>{item.day}</Text>
          <Text style={styles.smallDate}>{item.date}</Text>
        </View>
        <RiskBadge risk={item.risk} />
      </View>

      <View style={styles.conditionsRow}>
        <View style={styles.conditionCol}>
          <Text style={styles.conditionLabel}>Wind</Text>
          <Text style={styles.conditionValue}>{item.wind}</Text>
        </View>
        <View style={styles.conditionCol}>
          <Text style={styles.conditionLabel}>Waves</Text>
          <Text style={styles.conditionValue}>{item.waves}</Text>
        </View>
        <View style={styles.conditionCol}>
          <Text style={styles.conditionLabel}>Best time</Text>
          <Text style={styles.conditionValue}>{item.best}</Text>
        </View>
      </View>
    </View>
  );
}

const Plans = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* HEADER — blue banner, matches Home.js. Full-bleed, outside the padded body */}
        <View style={styles.header}>
          <View style={styles.headerGlowOne} />
          <View style={styles.headerGlowTwo} />

          <View style={styles.headerTop}>
            <View>
              <Text style={styles.headerTitle}>Fishing Plan</Text>
              <Text style={styles.headerSubtitle}>Your 7-day marine outlook</Text>
            </View>

            <View style={styles.headerIcon}>
              <Ionicons name="calendar" size={21} color="#fff" />
            </View>
          </View>
        </View>

        <View style={styles.body}>

          {/* ORCA RECOMMENDATION — light card, overlaps the header */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryTop}>
              <View style={styles.summaryIconChip}>
                <Ionicons name="sparkles-outline" size={19} color="#146FAE" />
              </View>

              <View style={styles.summaryTextCol}>
                <Text style={styles.summaryLabel}>ORCA RECOMMENDATION</Text>
                <Text style={styles.summaryTitle}>Good week for fishing</Text>
              </View>

              <View style={styles.safeBadge}>
                <Ionicons name="checkmark-circle" size={12} color="#146FAE" />
                <Text style={styles.safeText}>LOW RISK</Text>
              </View>
            </View>

            <Text style={styles.summaryText}>
              The next few days show mostly calm sea conditions. Tuesday and Wednesday
              have the best fishing windows.
            </Text>
          </View>


          {/* BEST DAYS */}
          <Text style={styles.sectionTitle}>Best fishing days</Text>

          <View style={styles.bestDaysCard}>
            {bestDays.map((d, i) => (
              <React.Fragment key={d.day}>
                <View style={styles.bestDay}>
                  <View style={[styles.bestDayIcon, { backgroundColor: d.tintBg }]}>
                    <Ionicons name={d.icon} size={19} color={d.tint} />
                  </View>
                  <Text style={styles.dayName}>{d.day}</Text>
                  <Text style={styles.dayDate}>{d.date}</Text>
                  <View style={styles.dayRiskPill}>
                    <Text style={styles.dayRisk}>LOW RISK</Text>
                  </View>
                </View>
                {i < bestDays.length - 1 && <View style={styles.verticalDivider} />}
              </React.Fragment>
            ))}
          </View>


          {/* 7 DAY OUTLOOK */}
          <Text style={styles.sectionTitle}>7-day outlook</Text>

          {outlook.map(item => <DayCard item={item} key={item.day} />)}


          {/* ASK ORCA */}
          <TouchableOpacity
            style={styles.askButton}
            onPress={() => navigation.navigate('Chatbot')}
            activeOpacity={0.9}
          >
            <View style={styles.askGlow} />
            <View style={styles.askMark}>
              <Ionicons name="sparkles-outline" size={19} color="#fff" />
            </View>

            <View style={styles.askContent}>
              <Text style={styles.askTitle}>Ask ORCA about your plan</Text>
              <Text style={styles.askSubtitle}>Get a personalized recommendation</Text>
            </View>

            <View style={styles.askArrowChip}>
              <Ionicons name="arrow-forward" size={16} color="#146FAE" />
            </View>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EAF3FA',
  },

  safe: {
    flex: 1,
    backgroundColor: '#146FAE',
  },

  scroll: {
    flex: 1,
    backgroundColor: '#EAF3FA',
  },

  scrollContent: {
    paddingBottom: 35,
  },

  /* everything below the header lives in here, so the header itself never
     has to fight parent padding with negative margins */
  body: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },


  /* HEADER — solid blue banner, same language as Home.js. True full width. */

  header: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#146FAE',
    paddingTop: 14,
    paddingBottom: 34,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    overflow: 'hidden',
  },

  headerGlowOne: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: 'rgba(255,255,255,0.07)',
    top: -90,
    left: -50,
  },

  headerGlowTwo: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(58,153,231,0.35)',
    top: 10,
    right: -45,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },

  headerSubtitle: {
    fontSize: 13,
    color: '#D9EEFA',
    marginTop: 4,
  },

  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },


  /* ORCA RECOMMENDATION — light card overlapping the header, blue used as accent not a wall */

  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginTop: -20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    shadowColor: '#0B3C61',
    shadowOpacity: 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },

  summaryTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  summaryIconChip: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#E3F1FB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  summaryTextCol: {
    flex: 1,
    marginLeft: 11,
  },

  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#4E7C9E',
    letterSpacing: 0.8,
  },

  summaryTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#152A38',
    marginTop: 4,
  },

  safeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#E3F1FB',
    borderWidth: 1,
    borderColor: '#BEDDF3',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 13,
  },

  safeText: {
    color: '#146FAE',
    fontSize: 9.5,
    fontWeight: '800',
  },

  summaryText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#667A82',
    marginTop: 14,
  },


  /* SECTION */

  sectionTitle: {
    fontSize: 16.5,
    fontWeight: '800',
    color: '#152A38',
    marginBottom: 10,
  },


  /* BEST DAYS */

  bestDaysCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1EDF4',
    marginBottom: 24,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },

  bestDay: {
    flex: 1,
    alignItems: 'center',
  },

  bestDayIcon: {
    width: 38,
    height: 38,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  dayName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#193D47',
  },

  dayDate: {
    fontSize: 10.5,
    color: '#8AA1AF',
    marginTop: 2,
  },

  dayRiskPill: {
    marginTop: 8,
    backgroundColor: '#E3F1FB',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  dayRisk: {
    fontSize: 9,
    fontWeight: '800',
    color: '#146FAE',
  },

  verticalDivider: {
    width: 1,
    height: 68,
    backgroundColor: '#E5ECEF',
  },


  /* DAY CARD */

  dayCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    marginBottom: 12,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },

  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dayIconChip: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#E3F1FB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayHeaderText: {
    flex: 1,
    marginLeft: 11,
  },

  dateText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#193D47',
  },

  smallDate: {
    fontSize: 10.5,
    color: '#8AA1AF',
    marginTop: 2,
  },

  riskBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
  },

  riskBadgeLow: {
    backgroundColor: '#E3F1FB',
    borderColor: '#BEDDF3',
  },

  riskBadgeModerate: {
    backgroundColor: '#FCF4D8',
    borderColor: '#EFDFA0',
  },

  riskDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  riskDotLow: {
    backgroundColor: '#146FAE',
  },

  riskDotModerate: {
    backgroundColor: '#B58510',
  },

  riskText: {
    fontSize: 9.5,
    fontWeight: '800',
  },

  riskTextLow: {
    color: '#146FAE',
  },

  riskTextModerate: {
    color: '#9D7613',
  },


  /* CONDITIONS */

  conditionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 13,
    borderTopWidth: 1,
    borderTopColor: '#EDF1F2',
  },

  conditionCol: {
    flex: 1,
  },

  conditionLabel: {
    fontSize: 10.5,
    color: '#8AA1AF',
  },

  conditionValue: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#263F50',
    marginTop: 3,
  },


  /* ASK ORCA */

  askButton: {
    backgroundColor: '#146FAE',
    borderRadius: 19,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    overflow: 'hidden',
    shadowColor: '#146FAE',
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },

  askGlow: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255,255,255,0.08)',
    top: -60,
    right: -40,
  },

  askMark: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#3A99E7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  askContent: {
    flex: 1,
    marginLeft: 12,
  },

  askTitle: {
    color: '#FFFFFF',
    fontSize: 14.5,
    fontWeight: '800',
  },

  askSubtitle: {
    color: '#D9EEFA',
    fontSize: 11,
    marginTop: 3,
  },

  askArrowChip: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Plans;
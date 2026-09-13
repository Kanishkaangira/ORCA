import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@react-native-vector-icons/ionicons';

const LAYERS = [
  { key: 'Fishing', icon: 'fish-outline' },
  { key: 'Weather', icon: 'partly-sunny-outline' },
  { key: 'Waves', icon: 'water-outline' },
  { key: 'Safety', icon: 'warning-outline' },
];

const Map = ({ navigation }) => {
  const [activeLayer, setActiveLayer] = useState('Fishing');

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* FULL-BLEED MAP */}
        <View style={styles.mapContainer}>

          <View style={styles.water}>
            <View style={styles.horizontalLine1} />
            <View style={styles.horizontalLine2} />
            <View style={styles.verticalLine1} />
            <View style={styles.verticalLine2} />

            <View style={styles.land}>
              <Text style={styles.landText}>COAST</Text>
            </View>

            <View style={styles.fishingZone}>
              <Text style={styles.zoneText}>GOOD FISHING</Text>
            </View>

            <View style={styles.restrictedZone}>
              <Text style={styles.restrictedText}>RESTRICTED</Text>
            </View>

            <View style={styles.routeLine} />

            <View style={styles.userLocation}>
              <View style={styles.locationPulse} />
              <View style={styles.locationDot} />
            </View>

            <View style={styles.boat}>
              <Ionicons name="boat" size={20} color="#146FAE" />
            </View>

            <View style={styles.fishingMarker}>
              <Ionicons name="fish" size={15} color="#1E9A66" />
            </View>

            <View style={styles.warningMarker}>
              <Ionicons name="warning" size={15} color="#B58510" />
            </View>
          </View>

          {/* FLOATING TITLE, OVERLAID ON TOP OF THE MAP */}
          <View style={styles.floatingHeader}>
            <View style={styles.titlePill}>
              <Text style={styles.headerTitle}>Marine Map</Text>
              <Text style={styles.headerSubtitle}>Fishing zones & safety</Text>
            </View>

            <TouchableOpacity
              style={styles.circleBtn}
              onPress={() => navigation.navigate('Details', { type: 'Safe route' })}
              activeOpacity={0.85}
            >
              <Ionicons name="locate-outline" size={19} color="#146FAE" />
            </TouchableOpacity>
          </View>

          {/* ZOOM CONTROLS */}
          <View style={styles.mapControls}>
            <TouchableOpacity style={styles.mapControl} activeOpacity={0.85}>
              <Ionicons name="add" size={19} color="#3F5A69" />
            </TouchableOpacity>
            <View style={styles.controlDivider} />
            <TouchableOpacity style={styles.mapControl} activeOpacity={0.85}>
              <Ionicons name="remove" size={19} color="#3F5A69" />
            </TouchableOpacity>
          </View>

          {/* LAYER CHIPS, FLOATING ON THE MAP */}
          <View style={styles.layerChipRow}>
            {LAYERS.map((layer) => {
              const isActive = activeLayer === layer.key;
              return (
                <TouchableOpacity
                  key={layer.key}
                  style={[styles.layerChip, isActive && styles.layerChipActive]}
                  onPress={() => setActiveLayer(layer.key)}
                  activeOpacity={0.85}
                >
                  <Ionicons
                    name={layer.icon}
                    size={14}
                    color={isActive ? '#FFFFFF' : '#3F5A69'}
                  />
                  <Text style={[styles.layerChipText, isActive && styles.layerChipTextActive]}>
                    {layer.key}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* CONTENT BELOW THE MAP */}
        <View style={styles.body}>

          {/* FISHING ZONE */}
          <View style={styles.zoneCard}>
            <View style={styles.zoneHeader}>
              <View style={styles.zoneIconBox}>
                <Ionicons name="fish" size={19} color="#1E9A66" />
              </View>

              <View style={styles.zoneContent}>
                <Text style={styles.zoneTitle}>Potential Fishing Zone</Text>
                <Text style={styles.zoneSubtitle}>High fish probability detected</Text>
              </View>

              <View style={styles.goodBadge}>
                <Text style={styles.goodText}>GOOD</Text>
              </View>
            </View>

            <View style={styles.zoneDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Distance</Text>
                <Text style={styles.detailValue}>8.4 km</Text>
              </View>
              <View style={styles.detailDivider} />
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Sea state</Text>
                <Text style={styles.detailValue}>Calm</Text>
              </View>
              <View style={styles.detailDivider} />
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Confidence</Text>
                <Text style={styles.detailValue}>89%</Text>
              </View>
            </View>
          </View>

          {/* SAFETY WARNING */}
          <View style={styles.warningCard}>
            <View style={styles.warningIconBox}>
              <Ionicons name="warning" size={18} color="#B58510" />
            </View>
            <View style={styles.warningContent}>
              <Text style={styles.warningTitle}>Restricted area nearby</Text>
              <Text style={styles.warningText}>
                A restricted zone is approximately 3.2 km from your current location.
              </Text>
            </View>
          </View>

          {/* SAFE ROUTE */}
          <View style={styles.routeCard}>
            <View style={styles.routeIconBox}>
              <Ionicons name="navigate" size={17} color="#146FAE" />
            </View>
            <View style={styles.routeTextBox}>
              <Text style={styles.routeTitle}>Safe route available</Text>
              <Text style={styles.routeSubtitle}>ORCA found a safer route to the fishing zone.</Text>
            </View>
            <TouchableOpacity
              style={styles.routeButton}
              onPress={() => navigation.navigate('Details', { type: 'Safe route' })}
              activeOpacity={0.85}
            >
              <Text style={styles.routeButtonText}>View</Text>
            </TouchableOpacity>
          </View>

          {/* ASK ORCA */}
          <TouchableOpacity
            style={styles.askButton}
            onPress={() => navigation.navigate('Chatbot')}
            activeOpacity={0.9}
          >
            <View style={styles.askIconBox}>
              <Ionicons name="sparkles" size={19} color="#146FAE" />
            </View>
            <View style={styles.askContent}>
              <Text style={styles.askTitle}>Ask ORCA about this area</Text>
              <Text style={styles.askSubtitle}>Get a safety and fishing recommendation</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0B3C61',
  },

  scrollContent: {
    paddingBottom: 35,
  },


  /* MAP */

  mapContainer: {
    height: 430,
    position: 'relative',
    overflow: 'hidden',
  },

  water: {
    flex: 1,
    backgroundColor: '#CFE8F5',
    position: 'relative',
  },

  land: {
    position: 'absolute',
    left: -30,
    top: 0,
    bottom: 0,
    width: 110,
    backgroundColor: '#CFDBB8',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  landText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#6E8060',
    transform: [{ rotate: '-70deg' }],
  },

  horizontalLine1: {
    position: 'absolute', left: 0, right: 0, top: 130, height: 1, backgroundColor: '#B7DCEC',
  },
  horizontalLine2: {
    position: 'absolute', left: 0, right: 0, top: 260, height: 1, backgroundColor: '#B7DCEC',
  },
  verticalLine1: {
    position: 'absolute', top: 0, bottom: 0, left: 120, width: 1, backgroundColor: '#B7DCEC',
  },
  verticalLine2: {
    position: 'absolute', top: 0, bottom: 0, left: 240, width: 1, backgroundColor: '#B7DCEC',
  },

  fishingZone: {
    position: 'absolute',
    right: 24,
    top: 100,
    width: 145,
    height: 108,
    borderRadius: 70,
    backgroundColor: 'rgba(30,154,102,0.20)',
    borderWidth: 2,
    borderColor: '#1E9A66',
    justifyContent: 'center',
    alignItems: 'center',
  },

  zoneText: { fontSize: 9, fontWeight: '800', color: '#166B49' },

  restrictedZone: {
    position: 'absolute',
    right: -20,
    bottom: 100,
    width: 135,
    height: 85,
    borderRadius: 50,
    backgroundColor: 'rgba(181,133,16,0.16)',
    borderWidth: 2,
    borderColor: '#B58510',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },

  restrictedText: { fontSize: 9, fontWeight: '800', color: '#8A6A16' },

  routeLine: {
    position: 'absolute',
    width: 220,
    height: 3,
    backgroundColor: '#146FAE',
    top: 265,
    left: 75,
    transform: [{ rotate: '-25deg' }],
    borderRadius: 5,
  },

  userLocation: {
    position: 'absolute', left: 90, top: 285, width: 26, height: 26,
    justifyContent: 'center', alignItems: 'center',
  },
  locationPulse: {
    position: 'absolute', width: 26, height: 26, borderRadius: 13,
    backgroundColor: '#146FAE', opacity: 0.2,
  },
  locationDot: {
    width: 10, height: 10, borderRadius: 5, backgroundColor: '#146FAE',
    borderWidth: 2, borderColor: '#FFFFFF',
  },

  boat: {
    position: 'absolute', left: 76, top: 258,
    width: 30, height: 30, borderRadius: 15,
    backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center',
    shadowColor: '#0B3C61', shadowOpacity: 0.25, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 3,
  },

  fishingMarker: {
    position: 'absolute', right: 78, top: 138,
    width: 34, height: 34, borderRadius: 17,
    backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center',
    shadowColor: '#0B3C61', shadowOpacity: 0.2, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 3,
  },

  warningMarker: {
    position: 'absolute', right: 40, bottom: 128,
    width: 34, height: 34, borderRadius: 17,
    backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center',
    shadowColor: '#0B3C61', shadowOpacity: 0.2, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 3,
  },


  /* FLOATING HEADER OVER MAP */

  floatingHeader: {
    position: 'absolute',
    top: 14,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titlePill: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  headerTitle: { fontSize: 17, fontWeight: '800', color: '#152A38' },
  headerSubtitle: { fontSize: 10.5, color: '#6B8494', marginTop: 1 },

  circleBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0B3C61',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },


  /* ZOOM CONTROLS */

  mapControls: {
    position: 'absolute',
    right: 16,
    top: 78,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 14,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  mapControl: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  controlDivider: {
    height: 1,
    marginHorizontal: 8,
    backgroundColor: '#E1EDF4',
  },


  /* LAYER CHIPS OVER MAP */

  layerChipRow: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    gap: 8,
  },

  layerChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 14,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  layerChipActive: {
    backgroundColor: '#146FAE',
  },

  layerChipText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#3F5A69',
  },

  layerChipTextActive: {
    color: '#FFFFFF',
  },


  /* BODY */

  body: {
    backgroundColor: '#EAF3FA',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingTop: 22,
  },


  /* FISHING ZONE CARD */

  zoneCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    marginBottom: 12,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },

  zoneHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  zoneIconBox: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#E4F5EC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  zoneContent: { flex: 1, marginLeft: 11 },
  zoneTitle: { fontSize: 14, fontWeight: '800', color: '#152A38' },
  zoneSubtitle: { fontSize: 11, color: '#7A8B91', marginTop: 3 },

  goodBadge: {
    backgroundColor: '#E4F5EC',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 12,
  },

  goodText: { fontSize: 9.5, fontWeight: '800', color: '#1E9A66' },

  zoneDetails: {
    flexDirection: 'row',
    marginTop: 15,
    paddingTop: 13,
    borderTopWidth: 1,
    borderTopColor: '#EEF3F6',
  },

  detailItem: { flex: 1 },
  detailDivider: { width: 1, backgroundColor: '#EEF3F6' },
  detailLabel: { fontSize: 10, color: '#8AA1AF' },
  detailValue: { fontSize: 13, fontWeight: '700', color: '#152A38', marginTop: 4 },


  /* WARNING */

  warningCard: {
    backgroundColor: '#FBF2D8',
    borderRadius: 16,
    padding: 13,
    flexDirection: 'row',
    marginBottom: 12,
  },

  warningIconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#F5E3AC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  warningContent: { flex: 1, marginLeft: 11 },
  warningTitle: { fontSize: 13, fontWeight: '800', color: '#8A6A16' },
  warningText: { fontSize: 11, lineHeight: 16, color: '#96813F', marginTop: 3 },


  /* SAFE ROUTE */

  routeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1EDF4',
    marginBottom: 12,
  },

  routeIconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#E3F1FB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  routeTextBox: { flex: 1, marginLeft: 11 },
  routeTitle: { fontSize: 13, fontWeight: '800', color: '#152A38' },
  routeSubtitle: { fontSize: 11, color: '#7A8B91', marginTop: 3 },

  routeButton: {
    backgroundColor: '#E3F1FB',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },

  routeButtonText: { fontSize: 11.5, fontWeight: '800', color: '#146FAE' },


  /* ASK ORCA */

  askButton: {
    backgroundColor: '#146FAE',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    shadowColor: '#146FAE',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  askIconBox: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  askContent: { flex: 1, marginLeft: 12 },
  askTitle: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  askSubtitle: { color: '#D9EEFA', fontSize: 11, marginTop: 3 },

});

export default Map;
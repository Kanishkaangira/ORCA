import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@react-native-vector-icons/ionicons';

const Community = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Feed');

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
              <Text style={styles.headerTitle}>Community</Text>
              <Text style={styles.headerSubtitle}>Connect with your fishing community</Text>
            </View>

            <View style={styles.locationBadge}>
              <Ionicons name="location" size={12} color="#FFFFFF" />
              <Text style={styles.locationText}>Nearby</Text>
            </View>
          </View>
        </View>

        {/* SEARCH (floats over header) */}
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={17} color="#8AA1AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search community"
            placeholderTextColor="#9AAAB0"
          />
        </View>

        {/* SHARE UPDATE */}
        <TouchableOpacity
          style={styles.shareCard}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Details', { type: 'Share update' })}
        >
          <View style={styles.shareAvatar}>
            <Text style={styles.shareAvatarText}>RK</Text>
          </View>
          <Text style={styles.shareText}>Share an update with the community...</Text>
          <View style={styles.shareIconBtn}>
            <Ionicons name="add" size={18} color="#146FAE" />
          </View>
        </TouchableOpacity>

        {/* TABS */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Feed' && styles.activeTab]}
            onPress={() => setActiveTab('Feed')}
            activeOpacity={0.85}
          >
            <Ionicons
              name="newspaper-outline"
              size={15}
              color={activeTab === 'Feed' ? '#146FAE' : '#7891A0'}
            />
            <Text style={[styles.tabText, activeTab === 'Feed' && styles.activeTabText]}>Feed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'Polls' && styles.activeTab]}
            onPress={() => setActiveTab('Polls')}
            activeOpacity={0.85}
          >
            <Ionicons
              name="stats-chart-outline"
              size={15}
              color={activeTab === 'Polls' ? '#146FAE' : '#7891A0'}
            />
            <Text style={[styles.tabText, activeTab === 'Polls' && styles.activeTabText]}>Polls</Text>
          </TouchableOpacity>
        </View>

        {/* FEED */}
        {activeTab === 'Feed' && (
          <View>

            {/* POST 1 */}
            <View style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.postAvatar}>
                  <Text style={styles.postAvatarText}>SK</Text>
                </View>
                <View style={styles.postUser}>
                  <Text style={styles.userName}>Suresh Kumar</Text>
                  <Text style={styles.postTime}>Ratnagiri Coast · 25 min ago</Text>
                </View>
                <TouchableOpacity hitSlop={8}>
                  <Ionicons name="ellipsis-horizontal" size={18} color="#93A7AF" />
                </TouchableOpacity>
              </View>

              <Text style={styles.postText}>
                Sea conditions are calm near the coast today. Wind is also quite low.
              </Text>

              <View style={styles.conditionBox}>
                <View style={styles.conditionItem}>
                  <View style={styles.conditionIcon}>
                    <Ionicons name="water-outline" size={15} color="#146FAE" />
                  </View>
                  <View>
                    <Text style={styles.conditionTitle}>Sea conditions</Text>
                    <Text style={styles.conditionValue}>Calm</Text>
                  </View>
                </View>

                <View style={styles.conditionDivider} />

                <View style={styles.conditionItem}>
                  <View style={styles.conditionIcon}>
                    <Ionicons name="navigate-outline" size={15} color="#146FAE" />
                  </View>
                  <View>
                    <Text style={styles.conditionTitle}>Wind</Text>
                    <Text style={styles.conditionValue}>12 km/h</Text>
                  </View>
                </View>
              </View>

              <View style={styles.postActions}>
                <TouchableOpacity style={styles.action}>
                  <Ionicons name="thumbs-up-outline" size={16} color="#7891A0" />
                  <Text style={styles.actionText}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Ionicons name="chatbubble-outline" size={15} color="#7891A0" />
                  <Text style={styles.actionText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.action, styles.actionEnd]}>
                  <Ionicons name="share-outline" size={16} color="#7891A0" />
                </TouchableOpacity>
              </View>
            </View>

            {/* POST 2 */}
            <View style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.postAvatar}>
                  <Text style={styles.postAvatarText}>AM</Text>
                </View>
                <View style={styles.postUser}>
                  <Text style={styles.userName}>Arun More</Text>
                  <Text style={styles.postTime}>Malvan · 1 hr ago</Text>
                </View>
                <TouchableOpacity hitSlop={8}>
                  <Ionicons name="ellipsis-horizontal" size={18} color="#93A7AF" />
                </TouchableOpacity>
              </View>

              <Text style={styles.postText}>
                Anyone planning to go fishing early tomorrow morning?
              </Text>

              <View style={styles.questionBox}>
                <View style={styles.questionIcon}>
                  <Ionicons name="help-circle-outline" size={17} color="#1E9A66" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.questionTitle}>Fishing tomorrow morning?</Text>
                  <Text style={styles.questionSubtitle}>18 people responded</Text>
                </View>
              </View>

              <View style={styles.postActions}>
                <TouchableOpacity style={styles.action}>
                  <Ionicons name="thumbs-up-outline" size={16} color="#7891A0" />
                  <Text style={styles.actionText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Ionicons name="chatbubble-outline" size={15} color="#7891A0" />
                  <Text style={styles.actionText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.action, styles.actionEnd]}>
                  <Ionicons name="share-outline" size={16} color="#7891A0" />
                </TouchableOpacity>
              </View>
            </View>

            {/* POST 3 */}
            <View style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.postAvatar}>
                  <Text style={styles.postAvatarText}>RP</Text>
                </View>
                <View style={styles.postUser}>
                  <Text style={styles.userName}>Raj Patil</Text>
                  <Text style={styles.postTime}>Devgad · 2 hrs ago</Text>
                </View>
                <TouchableOpacity hitSlop={8}>
                  <Ionicons name="ellipsis-horizontal" size={18} color="#93A7AF" />
                </TouchableOpacity>
              </View>

              <Text style={styles.postText}>
                Stronger waves reported farther from the shoreline. Be careful while going offshore.
              </Text>

              <View style={styles.warningBox}>
                <Ionicons name="warning-outline" size={19} color="#B58510" />
                <View style={styles.warningContent}>
                  <Text style={styles.warningTitle}>Safety report</Text>
                  <Text style={styles.warningText}>Offshore wave conditions may be rough.</Text>
                </View>
              </View>

              <View style={styles.postActions}>
                <TouchableOpacity style={styles.action}>
                  <Ionicons name="thumbs-up-outline" size={16} color="#7891A0" />
                  <Text style={styles.actionText}>21</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                  <Ionicons name="chatbubble-outline" size={15} color="#7891A0" />
                  <Text style={styles.actionText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.action, styles.actionEnd]}>
                  <Ionicons name="share-outline" size={16} color="#7891A0" />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        )}

        {/* POLLS */}
        {activeTab === 'Polls' && (
          <View>

            <View style={styles.pollCard}>
              <View style={styles.pollLabelRow}>
                <Ionicons name="stats-chart" size={12} color="#146FAE" />
                <Text style={styles.pollLabel}>COMMUNITY POLL</Text>
              </View>

              <Text style={styles.pollQuestion}>
                What time do you usually start your fishing trip?
              </Text>

              <TouchableOpacity style={styles.pollOption} activeOpacity={0.8}>
                <View style={styles.pollFill} />
                <Ionicons name="sunny-outline" size={16} color="#146FAE" />
                <Text style={styles.pollOptionText}>Early morning</Text>
                <Text style={styles.pollPercent}>52%</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pollOption} activeOpacity={0.8}>
                <View style={[styles.pollFill, { width: '30%' }]} />
                <Ionicons name="partly-sunny-outline" size={16} color="#146FAE" />
                <Text style={styles.pollOptionText}>Morning</Text>
                <Text style={styles.pollPercent}>30%</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pollOption} activeOpacity={0.8}>
                <View style={[styles.pollFill, { width: '18%' }]} />
                <Ionicons name="cloudy-night-outline" size={16} color="#146FAE" />
                <Text style={styles.pollOptionText}>Afternoon</Text>
                <Text style={styles.pollPercent}>18%</Text>
              </TouchableOpacity>

              <View style={styles.pollFooter}>
                <Ionicons name="people-outline" size={13} color="#8A989D" />
                <Text style={styles.pollVotes}>46 votes</Text>
              </View>
            </View>

            <View style={styles.pollCard}>
              <View style={styles.pollLabelRow}>
                <Ionicons name="stats-chart" size={12} color="#146FAE" />
                <Text style={styles.pollLabel}>COMMUNITY POLL</Text>
              </View>

              <Text style={styles.pollQuestion}>
                Which information is most useful before a trip?
              </Text>

              <TouchableOpacity style={styles.pollOption} activeOpacity={0.8}>
                <View style={[styles.pollFill, { width: '47%' }]} />
                <Ionicons name="water-outline" size={16} color="#146FAE" />
                <Text style={styles.pollOptionText}>Wave conditions</Text>
                <Text style={styles.pollPercent}>47%</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pollOption} activeOpacity={0.8}>
                <View style={[styles.pollFill, { width: '33%' }]} />
                <Ionicons name="navigate-outline" size={16} color="#146FAE" />
                <Text style={styles.pollOptionText}>Wind forecast</Text>
                <Text style={styles.pollPercent}>33%</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pollOption} activeOpacity={0.8}>
                <View style={[styles.pollFill, { width: '20%' }]} />
                <Ionicons name="fish-outline" size={16} color="#146FAE" />
                <Text style={styles.pollOptionText}>Fishing zones</Text>
                <Text style={styles.pollPercent}>20%</Text>
              </TouchableOpacity>

              <View style={styles.pollFooter}>
                <Ionicons name="people-outline" size={13} color="#8A989D" />
                <Text style={styles.pollVotes}>63 votes</Text>
              </View>
            </View>

          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  safe: { flex: 1, backgroundColor: '#146FAE' },
  scroll: { flex: 1, backgroundColor: '#EAF3FA' },
  content: { paddingBottom: 35 },

  /* HEADER */

  header: {
    backgroundColor: '#146FAE',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
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

  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },

  headerSubtitle: {
    fontSize: 12.5,
    color: '#D9EEFA',
    marginTop: 4,
    maxWidth: 220,
  },

  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 4,
  },

  locationText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },


  /* SEARCH */

  searchBox: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginHorizontal: 16,
    marginTop: -22,
    gap: 9,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#193D47',
  },


  /* SHARE */

  shareCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 18,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },

  shareAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0B3C61',
    borderWidth: 2,
    borderColor: '#3A99E7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  shareAvatarText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  shareText: {
    flex: 1,
    marginLeft: 11,
    fontSize: 12.5,
    color: '#8AA1AF',
  },

  shareIconBtn: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#E3F1FB',
    justifyContent: 'center',
    alignItems: 'center',
  },


  /* TABS */

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    padding: 4,
    marginHorizontal: 16,
    marginBottom: 18,
  },

  tab: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderRadius: 11,
  },

  activeTab: {
    backgroundColor: '#E3F1FB',
  },

  tabText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#7891A0',
  },

  activeTabText: {
    color: '#146FAE',
  },


  /* POST */

  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    marginHorizontal: 16,
    marginBottom: 14,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  postAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E3F1FB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  postAvatarText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#146FAE',
  },

  postUser: {
    flex: 1,
    marginLeft: 11,
  },

  userName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#152A38',
  },

  postTime: {
    fontSize: 10.5,
    color: '#8AA1AF',
    marginTop: 3,
  },

  postText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#3F5A69',
    marginTop: 14,
    marginBottom: 13,
  },


  /* CONDITION */

  conditionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F9FD',
    borderRadius: 14,
    padding: 12,
  },

  conditionItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  conditionDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#DCEAF1',
    marginHorizontal: 6,
  },

  conditionIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#E3F1FB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  conditionTitle: {
    fontSize: 10.5,
    color: '#7891A0',
  },

  conditionValue: {
    fontSize: 13,
    fontWeight: '800',
    color: '#152A38',
    marginTop: 2,
  },


  /* QUESTION */

  questionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF9F3',
    borderRadius: 14,
    padding: 13,
    gap: 10,
  },

  questionIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#DCF2E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  questionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#152A38',
  },

  questionSubtitle: {
    fontSize: 11,
    color: '#5F8B72',
    marginTop: 3,
  },


  /* WARNING */

  warningBox: {
    flexDirection: 'row',
    backgroundColor: '#FBF2D8',
    borderRadius: 14,
    padding: 12,
    alignItems: 'flex-start',
  },

  warningContent: {
    flex: 1,
    marginLeft: 10,
  },

  warningTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#8A6A16',
  },

  warningText: {
    fontSize: 11,
    color: '#96813F',
    marginTop: 3,
  },


  /* ACTIONS */

  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEF3F6',
  },

  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 22,
    gap: 6,
  },

  actionEnd: {
    marginLeft: 'auto',
    marginRight: 0,
  },

  actionText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: '#7891A0',
  },


  /* POLLS */

  pollCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    marginHorizontal: 16,
    marginBottom: 14,
    shadowColor: '#0B3C61',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },

  pollLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  pollLabel: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#146FAE',
    letterSpacing: 1,
  },

  pollQuestion: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    color: '#152A38',
    marginTop: 9,
    marginBottom: 14,
  },

  pollOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    borderWidth: 1,
    borderColor: '#E1EDF4',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 13,
    marginBottom: 9,
    overflow: 'hidden',
  },

  pollFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '52%',
    backgroundColor: '#EAF3FA',
  },

  pollOptionText: {
    flex: 1,
    fontSize: 12.5,
    fontWeight: '600',
    color: '#3F5A69',
  },

  pollPercent: {
    fontSize: 11.5,
    fontWeight: '800',
    color: '#146FAE',
  },

  pollFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 3,
  },

  pollVotes: {
    fontSize: 10.5,
    color: '#8A989D',
  },

});

export default Community;
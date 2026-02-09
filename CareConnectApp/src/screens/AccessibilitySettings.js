import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  Eye,
  Volume2,
  Vibrate,
  Bell,
  Type,
} from 'lucide-react-native';

const AccessibilitySettings = ({ onNavigate, hasMissedTasks }) => {
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: true,
    soundAlerts: true,
    vibrationAlerts: true,
    visualAlerts: true,
    reducedMotion: false,
    voiceAnnouncements: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const ToggleSwitch = ({ enabled }) => (
    <View
      style={[
        styles.toggleTrack,
        { backgroundColor: enabled ? '#3B82F6' : '#CBD5E1' },
      ]}
    >
      <View
        style={[
          styles.toggleThumb,
          { alignSelf: enabled ? 'flex-end' : 'flex-start' },
        ]}
      />
    </View>
  );

  const settingSections = [
    {
      title: 'Visual',
      icon: Eye,
      items: [
        {
          key: 'highContrast',
          label: 'High Contrast Mode',
          description: 'Increase contrast for better visibility',
        },
        {
          key: 'largeText',
          label: 'Large Text',
          description: 'Increase text size throughout the app',
        },
        {
          key: 'visualAlerts',
          label: 'Visual Alerts',
          description: 'Show visual indicators for notifications',
        },
        {
          key: 'reducedMotion',
          label: 'Reduce Motion',
          description: 'Minimize animations and transitions',
        },
      ],
    },
    {
      title: 'Audio',
      icon: Volume2,
      items: [
        {
          key: 'soundAlerts',
          label: 'Sound Alerts',
          description: 'Play sounds for notifications',
        },
        {
          key: 'voiceAnnouncements',
          label: 'Voice Announcements',
          description: 'Speak notifications aloud',
        },
      ],
    },
    {
      title: 'Haptic',
      icon: Vibrate,
      items: [
        {
          key: 'vibrationAlerts',
          label: 'Vibration Alerts',
          description: 'Vibrate for important notifications',
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerCard}>
        <Eye size={32} color="#FFFFFF" />
        <Text style={styles.headerTitle}>Customize Your Experience</Text>
        <Text style={styles.headerSubtitle}>
          Adjust settings to match your needs
        </Text>
      </View>

      {settingSections.map((section) => (
        <View key={section.title} style={styles.section}>
          <View style={styles.sectionHeader}>
            <section.icon size={20} color="#2563EB" />
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>

          {section.items.map((item) => (
            <Pressable
              key={item.key}
              onPress={() => toggleSetting(item.key)}
              style={styles.settingRow}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.settingLabel}>{item.label}</Text>
                <Text style={styles.settingDescription}>
                  {item.description}
                </Text>
              </View>
              <ToggleSwitch enabled={settings[item.key]} />
            </Pressable>
          ))}
        </View>
      ))}

      {/* Text Preview */}
      <View style={styles.previewCard}>
        <View style={styles.previewHeader}>
          <Type size={20} color="#2563EB" />
          <Text style={styles.previewTitle}>Text Size Preview</Text>
        </View>
        <Text
          style={[
            styles.previewText,
            { fontSize: settings.largeText ? 20 : 14 },
          ]}
        >
          This is how your text will appear in the app.
        </Text>
        <Text style={styles.previewMeta}>
          Current size: {settings.largeText ? 'Large' : 'Standard'}
        </Text>
      </View>

      {/* Notification Summary */}
      <View style={styles.notificationCard}>
        <View style={styles.sectionHeader}>
          <Bell size={20} color="#2563EB" />
          <Text style={styles.sectionTitle}>Notification Style</Text>
        </View>

        <View style={styles.badgeRow}>
          {settings.soundAlerts && <Text style={styles.badge}>🔊 Sound</Text>}
          {settings.vibrationAlerts && (
            <Text style={styles.badge}>📳 Vibration</Text>
          )}
          {settings.visualAlerts && (
            <Text style={styles.badge}>💡 Visual</Text>
          )}
          {settings.voiceAnnouncements && (
            <Text style={styles.badge}>🗣️ Voice</Text>
          )}
        </View>
      </View>

      {/* ASL Help */}
      <Pressable
        style={styles.helpButton}
        onPress={() => onNavigate('asl-help')}
      >
        <Text style={styles.helpButtonText}>Watch ASL Help Videos</Text>
      </Pressable>
    </ScrollView>
  );
};

export default AccessibilitySettings;

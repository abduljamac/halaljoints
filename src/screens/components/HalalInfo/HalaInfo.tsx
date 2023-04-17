import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { theme } from '../../../shared/theme';
import prettyDate from '../../../shared/utils/pretty-date';
import formatString from '../../../shared/utils/format-string';
import styles from './HalalInfo.style';

const HalaInfo = ({
  name,
  halalDescription,
  halalDescriptionDate,
  halalDescriptionSource,
  halalRatings,
}) => {
  const RESTAURANT_OWNER = ['joint:owner', 'restaurant:owner'];

  if (!RESTAURANT_OWNER.includes(halalDescriptionSource)) {
    return (
      <View>
        <Text style={{ color: theme.colours.gray, fontWeight: '700' }}>
          {name} has been reported to serve Halal but this has not yet been
          confirmed.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: theme.fontSizes.heading2,
          marginBottom: theme.spacing.small,
        }}>
        Halal Info
      </Text>
      <Text style={{ textAlign: 'justify' }}>
        <Text style={{ color: theme.colours.green, fontWeight: '500' }}>
          The owner has confirmed {name} does serve Halal food.&nbsp;
        </Text>
        They said:&nbsp;
        {halalDescription}&nbsp; This status was last updated&nbsp;
        {prettyDate(halalDescriptionDate)}.
      </Text>
      {halalRatings.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tagsScrollView}>
          {halalRatings.map((text, i) => (
            <View style={styles.tagsWrapper} key={i}>
              <Text style={styles.tagText}>{formatString(text)}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default HalaInfo;

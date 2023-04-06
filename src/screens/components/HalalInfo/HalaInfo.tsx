import { View, Text } from 'react-native';
import React from 'react';
import { theme } from '../../../shared/theme';
import prettyDate from '../../../shared/util/pretty-date'; 

const HalaInfo = ({
  name,
  halalDescription,
  halalDescriptionDate,
  halalDescriptionSource,
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
    <View
      style={{
        paddingTop: theme.spacing.small,
        marginHorizontal: theme.spacing.large,
      }}>
      <Text>
        <Text style={{ color: theme.colours.green, fontWeight: '500' }}>
          The owner has confirmed {name} does serve Halal food.&nbsp;
        </Text>
        They said:&nbsp;
        {halalDescription}&nbsp; This status was last updated&nbsp;
        {prettyDate(halalDescriptionDate)}.
      </Text>
    </View>
  );
};

export default HalaInfo;

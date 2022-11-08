import {StyleSheet} from 'react-native';
import {theme} from '../../shared/theme';

const styles = StyleSheet.create({
  content: {
    // marginTop: 10,
    // marginHorizontal: theme.spacing.medium,
  },
  title: {
    fontSize: theme.fontSizes.heading2,
    fontWeight: '700',
    marginTop: theme.spacing.medium,
    marginHorizontal: theme.spacing.small,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {theme} from '../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: theme.spacing.XSmall,
    borderRadius: theme.spacing.small,
    padding: theme.spacing.XSmall,
  },
  title: {
    fontSize: theme.fontSizes.heading2,
    fontWeight: '700',
    marginHorizontal: theme.spacing.XSmall,
  },
});

export default styles;
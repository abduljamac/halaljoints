import {StyleSheet} from 'react-native';
import {theme} from '../../../../shared/theme/index';

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.medium,
    marginHorizontal: theme.spacing.small,
    padding: theme.spacing.XSmall,
    marginBottom: theme.spacing.small,
  },
  name: {
    fontSize: theme.fontSizes.heading2,
    fontWeight: '700',
  },
  address: {
    fontSize: theme.fontSizes.body,
  },
});

export default styles;

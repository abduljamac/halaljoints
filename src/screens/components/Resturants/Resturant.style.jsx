import { StyleSheet } from 'react-native';
import { theme } from '../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.XSmall,
    marginTop: theme.spacing.medium,
    marginHorizontal: theme.spacing.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fontSizes.heading3,
    fontWeight: '700',
    marginHorizontal: theme.spacing.XSmall,
  },
  headerBtn: {
    fontWeight: '600',
    fontSize: theme.fontSizes.smallBody,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { theme } from '../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.large,
    marginHorizontal: theme.spacing.XSmall,
    padding: theme.spacing.XSmall,
  },
  cuisineImage: {
    width: 70,
    height: 70,
    borderRadius: theme.spacing.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: theme.fontSizes.heading2,
    marginHorizontal: theme.spacing.small,
  },
  headerBtn: {
    fontWeight: '400',
    fontSize: theme.fontSizes.smallBody,
  },
});

export default styles;

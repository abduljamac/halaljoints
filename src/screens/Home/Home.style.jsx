import { StyleSheet } from 'react-native';
import { theme } from '../../shared/theme';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: theme.colours.white,
  },
  title: {
    fontSize: theme.fontSizes.heading2,
    fontWeight: '700',
    marginTop: theme.spacing.medium,
    marginHorizontal: theme.spacing.small,
  },
});

import {StyleSheet} from 'react-native';
import {theme} from '../../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: theme.spacing.small,
    marginBottom: theme.spacing.small,
  },
  tag: {
    backgroundColor: theme.colours.background,
    borderRadius: 100000,
    padding: 5,
    marginHorizontal: theme.spacing.XSmall,
    fontSize: theme.fontSizes.body,
    borderRadius: theme.spacing.small,
    color: theme.colours.black,
    fontWeight: '700',
    overflow: 'hidden',
  },
});

export default styles;

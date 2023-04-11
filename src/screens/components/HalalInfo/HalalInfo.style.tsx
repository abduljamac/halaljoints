import { StyleSheet } from 'react-native';
import { theme } from '../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.spacing.small,
    marginHorizontal: theme.spacing.large,
  },
  tagsScrollView: {
    flex: 1,
    flexDirection: 'row',
    marginRight: theme.spacing.large,
    paddingVertical: theme.spacing.medium,
  },
  tagsWrapper: {
    backgroundColor: theme.colours.primaryColor,
    borderRadius: 10,
    marginRight: theme.spacing.small,
  },
  tagText: {
    color: theme.colours.white,
    paddingHorizontal: theme.spacing.small,
    paddingVertical: theme.spacing.small,
    overflow: 'hidden',
    fontSize: theme.fontSizes.smallBody,
  },
});

export default styles;

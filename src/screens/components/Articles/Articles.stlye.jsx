import { StyleSheet } from 'react-native';
import { theme } from '../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    borderRadius: theme.spacing.small,
    padding: theme.spacing.XSmall,
    marginHorizontal: theme.spacing.small,
  },
  title: {
    fontSize: theme.fontSizes.heading2,
    fontWeight: '700',
    marginHorizontal: theme.spacing.XSmall,
    paddingBottom: theme.spacing.small,
    marginHorizontal: theme.spacing.XSmall,
  },
  articleContainer: {
    marginTop: 2,
    marginHorizontal: theme.spacing.XSmall,
    backgroundColor: theme.colours.white,
    borderRadius: theme.spacing.medium,
    width: 300,
    height: 120,
  },
  articleImage: {
    width: 300,
    height: 80,
    borderTopRightRadius: theme.spacing.medium,
    borderTopLeftRadius: theme.spacing.medium,
  },
  articleTitle: {
    fontSize: theme.fontSizes.heading4,
    fontWeight: '700',
    marginHorizontal: theme.spacing.XSmall,
    padding: 5,
  },
});

export default styles;

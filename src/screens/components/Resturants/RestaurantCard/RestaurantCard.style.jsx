import { StyleSheet } from 'react-native';
import { theme } from '../../../../shared/theme';

const styles = StyleSheet.create({
  card: {
    marginHorizontal: theme.spacing.XSmall,
    height: 200,
    widith: 130,
    marginTop: theme.spacing.small,
    marginBottom: 10,
    borderRadius: theme.spacing.small,
    overflow: 'hidden',
  },
  cardImage: {
    borderRadius: theme.spacing.medium,
    width: 130,
    height: 200,
  },
  category: {
    position: 'absolute',
    top: theme.spacing.XSmall,
    left: theme.spacing.XSmall,
    backgroundColor: theme.colours.transparentGray,
    padding: theme.spacing.XSmall,
    borderRadius: theme.spacing.small,
  },
  cuisines: {
    color: theme.colours.white,
    fontSize: theme.spacing.medium,
  },
  content: {
    top: -40,
    height: 40,
    width: 130,
    paddingVertical: theme.spacing.XSmall,
    paddingHorizontal: theme.spacing.small,
    borderBottomLeftRadius: theme.spacing.medium,
    borderBottomRightRadius: theme.spacing.medium,
  },
  title: {
    color: theme.colours.white,
    fontSize: theme.fontSizes.smallBody,
    fontWeight: '700',
  },
  description: {
    color: theme.colours.white,
    fontSize: theme.fontSizes.smallBody,
    fontWeight: '200',
  },
});

export default styles;

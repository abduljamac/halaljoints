import { StyleSheet } from 'react-native';
import { theme } from '../../../../shared/theme';

const styles = StyleSheet.create({
  card: {
    marginHorizontal: theme.spacing.XSmall,
    height: 300,
    marginTop: theme.spacing.small,
    marginBottom: 10,
    borderRadius: theme.spacing.small,
    overflow: 'hidden',
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: theme.spacing.medium,
    width: 195,
    height: '100%',
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
    fontSize: theme.fontSizes.caption,
  },
  content: {
    top: -80,
    height: 75,
    width: 190,
    padding: theme.spacing.small,
    borderRadius: theme.spacing.medium,
    backgroundColor: theme.colours.white,
  },
  title: {
    flex: 1,
    fontSize: theme.fontSizes.caption,
    fontWeight: '700',
  },
  rating: {
    flex: 0,
    fontSize: theme.fontSizes.caption,
    fontWeight: '700',
    color: theme.colours.subText,
  },
  locationContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: theme.colours.primaryColor,
    alignItems: 'center',
  },
  locationIcon: {
    padding: theme.spacing.XSmall,
  },
  locationName: {
    fontSize: theme.fontSizes.small,
    color: theme.colours.white,
    borderRadius: theme.spacing.small,
    marginRight: theme.spacing.small,
  },
});

export default styles;

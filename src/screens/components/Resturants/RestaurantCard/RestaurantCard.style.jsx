import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../../shared/theme';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    marginHorizontal: theme.spacing.XSmall,
    height: 260,
    widith: 200,
    marginTop: theme.spacing.small,
    marginBottom: -10,
  },
  cardImage: {
    borderRadius: theme.spacing.medium,
    width: 150,
    height: 250,
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
  },
  content: {
    top: -60,
    height: 60,
    width: 150,
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.small,
    borderRadius: theme.spacing.medium,
  },
  title: {
    color: theme.colours.white,
    fontSize: theme.fontSizes.smallBody,
  },
  description: {
    color: theme.colours.white,
    fontSize: theme.fontSizes.smallBody,
  },
});

export default styles;

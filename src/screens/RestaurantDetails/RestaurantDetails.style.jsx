import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../shared/theme/index';

const height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colours.white,
  },
  backgroundImage: {
    height: height * 0.5,
  },
  descriptionWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colours.white,
    marginTop: -theme.spacing.large,
    borderRadius: theme.spacing.large,
  },
  iconButton: {
    height: theme.spacing.XXLarge + 2,
    width: theme.spacing.XXLarge + 2,
    backgroundColor: theme.colours.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing.large,
    marginHorizontal: theme.spacing.large,
    marginVertical: theme.spacing.XXLarge + 10,
  },
  resturantDetails: {
    marginTop: theme.spacing.medium,
  },
  restaurantName: {
    fontSize: theme.fontSizes.heading1,
    fontWeight: '600',
    marginLeft: theme.spacing.large,
  },
  directionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: theme.spacing.large,
    backgroundColor: theme.colours.primaryColor,
    borderRadius: theme.spacing.XXLarge + 10,
    paddingVertical: theme.spacing.large,
  },
  directionButtonText: {
    fontSize: theme.fontSizes.heading2,
    marginLeft: theme.spacing.medium,
    color: theme.colours.white,
  },
});

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
  iconButtons: {
    marginTop: theme.spacing.XXLarge + 10,
    backgroundColor: theme.colours.white,
    width: theme.spacing.XXLarge,
    height: theme.spacing.XXLarge,
    borderRadius: theme.spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icnonWrapperOne: {
    paddingHorizontal: theme.spacing.large,
    height: '100%',
  },
  iconWrapperTwo: {
    alignItems: 'flex-end',
    // paddingTop: theme.spacing.XXXLarge + 100,
    // paddingHorizontal: -theme.spacing.XLarge,
  },
  icons: {
    padding: 10,
    backgroundColor: theme.colours.white,
    borderRadius: theme.spacing.large,
    marginBottom: theme.spacing.medium,
  },
  resturantDetails: {
    marginTop: theme.spacing.medium,
  },
  restaurantName: {
    fontSize: theme.fontSizes.heading1,
    fontWeight: '600',
    marginLeft: theme.spacing.large,
  },
  restaurantAddress: {
    fontSize: theme.fontSizes.caption,
    fontWeight: '300',
    marginLeft: theme.spacing.large,
    paddingVertical: theme.spacing.small,
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
  dateWrapper: {
    backgroundColor: theme.colours.lightGray,
    borderRadius: theme.spacing.medium,
    padding: theme.spacing.small,
    marginHorizontal: theme.spacing.large,
    paddingHorizontal: theme.spacing.large,
    alignItems: 'center',
    justifyContent: 'center',
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

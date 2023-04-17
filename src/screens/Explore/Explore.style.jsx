import { StyleSheet, Dimensions, Platform } from 'react-native';
import { theme } from '../../shared/theme/index';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 25,
  },
  map: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: theme.spacing.small,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 45 : 30,
    padding: theme.spacing.XSmall,
    width: '90%',
  },
  iconButton: {
    height: theme.spacing.XXLarge + 2,
    width: theme.spacing.XXLarge + 2,
    backgroundColor: theme.colours.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing.large,
  },
  filterIcon: {
    height: theme.spacing.XXLarge + 2,
    width: theme.spacing.XXLarge + 2,
    backgroundColor: theme.colours.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing.large,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: '30%',
  },
  noRes: {
    fontSize: theme.fontSizes.heading1,
    color: theme.colours.primaryColor,
    textAlign: 'center',
    fontWeight: '800',
  },
});

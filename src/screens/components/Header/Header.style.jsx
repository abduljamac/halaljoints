import { StyleSheet } from 'react-native';
import { theme } from '../../../shared/theme';

export default styles = StyleSheet.create({
  header: {
    marginTop: theme.spacing.medium,
  },
  headerText2: {
    alignSelf: 'flex-start',
    fontWeight: '700',
    marginRight: 15,
    fontSize: theme.fontSizes.heading1,
    color: theme.colours.blue,
    backgroundColor: theme.colours.white,
    marginLeft: theme.spacing.default,
  },
  insideText: {
    backgroundColor: theme.colours.primary,
    color: theme.colours.white,
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: theme.spacing.XXLarge,
    marginTop: theme.spacing.medium,
    marginLeft: theme.spacing.small,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    backgroundColor: theme.colours.lightGray,
    margin: theme.spacing.small,
    borderRadius: theme.spacing.small,
  },
  textInput: {
    paddingHorizontal: theme.spacing.small,
  },
  searchBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: theme.spacing.XXLarge + 10,
    backgroundColor: theme.colours.primary,
    borderRadius: theme.spacing.medium,
    marginRight: theme.spacing.small,
  },
});

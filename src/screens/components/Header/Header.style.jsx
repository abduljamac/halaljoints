import {StyleSheet} from 'react-native';
import {theme} from '../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  headerText: {
    fontSize: theme.fontSizes.heading1,
    color: theme.colours.blue,
    backgroundColor: theme.colours.white,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  headerText2: {
    fontSize: theme.fontSizes.heading1,
    color: theme.colours.blue,
    backgroundColor: theme.colours.white,
    fontWeight: '700',
    marginRight: 15,
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  insideText: {
    backgroundColor: theme.colours.primary,
    color: theme.colours.white,
  },
  inputContainer: {
    backgroundColor: theme.colours.white,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 50,
    paddingLeft: 10,
  },
  textInput: {
    paddingLeft: 10,
  },
});

export default styles;

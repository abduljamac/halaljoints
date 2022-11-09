import {StyleSheet} from 'react-native';
import {theme} from '../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: theme.spacing.XSmall,
  },
  star: {
    color: theme.colours.yellow,
  },
  text: {
    color: 'white',
  },
});

export default styles;

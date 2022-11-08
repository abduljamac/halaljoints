import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../shared/theme';
const {width, height} = Dimensions.get('window');

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

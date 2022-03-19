import {
  useNavigation as _useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';

export default function useNavigation() {
  return _useNavigation<NavigationProp<RootStackParamList>>();
}

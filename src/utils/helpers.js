import {showMessage} from 'react-native-flash-message';
import colors from './theme/colors';

export const showError = message => {
  showMessage({
    message,
    type: 'danger',
    icon: 'danger',
  });
};

export const showSuccess = message => {
  showMessage({
    message,
    type: 'success',
    icon: 'success',
    backgroundColor: colors.PrimaryColor,
  });
};

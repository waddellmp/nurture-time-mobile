import {Factory, Text} from 'native-base';

const Label = Factory(Text);

Label.defaultProps = {
  fontSize: 'sm',
  color: 'primary.500',
  fontWeight: 'bold',
};

Label.displayName = 'Label';

export default Label;

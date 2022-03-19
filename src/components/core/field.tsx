import {
  IBoxProps,
  IInputProps,
  Input,
  TextField,
  Box,
  useTheme,
} from 'native-base';
import React from 'react';
import {ReactNode} from 'react';
import {animated, useSpring} from '@react-spring/native';
import Label from './label';

interface IFieldProps {
  label?: string;
  container?: IBoxProps;
  input?: IInputProps;
}

function AnimatedFieldLabel(props: {children: ReactNode}) {
  const spring = useSpring({
    to: [
      {
        transform: 'translateX(15%)',
      },
    ],
    from: {
      transform: 'translateX(0)',
    },
  });

  return <animated.Text>{props.children}</animated.Text>;
}

export default function Field(props: IFieldProps) {
  const {input, container} = props;
  const {colors} = useTheme();
  const [isFoused, setIsFocused] = React.useState(false);
  return (
    <Box position="relative" {...container} width="full" mb={3}>
      {props.label && (
        <AnimatedFieldLabel>
          <Label>{props.label}</Label>
        </AnimatedFieldLabel>
      )}
      <Input
        borderWidth={1}
        borderRadius="lg"
        borderColor={colors.primary[300]}
        onFocus={() => setIsFocused(true)}
        {...input}
      />
    </Box>
  );
}

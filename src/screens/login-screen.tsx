import * as React from 'react';
import {Box, Center, Container, Text, useTheme, View} from 'native-base';
import Field from '../components/core/field';

function LoginForm() {
  return (
    <Container size={'sm'}>
      <Field input={{type: 'text'}} label="Username" />
      <Field input={{type: 'password'}} label="Password" />
    </Container>
  );
}

function PrimaryHeader(props: {headerText: string}) {
  return (
    <View>
      <Text fontSize="lg">{props.headerText}</Text>
    </View>
  );
}

export function LoginScreen() {
  const {colors} = useTheme();
  console.log(colors.primary);
  return (
    <View flex={1}>
      <PrimaryHeader headerText="Login Screen" />
      <Center>
        <Box shadow="2" bg="white" borderRadius={'md'} px={6} py={3}>
          <LoginForm />
        </Box>
      </Center>
    </View>
  );
}

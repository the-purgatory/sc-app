import React from 'react';

import { Text, FlexBox, Box } from '../components/atoms';

import Logo from '../assets/images/logo.svg';

const AuthScreen = () => {
  return (
    <FlexBox
      flex={1}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <FlexBox
        alignItems='flex-start'
        px={3}
        py={2}
        maxWidth='1200px'
        width='100%'
      >
        <Text fontSize={3} fontWeight='2'>
          /the-purgatory
        </Text>
      </FlexBox>
      <FlexBox
        flex={1}
        maxWidth='1200px'
        width='100%'
        alignItems='center'
        justifyContent='center'
      >
        <FlexBox
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Box>
            <Logo />
          </Box>
          {/* <Text pt={4}>Loading...</Text> */}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default AuthScreen;

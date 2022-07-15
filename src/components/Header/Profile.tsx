import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Thiago Morato</Text>
        <Text color='gray.300' fontSize='small'>
          thiagosmorato@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Thiago Morato'
        src='https://avatars.githubusercontent.com/u/96215280?s=400&u=7f4080f81a70cd988c88f005cbd58976cabcbcf0&v=4'
      />
    </Flex>
  );
}

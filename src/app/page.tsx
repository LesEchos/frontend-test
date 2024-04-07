"use client";

import React from "react";

import {
  Container,
  Stack,
  Heading,
  Text,
  Select,
  theme,
  Box,
} from "@chakra-ui/react";

import { Newsletters, Users } from "@/features/Newsletters";
import { usePageStore } from "@/features/Newsletters/Newsletters.store";

const page = () => {
  const { currentUser, updateCurrentUser } = usePageStore((state) => state);

  return (
    <Box pb={theme.space[4]}>
      <Box
        position={"sticky"}
        top={0}
        p={theme.space[4]}
        bg={"white"}
        zIndex={1}
      >
        <Container maxW="container.sm">
          <Select
            defaultValue={currentUser}
            onChange={(e) => updateCurrentUser(e.target.value)}
          >
            {Object.keys(Users).map((user, l) => (
              <option key={`Option_User_${l}`} value={user}>
                {user}
              </option>
            ))}
          </Select>
        </Container>
      </Box>
      <Stack gap={theme.space[4]}>
        <Box bgColor={theme.colors.gray[200]}>
          <Container py={theme.space[4]} maxW="container.lg">
            <Stack>
              <Heading textTransform={"uppercase"} textAlign={"center"}>
                Newsletters
              </Heading>
              <Text>
                Dans cette page, vous retrouvez l’ensemble des newsletters des
                Echos et des marques satellites. Ainsi, vous pouvez découvrir
                toutes nos newsletters selon vos centres d’intérêt et gérer plus
                facilement l’inscription à vos newsletters.
              </Text>
            </Stack>
          </Container>
        </Box>
        <Newsletters />
      </Stack>
    </Box>
  );
};

export default page;

"use client";

import React, { Fragment } from "react";
import { create } from "zustand";
import {
  Container,
  Stack,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Highlight,
  Image,
  Button,
  Select,
  SimpleGrid,
  theme,
  Box,
} from "@chakra-ui/react";

import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "../mocks/user";

import { NEWSLETTER_ITEMS } from "../mocks/newsletters";

interface INewsLetter {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

interface PageState {
  currentUser: string;
  updateCurrentUser: (user: string) => void;
}

const usePageStore = create<PageState>((set) => ({
  currentUser: "USER_WITH_MULTIPLE_SUBSCRIPTION",
  updateCurrentUser: (user) =>
    set({
      currentUser: user,
    }),
}));

const Users = {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
};

type ObjectUsers = keyof typeof Users;

const Block = ({ image, title, description, subscriptions }: INewsLetter) => {
  const { currentUser } = usePageStore((state) => state);
  const currentUserSubscriptions = Users[currentUser as ObjectUsers]
    .subscriptions as [];

  const userHasSubscriptions = subscriptions.every((e) =>
    (currentUserSubscriptions as string[]).includes(e)
  );

  const isProspect = subscriptions.length === 0 || !userHasSubscriptions;
  return (
    <Card>
      <CardBody>
        <Stack>
          <Image
            src={image}
            alt={title}
            borderRadius="lg"
            sx={{ width: "100%" }}
          />
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button colorScheme={isProspect ? "yellow" : "blue"}>
          {isProspect ? "Abonne toi" : "S'inscrire"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Sites = [...new Set(NEWSLETTER_ITEMS.map((item) => item.site))];

const Loop = () =>
  Sites.map((e, i) => {
    return (
      <Stack key={`Loop_${i}`} gap={theme.space[3]}>
        <Heading>
          <Highlight query={e} styles={{ bg: "orange.100" }}>
            {e}
          </Highlight>
        </Heading>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {NEWSLETTER_ITEMS.filter((c) => c.site === e).map((d, l) => {
            return <Block key={`Block_${l}`} {...d} />;
          })}
        </SimpleGrid>
      </Stack>
    );
  });

const page = () => {
  const { currentUser, updateCurrentUser } = usePageStore((state) => state);
  return (
    <Stack gap={theme.space[4]} py={theme.space[4]}>
      <Container>
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
      <Box bgColor={theme.colors.gray}>
        <Container py={theme.space[4]}>
          <Heading>Newsletters</Heading>
          <Text>
            Dans cette page, vous retrouvez l’ensemble des newsletters des Echos
            et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
            newsletters selon vos centres d’intérêt et gérer plus facilement
            l’inscription à vos newsletters.
          </Text>
        </Container>
      </Box>
      <Container>
        <Stack gap={theme.space[4]}>
          <Loop />
        </Stack>
      </Container>
    </Stack>
  );
};

export default page;

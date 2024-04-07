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
import { usePageStore } from "./Newsletters.store";
import { INewsLetter } from "./interfaces";

import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "../../mocks/user";

const Users = {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
};

type ObjectUsers = keyof typeof Users;

export const NewsLettersListItem = ({
  image,
  title,
  description,
  subscriptions,
}: INewsLetter) => {
  const { currentUser } = usePageStore((state) => state);
  const currentUserSubscriptions = Users[currentUser as ObjectUsers]
    .subscriptions as [];

  const userHasSubscriptions = subscriptions.every((e) =>
    (currentUserSubscriptions as string[]).includes(e)
  );

  const isProspect = subscriptions.length === 0 || !userHasSubscriptions;
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <Image
            src={image}
            alt={title}
            borderRadius="lg"
            sx={{ width: "100%" }}
          />
          <Text fontSize="lg">{description}</Text>
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

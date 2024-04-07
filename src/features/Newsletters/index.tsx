import { Container, Stack, theme } from "@chakra-ui/react";

import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "../../mocks/user";

import { NewsLettersList } from "./NewslettersList";

export const Users = {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
};
/**
 * todo
 * Implement units test
 * Add comments to each components
 * provide DisplayName for each components
 * ...
 */
export const Newsletters = () => (
  <Container maxW="container.lg">
    <Stack gap={theme.space[4]}>
      <NewsLettersList />
    </Stack>
  </Container>
);

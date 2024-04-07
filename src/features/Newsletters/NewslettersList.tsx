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

import { NEWSLETTER_ITEMS } from "../../mocks/newsletters";
import { NewsLettersListItem } from "./NewslettersListItem";

const Sites = [...new Set(NEWSLETTER_ITEMS.map((item) => item.site))];

export const NewsLettersList = () =>
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
            return <NewsLettersListItem key={`Block_${l}`} {...d} />;
          })}
        </SimpleGrid>
      </Stack>
    );
  });

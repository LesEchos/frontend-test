import Head from "next/head";
import { GetServerSideProps } from "next";
import { Newsletter, User, GroupedNewsletters } from "@/types";
import {
  getNewsletters,
  getCurrentUser,
  groupNewslettersBySite,
} from "@/services/newsletterService";
import Header from "@/components/Header";
import NewsletterGroup from "@/components/NewsletterGroup";
import styles from "./Index.module.css";

type HomePageProps = {
  newsletters: Newsletter[];
  user: User;
  groupedNewsletters: GroupedNewsletters;
};

export default function HomePage({
  newsletters,
  user,
  groupedNewsletters,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>Newsletters - Les Echos</title>
        <meta
          name="description"
          content="Découvrez toutes nos newsletters selon vos centres d'intérêt"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Header />

          <div className={styles.content}>
            {Object.entries(groupedNewsletters).map(
              ([siteName, siteNewsletters]) => (
                <NewsletterGroup
                  key={siteName}
                  siteName={siteName}
                  newsletters={siteNewsletters}
                  user={user}
                />
              )
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  const rawUserType = context.query.userType;
  const allowed = ["single", "multiple", "none"] as const;
  const mockUserType =
    typeof rawUserType === "string" && allowed.includes(rawUserType as any)
      ? (rawUserType as (typeof allowed)[number])
      : "none";
  const [newsletters, user] = await Promise.all([
    getNewsletters(),
    getCurrentUser(mockUserType),
  ]);

  return {
    props: {
      newsletters,
      user,
      groupedNewsletters: groupNewslettersBySite(newsletters),
    },
  };
};

import { useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Newsletter, User, UserType, GroupedNewsletters } from "@/types";
import {
  getNewsletters,
  getUserByType,
  groupNewslettersBySite,
} from "@/services/newsletterService";
import Header from "@/components/Header";
import UserSelector from "@/components/UserSelector";
import NewsletterGroup from "@/components/NewsletterGroup";
import styles from "./Index.module.css";

type HomePageProps = {
  newsletters: Newsletter[];
};

export default function HomePage({ newsletters }: HomePageProps) {
  const [selectedUserType, setSelectedUserType] = useState<UserType>("none");
  const user = getUserByType(selectedUserType);
  const groupedNewsletters = groupNewslettersBySite(newsletters);

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

          <div className={styles.footer}>
            <UserSelector
              selectedUser={selectedUserType}
              onUserChange={setSelectedUserType}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const newsletters = await getNewsletters();

  return {
    props: {
      newsletters,
    },
  };
};

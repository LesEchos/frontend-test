import { Newsletter, User } from '@/types';
import NewsletterCard from './NewsletterCard';
import styles from './NewsletterGroup.module.css';

type NewsletterGroupProps = {
  siteName: string;
  newsletters: Newsletter[];
  user: User;
};

export default function NewsletterGroup({ siteName, newsletters, user }: NewsletterGroupProps) {
  return (
    <section className={styles.group}>
      <h2 className={styles.siteTitle}>{siteName}</h2>
      <div className={styles.grid}>
        {newsletters.map((newsletter) => (
          <NewsletterCard key={newsletter.id} newsletter={newsletter} user={user} />
        ))}
      </div>
    </section>
  );
}
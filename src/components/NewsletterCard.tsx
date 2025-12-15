import { useState } from 'react';
import Image from 'next/image';
import { Newsletter, User } from '@/types';
import { hasAccess } from '@/services/newsletterService';
import styles from './NewsletterCard.module.css';

type NewsletterCardProps = {
  newsletter: Newsletter;
  user: User;
};

export default function NewsletterCard({ newsletter, user }: NewsletterCardProps) {
  const [imageError, setImageError] = useState(false);
  const userHasAccess = hasAccess(newsletter, user);
  const ctaText = userHasAccess ? "S'inscrire" : "S'abonner";
  const ctaClass = userHasAccess ? styles.subscribeButton : styles.upgradeButton;

  const handleImageError = () => {
    setImageError(true);
  };

  const handleButtonClick = () => {
    if (!userHasAccess) {
      window.open('https://abonnement.lesechos.fr', '_blank');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {!imageError && (
          <Image 
            src={newsletter.image} 
            alt={newsletter.title} 
            fill 
            className={styles.image}
            onError={handleImageError}
          />
        )}
        <h3 className={styles.title}>{newsletter.title}</h3>
      </div>
      <p className={styles.description}>{newsletter.description}</p>
      <button className={`${styles.button} ${ctaClass}`} onClick={handleButtonClick}>
        {ctaText}
      </button>
    </div>
  );
}
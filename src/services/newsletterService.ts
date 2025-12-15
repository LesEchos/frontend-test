import { Newsletter, User, GroupedNewsletters } from '@/types';
import { NEWSLETTER_ITEMS } from '@/mocks/newsletters';
import { USER_WITH_ONE_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION, USER_WITHOUT_SUBSCRIPTION } from '@/mocks/user';

export async function getNewsletters(): Promise<Newsletter[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return NEWSLETTER_ITEMS;
}

export function getUserByType(type: 'single' | 'multiple' | 'none'): User {
  switch (type) {
    case 'single':
      return USER_WITH_ONE_SUBSCRIPTION;
    case 'multiple':
      return USER_WITH_MULTIPLE_SUBSCRIPTION;
    case 'none':
      return USER_WITHOUT_SUBSCRIPTION;
    default:
      return USER_WITHOUT_SUBSCRIPTION;
  }
}

export function groupNewslettersBySite(newsletters: Newsletter[]): GroupedNewsletters {
  return newsletters.reduce((acc, newsletter) => {
    if (!acc[newsletter.site]) {
      acc[newsletter.site] = [];
    }
    acc[newsletter.site].push(newsletter);
    return acc;
  }, {} as GroupedNewsletters);
}

export function hasAccess(newsletter: Newsletter, user: User): boolean {
  if (newsletter.subscriptions.length === 0) {
    return true;
  }
  return newsletter.subscriptions.some(subscription => 
    user.subscriptions.includes(subscription)
  );
}
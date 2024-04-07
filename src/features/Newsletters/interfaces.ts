export interface INewsLetter {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

export interface PageState {
  currentUser: string;
  updateCurrentUser: (user: string) => void;
}

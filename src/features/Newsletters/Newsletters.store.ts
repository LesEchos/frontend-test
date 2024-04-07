import { create } from "zustand";
import { PageState } from "./interfaces";

export const usePageStore = create<PageState>((set) => ({
  currentUser: "USER_WITH_MULTIPLE_SUBSCRIPTION",
  updateCurrentUser: (user) =>
    set({
      currentUser: user,
    }),
}));

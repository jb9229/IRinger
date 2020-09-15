import { atom, atomFamily } from "recoil";

export const notificationTokenState = atom<string>({
  key: 'notificationTokenState', // unique ID (with respect to other atoms/selectors)
  default: 'unknown' // default value (aka initial value)
});

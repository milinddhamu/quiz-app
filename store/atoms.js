import { atom } from 'recoil';

export const quizState = atom({
  key: 'quizState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
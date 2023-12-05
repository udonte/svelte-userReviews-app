import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    text: "Your performance has been consistently outstanding. Keep up the excellent work!",
    rating: 10,
  },
  {
    id: 2,
    text: "While there is room for improvement, your effort is commendable. Focus on refining your skills. Great potential!",
    rating: 4,
  },
  {
    id: 3,
    text: "Exceptional effort and dedication! Your commitment to excellence is truly impressive. Solid 9 out of 10!",
    rating: 9,
  },
  {
    id: 4,
    text: "Congratulations on a job well done! Your accomplishments are a testament to your hard work. Perfect 5-star performance!",
    rating: 10,
  },
  {
    id: 5,
    text: "Your progress is remarkable. Keep pushing boundaries and striving for success! Impressive 6 rating!",
    rating: 6,
  },
]);

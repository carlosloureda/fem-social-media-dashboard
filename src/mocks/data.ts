import { Platform } from "./../types/interfaces";

export const cardsData = [
  {
    platform: "facebook",
    username: "@nathanf",
    followersCount: 1987,
    todayFollowersCount: 12,
  },
  {
    platform: "twitter",
    username: "@nathanf",
    followersCount: 1044,
    todayFollowersCount: 99,
  },
  {
    platform: "instagram",
    username: "@realnathanf",
    followersCount: 11022,
    todayFollowersCount: 1099,
  },
  {
    platform: "youtube",
    username: "Nathan F.",
    followersCount: 8239,
    todayFollowersCount: -144,
  },
];

interface cardsToday {
  id: string;
  title: string;
  platform: Platform;
  count: number;
  offset: number;
}

export const todayOverViewCardsData: cardsToday[] = [
  {
    id: "1",
    title: "Page Views",
    platform: "facebook" as Platform,
    count: 87,
    offset: 3,
  },
  {
    id: "2",
    title: "Likes",
    platform: "facebook" as Platform,
    count: 52,
    offset: -2,
  },
  {
    id: "3",
    title: "Likes",
    platform: "instagram" as Platform,
    count: 5462,
    offset: 2257,
  },
  {
    id: "4",
    title: "Profile Views",
    platform: "instagram" as Platform,
    count: 54123,
    offset: 1375,
  },
  {
    id: "5",
    title: "Retweets",
    platform: "twitter" as Platform,
    count: 117,
    offset: 303,
  },
  {
    id: "6",
    title: "Likes",
    platform: "twitter" as Platform,
    count: 507,
    offset: 553,
  },
  {
    id: "7",
    title: "Likes",
    platform: "youtube" as Platform,
    count: 107,
    offset: -19,
  },
  {
    id: "8",
    title: "Total Views",
    platform: "youtube" as Platform,
    count: 1407,
    offset: 12,
  },
];

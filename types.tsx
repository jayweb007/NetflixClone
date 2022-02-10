/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: NavigatorScreenParams<HomeParamList> | undefined;
  ComingSoon: undefined;
  Search: undefined;
  Downloads: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  MovieDetailsScreen: undefined;
  Modal: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
export type HomeStackScreenProps<Screen extends keyof HomeParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeParamList, Screen>,
    NativeStackScreenProps<HomeParamList>
  >;

export type Episode = {
  id: string;
  title: string;
  poster: string;
  duration: string;
  plot: string;
  video: string;
};

export type Category = {
  id: string;
  title: string;
  movies: {
    id: string;
    poster: string;
  }[];
};

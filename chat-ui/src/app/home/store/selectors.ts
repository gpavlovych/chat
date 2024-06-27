import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "./state";

const selector = createFeatureSelector<HomeState>('chat-messages');

export const selectChatMessages = createSelector(selector, ({chatMessages}) => chatMessages);
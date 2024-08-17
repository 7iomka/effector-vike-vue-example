import { createEvent } from 'effector';

export const pageStarted = createEvent<{
  params: Record<string, string>;
  data: void;
}>();

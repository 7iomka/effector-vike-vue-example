import type { data } from './+data';
import { createEvent } from 'effector';

export const pageStarted = createEvent<{
  params: Record<string, string>;
  data: Awaited<ReturnType<typeof data>>;
}>();

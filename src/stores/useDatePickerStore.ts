import {create} from 'zustand';

interface DatePickerState {
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  daysOfWeek: string[];
  setRecurrenceType: (type: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
  setInterval: (interval: number) => void;
  setDaysOfWeek: (days: string[]) => void;
}

export const useDatePickerStore = create<DatePickerState>((set) => ({
  recurrenceType: 'daily',
  interval: 1,
  daysOfWeek: [],
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setInterval: (interval) => set({ interval }),
  setDaysOfWeek: (days) => set({ daysOfWeek: days }),
}));

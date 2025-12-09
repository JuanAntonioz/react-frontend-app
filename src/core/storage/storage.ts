import { StorageKeys } from './types';

export const StorageAdapter = {
  setItem: <T>(key: StorageKeys, value: T): void => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  },

  getItem: <T>(key: StorageKeys): T | null => {
    try {
      const serializedValue = localStorage.getItem(key);
      if (!serializedValue) return null;
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return null;
    }
  },
  removeItem: (key: StorageKeys): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  },
};

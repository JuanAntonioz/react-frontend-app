import { StorageKeys } from './types';

export const StorageAdapter = {
  setItem: <T>(key: StorageKeys, value: T): void => {
    try {
      const serializedValue =
        typeof value === 'string' ? (value as string) : JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  },

  getItem: <T>(key: StorageKeys): T | null => {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) return null;

    try {
      return JSON.parse(storedValue) as T;
    } catch {
      return storedValue as T;
    }
  },
  removeItem: (key: StorageKeys): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  },
};

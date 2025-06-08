
import { useState, useEffect } from 'react';

// Define supported locales
export type Locale = 'en' | 'es' | 'fr';

// Default locale
const DEFAULT_LOCALE: Locale = 'en';

// Get locale from localStorage or use default
const getStoredLocale = (): Locale => {
  const stored = localStorage.getItem('locale') as Locale;
  return stored && ['en', 'es', 'fr'].includes(stored) ? stored : DEFAULT_LOCALE;
};

// Global state for current locale
let currentLocale: Locale = getStoredLocale();
let translations: Record<string, any> = {};
let subscribers: Set<() => void> = new Set();

// Load translations for a locale
const loadTranslations = async (locale: Locale) => {
  try {
    const module = await import(`../locales/${locale}.json`);
    translations = module.default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    // Fallback to English if loading fails
    if (locale !== 'en') {
      const fallback = await import('../locales/en.json');
      translations = fallback.default;
    }
  }
};

// Initialize translations
loadTranslations(currentLocale);

// Translation function
const t = (key: string): string => {
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key; // Return the key if translation is not found
    }
  }
  
  return typeof value === 'string' ? value : key;
};

// Change locale function
const changeLocale = async (newLocale: Locale) => {
  if (newLocale !== currentLocale) {
    currentLocale = newLocale;
    localStorage.setItem('locale', newLocale);
    await loadTranslations(newLocale);
    
    // Notify all subscribers
    subscribers.forEach(callback => callback());
  }
};

// Hook for using translations
export const useTranslation = () => {
  const [, forceUpdate] = useState({});
  
  useEffect(() => {
    const callback = () => forceUpdate({});
    subscribers.add(callback);
    
    return () => {
      subscribers.delete(callback);
    };
  }, []);
  
  return {
    t,
    locale: currentLocale,
    changeLocale,
  };
};

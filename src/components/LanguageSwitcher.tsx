
import { Button } from "@/components/ui/button";
import { useTranslation, Locale } from "@/hooks/useTranslation";

const LanguageSwitcher = () => {
  const { locale, changeLocale } = useTranslation();

  const languages: { code: Locale; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  return (
    <div className="flex items-center space-x-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={locale === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => changeLocale(lang.code)}
          className="text-xs px-2 py-1"
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.code.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

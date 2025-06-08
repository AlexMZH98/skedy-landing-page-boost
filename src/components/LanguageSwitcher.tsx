
import { Button } from "@/components/ui/button";
import { useTranslation, Locale } from "@/hooks/useTranslation";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { locale, changeLocale } = useTranslation();

  const languages: { code: Locale; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="flex items-center bg-gray-100 rounded-lg p-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={locale === lang.code ? "default" : "ghost"}
            size="sm"
            onClick={() => changeLocale(lang.code)}
            className={`h-8 px-3 text-xs font-medium transition-all ${
              locale === lang.code 
                ? "bg-white shadow-sm text-gray-900" 
                : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
            }`}
          >
            <span className="mr-1.5">{lang.flag}</span>
            {lang.code.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

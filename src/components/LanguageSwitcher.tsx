import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-secondary/50 rounded-full p-1">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("vi")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "vi"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        VN
      </button>
    </div>
  );
};

export default LanguageSwitcher;

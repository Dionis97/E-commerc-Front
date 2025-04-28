import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react'; // Optional: icon for dropdown arrow

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setOpen(false);
    };

    const currentLang = i18n.language === 'de' ? '🇩🇪 Deutsch' : '🇬🇧 English';

    return (
        <div className="relative flex justify-end mt-2">
            <button
                onClick={() => setOpen(!open)}
                className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2"
            >
                {currentLang}
                <ChevronDown className="w-4 h-4" />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                    <button
                        onClick={() => changeLanguage('en')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        🇬🇧 English
                    </button>
                    <button
                        onClick={() => changeLanguage('de')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        🇩🇪 Deutsch
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;

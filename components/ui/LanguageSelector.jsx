import { LANGUAGE_VERSIONS } from "@/app/constants";
import { useState } from "react";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue-400";

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-2 mb-2">
      <div className="relative inline-block text-left">
        <button
          className="border-blue-600 border-2 text-blue-600 px-2 py-1 rounded hover:bg-blue-700 hover:text-white transition duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {language}
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white">
            {languages.map(([lang, version]) => (
              <button
                key={lang}
                className={`${
                  lang === language ? "text-blue-500 bg-gray-200" : "text-black"
                } block w-full text-left px-4 py-2 hover:bg-gray-300 transition duration-200`}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                <span className="text-gray-600 text-sm">({version})</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;

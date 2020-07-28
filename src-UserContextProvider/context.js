import React, {useState, useContext, createContext} from 'react';


const LangContext = createContext();
 
const Lang = ({ defaultLang, children, translations }) => { 
    //state
    const [lang, setLang] = useState(defaultLang);
    console.log(lang)
    //function 
    const hyperTranslate = text => {
        if (lang === defaultLang) {
          return text;
        }else {
            return translations[lang][text];
        }
    };
    //provider: context를 가져오는 역활
    //value 값할당
    //{children} 모든 컴포넌트를 자식으로
    return(
        <LangContext.Provider value={{ setLang, t: hyperTranslate }}>{children}</LangContext.Provider>
    )
}

export const useSetLang = () => {
    const { setLang } = useContext(LangContext);
    return setLang;
};
export const useT = () => {
    const { t } = useContext(LangContext);
    return t;
};
export default Lang;

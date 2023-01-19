import { createContext, useState } from "react";

interface IthemeContext {
    themeState: string
    setTheme: any
}
const themeContext = createContext<IthemeContext>({
    themeState: 'dark',
    setTheme: () => { }
})
interface Props {
    children: JSX.Element | JSX.Element[];
}
function ThemeProvider({ children }: Props) {
    
    const [themeState, setTheme] = useState('light')
    return <themeContext.Provider value={{ themeState, setTheme }}>
        {children}
    </themeContext.Provider>
}
export { ThemeProvider, themeContext }
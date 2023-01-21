import { useEffect } from "react";
import useTheme from "../components/context/themeContext/ThemeProvider";
function backgroundColorHandler() {
    const { theme } = useTheme()
    useEffect(() => {
        document.body.style.backgroundColor = (theme === 'dark') ? 'rgb(20, 22, 51)' : 'lightgoldenrodyellow'
    }, [theme])
    return (
        <></>
    )
}

export default backgroundColorHandler
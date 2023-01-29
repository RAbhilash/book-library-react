import { useContext } from "react";
import { themeContext } from "../../../App";
export default function useTheme() {
    return useContext(themeContext)
}
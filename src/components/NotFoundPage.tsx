import { useThemeStore } from "../context/ThemeContext";

export default function NotFoundPage() {
    const { ToggleTheme, theme } = useThemeStore();
  return (
    <div className="archivo-black-regular w-100 d-flex flex-column align-items-center">
        <div className={`background-text ${theme == 'dark'? 'background-text-dark':''}`}>404</div>
        <div>Page not found! <a href="/">Get back</a></div>
    </div>
  )
}

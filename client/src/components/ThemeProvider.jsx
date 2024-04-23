import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-gray-200 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen"></div>
      {children}
    </div>
  );
};

export default ThemeProvider;

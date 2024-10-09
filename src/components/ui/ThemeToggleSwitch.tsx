import state from "../../store/store";

const ThemeToggleSwitch = () => {
  const onChange = (checked: boolean) => {
    state.darkMode = checked;
  };

  return (
    <div className="flex flex-col items-center space-y-1">
      <button
        onClick={() => onChange(!state.darkMode)}
        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2  ${
          state.darkMode
            ? "bg-none border-2 border-[#3A3A3A]"
            : "bg-none border-2 border-gray-300"
        }`}
      >
        <div
          className={`w-3 h-3 rounded-full bg-[#2A85FF] transition-transform duration-300 ease-in-out ${
            state.darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <span className="text-[10px] dark:text-white text-black">
        {state.darkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};

export default ThemeToggleSwitch;

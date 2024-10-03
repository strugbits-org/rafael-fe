// store.ts
import { proxy } from "valtio";

// Define the type for the state
interface AppState {
  darkMode: boolean;
}

const state = proxy<AppState>({
  darkMode: false, // Default to light mode
});

export default state;

import { AppProvider } from "./providers";
import { VimNewTab } from "./pages/VimNewTab";

export function App() {
  return (
    <AppProvider>
      <VimNewTab />
    </AppProvider>
  );
}

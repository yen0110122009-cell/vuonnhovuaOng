// Style reminder: Nắng Trên Luống Đất — route gốc mở trực tiếp vào sân chơi, không thêm chrome thừa.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import GameCanvas from "./components/GameCanvas";

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <GameCanvas />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

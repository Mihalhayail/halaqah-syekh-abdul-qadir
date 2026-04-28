import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import TentangKami from "./pages/TentangKami";
import { GuruList, GuruDetail } from "./pages/Guru";
import { ProgramList, ProgramDetail } from "./pages/Program";
import Galeri from "./pages/Galeri";
import Produk from "./pages/Produk";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/tentang" element={<TentangKami />} />
            <Route path="/guru" element={<GuruList />} />
            <Route path="/guru/:id" element={<GuruDetail />} />
            <Route path="/program" element={<ProgramList />} />
            <Route path="/program/:id" element={<ProgramDetail />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/kontak" element={<Kontak />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

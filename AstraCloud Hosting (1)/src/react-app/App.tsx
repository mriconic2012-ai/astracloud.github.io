import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import MinecraftHosting from "@/react-app/pages/MinecraftHosting";
import Domain from "@/react-app/pages/Domain";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/minecraft" element={<MinecraftHosting />} />
        <Route path="/domain" element={<Domain />} />
      </Routes>
    </Router>
  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function QuickAccess() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleOnScroll = () => {
      const shouldShow = window.scrollY > 200;
      if (shouldShow !== visible) setVisible(shouldShow);
    };
    window.addEventListener("scroll", toggleOnScroll);
    return () => window.removeEventListener("scroll", toggleOnScroll);
  }, [visible]);

  const handleQuickAccess = () => {
    navigate("/donaspainel");
  };

  return (
    <button
      onClick={handleQuickAccess}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center text-white font-bold text-lg
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
        bg-gradient-to-br from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600
      `}
      title="Acessar Painel Admin"
    >
      🛡️
    </button>
  );
}

export default QuickAccess;

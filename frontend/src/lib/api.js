// Configuração centralizada da API com fallback para dados simulados
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8001";
const API = BACKEND_URL ? `${BACKEND_URL}/api` : null;
const USE_MOCK_DATA = !BACKEND_URL || BACKEND_URL.trim() === "";

// Função para obter URL segura (com fallback)
const getSafeUrl = (url) => {
  try {
    return new URL(url);
  } catch {
    return null;
  }
};

// Função para obter headers de autenticação
const getAuthHeaders = (token) => {
  if (USE_MOCK_DATA) return null;
  if (!token) {
    try {
      const storedToken = localStorage.getItem("admin_token");
      if (storedToken) token = storedToken;
    } catch (e) {}
  }
  if (!token) return null;
  return { Authorization: `Bearer ${token}` };
};

export { API, USE_MOCK_DATA, getAuthHeaders, getSafeUrl };

import { useEffect, useState } from "react";

// Campanha de Black Friday ("Black November" -> "Black Friday" à meia-noite).
//
// Enquanto BLACK_FRIDAY_ACTIVE for true, a página inicial (/) redireciona para
// a página promocional (/blackfriday) e o link "Início" do menu aponta para ela.
// Para voltar à Home padrão, basta trocar para false — a Home (pages/Home.jsx)
// não foi alterada e volta a ser servida em /.
export const BLACK_FRIDAY_ACTIVE = true;

export const BLACK_FRIDAY_PATH = "/blackfriday";
export const BIOINSTA_BF_PATH = "/bioinstabf";

// Início da Black Friday: virada de 26 para 27/11, meia-noite de Brasília.
export const BLACK_FRIDAY_START = new Date("2026-11-27T00:00:00-03:00");

export const BLACK_FRIDAY_COUPON = "blacknovember";
export const BLACK_FRIDAY_OFFICIAL_COUPON = "blackfriday";

// Rota usada como "início" do site (menu e logo).
export const HOME_PATH = BLACK_FRIDAY_ACTIVE ? BLACK_FRIDAY_PATH : "/";

export const isBlackFridayPath = (pathname) =>
  pathname.toLowerCase().replace(/\/+$/, "") === BLACK_FRIDAY_PATH;

export const isBioinstaBfPath = (pathname) =>
  pathname.toLowerCase().replace(/\/+$/, "") === BIOINSTA_BF_PATH;

export const hasBlackFridayStarted = () =>
  Date.now() >= BLACK_FRIDAY_START.getTime();

// Hook que vira automaticamente para true no exato instante de BLACK_FRIDAY_START.
export function useBlackFridayStarted() {
  const [started, setStarted] = useState(hasBlackFridayStarted);

  useEffect(() => {
    if (started) return;
    const remaining = Math.max(0, BLACK_FRIDAY_START.getTime() - Date.now());
    const id = setTimeout(() => setStarted(true), remaining);
    return () => clearTimeout(id);
  }, [started]);

  return started;
}

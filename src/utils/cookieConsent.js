const STORAGE_KEY = "aj_cookie_consent";
const CONSENT_VERSION = 1;

export const CONSENT_CHANGE_EVENT = "aj-cookie-consent-change";
export const OPEN_PREFERENCES_EVENT = "aj-cookie-open-preferences";

export function getStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent({ marketing }) {
  const consent = {
    version: CONSENT_VERSION,
    necessary: true,
    marketing: !!marketing,
    decidedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: consent }));
  return consent;
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}

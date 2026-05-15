const PHONE = "5531987577892";
const MESSAGE = "Tenho uma dúvida sobre a academia junguiana";
const HREF = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppFab() {
  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.314.245-.66.245-1.005 0-.225-1.394-.99-1.708-1.146z m1.323-12.47A11.998 11.998 0 0 0 16 4C9.392 4 4 9.392 4 16c0 1.946.464 3.864 1.36 5.582L4 28l6.547-1.318A11.948 11.948 0 0 0 16 28c6.608 0 12-5.392 12-12 0-3.21-1.247-6.226-3.567-8.535z M16 25.99c-1.687 0-3.346-.45-4.79-1.301l-.344-.2-3.572.717.717-3.572-.2-.344A9.918 9.918 0 0 1 6.01 16c0-5.502 4.488-9.99 9.99-9.99 2.673 0 5.187 1.04 7.073 2.927A9.916 9.916 0 0 1 25.99 16c0 5.502-4.488 9.99-9.99 9.99z" />
      </svg>
    </a>
  );
}

import pathlib
import sys

PATH = pathlib.Path(__file__).resolve().parents[2] / "src/components/CouponBanner.jsx"

OLD = (
    '          Fizemos o cupom especial <strong className="font-semibold">academia1ano</strong>{" "}\n'
    "          para todos os planos, confira até o dia 1 de agosto."
)

NEW = (
    '          O cupom especial <strong className="font-semibold">academia1ano</strong>{" "}\n'
    "          foi prorrogado — agora exclusivo para o plano anual, até o dia\n"
    "          15 de agosto."
)


def main():
    text = PATH.read_text(encoding="utf-8")

    if OLD not in text:
        print("Nada a fazer: texto antigo não encontrado (já atualizado ou alterado manualmente).")
        return

    PATH.write_text(text.replace(OLD, NEW), encoding="utf-8")
    print("Banner atualizado: cupom academia1ano agora exclusivo do plano anual até 15/08.")


if __name__ == "__main__":
    sys.exit(main())

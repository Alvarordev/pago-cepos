import { useState } from "react";
import useMulta from "./hooks/useMulta";
import MultaCard from "./components/MultaCard";

function App() {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState<Multa[] | undefined>();

  const { multas } = useMulta();

  const searchMulta = () => {
    const filteredMulta = multas?.filter((multa) => multa.vPlacaAuto === input);

    setFiltered(filteredMulta);
  };

  return (
    <main className="min-h-[100dvh] flex flex-col gap-6 max-w-sm w-full mx-auto justify-center items-center px-4 sm:px-0">
      <section className="w-full">
        <h1 className="text-2xl font-semibold text-center pb-2">
          Modulo de pago
        </h1>

        <p className="text-sm text-muted-foreground pb-4 text-center">
          Busque su vehiculo ingresando el nº de placa y pague la totalidad del
          monto de la multa para poder retirar su cepo
        </p>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium">Ingrese su placa</label>
          <input
            type="text"
            placeholder="ABC-123"
            onChange={(e) => setInput(e.target.value)}
            className="flex h-9 w-full rounded-sm border border-input bg-transparent px-3 py-1 text-sm text-center shadow-sm transition-colors uppercase"
          />
          <button
            onClick={searchMulta}
            className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors cursor-pointer"
          >
            Buscar
          </button>
        </div>
      </section>

      <section className="w-full">
        {filtered && <MultaCard multa={filtered[0]} />}
      </section>
    </main>
  );
}

export default App;

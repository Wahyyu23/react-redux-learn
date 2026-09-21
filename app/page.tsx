"use client";

import { useState } from "react";

function ToolCard({
  quantity,
  onAdd,
}: {
  quantity: number;
  onAdd: () => void;
}) {
  return (
    <section>
      <h2>Laptop Dell</h2>
      <p>Kode: AST-001</p>

      <p>Jumlah dipilih: {quantity}</p>

      <button onClick={onAdd} disabled={quantity >= 3}>
        Tambah ke Peminjaman
      </button>
    </section>
  );
}

function LoanSummary({
  quantity,
  onReset,
}: {
  quantity: number;
  onReset: () => void;
}) {
  return (
    <section>
      <h2>Ringkasan Peminjaman</h2>

      <p>Total unit: {quantity}</p>

      <button onClick={onReset}>
        Kosongkan
      </button>
    </section>
  );
}

export default function Home() {
  const [quantity, setQuantity] = useState(0);

  return (
    <main>
      <h1>Sistem Peminjaman Alat</h1>

      <ToolCard
        quantity={quantity}
        onAdd={() =>
          setQuantity((previous) =>
            Math.min(previous + 1, 3)
          )
        }
      />

      <hr />

      <LoanSummary
        quantity={quantity}
        onReset={() => setQuantity(0)}
      />
    </main>
  );
}
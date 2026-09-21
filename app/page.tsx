"use client";

import { addTool, resetLoan } from "@/features/loan/loanSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

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

      <button onClick={onReset}>Kosongkan</button>
    </section>
  );
}

export default function Home() {
  //const [quantity, setQuantity] = useState(0);
  //Dari useState, kini mencoba langsung memakai Redux Store

  //[Ver 2] Membaca quantity langsung dari Redux Store
  const quantity = useAppSelector((state) => state.loan.quantity);

  //[ver 2] Mengambil fungsi dispacth
  const dispatch = useAppDispatch();

  return (
    <main>
      <h1>Sistem Peminjaman Alat</h1>

      <ToolCard quantity={quantity} onAdd={() => dispatch(addTool())} />

      <hr />

      <LoanSummary quantity={quantity} onReset={() => dispatch(resetLoan())} />
    </main>
  );
}

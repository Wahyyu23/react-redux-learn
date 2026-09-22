"use client";

import {
  addTool,
  addToolByAmmount,
  resetLoan,
} from "@/features/loan/loanSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

function ToolCard() {
  const quantity = useAppSelector((state) => state.loan.quantity);

  const dispatch = useAppDispatch();

  return (
    <section>
      <h2>Laptop Dell</h2>
      <p>Kode: AST-001</p>

      <p>Jumlah dipilih: {quantity}</p>

      <button onClick={() => dispatch(addTool())} disabled={quantity >= 3}>
        Tambah 1 Unit
      </button>
      
      <br />

      <button
        onClick={() => dispatch(addToolByAmmount(2))}
        disabled={quantity + 2 > 3}
      >
        Tambah 2 unit
      </button>
    </section>
  );
}

function LoanSummary() {
  const quantity = useAppSelector((state) => state.loan.quantity);

  const dispatch = useAppDispatch();

  return (
    <section>
      <h2>Ringkasan Peminjaman</h2>

      <p>Total unit: {quantity}</p>

      <button onClick={() => dispatch(resetLoan())}>Kosongkan</button>
    </section>
  );
}

export default function Home() {
  //const [quantity, setQuantity] = useState(0);
  //Dari useState, kini mencoba langsung memakai Redux Store

  //[Ver 2] Membaca quantity langsung dari Redux Store
  //const quantity = useAppSelector((state) => state.loan.quantity);

  //[ver 2] Mengambil fungsi dispacth
  //const dispatch = useAppDispatch();

  //[Ver 3] Deklarasi dari useAppSelector dan useDispatch langsung dari komponen, sehingga waktu implementasi tinggal memanggil saja tanpa mendefinsiikan props lagi

  return (
    <main>
      <h1>Sistem Peminjaman Alat</h1>

      <ToolCard />

      <hr />

      <LoanSummary />
    </main>
  );
}

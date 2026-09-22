"use client";

import {
  addTool,
  addToolByAmmount,
  resetLoan,
} from "@/features/loan/loanSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";

function ToolCard() {
  const [amountInput, setAmountInput] = useState("1");
  const [error, setError] = useState("");

  const quantity = useAppSelector((state) => state.loan.quantity);

  const dispatch = useAppDispatch();

  function handleAddAmount() {
    //Pastikan ubah string menjadi integer karena input field dibuat sebagai string
    const amount = Number(amountInput);

    //Pemeriksaan untuk memastikan input tidak kosong
    if (amountInput.trim() === "") {
      setError("Input tidak boleh kosong");
      return;
    }

    //Untuk memastikan nilai adalah angka bulat dan tidak negatif
    if (!Number.isInteger(amount) || amount <= 0) {
      setError("Input harus angka bulat dan tidak boleh negatif");
      return;
    }

    //Karena ada batas, pastikan nilai tidak melebihi batas
    if (quantity + amount > 3) {
      setError("Input melebihi batas");
      return;
    }

    //Kirim action ke redux store lewat dispatch
    dispatch(addToolByAmmount(amount));

    setAmountInput("1");
    setError("");
  }

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
      <div>
        <label htmlFor="loan-amount">Jumlah Peminjaman</label>

        <input
          id="loan-amount"
          type="number"
          min="1"
          max={3 - quantity}
          step="1"
          value={amountInput}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "loan-amount-error" : undefined}
          onChange={(event) => {
            setAmountInput(event.target.value);
            setError("");
          }}
        />

        {error && (
          <p
            id="loan-amount-error"
            role="alert"
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
        )}

        <button onClick={handleAddAmount}>Tambah Sesuai Jumlah</button>
      </div>
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

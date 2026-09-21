"use client";
import { addTool, resetLoan } from "@/features/loan/loanSlice";
import { makeStore } from "@/lib/store";
import { useState } from "react";

export default function ReduxTestPage() {
  //Bikin satu instance untuk store di halaman ini
  const [store] = useState(makeStore);

  //Pendefinisian useState
  //Ini adalah nilai yang akan ditempilkan oleh react
  const [quantity, setQuantity] = useState(
    () => store.getState().loan.quantity,
  );

  function handleAdd() {
    //Untuk yang pertama, ini mengirim action ke redux. Action yang dikirim sesuai dengan yang dibuat sebelumnya
    store.dispatch(addTool());

    //Lalu dilanjut baca state redux terbaru
    console.log(store.getState().loan.quantity);
    const latestQuantity = store.getState().loan.quantity;

    //Setelahnya dilanjut perbarui tampilan react. Ini yang berhubungan dengan UI
    setQuantity(latestQuantity);
  }

  function handleReset() {
    store.dispatch(resetLoan());

    const latestQuantity = store.getState().loan.quantity;

    setQuantity(latestQuantity);
  }

  return (
    <main>
      <h1>Pengujian Redux Store</h1>

      <h2>Quantity: {quantity}</h2>

      <button onClick={handleAdd}>Tambah Alat</button>

      <button onClick={handleReset}>Reset</button>
    </main>
  );
}

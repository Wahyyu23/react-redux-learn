"use client";
import { addTool, resetLoan } from "@/features/loan/loanSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function ReduxTestPage() {
  //Bikin satu instance untuk store di halaman ini
  //   const [store] = useState(makeStore);

  //[Ver 1] Sekarang diganti menggunakan useSelector langsung
  const quantity = useAppSelector((state) => state.loan.quantity);

  //[Ver 1] Pakai useDispatch langsung
  const dispatch = useAppDispatch();

  //Pendefinisian useState
  //Ini adalah nilai yang akan ditempilkan oleh react
  //   const [quantity, setQuantity] = useState(
  //     () => store.getState().loan.quantity,
  //   );

  function handleAdd() {
    //Untuk yang pertama, ini mengirim action ke redux. Action yang dikirim sesuai dengan yang dibuat sebelumnya
    //store.dispatch(addTool());

    //Lalu dilanjut baca state redux terbaru
    // console.log(store.getState().loan.quantity);
    // const latestQuantity = store.getState().loan.quantity;

    // //Setelahnya dilanjut perbarui tampilan react. Ini yang berhubungan dengan UI
    // setQuantity(latestQuantity);

    //[Ver 1]Inisiasi langsung pakai useAppDispatch
    dispatch(addTool());
  }

  function handleReset() {
    // store.dispatch(resetLoan());

    // const latestQuantity = store.getState().loan.quantity;

    // setQuantity(latestQuantity);

    //[Ver 1]Implementasi fungsi langsung dari hook useAppDispatch
    dispatch(resetLoan());
  }

  return (
    <main>
      <h1>Pengujian Redux Store</h1>

      <h2>Quantity:{quantity}</h2>

      <button onClick={handleAdd}>Tambah Alat</button>

      <button onClick={handleReset}>Reset</button>
    </main>
  );
}

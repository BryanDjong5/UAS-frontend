"use client";

import { useState, type FormEvent } from "react";
import styles from "./reservasi.module.css";
import { useRouter } from "next/navigation";

export default function Reservasi() {
  const router = useRouter();
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [jumlahOrang, setJumlahOrang] = useState(1);
  const [pesan, setPesan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setPesan("");

    try {
      const res = await fetch("/api/reservasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tujuan, tanggal, jam, jumlahOrang }),
      });

      if (!res.ok) {
        const data = await res.json();
        setPesan(data.error ?? "Gagal menyimpan");
        return;
      }
      setPesan("Reservasi berhasil!");
      setTujuan("");
      setTanggal("");
      setJam("");
      setJumlahOrang(1);
      router.push("/SistemBooking/booking");
      } catch {
      setPesan("Tidak bisa terhubung ke server");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Reservasi</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" value={tujuan} onChange={(e) => setTujuan(e.target.value)} placeholder="Tujuan reservasi" required />
          <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required />
          <input type="time" value={jam} onChange={(e) => setJam(e.target.value)} required />
          <input type="number" min={1} value={jumlahOrang} onChange={(e) => setJumlahOrang(Number(e.target.value))} />
          <button className={styles.submit} type="submit" disabled={loading}>
            {loading ? "Menyimpan..." : "Reservasi"}
          </button>
        </form>
        {pesan && <p>{pesan}</p>}
      </div>
    </div>
  );
}
//Level Mudah
//Latihan 1: Judul tab dinamis (useEffect)
//Buat tombol “Tambah” dan state count. Setiap count berubah, judul tab browser berubah menjadi Count: 3, dst.
//Petunjuk: document.title, dependency [count].
//== jawaban Latihan 1==
import React, { useState, useEffect } from "react";
function Latihan1 () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    function handleClick() {
 setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Tambah</button>
        </div>
    );
}
export { Latihan1 };

//Latihan 2: Log saat mount (useEffect)

//Buat useEffect dengan [] yang mencetak "Komponen muncul" di console.
//Target: Buka console dan amati hasilnya. Kenapa tercetak dua kali?

//Latihan 3: Cleanup saat unmount (useEffect)

//Buat komponen Pesan yang mencetak "Muncul" saat mount dan "Hilang" di fungsi cleanup. Di App, buat tombol untuk menampilkan/menyembunyikan Pesan.
//Target: Pastikan “Hilang” tercetak saat komponen disembunyikan.

//Latihan 4: Dua state, satu efek (useEffect)

//Buat dua state: nama dan count. Buat efek yang hanya mencetak log saat nama berubah.
//Target: Klik tombol count berkali-kali dan pastikan log tidak muncul. Ketik di input nama, log harus muncul.

//Latihan 5: Fokus ke input lewat tombol (useRef)

//Buat sebuah <input> dan tombol “Fokus”. Saat tombol diklik, kursor otomatis masuk ke input.
//Petunjuk: useRef(null), ref={inputRef}, inputRef.current.focus().

//Level Medium
//Latihan 6: Auto-fokus saat halaman dibuka (useEffect + useRef)

//Input langsung terfokus begitu komponen muncul, tanpa perlu klik apa pun.
//Petunjuk: Gabungkan latihan 5 dengan useEffect berdependency [].

//Latihan 7: Penghitung jumlah render (useRef)

//Tampilkan teks “Komponen sudah dirender X kali” dan sediakan input teks di dekatnya. Setiap kamu mengetik, jumlah render bertambah.
//Syarat: Jangan pakai useState untuk menghitung render (kenapa akan terjadi loop?).
//Petunjuk: renderCount.current += 1 di body komponen.

//Latihan 8: Stopwatch (useEffect + useRef)

//Buat stopwatch dengan tombol Mulai, Berhenti, dan Reset. Detik bertambah tiap 1 detik.
//Syarat:
//
//ID setInterval disimpan di useRef
//Tambahkan cleanup agar interval berhenti saat komponen di-unmount
//Latihan 9: Ambil data dari API (useEffect)

//Saat komponen mount, ambil data dari https://jsonplaceholder.typicode.com/users dan tampilkan daftar nama.
//Syarat:

//Ada state loading (tampilkan teks “Memuat...”)
//Ada state error jika gagal
//Ingat: fungsi callback useEffect tidak boleh async, buat fungsi async di dalamnya lalu panggil.
//Latihan 10: Nilai sebelumnya (useEffect + useRef)

//Buat counter yang menampilkan nilai sekarang dan nilai sebelumnya. Contoh: “Sekarang: 5, Sebelumnya: 4”.
//Petunjuk: Simpan nilai lama di useRef, perbarui di dalam useEffect setelah render. Perhatikan urutan kerjanya: kenapa nilai ref harus diperbarui di efek, bukan sebelum return?

function StateComponent () {
    return (
        <div>
                <Latihan1 />
        </div>
    )
}
export default StateComponent;
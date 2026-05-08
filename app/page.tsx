"use client";
import { useAppContext } from "./contexto/AppContext";

export default function Home() {
  const { nombre } = useAppContext();
  return (
    <div>
      <br />
      <p>Hola {nombre}</p>
    </div>
  );
}

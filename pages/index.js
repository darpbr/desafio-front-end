import { Geist, Geist_Mono } from "next/font/google";
import Box from "@/components/Box";
import Pagina from "@/components/Pagina";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Pagina>

      <Box titulo="Hello World!">
        <p>Isto é um parágrafo</p>
        <p>Isto é outro parágrafo</p>
      </Box>

      <Box titulo="DARP">
        <p>Este é um box com o título DARP</p>
        <p>Você pode colocar qualquer conteúdo aqui.</p>
        <button className="btn btn-primary">Detalhar</button>
      </Box>

      <Box titulo="Outro box">
        <p>Este é outro box com um título diferente.</p>
        <p>Você pode adicionar mais conteúdo aqui também.</p>
        <button className="btn btn-secondary">Ação</button>
      </Box>

    </Pagina>
  );
}

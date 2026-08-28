export interface Experience {
  id: string;
  role: string;
  place: string;
  period: string;
  description: string;
  tech: string[];
}

export const experience: Experience[] = [
  {
    id: "sales-system",
    role: "Sistema de Gestión de Ventas",
    place: "Freelance",
    period: "2026",
    description:
      "Aplicación web full-stack para la gestión de clientes, productos, stock, ventas y pedidos.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Supabase", "Tailwind CSS"],
  },
  {
    id: "online-catalog",
    role: "Catálogo Online de Productos",
    place: "Freelance",
    period: "2026",
    description:
      "Aplicación web para la exhibición de productos, carrito de compras y generación de pedidos mediante WhatsApp.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
  },
];
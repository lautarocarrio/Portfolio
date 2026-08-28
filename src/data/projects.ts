export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  accent: string;
}

export const projects: Project[] = [
  /*{
    id: "malaika",
    title: "Malaika",
    subtitle: "App de entrenamiento",
    description:
      "Aplicación para gestionar entrenamientos: biblioteca de ejercicios, creación de rutinas por bloques, registro de sesiones con repeticiones máximas y estadísticas visuales con mapa muscular 2D.",
    features: [
      "Rutinas de entrenamiento por bloques",
      "Seguimiento de sesiones y RM",
      "Estadísticas con mapa muscular 2D",
      "Autenticación con email y Google",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "React Query"],
    githubUrl: "https://github.com/lautarocarrio/Malaika",
    accent: "from-emerald-500/20 to-teal-500/10",
  },*/
  {
    id: "bsi",
    title: "Sistema de Compras BSI",
    subtitle: "Gestión de compras empresarial",
    description:
      "Sistema interno de gestión de compras para una empresa constructora: pedidos, órdenes de compra, cotizaciones y presupuestos, obras, proveedores, usuarios y calendario, con dashboard de métricas.",
    features: [
      "Pedidos y órdenes de compra",
      "Cotizaciones y presupuestos por pedido",
      "Gestión de obras, proveedores y usuarios",
      "Dashboard y calendario con métricas",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "Recharts"],
    githubUrl: "https://github.com/lautarocarrio/Purchase-Management-System",
    accent: "from-sky-500/20 to-blue-500/10",
  },
  {
    id: "ahivamos",
    title: "AHÍ VAMOS",
    subtitle: "Tienda online Home & Deco",
    description:
      "E-commerce para una tienda de decoración del hogar: catálogo con filtros por categoría y color, buscador, carrito con pedido a través de WhatsApp y panel de administración para gestionar productos.",
    features: [
      "Catálogo con filtros y búsqueda",
      "Carrito con pedido por WhatsApp",
      "Productos destacados",
      "Panel admin para alta de productos",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Material UI", "Supabase"],
    githubUrl: "https://github.com/lautarocarrio/AH-VAMOS-Home-Deco-E-commerce",
    accent: "from-amber-500/20 to-orange-500/10",
  },
];
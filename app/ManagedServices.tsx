import T from "./T";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

type ServiceRow = {
  id: number;
  name: string | null;
  href: string | null;
  description: string | null;
  enabled: boolean | null;
};

type Service = {
  id: string;
  title: string;
  href: string;
  description: string;
};

async function getServices(
  type: "plumbing" | "electric"
): Promise<Service[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Не настроены переменные Supabase");
    return [];
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const table =
    type === "plumbing" ? "plumbing_services" : "electric_services";

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("sort_order", { ascending: true })
    .order("id", { ascending: true });

  if (error) {
    console.error(`Ошибка загрузки ${table}:`, error.message);
    return [];
  }

  return ((data || []) as ServiceRow[])
    .filter((row) => row.enabled ?? true)
    .map((row) => ({
      id: String(row.id),
      title: row.name || "",
      href: row.href || "",
      description: row.description || "",
    }));
}

export default async function ManagedServices({
  type,
}: {
  type: "plumbing" | "electric";
}) {
  const services = await getServices(type);

  return (
    <>
      <style>{`
        @keyframes managedServiceArrow {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
          }
        }

        .managed-service-arrow {
          display: inline-block;
          animation: managedServiceArrow 1.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .managed-service-arrow {
            animation: none;
          }
        }
      `}</style>

      <div
        className={
          type === "plumbing"
            ? "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            : "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0092B8]/40 hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0092B8]"
          >
            <h3 className="break-words text-lg font-bold leading-6 text-[#0092B8]">
              {service.title}
            </h3>

            {service.description && (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            )}

            <span className="mt-auto flex items-center gap-3 pt-4 text-sm font-semibold text-[#0092B8]">
              <span
                aria-hidden="true"
                className="managed-service-arrow text-lg"
              >
                →
              </span>

              <T p="managed" o={1}>Подробнее</T>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
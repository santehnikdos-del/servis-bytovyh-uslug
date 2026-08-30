import ManagedServicesAdmin from "../ManagedServicesAdmin";

export default function AdminElectricPage() {
  return (
    <ManagedServicesAdmin
      title="Услуги электрика"
      endpoint="/api/electric-services"
    />
  );
}

import ManagedServicesAdmin from "../ManagedServicesAdmin";

export default function AdminPlumbingPage() {
  return (
    <ManagedServicesAdmin
      title="Услуги сантехника"
      endpoint="/api/plumbing-services"
    />
  );
}

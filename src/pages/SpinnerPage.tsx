import { Spinner } from "../components/ui/spinner";

export default function SpinnerPage() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spinner size="size-6" />
    </div>
  );
}

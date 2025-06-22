import type { FC } from "react";
import { Spinner } from "../components/ui/spinner";

const SpinnerPage: FC = () => {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spinner size="size-6" />
    </div>
  );
};

export default SpinnerPage;

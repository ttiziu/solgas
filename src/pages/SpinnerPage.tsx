import type { FC } from "react";
import { Spinner } from "../components/ui/spinner";
import "../styles/SpinnerPage.css";

const SpinnerPage: FC = () => {
  return (
    <div className="spinner-page-container">
      <Spinner size="size-6" />
    </div>
  );
};

export default SpinnerPage;

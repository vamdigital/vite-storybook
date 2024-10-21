import { match } from "ts-pattern";
import "./alert.css";

export interface AlertProps {
  /** What Alert box is this for */
  type: "success" | "error" | "warning" | "info";
  children: React.ReactNode;
}

/** UI Popup for alerting the user */
export const Alert = ({ type, children }: AlertProps) => {
  const className = match(type)
    .with("success", () => "alert-success")
    .with("error", () => "alert-error")
    .with("info", () => "alert-info")
    .with("warning", () => "alert-warning")
    .otherwise(() => "");
  return <div className={`alert ${className}`}>{children}</div>;
};

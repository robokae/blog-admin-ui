import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: () => (
    <div>
      <h2>Dashboard</h2>
    </div>
  ),
});

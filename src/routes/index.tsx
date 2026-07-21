import { createFileRoute } from "@tanstack/react-router";
import BirthdayApp from "@/components/birthday/BirthdayApp";

export const Route = createFileRoute("/")({
  component: BirthdayApp,
});

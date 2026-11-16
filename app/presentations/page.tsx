import { redirect } from "next/navigation";

// Presentations are now listed with the publications. This keeps old links working.
export default function Presentations() {
  redirect("/publications#presentations");
}

import { redirect } from "next/navigation";

// Fellowships and awards are now part of the CV page. This keeps old links working.
export default function Fellowships() {
  redirect("/cv#funding");
}

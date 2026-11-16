import { redirect } from "next/navigation";

// The About text now lives on the home page. This keeps old links working.
export default function About() {
  redirect("/");
}

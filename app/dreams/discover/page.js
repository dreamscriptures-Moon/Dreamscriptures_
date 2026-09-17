import { permanentRedirect } from "next/navigation";

export default function LegacyDreamDiscoveryPage() {
  permanentRedirect("/guides/discover");
}

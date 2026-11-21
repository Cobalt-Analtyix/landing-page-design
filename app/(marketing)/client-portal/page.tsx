import { redirect } from "next/navigation";

import { clientPortalUrl } from "@/lib/site";

// The portal is live: this old address now forwards to it.
export default function ClientPortalPage() {
  redirect(clientPortalUrl);
}

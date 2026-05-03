import { dreams } from "@/data/dream";

let hasLogged = false;

export function logDreamsOnce() {
  if (hasLogged) return;
  hasLogged = true;

  console.log("\n===== DREAM DATA DEBUG =====");
  console.log("Total dreams:", dreams.length);
  console.log(
    "Missing titles:",
    dreams.filter((d) => !d.title || d.title.trim() === "")
  );

  dreams.forEach((d, i) => {
    console.log(`${i + 1}. ${d.title}`);
  });

  console.log("===== END =====\n");
}

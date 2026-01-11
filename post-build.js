const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "out");
const targetDir = path.join(outDir, "landing-assets");
const nextDir = path.join(outDir, "_next");

try {
  // 1. Create landing-assets folder if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log("✅ Created landing-assets directory");
  }

  // 2. Move _next into landing-assets
  if (fs.existsSync(nextDir)) {
    fs.renameSync(nextDir, path.join(targetDir, "_next"));
    console.log("✅ Moved _next to landing-assets/_next");
  } else {
    console.log(
      '⚠️ _next folder not found. Check your next.config.ts output: "export"',
    );
  }
} catch (err) {
  console.error("❌ Error during post-build:", err);
  process.exit(1);
}

#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Function to load environment variables from .env files
function loadEnv() {
 const envFiles = [".env.local", ".env.development", ".env"];

 for (const envFile of envFiles) {
  const envPath = path.join(process.cwd(), envFile);
  if (fs.existsSync(envPath)) {
   const envContent = fs.readFileSync(envPath, "utf8");
   const lines = envContent.split("\n");

   for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith("#")) {
     const [key, ...valueParts] = trimmedLine.split("=");
     if (key && valueParts.length > 0) {
      const value = valueParts.join("=").replace(/^["']|["']$/g, "");
      process.env[key] = value;
     }
    }
   }
  }
 }
}

// Load environment variables
loadEnv();

// Get the SUPABASE_PROJECT_ID from environment
const projectId = process.env.SUPABASE_PROJECT_ID;

if (!projectId) {
 console.error("❌ SUPABASE_PROJECT_ID not found in environment variables");
 console.log("Please make sure you have SUPABASE_PROJECT_ID in your .env file");
 process.exit(1);
}

console.log(`🔍 Found SUPABASE_PROJECT_ID: ${projectId}`);

try {
 // Create types directory if it doesn't exist
 const typesDir = path.join(process.cwd(), "types");
 if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir, { recursive: true });
  console.log("📁 Created types directory");
 }

 // Run the Supabase type generation command
 const command = `npx supabase gen types typescript --project-id ${projectId} --schema public > types/database.types.ts`;

 console.log("🔄 Generating Supabase types...");
 execSync(command, { stdio: "inherit" });

 console.log("✅ Types generated successfully!");
 console.log("📄 Types saved to: types/database.types.ts");
} catch (error) {
 console.error("❌ Error generating types:", error.message);
 process.exit(1);
}

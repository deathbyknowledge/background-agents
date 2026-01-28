/**
 * Sandbox module exports.
 */

// Cloudflare Sandbox SDK implementation (replaces Modal)
export { CloudflareSandboxManager, createSandboxManager, type SandboxConfig } from "./cloudflare";

// Legacy Modal exports (deprecated - kept for reference during migration)
export {
  ModalClient,
  createModalClient,
  type CreateSandboxRequest,
  type CreateSandboxResponse,
  type WarmSandboxRequest,
  type WarmSandboxResponse,
  type SnapshotInfo,
} from "./client";

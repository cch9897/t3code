import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";

export const TelemetryOwnerSource = Schema.Literals(["connect", "openai", "claude", "device"]);
export type TelemetryOwnerSource = typeof TelemetryOwnerSource.Type;

export interface TelemetryOwner {
  readonly source: TelemetryOwnerSource;
  readonly ownerId: string;
}

export const TelemetryIdentitySource = Schema.Literals(["codex", "claude", "anonymous"]);
export type TelemetryIdentitySource = typeof TelemetryIdentitySource.Type;

export const getServerOwners: Effect.Effect<ReadonlyArray<TelemetryOwner>> = Effect.succeed([]);

import { assert, describe, it } from "@effect/vitest";
import * as Effect from "effect/Effect";

import * as AnalyticsService from "./AnalyticsService.ts";

describe("AnalyticsService (telemetry disabled)", () => {
  it.effect("drops all events without network delivery", () =>
    Effect.gen(function* () {
      const analytics = yield* AnalyticsService.AnalyticsService;
      const queued = yield* analytics.record("server.started", { mode: "desktop" });
      assert.isFalse(queued);
      yield* analytics.recordOwners([{ source: "connect", ownerId: "0".repeat(64) }], "server");
      yield* analytics.flush;
    }).pipe(Effect.provide(AnalyticsService.layer)),
  );
});

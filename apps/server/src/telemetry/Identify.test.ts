import { assert, describe, it } from "@effect/vitest";
import * as Effect from "effect/Effect";

import * as Identify from "./Identify.ts";

describe("Identify (telemetry disabled)", () => {
  it.effect("returns no server owners", () =>
    Effect.gen(function* () {
      const owners = yield* Identify.getServerOwners;
      assert.deepEqual(owners, []);
    }),
  );
});

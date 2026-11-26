import * as Layer from "effect/Layer";

export interface TracingConfig {
  readonly tracesUrl: string;
  readonly tracesDataset: string;
  readonly tracesToken: string;
}

export interface TracingResource {
  readonly serviceVersion?: string;
  readonly serviceInstanceId: string;
  readonly appVariant: string;
}

export function resolveTracingConfig(): TracingConfig | null {
  return null;
}

export function layerFromConfig(_config: TracingConfig | null, _resource: TracingResource) {
  return Layer.empty;
}

export const layer = Layer.empty;

import * as RelayTracing from "@t3tools/shared/relayTracing";

export const allowedFor = (
  _env?: Readonly<Record<string, string | undefined>>,
  _policy?: unknown,
): boolean => false;

export const relayLayer = (
  resource: Omit<RelayTracing.RelayClientTracingResource, "serviceInstanceId">,
  _tracingConfig: RelayTracing.RelayClientTracingConfig | null = null,
) =>
  RelayTracing.layer(null, {
    ...resource,
    serviceInstanceId: "disabled",
  });

export const layerHeadlessRelayClient = relayLayer({
  serviceName: "t3code-server",
  runtime: "node",
  client: "headless-cli",
});

export const layerServerRelayBroker = relayLayer({
  serviceName: "t3code-server",
  runtime: "node",
  client: "environment-server",
  component: "relay-broker",
});

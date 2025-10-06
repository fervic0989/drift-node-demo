import { TuskDrift } from "@use-tusk/drift-node-sdk";

TuskDrift.initialize({
  env: "local",
});

export { TuskDrift };

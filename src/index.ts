import { Container, getContainer } from "@cloudflare/containers";

export class PocketBaseContainer extends Container {
  defaultPort = 8090;
  sleepAfter = "10m";
}

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const container = getContainer(env.PocketBaseContainer, "pocketbase");
    return container.fetch(request);
  },
};

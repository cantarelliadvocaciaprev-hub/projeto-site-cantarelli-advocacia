import { describe, expect, it } from "vitest";
import pages from "./servicePages.json";
describe("local service information", () => {
  it("uses the requested ten distinct public service addresses", () => {
    expect(pages.map((p) => p.slug)).toEqual(["advogado-previdenciario-recife", "bpc-loas-recife", "aposentadoria-recife", "auxilio-doenca-negado-recife", "pensao-por-morte-recife", "revisao-de-beneficios-recife", "planejamento-previdenciario-recife", "advogado-previdenciario-olinda", "jaboatao", "paulista"]);
  });
});
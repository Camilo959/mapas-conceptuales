import { useState } from "react";

const maps = [
  {
    id: 1,
    title: "MAPA CONCEPTUAL – TEXTO 1",
    subtitle: "Estrategias de lectura y escritura de textos",
    accent: "#7C3AED",
    light: "#EDE9FE",
    mid: "#C4B5FD",
    nodes: {
      root: "Lenguaje en uso",
      branches: [
        {
          label: "implica",
          node: "Leer y Escribir",
          children: [
            { link: "va más allá de", node: "Descifrar contenido" },
            { link: "requiere reconocer", node: "Intenciones del autor" },
            { link: "exige identificar", node: "Valores y posicionamientos" },
          ],
        },
        {
          label: "se basa en",
          node: "Modelo de tres figuras",
          children: [
            {
              link: "1°",
              node: "Enunciador",
              sub: "Voz y punto de vista del autor",
            },
            {
              link: "2°",
              node: "Enunciatario",
              sub: "Imagen del lector construida en el texto",
            },
            {
              link: "3°",
              node: "Lo Referido",
              sub: "Tema o voces ajenas valoradas",
            },
          ],
        },
        {
          label: "permite",
          node: "Comprensión profunda",
          children: [
            { link: "responde a", node: "¿Qué dice el texto?" },
            { link: "responde a", node: "¿Por qué fue escrito?" },
            { link: "responde a", node: "¿Con qué propósito?" },
          ],
        },
        {
          label: "se aplica a",
          node: "Producción escrita",
          children: [
            { link: "exige definir", node: "Punto de vista propio" },
            { link: "exige identificar", node: "A quién se le habla" },
            { link: "exige presentar", node: "Ideas de otros autores" },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: "MAPA CONCEPTUAL – TEXTO 2",
    subtitle:
      "Los géneros desde una perspectiva socio-enunciativa. La noción de contexto integrado",
    accent: "#0F766E",
    light: "#CCFBF1",
    mid: "#5EEAD4",
    nodes: {
      root: "Dinámica Social Enunciativa (DSE)",
      branches: [
        {
          label: "se apoya en",
          node: "Principio dialógico (Bajtín)",
          children: [
            {
              link: "propone que",
              node: "Contexto está integrado en el enunciado",
            },
            { link: "no es", node: "Algo externo al texto" },
          ],
        },
        {
          label: "analiza",
          node: "El Enunciado",
          children: [
            {
              link: "contiene",
              node: "Situación de Comunicación",
              sub: "Relaciones de poder: quién habla, a quién y sobre qué",
            },
            {
              link: "contiene",
              node: "Situación de Enunciación",
              sub: "Imágenes, valoraciones y tonalidades del discurso",
            },
          ],
        },
        {
          label: "define",
          node: "Género Discursivo",
          children: [
            { link: "surge de", node: "Prácticas sociales concretas" },
            { link: "incluye", node: "Género periodístico" },
            { link: "incluye", node: "Género científico" },
            { link: "incluye", node: "Género literario" },
          ],
        },
        {
          label: "busca explicar",
          node: "Relación lenguaje – sociedad",
          children: [
            { link: "porque el texto expresa", node: "Posicionamientos sociales" },
            { link: "porque el texto expresa", node: "Intenciones y valoraciones" },
            { link: "no es neutral", node: "El lenguaje" },
          ],
        },
      ],
    },
  },
];

function ConceptMap({ map }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#FAFAF9",
        borderRadius: 16,
        padding: "2rem",
        marginBottom: "2.5rem",
        border: `2px solid ${map.mid}`,
        boxShadow: `0 4px 24px ${map.accent}22`,
      }}
    >
      <div style={{ marginBottom: "1.5rem" }}>
        <div
          style={{
            fontSize: "0.75rem",
            fontFamily: "monospace",
            letterSpacing: "0.15em",
            color: map.accent,
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          {map.title}
        </div>
        <div
          style={{
            fontSize: "1.05rem",
            color: "#1C1917",
            fontStyle: "italic",
            borderLeft: `4px solid ${map.accent}`,
            paddingLeft: "0.75rem",
          }}
        >
          {map.subtitle}
        </div>
      </div>

      {/* Root node */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        <div
          style={{
            background: map.accent,
            color: "#fff",
            borderRadius: 50,
            padding: "0.6rem 1.8rem",
            fontSize: "1rem",
            fontWeight: "bold",
            letterSpacing: "0.04em",
            boxShadow: `0 4px 16px ${map.accent}55`,
          }}
        >
          {map.nodes.root}
        </div>
      </div>

      {/* Central connector */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
        <div style={{ width: 2, height: 24, background: map.mid }} />
      </div>

      {/* Branches grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.25rem",
        }}
      >
        {map.nodes.branches.map((branch, bi) => (
          <div
            key={bi}
            style={{
              background: "#fff",
              border: `1.5px solid ${map.mid}`,
              borderRadius: 12,
              padding: "1rem",
              position: "relative",
              transition: "box-shadow 0.2s",
              boxShadow:
                hovered === bi
                  ? `0 6px 24px ${map.accent}33`
                  : "0 2px 8px #00000010",
            }}
            onMouseEnter={() => setHovered(bi)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Link label */}
            <div
              style={{
                fontSize: "0.68rem",
                color: map.accent,
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 4,
              }}
            >
              ↳ {branch.label}
            </div>

            {/* Branch node */}
            <div
              style={{
                background: map.light,
                border: `2px solid ${map.accent}`,
                borderRadius: 8,
                padding: "0.4rem 0.75rem",
                fontWeight: "bold",
                fontSize: "0.88rem",
                color: map.accent,
                marginBottom: "0.75rem",
                textAlign: "center",
              }}
            >
              {branch.node}
            </div>

            {/* Children */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {branch.children.map((child, ci) => (
                <div key={ci}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        color: map.accent,
                        fontSize: "0.65rem",
                        fontFamily: "monospace",
                        whiteSpace: "nowrap",
                        paddingTop: 3,
                        minWidth: 60,
                      }}
                    >
                      {child.link} →
                    </span>
                    <div>
                      <div
                        style={{
                          background: "#F5F5F4",
                          border: `1px solid ${map.mid}`,
                          borderRadius: 6,
                          padding: "0.25rem 0.5rem",
                          fontSize: "0.8rem",
                          color: "#292524",
                        }}
                      >
                        {child.node}
                      </div>
                      {child.sub && (
                        <div
                          style={{
                            fontSize: "0.68rem",
                            color: "#78716C",
                            fontStyle: "italic",
                            marginTop: 2,
                            paddingLeft: 4,
                          }}
                        >
                          {child.sub}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "1.5rem",
          fontSize: "0.7rem",
          color: "#A8A29E",
          fontFamily: "monospace",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <span>
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: map.accent,
              marginRight: 4,
            }}
          />
          Concepto principal
        </span>
        <span>
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: 3,
              background: map.light,
              border: `1.5px solid ${map.accent}`,
              marginRight: 4,
            }}
          />
          Concepto secundario
        </span>
        <span>
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: 3,
              background: "#F5F5F4",
              border: `1px solid ${map.mid}`,
              marginRight: 4,
            }}
          />
          Subconcepto
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "2rem 1.5rem",
        background: "#F7F6F3",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.4rem",
            color: "#1C1917",
            letterSpacing: "0.02em",
            marginBottom: 6,
          }}
        >
          Mapas Conceptuales
        </h1>
        <p style={{ color: "#78716C", fontSize: "0.85rem", fontStyle: "italic" }}>
          Pasa el cursor sobre cada cuadrante para resaltarlo
        </p>
      </div>
      {maps.map((map) => (
        <ConceptMap key={map.id} map={map} />
      ))}
    </div>
  );
}
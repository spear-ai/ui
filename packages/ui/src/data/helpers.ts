
import UFuzzy from "@leeoniya/ufuzzy";
import { connectionFromArray } from "graphql-relay";

type HiglightedTextPart = { type: string; value: string };

export const connectionFromSearchArray = <T, V>(
  array: readonly { info: V; node: T }[],
  options: Parameters<typeof connectionFromArray>[1]
) => {
  const searchConnection = connectionFromArray(array, options);

  return {
    ...searchConnection,
    edges: searchConnection.edges.map((edge) => ({
      cursor: edge.cursor,
      node: edge.node.node,
      ...edge.node.info,
    })),
  };
};

export const highlight = (text: string, rangesList: number[]) => UFuzzy.highlight(
  text,
  rangesList,
  (value: string, isMatch: boolean) => ({ type: isMatch ? "match" : "literal", value }),
  [],
  (list: HiglightedTextPart[], part: HiglightedTextPart) => { list.push(part); return list; },
);

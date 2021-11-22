/**
 * /*
 * There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
 *
 * You want to determine if there is a valid path that exists from vertex start to vertex end.
 *
 * Given edges and the integers n, start, and end, return true if there is a valid path from start to end, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2
 * Output: true
 * Explanation: There are two paths from vertex 0 to vertex 2:
 * - 0 → 1 → 2
 * - 0 → 2
 * Example 2:
 *
 *
 * Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], start = 0, end = 5
 * Output: false
 * Explanation: There is no path from vertex 0 to vertex 5.
 *
 * @format
 */

// edges 문제는 무조건 map, set으로 하고 각각 서로 향하고 있는 노드 꼭 넣어주기
var validPath = function (n, edges, start, end) {
    const graph = new Map();
    const visited = new Set();

    for (const [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }
    console.log('graph:', graph);
    /*
    graph: Map(3) { 0 => [ 1, 2 ], 1 => [ 0, 2 ], 2 => [ 1, 0 ] }
    */
    function dfs(v) {
        visited.add(v);
        const edges = graph.get(v);
        console.log('edges:', edges);
        /*
        edges: [ 1, 2 ]
        edges: [ 0, 2 ]
        edges: [ 1, 0 ]
        */
        if (edges && edges.length > 0) {
            for (const e of edges) {
                if (!visited.has(e)) dfs(e);
            }
        }
    }
    dfs(start);
    console.log('visited: ', visited);
    /*
    visited:  Set(3) { 0, 1, 2 }
    */
    return visited.has(end);
};

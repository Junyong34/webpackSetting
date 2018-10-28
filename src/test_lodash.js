import _ from 'lodash'
const makeGraphEdges = (graph, pos, stps) => {
    let newGraph = _.cloneDeep(graph);
    let positions = [].concat(pos);
    let steps = [].concat(stps);
    let nodes = Object.keys(graph);

    for (let i = 0; i < nodes.length; i++) {
        let id = nodes[i];
        let node = newGraph[id];
        let level = node.level;

        let position = positions[level];
        positions[level] += steps[level];

        node.position = position;
    }

    return newGraph;
};

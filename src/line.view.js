import * as d3 from 'd3';

export const createLine = (DataSet) => {


    let svg =d3.select("#main")
        .append("svg").attr("width", 800).attr("height", 800).attr('id','root');




    DataSet.map(function(lineData) {

        let x1 = lineData.x;
        let y1 = 0
        let x2 = lineData.x;
        let y2 = 800
        let points = [{x: x1, y: y1}, {x: x2, y: y2}];
        var linePath = d3.line()
            .x(function (d) {
                return d.x * 3 + 80;
            })
            .y(function (d) {
                return d.y
            })
            .curve(d3.curveMonotoneX);
            // .defined(function (d) {
            //     return d.y < 800;
            // });

        svg.selectAll("g")
            .data(points)
            .enter()
            .append("path")
            .attr('id',lineData.id)
            .attr("d", linePath(points))
            .attr("stroke", "white")
            .attr("stroke-width", "1px")
    });


compilation
};

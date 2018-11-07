import * as d3 from "d3";

export const createCircle = (DataSet) => {
    let svg = d3.select("#root");
    // let data = DataSet;
    // svg.append("svg").attr("width", 800).attr("height", 800);
    //
    // svg.append("circle")
    //
    //     .attr("cx", "150").attr("cy", "100").attr("r", 15).attr("fill", "green")
var g = svg.append("g").attr('id', 'group01');
    g.selectAll('circle').data(DataSet).enter()
        .append('circle')
        .attr('id', function (d) {
            return d.id + 'circle';
        })
        .attr('class', 'move-circle')
        .attr('cx', function (d) {
            return d.x * 3 + 80;
        })
        .attr('cy', function (d) {
            return 15;
        })
        .attr('r', 10).attr('fill', 'red');

    var g2 = svg.append("g").attr('id', 'group02');
    g2.selectAll('circle').data(DataSet).enter()
        .append('circle')
        .attr('id', function (d) {
            return d.id + 'circle';
        })
        .attr('class', 'move-circle')
        .attr('cx', function (d) {
            return d.x * 3 + 80;
        })
        .attr('cy', function (d) {
            return 45;
        })
        .attr('r', 10).attr('fill', 'red');
    var g3 = svg.append("g").attr('id', 'group03');
    g3.selectAll('circle').data(DataSet).enter()
        .append('circle')
        .attr('id', function (d) {
            return d.id + 'circle';
        })
        .attr('class', 'move-circle')
        .attr('cx', function (d) {
            return d.x * 3 + 80;
        })
        .attr('cy', function (d) {
            return 80;
        })
        .attr('r', 10).attr('fill', 'red');

    var g4 = svg.append("g").attr('id', 'group04');
    g4.selectAll('circle').data(DataSet).enter()
        .append('circle')
        .attr('id', function (d) {
            return d.id + 'circle';
        })
        .attr('class', 'move-circle')
        .attr('cx', function (d) {
            return d.x * 3 + 80;
        })
        .attr('cy', function (d) {
            return 100;
        })
        .attr('r', 10).attr('fill', 'red');

    var g5 = svg.append("g").attr('id', 'group05');
    g5.selectAll('circle').data(DataSet).enter()
        .append('circle')
        .attr('id', function (d) {
            return d.id + 'circle';
        })
        .attr('class', 'move-circle')
        .attr('cx', function (d) {
            return d.x * 3 + 80;
        })
        .attr('cy', function (d) {
            return 125;
        })
        .attr('r', 10).attr('fill', 'red');

    var g8 = svg.append("g").attr('id', 'group08');
    g8.selectAll('circle').data(DataSet).enter()
        .append('circle')
        .attr('id', function (d) {
            return d.id + 'circle';
        })
        .attr('class', 'move-circle')
        .attr('cx', function (d) {
            return d.x * 3 + 80;
        })
        .attr('cy', function (d) {
            return 140;
        })
        .attr('r', 10).attr('fill', 'red');


    var g6 = svg.append("g").attr('id', 'group06');
    g6.selectAll('circle').data(DataSet).enter()
        .append('circle')
        .attr('id', function (d) {
            return d.id + 'circle';
        })
        .attr('class', 'move-circle')
        .attr('cx', function (d) {
            return d.x * 3 + 80;
        })
        .attr('cy', function (d) {
            return 165;
        })
        .attr('r', 10).attr('fill', 'red');


    var g7 = svg.append("g").attr('id', 'group07');
    g7.selectAll('circle').data(DataSet).enter()
        .append('circle')
        .attr('id', function (d) {
            return d.id + 'circle';
        })
        .attr('class', 'move-circle')
        .attr('cx', function (d) {
            return d.x * 3 + 80;
        })
        .attr('cy', function (d) {
            return 180;
        })
        .attr('r', 10).attr('fill', 'red');



    // .attr('id', function (d) {
        //     return d.id + 'circle';
        // })
        // .attr('class', 'move-circle')
        // .attr('cx', function (d) {
        //     return d.x * 3 + 80;
        // })
        // .attr('cy', function (d) {
        //     return 45;
        // })
        // .attr('r', 10).attr('fill', 'red');

    // svg.select('g').data(DataSet)
    //     .append('circle')
    //     .attr('id',function (d) {
    //         return d.id + 'circle';
    //     })
    //     .attr('class','move-circle')
    //     .attr('cx',function (d) {
    //         return d.x * 3 +80;
    //     })
    //     .attr('cy',function (d) {
    //         return 80;
    //     })
    //     .attr('r',10).attr('fill','red');
    // var dataset = [ 5, 10, 15, 20, 25 ];
    //
    // d3.select("body")          // 1
    //     .selectAll("p")          // 2
    //     .data(dataset)           // 3
    //     .enter()                 // 4
    //     .append("p")             // 5
    //     .text("New paragraph!"); // 6
    // d3.select("body")          // 1
    //     .selectAll("p")          // 2
    //     .data(dataset)           // 3
    //     // .enter()                 // 4
    //     // .append("p")             // 5
    //     .text(function(d){return d + "!"});
    // DataSet.map(function (lineData) {
    //     let x1 = lineData.x;
    //     let y1 = 0
    //     let x2 = lineData.x;
    //     let y2 = 800
    //     let points = [{x: x1, y: y1}, {x: x2, y: y2}];
    //     groupLine.selectAll('g')
    //         .data(points)
    //         .enter()
    //         .append("circle")
    //         .attr("cx", function (d) {
    //             return d.x * 3 + 80;
    //         }).attr("cy", function (d) {
    //         return d.y
    //     }).attr("r", 15).attr("fill", "green")
    // });


    // svg
    //
    //     .selectAll("g")
    //
    //     .data(data)
    //
    //     .enter()
    //
    //     .append("g")
    //
    //     .attr("transform", function(d) {
    //
    //         return "translate(" + d.transX + ") rotate(" + d.angle + ")";
    //
    //     })
    //
    //     .call(function(g) {
    //
    //         g.append("rect")
    //
    //             .attr("width", "300").attr("height", "200")
    //
    //             .attr("fill", function(d, i) {
    //                 return colors[i];
    //             })
    //
    //         g.append("circle")
    //
    //             .attr("cx", "150").attr("cy", "100").attr("r", 80).attr("fill", "green")
    //
    //         g.append("text")
    //
    //             .attr("x", "150").attr("y", "125").attr("font-size", "60")
    //
    //             .attr("text-anchor", "middle").attr("fill", "white").text("SVG")
    //
    //     });
    //
    // let hScale = d3.scaleLinear().domain([0, 7]).range([0, 100]);
    // debugger;
    //
    // var line = d3.line()
    //     .x(function(d, i) { return 10; }) // set the x values for the line generator
    //     .y(function(d) { return 100; }) // set the y values for the line generator
    //     .curve(d3.curveMonotoneX) // apply smoothing to the line
    // svg.append("path")
    //     .datum(data) // 10. Binds data to the line
    //     .attr("stroke", "white") // Assign a class for styling
    //     .attr("d", line); // 11. Calls the line generator

    // var DATA = [10, 40, 80];
    // var canvas = d3.select("body").append("svg").attr("width", 1500).attr("height", 1500);
    // var group = canvas.append("g").attr("transform", "translate(300, 300)");
    // var color = d3.scaleOrdinal().domain([0,1]).range(["red", "orange", "blue"]);
    // var arc = d3.arc().innerRadius(100).outerRadius(200);
    // var pie = d3.pie().value(function (d) {
    //     return d;
    // });
    // var arcs = group.selectAll(".arc").data(pie(DATA)).enter().append("g").attr("class", "arc");
    // arcs.append("path").attr("d", arc).attr("fill", function (d) {
    //     return color(d.data);
    // });
    // arcs.append("text").attr("transform", function (d) {
    //     return "translate(" + arc.centroid(d) + ")";
    // }).attr("text-anchor", "middle").attr("text-size", "10px").text(function (d) {
    //     return d.data
    // });


    function makeTransform(transX, angle, color) {
        return {transX: transX, angle: angle, color: color};
    }
};



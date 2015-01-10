//d3.select('.item').text('select'); 

//like jQuery, it uses simular DOM selectors

//

//d3.select('.item:nth-child(2)')
	//.text('select'); 

// the nth-child selector is not zero indexed

// you can also do
// d3.select('.item:nth-child(even)').text('select'); 
// d3.select('.item:nth-child(odd)').text('select'); 
//d3.select('.item:nth-child(2n)').text('select');  
//the above is same as event


//////////////////////////////////child selectors /////////////////////////////////////

// d3.select('.item:nth-child(2)')
// 	.html('<strong>selection</strong>'); 

//modifys the html

////////////////////////////////////////////////////////////////////////////

// d3.select('.item:nth-child(2)')
// 	.append('button')
// 	.html('<strong>selection</strong>'); 
//append adds whatever element around the next selector


////////////////////////////////////////////////////////////////////////////

// d3.select('#chart')
// 	.insert('button',':nth-child(3)')
// 	.html('<strong>selection</strong>'); 

///////////////////////////////// attr selector ///////////////////////////////////

// d3.selectAll('.item')
// 	.attr('class','highlight');

/// replaces item class with highlight ////

///////////////////////////////////// classed selector /////////////////////////////////

// d3.selectAll('.item:nth-child(3)')
// 	.classed('highlight',true);

/////gives 'item' and 'highlight class/////

// d3.selectAll('.item')
// 	.classed({
// 		'highlight': true,
// 		'item':false,
// 		'bigger':true

// 	})

///////////////////////////////////// style selector/////////////////////////////////

// d3.selectAll('.item:nth-child(3)')
// 	.style({'background':'red',
// 			'margin':'5px',
// 			'color':'yellow'
		
// 		});
// changes just the selected tags style w.o css stylesheet

///////////////////////////////////// data selector/////////////////////////////////

// d3.selectAll('.item')
// 	.data([true, true, true])
// 	.style({'background':'blue'});

//data can hold an array and the 'true' is respective to the element in the array

///////////////////////////////////// data selector callback/////////////////////////////////

// var my_style = ['red','orange','yellow','green','blue','purple']; 
// // the number of items represent the number of element is changed.

// d3.selectAll('.item')
// 	.data(my_style)
// 	.style({
// 		'color':'white',
// 		'background':function(d){
// 		return d;
// 								}
// 		});

///////////////////////////////////// enter command /////////////////////////////////

// var myStyles = [
//   { width: 200,
//   	name:'foo',
//     color: '#A57706'},
//   { width: 230,
//   	name:'bar',
//     color: '#BD3613'},
//   { width: 220,
//   	name:'baz',
//     color: '#D11C24'},
//   { width: 290,
//   	name:'qux',
//     color: '#C61C6F'},
//   { width: 236,
//   	name:'inky',
//     color: '#595AB7'},
//   { width: 230,
//   	name:'binky',
//     color: '#2176C7'}
// ];

// d3.selectAll('#chart')
// 	.selectAll('div') //select all divs that we're going to create
//   .data(myStyles)
//   .enter().append('div') // enters a seperate scope of the new divs created
//   .classed('item',true)
//   .text(function(d){
//   	return d.name;
//   })
//   .style({
//     'color': 'white',
//     'background' : function(d) {
//       return d.color;
//     },
//     width : function(d) {
//       return d.width + 'px';
//     } 
//   })

///////////////////////////////////// d3 svg /////////////////////////////////

// d3.select('#chart')
// 	.append('svg')
// 	.attr({
// 		width: 600,
// 		height: 400,
// 	})
// 	.style('background','red')
// 	.append('rect')
// 	.attr({
// 		x: 200,
// 		y: 100,
// 		width: 200,
// 		height: 200
// 	})
// 	.style('fill','blue');

// d3.select('svg')
// 	.append('circle')
// 	.attr({
// 		cx: 300,
// 		cy: 200,
// 		r: 50
// 	})
// 	.style('fill','green');

///////////////////////////////////// d3 bar graph /////////////////////////////////

// var bardata =[10,20,5,40,30];

// var height = 400, 
// 	width = 300,
// 	barWidth = 50,
// 	barOffset = 5;

// d3.select('#chart')
// 	.append('svg')
// 	.attr({
// 		width: width,
// 		height: height
// 	})
// 	.style(
// 		'background','#C9D7D6')
// 	.selectAll('rect')
// 	.data(bardata)
// 	.enter()
// 	.append('rect')
// 	.attr({
// 		width: barWidth,
// 		height :function(d){return d;},
// 		x: function(d,i){
// 			return i *(barWidth + barOffset);
// 						}
// 		,
// 		y:  function(d){
// 			return height - d;
// 						}
// 	})
// 	.style('fill','blue');

///////////////////////////////////// d3  quantitative scales /////////////////////////////////

//quantitative, concerned with the values of the data so that they fit the hieght

// var bardata =[10,20,5,40,30,50, 35, 18];

// var height = 400, 
// 	width = 1000,
// 	barWidth = 50,
// 	barOffset = 5;

// var yscale = d3.scale.linear()
// 	.domain([0, d3.max(bardata)])
// 	.range([0, height]);


// d3.select('#chart')
// 	.append('svg')
// 	.attr({
// 		width: width,
// 		height: height
// 	})
// 	.style(
// 		'background','#C9D7D6')
// 	.selectAll('rect')
// 	.data(bardata)
// 	.enter()
// 	.append('rect')
// 	.attr({
// 		width: barWidth,
// 		height :function(d){return yscale(d);},
// 		x: function(d,i){
// 			return i *(barWidth + barOffset);
// 						}
// 		,
// 		y:  function(d){
// 			return height - yscale(d);
// 						}
// 	})
// 	.style('fill','blue');

///////////////////////////////////// d3  quantitative scales /////////////////////////////////

// fit the aloted space on the x axis and it deals with numbers of data


// var bardata =[10,20,5,40,30,50, 35, 18];

// var height = 400, 
// 	width = 600,
// 	barWidth = 50,
// 	barOffset = 5;

// var yscale = d3.scale.linear()
// 	.domain([0, d3.max(bardata)])
// 	.range([0, height]);

// var xscale =d3.scale.ordinal()
// 	.domain(d3.range(0,bardata.length))
// 	.rangeBands([0, width]);

// d3.select('#chart')
// 	.append('svg')
// 	.attr({
// 		width: width,
// 		height: height
// 	})
// 	.style(
// 		'background','#C9D7D6')
// 	.selectAll('rect')
// 	.data(bardata)
// 	.enter()
// 	.append('rect')
// 	.attr({
// 		width: xscale.rangeBand(), //rangeBand gets width of elements
// 		height :function(d){return yscale(d);},
// 		x: function(d,i){
// 			return xscale(i);
// 						}
// 		,
// 		y:  function(d){
// 			return height - yscale(d);
// 						}
// 	})
// 	.style('fill','blue');


///////////////////////////////////// d3  meaningful colors /////////////////////////////////

// fit the aloted space on the x axis and it deals with numbers of data


// var bardata =[10,20,5,40,30,50, 35, 18];

// var height = 400, 
// 	width = 600,
// 	barWidth = 50,
// 	barOffset = 5;

// var yscale = d3.scale.linear()
// 	.domain([0, d3.max(bardata)])
// 	.range([0, height]);

// var xscale =d3.scale.ordinal()
// 	.domain(d3.range(0,bardata.length))
// 	.rangeBands([0, width]);

// var colors = d3.scale.linear() 
// 				// .domain([0, d3.max(bardata)]) // higher the darker
// 				.domain([0, bardata.length]) //darkness increases left to right
// 				.range(['#FFB832','#C61C6F']);

// d3.select('#chart')
// 	.append('svg')
// 	.attr({
// 		width: width,
// 		height: height
// 	})
// 	.style(
// 		'background','#C9D7D6')
// 	.selectAll('rect')
// 	.data(bardata)
// 	.enter()
// 	.append('rect')
// 	.attr({
// 		width: xscale.rangeBand(), //rangeBand gets width of elements
// 		height :function(d){return yscale(d);},
// 		x: function(d,i){
// 			return xscale(i);
// 						}
// 		,
// 		y:  function(d){
// 			return height - yscale(d);
// 						}
// 	})
// 	// .style('fill',colors); // higher the darker
// 	.style('fill',function(d,i){ //darkness increases left to right
// 		return colors(i);
// 	});

///////////////////////////////////// d3  meaningful colors + rand data /////////////////////////////////

// var bardata =[];

// for(var i = 0;i<25 ;i++){
// 	bardata.push(Math.random() * 30)
// };

// var height = 400, 
// 	width = 600,
// 	barWidth = 50,
// 	barOffset = 5;

// var yscale = d3.scale.linear()
// 	.domain([0, d3.max(bardata)])
// 	.range([0, height]);

// var xscale =d3.scale.ordinal()
// 	.domain(d3.range(0,bardata.length))
// 	.rangeBands([0, width]);

// var colors = d3.scale.linear() 
// 				// .domain([0, d3.max(bardata)]) // higher the darker
// 				.domain([0, bardata.length]) //darkness increases left to right
// 				.range(['#FFB832','#C61C6F']);

// d3.select('#chart')
// 	.append('svg')
// 	.attr({
// 		width: width,
// 		height: height
// 	})
// 	.style(
// 		'background','#C9D7D6')
// 	.selectAll('rect')
// 	.data(bardata)
// 	.enter()
// 	.append('rect')
// 	.attr({
// 		width: xscale.rangeBand(), //rangeBand gets width of elements
// 		height :function(d){return yscale(d);},
// 		x: function(d,i){
// 			return xscale(i);
// 						}
// 		,
// 		y:  function(d){
// 			return height - yscale(d);
// 						}
// 	})
// 	// .style('fill',colors); // higher the darker
// 	.style('fill',function(d,i){ //darkness increases left to right
// 		return colors(i);
// 	});

///////////////////////////////////// d3 events mouse fade /////////////////////////////////

// var bardata =[];

// for(var i = 0;i<25 ;i++){
// 	bardata.push(Math.random() * 30)
// };

// var height = 400, 
// 	width = 600,
// 	barWidth = 50,
// 	barOffset = 5;

// var yscale = d3.scale.linear()
// 	.domain([0, d3.max(bardata)])
// 	.range([0, height]);

// var xscale =d3.scale.ordinal()
// 	.domain(d3.range(0,bardata.length))
// 	.rangeBands([0, width]);

// var colors = d3.scale.linear() 
// 				// .domain([0, d3.max(bardata)]) // higher the darker
// 				.domain([0, bardata.length]) //darkness increases left to right
// 				.range(['#FFB832','#C61C6F']);

// d3.select('#chart')
// 	.append('svg')
// 	.attr({
// 		width: width,
// 		height: height
// 	})
// 	.style(
// 		'background','#C9D7D6')
// 	.selectAll('rect')
// 	.data(bardata)
// 	.enter()
// 	.append('rect')
// 	.attr({
// 		width: xscale.rangeBand(), //rangeBand gets width of elements
// 		height :function(d){return yscale(d);},
// 		x: function(d,i){
// 			return xscale(i);
// 						}
// 		,
// 		y:  function(d){
// 			return height - yscale(d);
// 						}
// 	})
// 	// .style('fill',colors); // higher the darker
// 	.style('fill',function(d,i){ //darkness increases left to right
// 		return colors(i);
// 	})
// 	.on('mouseover', function(d){
// 		d3.select(this) //'this keyword selects current selection'
// 			.style('opacity',0.5);
// 	})
// 	.on('mouseout', function(d){
// 		d3.select(this) //'this keyword selects current selection'
// 			.style('opacity',1);
// 	});

///////////////////////////////////// d3 events add color + transitions/////////////////////////////////

// var bardata =[];

// for(var i = 0;i<25 ;i++){
// 	bardata.push(Math.random() * 30)
// };

// var height = 400, 
// 	width = 600,
// 	barWidth = 50,
// 	barOffset = 5;

// var yscale = d3.scale.linear()
// 	.domain([0, d3.max(bardata)])
// 	.range([0, height]);

// var xscale =d3.scale.ordinal()
// 	.domain(d3.range(0,bardata.length))
// 	.rangeBands([0, width]);

// var colors = d3.scale.linear() 
// 				// .domain([0, d3.max(bardata)]) // higher the darker
// 				.domain([0, bardata.length]) //darkness increases left to right
// 				.range(['#FFB832','#C61C6F']);

// d3.select('#chart')
// 	.append('svg')
// 	.attr({
// 		width: width,
// 		height: height
// 	})
// 	.style(
// 		'background','#C9D7D6')
// 	.selectAll('rect')
// 	.data(bardata)
// 	.enter()
// 	.append('rect')
// 	.attr({
// 		width: xscale.rangeBand(), //rangeBand gets width of elements
// 		height :function(d){return yscale(d);},
// 		x: function(d,i){
// 			return xscale(i);
// 						}
// 		,
// 		y:  function(d){
// 			return height - yscale(d);
// 						}
// 	})
// 	// .style('fill',colors); // higher the darker
// 	.style('fill',function(d,i){ //darkness increases left to right
// 		return colors(i);
// 	})
// 	.on('mouseover', function(d){
// 		tempcolor = this.style.fill;
// 		d3.select(this) //'this keyword selects current selection'
// 			.transition()
// 			.style('opacity',0.5)
// 			.style('fill','yellow');

// 	})
// 	.on('mouseout', function(d){
// 		d3.select(this) //'this keyword selects current selection'
// 			.transition().delay(500).duration(800)
// 			.style('opacity',1)
// 			.style('fill', tempcolor);

// 	});

///////////////////////////////////// d3 transitions + easing /////////////////////////////////

// var bardata =[];

// for(var i = 0;i<25 ;i++){
// 	bardata.push(Math.random() * 30)
// };

// var height = 400, 
// 	width = 600,
// 	barWidth = 50,
// 	barOffset = 5;

// var yscale = d3.scale.linear()
// 	.domain([0, d3.max(bardata)])
// 	.range([0, height]);

// var xscale =d3.scale.ordinal()
// 	.domain(d3.range(0,bardata.length))
// 	.rangeBands([0, width]);

// var colors = d3.scale.linear() 
// 				// .domain([0, d3.max(bardata)]) // higher the darker
// 				.domain([0, bardata.length]) //darkness increases left to right
// 				.range(['#FFB832','#C61C6F']);

// var myChart = d3.select('#chart')
// 	.append('svg')
// 	.attr({
// 		width: width,
// 		height: height
// 	})
// 	.style(
// 		'background','#C9D7D6')
// 	.selectAll('rect')
// 	.data(bardata)
// 	.enter()
// 	.append('rect')
// 	.attr({
// 		width: xscale.rangeBand(), //rangeBand gets width of elements
// 		height :0,
// 		x: function(d,i){
// 			return xscale(i);
// 						}
// 		,
// 		y:  height
// 	})
// 	// .style('fill',colors); // higher the darker
// 	.style('fill',function(d,i){ //darkness increases left to right
// 		return colors(i);
// 	})
// 	.on('mouseover', function(d){
// 		tempcolor = this.style.fill;
// 		d3.select(this) //'this keyword selects current selection'
// 			.style('opacity',0.5)
// 			.style('fill','yellow');

// 	})
// 	.on('mouseout', function(d){
// 		d3.select(this) //'this keyword selects current selection'
// 			.style('opacity',1)
// 			.style('fill', tempcolor);

// 	});

// myChart.transition()
// 		.attr({
// 				height :function(d){return yscale(d);},
// 				y:  function(d){
// 						return height - yscale(d);
// 								}

// 		})
// 		.delay(function(d,i){
// 			return i* 20 //adds individual delay
// 		})
// 		.duration(1000)
// 		.ease('elastic');

///////////////////////////////////// d3 transitions + easing /////////////////////////////////

var bardata =[];

for(var i = 0;i<25 ;i++){
	bardata.push(Math.random() * 30)
};

var height = 400, 
	width = 600,
	barWidth = 50,
	barOffset = 5;

var yscale = d3.scale.linear()
	.domain([0, d3.max(bardata)])
	.range([0, height]);

var xscale =d3.scale.ordinal()
	.domain(d3.range(0,bardata.length))
	.rangeBands([0, width]);

var colors = d3.scale.linear() 
				// .domain([0, d3.max(bardata)]) // higher the darker
				.domain([0, bardata.length]) //darkness increases left to right
				.range(['#FFB832','#C61C6F']);
var tempcolor;

var myChart = d3.select('#chart')
	.append('svg')
	.attr({
		width: width,
		height: height
	})
	.style(
		'background','#C9D7D6')
	.selectAll('rect')
	.data(bardata)
	.enter()
	.append('rect')
	.attr({
		width: xscale.rangeBand(), //rangeBand gets width of elements
		height :0,
		x: function(d,i){
			return xscale(i);
						}
		,
		y:  height
	})
	// .style('fill',colors); // higher the darker
	.style('fill',function(d,i){ //darkness increases left to right
		return colors(i);
	})
	.on('mouseover', function(d){
		tempcolor = this.style.fill;
		d3.select(this) //'this keyword selects current selection'
			.style('opacity',0.5)
			.style('fill','yellow');

	})
	.on('mouseout', function(d){
		d3.select(this) //'this keyword selects current selection'
			.style('opacity',1)
			.style('fill', tempcolor);

	});

myChart.transition()
		.attr({
				height :function(d){return yscale(d);},
				y:  function(d){
						return height - yscale(d);
								}

		})
		.delay(function(d,i){
			return i* 20 //adds individual delay
		})
		.duration(1000)
		.ease('elastic');






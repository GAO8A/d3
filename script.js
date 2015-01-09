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

var myStyles = [
  { width: 200,
  	name:'foo',
    color: '#A57706'},
  { width: 230,
  	name:'bar',
    color: '#BD3613'},
  { width: 220,
  	name:'baz',
    color: '#D11C24'},
  { width: 290,
  	name:'qux',
    color: '#C61C6F'},
  { width: 236,
  	name:'inky',
    color: '#595AB7'},
  { width: 230,
  	name:'binky',
    color: '#2176C7'}
];

d3.selectAll('#chart')
	.selectAll('div') //select all divs that we're going to create
  .data(myStyles)
  .enter().append('div')
  .classed('item',true)
  .text(function(d){
  	return d.name;
  })
  .style({
    'color': 'white',
    'background' : function(d) {
      return d.color;
    },
    width : function(d) {
      return d.width + 'px';
    } 
  })


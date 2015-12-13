/**
 * Created by ammanvedi on 20/11/2015.
 */


document.addEventListener("DOMContentLoaded", function(event) {
	var nf = new Netflicker( document.getElementById( 'NF' ), {} );


	nf.addItem( {
			color: 'green',
		  	coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png'
	} );


	nf.addItem( {
		color: 'coral',
		title: 'Adventure Time',
		subtitle: 'The adventures of Finn and his magical dog brother Jake',
		description: 'Adventure Time[nb 1] is an American animated television series created by Pendleton Ward for Cartoon Network. The series follows the adventures of a boy named Finn (voiced by Jeremy Shada) and his best friend and adoptive brother Jake (voiced by John DiMaggio)—a dog with the magical power to change shape and size at will. Finn and Jake live in the post-apocalyptic Land of Ooo.',
		carouselImages: [
			"../test/img/adventuretimecarousel1.jpg",
			"../test/img/adventuretimecarousel2.jpg",
			"../test/img/adventuretimecarousel3.jpg",
			"../test/img/adventuretimecarousel4.gif",

		],
		coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png',
		fullViewMeta: {
			genre: "Childrens/Adventure"
		}
	} );
	nf.addItem( { color: 'red' } );
	nf.addItem( { color: 'orange' } );
	nf.addItem( { color: 'purple' } );
	nf.addItem( { color: 'blue' } );


});

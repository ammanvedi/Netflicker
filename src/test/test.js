/**
 * Created by ammanvedi on 20/11/2015.
 */


document.addEventListener("DOMContentLoaded", function(event) {
	var nf = new Netflicker( document.getElementById( 'NF' ), {} );


	nf.addItem( {
			color: 'green',
		  	coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png'
	} );


	nf.addItem( { color: 'coral' } );
	nf.addItem( { color: 'red' } );
	nf.addItem( { color: 'orange' } );
	nf.addItem( { color: 'purple' } );
	nf.addItem( { color: 'blue' } );


});

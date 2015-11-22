/**
 * Created by ammanvedi on 20/11/2015.
 */


document.addEventListener("DOMContentLoaded", function(event) {
	var nf = new Netflicker( document.getElementById( 'NF' ), {} );


	nf.addItem( { color: 'green' } );
	nf.addItem( { color: 'coral' } );
	nf.addItem( { color: 'red' } );
	nf.addItem( { color: 'orange' } );
	nf.addItem( { color: 'purple' } );
	nf.addItem( { color: 'blue' } );

	var nf2 = new Netflicker( document.getElementById( 'NFTWO' ), {} );

	nf2.addItem( { color: 'red' } );
	nf2.addItem( { color: 'green' } );
	nf2.addItem( { color: 'blue' } );
	nf2.addItem( { color: 'purple' } );
	nf2.addItem( { color: 'coral' } );
	nf2.addItem( { color: 'orange' } );
});

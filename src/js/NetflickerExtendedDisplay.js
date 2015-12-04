/**
 * Created by ammanvedi on 22/11/2015.
 */


Netflicker.ExtendedDisplay = function ( holder ) {

	this.holder = holder;
	this.initDisplay();
	this.showingItem = false;

};

Netflicker.ExtendedDisplay.prototype.initDisplay = function () {

	this.container = NFUtils.createWithClass( "div", [ 'nfExtendedDisplay', 'closed' ] );
	this.setListeners();
	this.holder.appendChild( this.container );

};

Netflicker.ExtendedDisplay.prototype.setListeners = function () {

	this.container.addEventListener( 'click', function () {
		NFUtils.notify( NFUtils.EVENT_CONSTANTS.CLOSE_EXTENDED );
	} );

};

Netflicker.ExtendedDisplay.prototype.showDisplay = function ( itemData ) {

	if( !( itemData === this.showingItem ) ) {
		this.showingItem = itemData;
		NFUtils.removeClass( this.container, 'closed' );
		NFUtils.addClass( this.container, 'open' );
	}
};

Netflicker.ExtendedDisplay.prototype.hideDisplay = function () {

	NFUtils.removeClass( this.container, 'open' );
	NFUtils.addClass( this.container, 'closed' );

};


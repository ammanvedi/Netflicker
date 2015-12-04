
Netflicker.ScrollControl = function( container, config ) {


	this.defaults = {
		clickControlClass: 'nfScollerPaginationControl',
		clickControlLeftClass: 'nfScollerPaginationLeft',
		clickControlRightClass: 'nfScollerPaginationRight'


	};
	NFUtils.extend( config, this.defaults );
	this.config = config;
	this.container = container;

};

Netflicker.ScrollControl.prototype.setClickControls = function( ) {

	this.nextControl = NFUtils.createWithClass( 'div', [ this.config.clickControlClass, this.clickControlLeftClass ] );
	this.previousControl = NFUtils.createWithClass( 'div', [ this.config.clickControlClass, this.clickControlRightClass ] );

	this.container.appendChild( this.nextControl );
	this.container.appendChild( this.previousControl );

};



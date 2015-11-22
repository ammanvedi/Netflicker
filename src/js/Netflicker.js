/**
 * Created by ammanvedi on 20/11/2015.
 */


var Netflicker = function( container, config ) {

	this.defaults = {
		containerClass: "nfContainer",
		itemContainerClass: "nfItemScroller",
		itemConfig: {

		}
	};

	this.itemList = [];

	this.extendedDisplay = new Netflicker.extendedDisplay();

	this.container = container;
	NFUtils.extend( config, this.defaults);
	this.config = config;
	this.holder = undefined;
	this.initContainer();

};

/**
 * set up the holding container with class + other attrs
 */

Netflicker.prototype.initContainer = function() {

	NFUtils.addClass( this.container, this.config.containerClass );
	this.holder =  NFUtils.createWithClass( 'div', [ this.config.itemContainerClass ] );
	this.container.appendChild( this.holder );

};

/**
 * create a new item object and add it to the dom
 */

Netflicker.prototype.addItem = function( meta ) {

	var newItem = new Netflicker.itemObject( this.holder, this.config.itemConfig, meta, this.extendedDisplay ).appendToHolder();

};
/**
 * Created by ammanvedi on 20/11/2015.
 */


var Netflicker = function ( container, config ) {

	this.defaults = {
		containerClass: "nfContainer",
		itemContainerClass: "nfItemScroller",
		itemConfig: {},
		scrollerConfig: {}
	};

	this.itemList = [];
	this.container = container;
	NFUtils.extend( config, this.defaults );
	this.config = config;
	this.holder = undefined;
	this.initContainer();
	this.extendedDisplay = new Netflicker.ExtendedDisplay( this.container );
	this.setSubscriptions();
	this.openElement = false;
	this.scroller = false;

};

/**
 * netflicker object is the central delegate for eventa
 */

Netflicker.prototype.setSubscriptions = function () {

	var self = this;

	NFUtils.subscribe( NFUtils.EVENT_CONSTANTS.SHOW_EXTENDED, function ( event ) {
		self.openElement = event.detail.culprit;
		self.extendedDisplay.showDisplay( event.detail.culprit );
	} );

	NFUtils.subscribe( NFUtils.EVENT_CONSTANTS.CLOSE_EXTENDED, function ( event ) {
		self.openElement.setHoverClasses();
		self.extendedDisplay.hideDisplay();
	} );

};

Netflicker.prototype.getOpenItems = function () {

	return this.itemList.filter( function ( item ) {

		if ( item.expanded ) {
			return true;
		}

		return false;

	} );

};

/**
 * set up the holding container with class + other attrs
 */

Netflicker.prototype.initContainer = function () {

	NFUtils.addClass( this.container, this.config.containerClass );
	this.holder = NFUtils.createWithClass( 'ul', [ this.config.itemContainerClass ] );
	this.container.appendChild( this.holder );
	this.scroller = new Netflicker.ScrollControl( this.holder, this.config.scrollerConfig );

};

/**
 * create a new item object and add it to the dom
 */

Netflicker.prototype.addItem = function ( meta ) {

	var newItem = new Netflicker.itemObject( this.holder, this.config.itemConfig, meta, this.extendedDisplay, this );
	newItem.appendToHolder();
	this.itemList.push( newItem );

};
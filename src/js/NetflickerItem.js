/**
 * Created by ammanvedi on 20/11/2015.
 */

Netflicker.itemObject = function ( holder, config, itemMeta, displayDelegate ) {

	this.defaults = {
		itemHolderClass: "nfItem",
		actionIconClass: "nfActionIcon",
		closeIconClass: "nfCloseIcon",
		itemHoverClass: "largeItem",
		color: "aquamarine",
		metaOverlayClass: "nfOverlayMeta",
		metaOverlayShadowClass: "nfOverlayShadow",
		metaOverlayHolder: "nfOverlayHolder"
	};

	this.delegate = displayDelegate;

	this.initialDimensions = {
		small: {
			width: 250,
			height: 146
		},
		large: {
			width: 370,
			height: 210
		}

	}

	//console.log( config );

	NFUtils.extend( config, this.defaults );
	this.config = config;

	//console.log( this.config );

	this.defaultMeta = {
		color: "aquamarine",
		title: "Placeholder Title",
		// subtitle may be type string or a div ( i.e. object )
		subtitle: "this subtitle can also be a div...",
		description: "this is a brief description of the item. Click more to see the extended description.",
		carouselImages: [
			"../test/img/test1.png",
			"../test/img/test2.png",
			"../test/img/test3.png",
			"../test/img/test4.png"
		],
		//int index of bg image or 'RANDOM'
		coverImageUrl: "http://lorempixel.com/250/144/nature/" + '#' + (Math.floor(Math.random() * (1 - 1111)) + 1),
		//can be div or image
		moreIcon: "../test/img/testmore.png",
		closeFullIcon: NFUtils.createWithClass( 'div', [ this.config.closeIconClass ] ),
		// div or image
		actionIcon: NFUtils.createWithClass( 'div', [ this.config.actionIconClass ] ),
		fullDescription: "Louis Theroux visits whites in South Africa who are refusing to accept Apartheid's end.",
		fullViewMeta: {
			starring: "Tom Hardy",
			genre: "Action/Comedy"
		}

	};

	NFUtils.extend( itemMeta, this.defaultMeta );
	this.meta = itemMeta;
	this.holder = holder;
	this.setDiv();
	this.addListeners();
	return this;

};

Netflicker.itemObject.prototype.setDiv = function() {
	this.container = NFUtils.createWithClass( 'div', [ this.config.itemHolderClass ] );
	this.metaHolder = NFUtils.createWithClass( 'div', [ this.config.metaOverlayHolder] );
	this.metaHolder.appendChild( NFUtils.createWithClass( 'div', [ this.config.metaOverlayShadowClass, 'fadeGradient'] ) );
	this.container.appendChild( this.metaHolder );
	NFUtils.addStyle( this.container, 'background-color: ' + this.meta.color + ';' );
	NFUtils.addStyle( this.container, 'background-image: url(\'' + this.meta.coverImageUrl + '\');' );
}

Netflicker.itemObject.prototype.addListeners = function() {

	var self = this;

	this.container.addEventListener( 'mouseover', function( event ) {
		//console.log( 'hoverin', this, self );
		NFUtils.addClass( this, self.config.itemHoverClass );
	}, false );

	this.container.addEventListener( 'mouseout', function( event ) {
		//console.log( 'hoverout', this, self );
		NFUtils.removeClass( this, self.config.itemHoverClass );
	}, false );

}

Netflicker.itemObject.prototype.appendToHolder = function() {
	this.holder.appendChild( this.container );
}

Netflicker.itemObject.prototype.getDOMElement = function() {
	return this.container;
}
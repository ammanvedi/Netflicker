
Netflicker.ScrollControl = function( container, nfContext, config ) {


	this.defaults = {
		clickControlClass: 'nfScrollerPaginationControl',
		clickControlLeftClass: 'nfScrollerPaginationLeft',
		clickControlRightClass: 'nfScrollerPaginationRight',
		controlsOverlay: 'nfControlsOverlay'
	};
	NFUtils.extend( config, this.defaults );
	this.config = config;
	this.holder = nfContext.getElementsByClassName( this.config.itemScrollHolder )[ 0 ];
	this.container = container;
	this.setClickControls();
	this.setListeners();


};

Netflicker.ScrollControl.prototype.determineVariables = function( ) {
	console.log( this.container.children );
	console.log( this.container.getBoundingClientRect() );

	var pdg = parseInt( window.getComputedStyle(document.getElementsByClassName( 'nfItemScroller' )[0], null).getPropertyValue('padding-left').split( "px" )[0] );
	var ww = window.innerWidth - pdg;
	var iw = this.container.getElementsByClassName( 'nfItem' )[ 0 ].offsetWidth;
	var eos = Math.floor( ( ww / iw ) );
	var sr = this.container.getBoundingClientRect();
	var te =  this.container.getElementsByClassName( 'nfItem' ).length;
	var lmi = sr.left === 0 ? 0 : ( sr.left * -1 ) / iw;

	this.scrollVars = {
		itemWidth : iw,
		totalEls :te,
		windowWidth : ww,
		scrollRect : sr,
		elsOnscreen : eos,
		offsetPrevious: sr.left !== 0 ? sr.left + ( eos * iw  ) : -1 ,
		offsetNext : ( lmi + eos ) < te ? ( ( lmi + eos ) * iw ) * -1 : -1,
		leftmostIndex : lmi
	};


//Math.ceil( ( ( this.totalEls * this.itemWidth ) + this.scrollRect.left ) / this.itemWidth )
};


Netflicker.ScrollControl.prototype.setClickControls = function( ) {

	this.controlsOverlay = NFUtils.createWithClass( 'div', [ this.config.controlsOverlay ] );
	this.nextControl = NFUtils.createWithClass( 'div', [ this.config.clickControlClass, this.config.clickControlLeftClass ] );
	this.previousControl = NFUtils.createWithClass( 'div', [ this.config.clickControlClass, this.config.clickControlRightClass ] );

	this.controlsOverlay.appendChild( this.nextControl );
	this.controlsOverlay.appendChild( this.previousControl );

	this.nextControl.appendChild( NFUtils.createWithClass( 'div', [ 'icon-nfleft' ] ) );
	this.previousControl.appendChild( NFUtils.createWithClass( 'div', [ 'icon-nfright' ] ) );

	this.holder.insertBefore( this.controlsOverlay, this.holder.children[ 0 ] );

};


Netflicker.ScrollControl.prototype.setListeners = function( ) {

	var self = this;

	document.getElementsByClassName( this.config.clickControlRightClass )[ 0 ].addEventListener( 'click', function() {
		self.determineVariables();
		console.log( self.scrollVars );
		if( self.scrollVars.offsetNext != -1 ) {
			NFUtils.addStyle( self.container, 'left:' + self.scrollVars.offsetNext + 'px' );
		}

	} );

	document.getElementsByClassName( this.config.clickControlLeftClass )[ 0 ].addEventListener( 'click', function() {
		self.determineVariables();
		console.log( self.scrollVars );
		if( self.scrollVars.offsetPrevious != -1 ) {
			NFUtils.addStyle( self.container, 'left:' + self.scrollVars.offsetPrevious + 'px' );
		}
	} );

};


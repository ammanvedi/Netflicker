/**
 * Created by ammanvedi on 20/11/2015.
 */

/**
 * Bye jQuery !
 */

var NFUtils = ( function(){

	return {

		EVENT_CONSTANTS: {
			SHOW_EXTENDED: 'nf/SHOW_EXTENDED',
			CLOSE_EXTENDED: 'nf/CLOSE_EXTENDED'

		},
		makeEvent: function( name, data ) {
			return new CustomEvent( name, { 'detail': data } );
		},
		subscribe: function( eventname, callback ) {
			document.addEventListener( eventname, callback );
		},
		notify: function( name, data ) {
			document.dispatchEvent( this.makeEvent( name, data ) );
		},
		addClass: function( element, classToAdd ) {

			if( element.className.indexOf( classToAdd ) === -1 ) {
				element.className = element.className ? element.className + ' ' + classToAdd : classToAdd;
			};
		},
		removeClass: function( element, className ) {

			if( element && element.className && element.className.indexOf( className ) !== -1 ) {
				var classArr = element.className.split( ' ' );
				var newClasses;
				if( classArr.length === 1 ) {
					newClasses = classArr.splice( parseInt( classArr.indexOf( className ) ) -1, 1 );
				} else {
					newClasses = classArr.splice( parseInt( classArr.indexOf( className ) ), 1 );

				}
				element.className = classArr.join( ' ' );
				return true;
			}

			return false;
		},
		createWithClass: function( tag, classList, id ) {
			var el = document.createElement( tag );
			el.className = classList.join( ' ' );
			if( id ) {
				el.id = id;
			}
			return el;
		},
		addStyle: function( element, style ) {
			if( element.getAttribute( 'style' ) ) {
				element.setAttribute( 'style', element.getAttribute( 'style' ) + ' ' + style );

			} else {
				element.setAttribute( 'style', style );
			}

		},
		extend: function( a, b ) {

			var akeys = Object.keys( a );
			var bkeys = Object.keys( b );

			for( var i = 0; i < bkeys.length; i++ ) {
				if( !a[ bkeys[ i ] ] ) {
					a[ bkeys[ i ] ] = b[ bkeys[ i ] ];
				}
			}
		}


	}

} )();
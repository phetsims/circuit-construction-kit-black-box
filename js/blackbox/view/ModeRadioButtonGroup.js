// Copyright 2016, University of Colorado Boulder
// TODO: Review, document, annotate, i18n, bring up to standards

/**
 * Radio buttons for choosing 'Explore' or 'Test'
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitBlackBoxStudy = require( 'CIRCUIT_CONSTRUCTION_KIT_BLACK_BOX_STUDY/circuitConstructionKitBlackBoxStudy' );
  var inherit = require( 'PHET_CORE/inherit' );
  var RadioButtonGroup = require( 'SUN/buttons/RadioButtonGroup' );
  var Text = require( 'SCENERY/nodes/Text' );
  var PhetColorScheme = require( 'SCENERY_PHET/PhetColorScheme' );

  function ModeRadioButtonGroup( modeProperty, tandem ) {
    var textOptions = { fontSize: 18 };
    RadioButtonGroup.call( this, modeProperty, [ {
      value: 'explore',
      node: new Text( 'Explore', textOptions ),
      tandemName: 'investigateCircuitButton'
    }, {
      value: 'test',
      node: new Text( 'Test', textOptions ),
      tandemName: 'buildCircuitButton'
    } ], {
      tandem: tandem.createTandem( 'ModeRadioButtonGroup' ),
      baseColor: 'white',
      buttonContentXMargin: 10,
      buttonContentYMargin: 15,
      selectedStroke: PhetColorScheme.RESET_ALL_BUTTON_BASE_COLOR,
      selectedLineWidth: 2.5
    } );
  }

  circuitConstructionKitBlackBoxStudy.register( 'ModeRadioButtonGroup', ModeRadioButtonGroup );

  return inherit( RadioButtonGroup, ModeRadioButtonGroup );
} );
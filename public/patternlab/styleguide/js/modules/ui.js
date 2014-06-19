/**
 * UI module
 */
(function(patternlab){
  'use strict';

  /*** PRIVATE VARIABLES ***/

  /*** PRIVATE METHODES ***/

  /**
   * Call all UI actions that we need
   */
  var fireUIfunctions = function(){
    patternlab.ui.accordionDropdown.bindUIactions();
    patternlab.ui.navigationToggle.bindUIactions();
    patternlab.ui.resize.init();
    patternlab.ui.resize.bindUIactions();
    patternlab.ui.discoMode.bindUIactions();
    patternlab.ui.hayMode.bindUIactions();
    patternlab.ui.loadPattern.bindUIactions();
  };

  /**
   * Initialization of the module
   */
  var init = function(){
    fireUIfunctions();
  };

  /*** PUBLIC METHODES ***/
  patternlab.ui = {
    init: init,
  };

}(PatternLab));

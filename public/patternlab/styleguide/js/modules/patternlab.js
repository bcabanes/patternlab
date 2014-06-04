/**
 * PatternLab General module
 */
var PatternLab = (function() {
  'use strict';

  var settings = {
    patternsJsonPath: 'patternlab/sources/patterns.json',
    patternsJson: '',
    styleGuideFilePath: 'patternlab/styleguide/',
    version: '0.0.1'
  };

  return{
    settings: settings,
    init: function(){
console.log(this);
      /**
       * Initializing the styleguide
       * 1- Build the logic (this.logic)
       * 2- Build design (this.styleguide)
       * 3- Bind interactions (this.ui)
       */

      /*
        Start the event manager (registering all events)
       */
      this.event.manager.init();

      this.logic.setPatternsJson();

    },
    getVersion: function(){
      return settings.version;
    }
  };

}());

/****************************************************************************************
* for support info on how to use JImporter.js                                           *
* check out the project at https://github.com/Patrick-W-McMahon/JImporter               *
* further updates and tutorials are provided.                                           *
****************************************************************************************/
;(function($,window,document,undefined){
	var pluginName="import";
	var self;
	var defaults={
		scripts:[],
	};
	
	$.fn[pluginName]=function(options){
		return this.each(function(){
			if(!$.data(this,'plugin_'+pluginName)){
				$.data(this,'plugin_'+pluginName,new Plugin(this,options));
			}
		});
	}
	
	//Plugin constructor
	function Plugin(element,options){
		self = this;
		this.element = element;
		this.options = $.extend({},defaults,options);
		this._defaults = defaults;
		this._name = pluginName;
		
		this.init();
		return this;
	}
	
	Plugin.prototype.init=function(){
		this.options['scripts'].forEach(function(entry){
			var imported = document.createElement('script');
			imported.src = entry;
			document.head.appendChild(imported);
		});
	}
	
})(jQuery,window,document);

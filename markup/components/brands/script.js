!function(a){"use strict";a(function(){a(".bj-brands").each(function(){function b(){function d(){var b="ontouchstart"in document.documentElement;return b&&a(document).width()<=600?"mobile":"desktop"}d();a.ajax({url:c.data("url"),type:"GET",dataType:"json",data:"device="+d(),success:function(a){"object"==typeof a&&"Y"===a.STATUS&&a.HTML?(c.html(a.HTML),c.find(".fotorama").fotorama()):"object"==typeof a&&"N"===a.STATUS&&setTimeout(function(){b()},1e3)},error:function(a,b,c){}})}var c=a(this);b()})})}(jQuery);
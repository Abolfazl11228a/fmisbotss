if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(){"use strict";var t=jQuery.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(),function(o){"use strict";o.fn.emulateTransitionEnd=function(t){var e=!1,i=this;o(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||o(i).trigger(o.support.transition.end)},t),this},o(function(){o.support.transition=function(){var t,e=document.createElement("bootstrap"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in i)if(void 0!==e.style[t])return{end:i[t]};return!1}(),o.support.transition&&(o.event.special.bsTransitionEnd={bindType:o.support.transition.end,delegateType:o.support.transition.end,handle:function(t){if(o(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(n){"use strict";function a(t){n(t).on("click",e,this.close)}var e='[data-dismiss="alert"]';a.VERSION="3.3.2",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=n(this),i=(i=e.attr("data-target"))||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,""),o=n(i);function s(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=n.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),n.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s())};var t=n.fn.alert;n.fn.alert=function(i){return this.each(function(){var t=n(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},n.fn.alert.Constructor=a,n.fn.alert.noConflict=function(){return n.fn.alert=t,this},n(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(n){"use strict";var s=function(t,e){this.$element=n(t),this.options=n.extend({},s.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=n(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new s(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}s.VERSION="3.3.2",s.DEFAULTS={loadingText:"loading..."},s.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",s=i.data();t+="Text",null==s.resetText&&i.data("resetText",i[o]()),setTimeout(n.proxy(function(){i[o]((null==s[t]?this.options:s)[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e))},this),0)},s.prototype.toggle=function(){var t,e=!0,i=this.$element.closest('[data-toggle="buttons"]');i.length?("radio"==(t=this.$element.find("input")).prop("type")&&(t.prop("checked")&&this.$element.hasClass("active")?e=!1:i.find(".active").removeClass("active")),e&&t.prop("checked",!this.$element.hasClass("active")).trigger("change")):this.$element.attr("aria-pressed",!this.$element.hasClass("active")),e&&this.$element.toggleClass("active")};var t=n.fn.button;n.fn.button=i,n.fn.button.Constructor=s,n.fn.button.noConflict=function(){return n.fn.button=t,this},n(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=n(t.target);e.hasClass("btn")||(e=e.closest(".btn")),i.call(e,"toggle"),t.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){n(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(h){"use strict";function d(t,e){this.$element=h(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",h.proxy(this.keydown,this)),"hover"!=this.options.pause||"ontouchstart"in document.documentElement||this.$element.on("mouseenter.bs.carousel",h.proxy(this.pause,this)).on("mouseleave.bs.carousel",h.proxy(this.cycle,this))}function s(s){return this.each(function(){var t=h(this),e=t.data("bs.carousel"),i=h.extend({},d.DEFAULTS,t.data(),"object"==typeof s&&s),o="string"==typeof s?s:i.slide;e||t.data("bs.carousel",e=new d(this,i)),"number"==typeof s?e.to(s):o?e[o]():i.interval&&e.pause().cycle()})}d.VERSION="3.3.2",d.TRANSITION_DURATION=600,d.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},d.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},d.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(h.proxy(this.next,this),this.options.interval)),this},d.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},d.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;t=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(t)},d.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},d.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&h.support.transition&&(this.$element.trigger(h.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},d.prototype.next=function(){if(!this.sliding)return this.slide("next")},d.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},d.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),s=this.interval,n="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],e=h.Event("slide.bs.carousel",{relatedTarget:r,direction:n});if(this.$element.trigger(e),!e.isDefaultPrevented()){this.sliding=!0,s&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),(e=h(this.$indicators.children()[this.getItemIndex(o)]))&&e.addClass("active"));var l=h.Event("slid.bs.carousel",{relatedTarget:r,direction:n});return h.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),o[0].offsetWidth,i.addClass(n),o.addClass(n),i.one("bsTransitionEnd",function(){o.removeClass([t,n].join(" ")).addClass("active"),i.removeClass(["active",n].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(l)},0)}).emulateTransitionEnd(d.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(l)),s&&this.cycle(),this}};var t=h.fn.carousel;function e(t){var e,i=h(this),o=h(i.attr("data-target")||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""));o.hasClass("carousel")&&(e=h.extend({},o.data(),i.data()),(i=i.attr("data-slide-to"))&&(e.interval=!1),s.call(o,e),i&&o.data("bs.carousel").to(i),t.preventDefault())}h.fn.carousel=s,h.fn.carousel.Constructor=d,h.fn.carousel.noConflict=function(){return h.fn.carousel=t,this},h(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),h(window).on("load",function(){h('[data-ride="carousel"]').each(function(){var t=h(this);s.call(t,t.data())})})}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.$trigger=s(this.options.trigger).filter('[href="#'+t.id+'"], [data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function i(t){var e=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return s(e)}function a(o){return this.each(function(){var t=s(this),e=t.data("bs.collapse"),i=s.extend({},n.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&"show"==o&&(i.toggle=!1),e||t.data("bs.collapse",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.3.2",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},n.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(t&&t.length&&(o=t.data("bs.collapse"))&&o.transitioning)){var e=s.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){t&&t.length&&(a.call(t,"hide"),o||t.data("bs.collapse",null));var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!s.support.transition)return o.call(this);t=s.camelCase(["scroll",i].join("-"));this.$element.one("bsTransitionEnd",s.proxy(o,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[i](this.$element[0][t])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=s.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;t=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!s.support.transition)return t.call(this);this.$element[e](0).one("bsTransitionEnd",s.proxy(t,this)).emulateTransitionEnd(n.TRANSITION_DURATION)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return s(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(s.proxy(function(t,e){e=s(e);this.addAriaAndCollapsedClass(i(e),e)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=s.fn.collapse;s.fn.collapse=a,s.fn.collapse.Constructor=n,s.fn.collapse.noConflict=function(){return s.fn.collapse=t,this},s(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=s(this);e.attr("data-target")||t.preventDefault();t=i(e),e=t.data("bs.collapse")?"toggle":s.extend({},e.data(),{trigger:this});a.call(t,e)})}(jQuery),function(s){"use strict";function o(t){s(t).on("click.bs.dropdown",this.toggle)}var n='[data-toggle="dropdown"]';function a(o){o&&3===o.which||(s(".dropdown-backdrop").remove(),s(n).each(function(){var t=s(this),e=r(t),i={relatedTarget:this};e.hasClass("open")&&(e.trigger(o=s.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",i)))}))}function r(t){var e=t.attr("data-target"),e=(e=e||(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""))&&s(e);return e&&e.length?e:t.parent()}o.VERSION="3.3.2",o.prototype.toggle=function(t){var e=s(this);if(!e.is(".disabled, :disabled")){var i=r(e),o=i.hasClass("open");if(a(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&s('<div class="dropdown-backdrop"/>').insertAfter(s(this)).on("click",a);o={relatedTarget:this};if(i.trigger(t=s.Event("show.bs.dropdown",o)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger("shown.bs.dropdown",o)}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=s(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=r(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(n).trigger("focus"),e.trigger("click");e=" li:not(.divider):visible a",i=i.find('[role="menu"]'+e+', [role="listbox"]'+e);i.length&&(e=i.index(t.target),38==t.which&&0<e&&e--,40==t.which&&e<i.length-1&&e++,~e||(e=0),i.eq(e).trigger("focus"))}}};var t=s.fn.dropdown;s.fn.dropdown=function(i){return this.each(function(){var t=s(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},s.fn.dropdown.Constructor=o,s.fn.dropdown.noConflict=function(){return s.fn.dropdown=t,this},s(document).on("click.bs.dropdown.data-api",a).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,o.prototype.toggle).on("keydown.bs.dropdown.data-api",n,o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',o.prototype.keydown)}(jQuery),function(n){"use strict";function a(t,e){this.options=e,this.$body=n(document.body),this.$element=n(t),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,n.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}function s(o,s){return this.each(function(){var t=n(this),e=t.data("bs.modal"),i=n.extend({},a.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new a(this,i)),"string"==typeof o?e[o](s):i.show&&e.show(s)})}a.VERSION="3.3.2",a.TRANSITION_DURATION=300,a.BACKDROP_TRANSITION_DURATION=150,a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},a.prototype.show=function(i){var o=this,t=n.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',n.proxy(this.hide,this)),this.backdrop(function(){var t=n.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.options.backdrop&&o.adjustBackdrop(),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var e=n.Event("shown.bs.modal",{relatedTarget:i});t?o.$element.find(".modal-dialog").one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(a.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},a.prototype.hide=function(t){t&&t.preventDefault(),t=n.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),n(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),n.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",n.proxy(this.hideModal,this)).emulateTransitionEnd(a.TRANSITION_DURATION):this.hideModal())},a.prototype.enforceFocus=function(){n(document).off("focusin.bs.modal").on("focusin.bs.modal",n.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",n.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},a.prototype.resize=function(){this.isShown?n(window).on("resize.bs.modal",n.proxy(this.handleUpdate,this)):n(window).off("resize.bs.modal")},a.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},a.prototype.backdrop=function(t){var e,i=this,o=this.$element.hasClass("fade")?"fade":"";this.isShown&&this.options.backdrop?(e=n.support.transition&&o,this.$backdrop=n('<div class="modal-backdrop '+o+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",n.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),t&&(e?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):t())):!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e=function(){i.removeBackdrop(),t&&t()},n.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):e()):t&&t()},a.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},a.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},a.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},a.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},a.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},a.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},a.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},a.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=n.fn.modal;n.fn.modal=s,n.fn.modal.Constructor=a,n.fn.modal.noConflict=function(){return n.fn.modal=t,this},n(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=n(this),i=e.attr("href"),o=n(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),i=o.data("bs.modal")?"toggle":n.extend({remote:!/#/.test(i)&&i},o.data(),e.data());e.is("a")&&t.preventDefault(),o.one("show.bs.modal",function(t){t.isDefaultPrevented()||o.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),s.call(o,i,this)})}(jQuery),function(l){"use strict";function h(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)}h.VERSION="3.3.2",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(t,e,i){this.enabled=!0,this.type=t,this.$element=l(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&l(this.options.viewport.selector||this.options.viewport);for(var o=this.options.trigger.split(" "),s=o.length;s--;){var n,a=o[s];"click"==a?this.$element.on("click."+this.type,this.options.selector,l.proxy(this.toggle,this)):"manual"!=a&&(n="hover"==a?"mouseenter":"focusin",a="hover"==a?"mouseleave":"focusout",this.$element.on(n+"."+this.type,this.options.selector,l.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,l.proxy(this.leave,this)))}this.options.selector?this._options=l.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},h.prototype.getDefaults=function(){return h.DEFAULTS},h.prototype.getOptions=function(t){return(t=l.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},h.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&l.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},h.prototype.enter=function(t){var e=t instanceof this.constructor?t:l(t.currentTarget).data("bs."+this.type);if(e&&e.$tip&&e.$tip.is(":visible"))e.hoverState="in";else{if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),l(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},h.prototype.leave=function(t){var e=t instanceof this.constructor?t:l(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),l(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)},h.prototype.show=function(){var e,t,i,o,s,n,a,r=l.Event("show.bs."+this.type);this.hasContent()&&this.enabled&&(this.$element.trigger(r),i=l.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]),!r.isDefaultPrevented()&&i&&(t=(e=this).tip(),n=this.getUID(this.type),this.setContent(),t.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&t.addClass("fade"),a="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,(s=(o=/\s?auto?\s?/i).test(a))&&(a=a.replace(o,"")||"top"),t.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),r=this.getPosition(),i=t[0].offsetWidth,n=t[0].offsetHeight,s&&(o=a,s=this.options.container?l(this.options.container):this.$element.parent(),s=this.getPosition(s),a="bottom"==a&&r.bottom+n>s.bottom?"top":"top"==a&&r.top-n<s.top?"bottom":"right"==a&&r.right+i>s.width?"left":"left"==a&&r.left-i<s.left?"right":a,t.removeClass(o).addClass(a)),n=this.getCalculatedOffset(a,r,i,n),this.applyPlacement(n,a),a=function(){var t=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==t&&e.leave(e)},l.support.transition&&this.$tip.hasClass("fade")?t.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()))},h.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,s=i[0].offsetHeight,n=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(n)&&(n=0),isNaN(a)&&(a=0),t.top=t.top+n,t.left=t.left+a,l.offset.setOffset(i[0],l.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,n=i[0].offsetHeight;"top"==e&&n!=s&&(t.top=t.top+s-n);a=this.getViewportAdjustedDelta(e,t,r,n);a.left?t.left+=a.left:t.top+=a.top;e=/top|bottom/.test(e),s=e?2*a.left-o+r:2*a.top-s+n,n=e?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(s,i[0][n],e)},h.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},h.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},h.prototype.hide=function(t){var e=this,i=this.tip(),o=l.Event("hide.bs."+this.type);function s(){"in"!=e.hoverState&&i.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),l.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",s).emulateTransitionEnd(h.TRANSITION_DURATION):s(),this.hoverState=null,this},h.prototype.fixTitle=function(){var t=this.$element;!t.attr("title")&&"string"==typeof t.attr("data-original-title")||t.attr("data-original-title",t.attr("title")||"").attr("title","")},h.prototype.hasContent=function(){return this.getTitle()},h.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=l.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));e=i?{top:0,left:0}:t.offset(),t={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},i=i?{width:l(window).width(),height:l(window).height()}:null;return l.extend({},o,t,i,e)},h.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},h.prototype.getViewportAdjustedDelta=function(t,e,i,o){var s={top:0,left:0};if(!this.$viewport)return s;var n,a=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);return/right|left/.test(t)?(t=e.top-a-r.scroll,n=e.top+a-r.scroll+o,t<r.top?s.top=r.top-t:n>r.top+r.height&&(s.top=r.top+r.height-n)):(n=e.left-a,i=e.left+a+i,n<r.left?s.left=r.left-n:i>r.width&&(s.left=r.left+r.width-i)),s},h.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},h.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},h.prototype.tip=function(){return this.$tip=this.$tip||l(this.options.template)},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},h.prototype.enable=function(){this.enabled=!0},h.prototype.disable=function(){this.enabled=!1},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled},h.prototype.toggle=function(t){var e=this;t&&((e=l(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),l(t.currentTarget).data("bs."+this.type,e))),e.tip().hasClass("in")?e.leave(e):e.enter(e)},h.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var t=l.fn.tooltip;l.fn.tooltip=function(o){return this.each(function(){var t=l(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&"destroy"==o||(e||t.data("bs.tooltip",e=new h(this,i)),"string"==typeof o&&e[o]())})},l.fn.tooltip.Constructor=h,l.fn.tooltip.noConflict=function(){return l.fn.tooltip=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.init("popover",t,e)}if(!s.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.3.2",n.DEFAULTS=s.extend({},s.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((n.prototype=s.extend({},s.fn.tooltip.Constructor.prototype)).constructor=n).prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},n.prototype.tip=function(){return this.$tip||(this.$tip=s(this.options.template)),this.$tip};var t=s.fn.popover;s.fn.popover=function(o){return this.each(function(){var t=s(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&"destroy"==o||(e||t.data("bs.popover",e=new n(this,i)),"string"==typeof o&&e[o]())})},s.fn.popover.Constructor=n,s.fn.popover.noConflict=function(){return s.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){var i=s.proxy(this.process,this);this.$body=s("body"),this.$scrollElement=s(t).is("body")?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",i),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.3.2",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var i="offset",o=0;s.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var t=this;this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),t=/^#./.test(e)&&s(e);return t&&t.length&&t.is(":visible")?[[t[i]().top+o,e]]:null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),s=this.offsets,n=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=n[n.length-1])&&this.activate(t);if(a&&e<s[0])return this.activeTarget=null,this.clear();for(t=s.length;t--;)a!=n[t]&&e>=s[t]&&(!s[t+1]||e<=s[t+1])&&this.activate(n[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();t=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',t=s(t).parents("li").addClass("active");t.parent(".dropdown-menu").length&&(t=t.closest("li.dropdown").addClass("active")),t.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(a){"use strict";function r(t){this.element=a(t)}function e(i){return this.each(function(){var t=a(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new r(this)),"string"==typeof i&&e[i]()})}r.VERSION="3.3.2",r.TRANSITION_DURATION=150,r.prototype.show=function(){var t,e,i,o=this.element,s=o.closest("ul:not(.dropdown-menu)"),n=(n=o.data("target"))||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"");o.parent("li").hasClass("active")||(t=s.find(".active:last a"),e=a.Event("hide.bs.tab",{relatedTarget:o[0]}),i=a.Event("show.bs.tab",{relatedTarget:t[0]}),t.trigger(e),o.trigger(i),i.isDefaultPrevented()||e.isDefaultPrevented()||(n=a(n),this.activate(o.closest("li"),s),this.activate(n,n.parent(),function(){t.trigger({type:"hidden.bs.tab",relatedTarget:o[0]}),o.trigger({type:"shown.bs.tab",relatedTarget:t[0]})})))},r.prototype.activate=function(t,e,i){var o=e.find("> .active"),s=i&&a.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function n(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&s?o.one("bsTransitionEnd",n).emulateTransitionEnd(r.TRANSITION_DURATION):n(),o.removeClass("in")};var t=a.fn.tab;function i(t){t.preventDefault(),e.call(a(this),"show")}a.fn.tab=e,a.fn.tab.Constructor=r,a.fn.tab.noConflict=function(){return a.fn.tab=t,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(a){"use strict";var r=function(t,e){this.options=a.extend({},r.DEFAULTS,e),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(t),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=a(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.3.2",r.RESET="affix affix-top affix-bottom",r.DEFAULTS={offset:0,target:window},r.prototype.getState=function(t,e,i,o){var s=this.$target.scrollTop(),n=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return s<i&&"top";if("bottom"==this.affixed)return null!=i?!(s+this.unpin<=n.top)&&"bottom":!(s+a<=t-o)&&"bottom";var r=null==this.affixed,n=r?s:n.top;return null!=i&&s<=i?"top":null!=o&&t-o<=n+(r?a:e)&&"bottom"},r.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(r.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},r.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},r.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,s=a("body").height();"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var n=this.getState(s,t,i,o);if(this.affixed!=n){null!=this.unpin&&this.$element.css("top","");e="affix"+(n?"-"+n:""),i=a.Event(e+".bs.affix");if(this.$element.trigger(i),i.isDefaultPrevented())return;this.affixed=n,this.unpin="bottom"==n?this.getPinnedOffset():null,this.$element.removeClass(r.RESET).addClass(e).trigger(e.replace("affix","affixed")+".bs.affix")}"bottom"==n&&this.$element.offset({top:s-t-o})}};var t=a.fn.affix;a.fn.affix=i,a.fn.affix.Constructor=r,a.fn.affix.noConflict=function(){return a.fn.affix=t,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var t=a(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
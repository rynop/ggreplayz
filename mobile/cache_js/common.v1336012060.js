/* ==========================================================
 * CakePlate common JS code
 * 
 * https://github.com/rynop/CakePlate
 * ==========================================================
 * Copyright 2011 pwebo.com, LLC.
 * 
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 * ========================================================== *//*
 * Put any js code here that is common across your views
 *//* ==========================================================
 * CakePlate jQuery plugin code
 * 
 * https://github.com/rynop/CakePlate
 * ==========================================================
 * Copyright 2011 pwebo.com, LLC.
 * 
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 * ========================================================== */// remap jQuery to $
(function(a){})(window.jQuery),$(document).ready(function(){$("#viewFullSite").click(function(a){a.preventDefault();var b=document.location.pathname;b.substr(-1)=="/"&&(b=b.substr(0,b.length-1)),document.location.href="http://ggreplayz.com"+b+"/?noredirection=true"})}),$.fn.exists=function(){return $(this).length!==0};
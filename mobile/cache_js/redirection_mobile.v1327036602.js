/*!
* JS Redirection Mobile
*
* Developed by
* Sebastiano Armeli-Battana (@sebarmeli) - http://www.sebastianoarmelibattana.com
* Dual licensed under the MIT or GPL Version 3 licenses.
*//*
	Copyright (c) 2011 Sebastiano Armeli-Battana (http://www.sebastianoarmelibattana.com)

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*//*
* This script will cover a basic scenario of full JS mobile redirection.
* The user will be redirected to the mobile version of the site (home page)
* if it's trying to access the site from a mobile device. This check is
* mainly done checking the User-Agent string. 
* The mobile URL will be obtained appending a prefix (default is "m") to 
* the hostname of the current URL. It's used a naked domain to avoid conflict with
* www.
* 
* In some cases the user needs to be redirected to the Desktop version of the site 
* from a mobile device. This happens when the user clicks on a link such as "Go to full site"
* or when there is a specific parameter in the querystring.
*
* In that case a new key/value in sessionStorage (for modern browsers) 
* will be set and until the user doesn't close browser window or tab it will access
* to the desktop version from a mobile device. There is a fallback for old browsers that
* don't support sessionStorage, and it will use a cookie. The cookie will expiry in one hour 
* (default value) or you configure the expiry time.
* 
* To use this function, you need to call it as SA.redirection_mobile(config);
* E.g. SA.redirection_mobile ({noredirection_param : "noredirection", mobile_prefix : "mobile", cookie_hours : "2" })
* or
* E.g. SA.redirection_mobile ({mobile_url : "mobile.whatever.com/example", mobile_sheme : "https" })
* or
* E.g. SA.redirection_mobile ({mobile_prefix : "mobile"})
* or
* E.g. SA.redirection_mobile ({mobile_prefix : "mobile", mobile_scheme : "https", redirection_paramName : "modile_redirect"})
* or
* E.g. SA.redirection_mobile ({mobile_url : "mobile.whatever.com/example", tablet_redirection : "true"})
* or
* E.g. SA.redirection_mobile ({{mobile_url : "mobile.whatever.com/example", beforeredirection_callback : (function(){alert('2')}) }})
* or
* E.g. SA.redirection_mobile ({{mobile_url : "mobile.whatever.com", tablet_url : "tablet.whatever.com")
*
*
* @link http://github.com/sebarmeli/JS-Redirection-Mobile-Site/
* @author Sebastiano Armeli-Battana
* @version 0.9.5
* @date 25/07/2011 
* 
*//*globals window,document, navigator, SA */window.SA||(window.SA={}),SA.redirection_mobile=function(a){var b=function(a){var b=new Date;b.setTime(b.getTime()+a);return b},c=function(a){if(!!a){var b=document.location.search,c=b&&b.substring(1).split("&"),d=0,e=c.length;for(;d<e;d++){var f=c[d],g=f&&f.substring(0,f.indexOf("="));if(g===a)return f.substring(f.indexOf("=")+1,f.length)}}},d=navigator.userAgent||navigator.vendor||window.opera,e="false",f="true",g=a||{},h=g.noredirection_param||"noredirection",i=g.mobile_prefix||"m",j=g.mobile_url,k=g.mobile_scheme?g.mobile_scheme+":":document.location.protocol,l=document.location.host,m=c(h),n=j||i+"."+(!l.match(/^www\./i)?l:l.substring(4)),o=g.cookie_hours||1,p=g.keep_path||!1,q=g.keep_query||!1,r=g.tablet_url||n,s=!1;if(/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(d)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(d.substr(0,4)))s=!0;if(document.referrer.indexOf(n)>=0||m===f)window.sessionStorage?window.sessionStorage.setItem(h,f):document.cookie=h+"="+f+";expires="+b(36e5*o).toUTCString();var t=window.sessionStorage?window.sessionStorage.getItem(h)===f:!1,u=document.cookie?document.cookie.indexOf(h)>=0:!1;if(!!d.match(/(iPad|SCH-I800|xoom|kindle)/i)){var v=g.tablet_redirection===f||!!g.tablet_url?!0:!1;s=!1}if((v||s)&&!u&&!t){if(g.beforeredirection_callback&&!g.beforeredirection_callback.call(this))return;var w="";p&&(w+=document.location.pathname),q&&(w+=document.location.search),v?document.location.href=k+"//"+r+w:s&&(document.location.href=k+"//"+n+w)}}
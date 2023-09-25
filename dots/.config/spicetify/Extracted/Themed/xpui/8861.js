"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8861,8958],{87439:(t,n,r)=>{r.r(n),r.d(n,{EPISODE_SPONSOR_NOW_PLAYING_BAR_HAT_CALL_TO_ACTION_BUTTON_TEST_ID:()=>a,EpisodeSponsorNowPlayingBarHatButtonWrapper:()=>i,default:()=>c});var s=r(6285),o=r(35765),e=r(4637);const a="episode-sponsor-now-playing-bar-hat-call-to-action-button";function i({postClickEvent:t,clickUrl:n,adEvent:r}){return(0,e.jsx)("div",{className:o.Z.buttonWrapper,children:(0,e.jsx)(s.K,{to:n,"data-testid":a,onClick:t,children:r.ad.metadata.buttonMessage})})}const c=i},58861:(t,n,r)=>{r.r(n),r.d(n,{EPISODE_SPONSOR_NOW_PLAYING_BAR_HAT_CALL_TO_ACTION_BUTTON_TEST_ID:()=>p.EPISODE_SPONSOR_NOW_PLAYING_BAR_HAT_CALL_TO_ACTION_BUTTON_TEST_ID,EPISODE_SPONSOR_NOW_PLAYING_BAR_HAT_WRAPPER_TEST_ID:()=>g,EpisodeSponsorNowPlayingBarHatWrapper:()=>b,default:()=>w});var s=r(59496),o=r(84875),e=r.n(o),a=r(93017),i=r(24768),c=r(42493),u=r(8958);function l({adEvent:t,ad:n}){const r=function({adEvent:t,ad:n}){return(0,s.useMemo)((()=>(("true"===t?.ad.metadata.useAdvertiserImage?t?.ad.cover_art?.find((({url:t})=>t)):void 0)||n?.images.find((({url:t})=>t)))?.url),[t,n])}({adEvent:t,ad:n}),[o,e]=(0,s.useState)(),a=(0,s.useMemo)((()=>o instanceof Error?i.fwM:o?.colorDark.toCSS(c.jT.RGB)),[o]);return(0,s.useEffect)((function(){e(void 0),r&&(0,u.extractColors)(r).then(e).catch((()=>e(new Error("color not extracted successfully for episode NPB hat"))))}),[r]),{extractedColor:a}}var h=r(12621),f=r(35765),d=r(4637),p=r(87439);const g="episode-sponsor-now-playing-bar-hat-wrapper",m=(0,s.lazy)((()=>Promise.resolve().then(r.bind(r,87439))));function b({adEvent:t,hidingHat:n,ad:r,postClickEvent:o}){const{extractedColor:i}=l({adEvent:t,ad:r}),{tagline:c,buttonMessage:u}=t.ad.metadata,p="true"===t.ad.metadata.useClickURL?(0,a.EC)(t.ad.click_url)?.toURLPath(!0)||t.ad.click_url:void 0;return(0,d.jsx)("div",{className:f.Z.wrapperBackground,children:(0,d.jsxs)("div",{className:e()(i?f.Z.wrapperWithColorExtracted:f.Z.wrapper,{[f.Z.hidingHat]:n}),style:{backgroundColor:i},"data-testid":g,children:[(0,d.jsx)(h.S,{className:f.Z.tagline,children:c}),u&&p&&(0,d.jsx)(s.Suspense,{fallback:!0,children:(0,d.jsx)(m,{postClickEvent:o,clickUrl:p,adEvent:t})})]})})}const w=b},6285:(t,n,r)=>{r.d(n,{K:()=>f});var s=r(59496),o=r(84875),e=r.n(o),a=r(76285),i=r(51005),c=r(4637);function u({children:t,...n}){return(0,c.jsx)(a.D,{as:"div",...n,buttonSize:n.buttonSize||a.D.sm,"data-testid":"podcast-sponsor-cta-button-base",children:(0,c.jsx)(i.D,{variant:"mestoBold",children:t})})}var l=r(98474);const h={podcastSponsorCallToActionButton:"WI4OWZsbabgCus7t7tbe"};function f({children:t,"data-testid":n,className:r,...o}){const a=(0,s.useMemo)((()=>(0,c.jsx)(l.x,{..."to"in o?{to:o.to}:void 0,children:(0,c.jsx)(u,{children:t,...o})})),[t,o]);return(0,c.jsx)("div",{className:e()(h.podcastSponsorCallToActionButton,r),"data-testid":n,children:a})}},98474:(t,n,r)=>{r.d(n,{x:()=>a});var s=r(59496),o=r(4637);const e=(0,s.lazy)((()=>Promise.resolve().then(r.bind(r,91608))));function a(t){return"to"in t?(0,o.jsx)(e,{...t}):(0,o.jsx)("div",{...t})}},12621:(t,n,r)=>{r.d(n,{S:()=>c});var s=r(84875),o=r.n(s),e=r(51005);const a={podcastSponsorWrapper:"J5CRaPNhkzTtun81ix4_",podcastSponsor:"Ydj9D6hTaRL_zq6TPLQi",podcastSponsorExternalLink:"X77gJ8bX8tndSN1hTjWR",podcastSponsorImage:"eHZ28TWANGnQvU01g2oY",podcastSponsorCaption:"v2F4iVnwnrHtPu5GC9HB",podcastSponsorAdvertiser:"DHBG_yrmCz0kKTXhkmbE",podcastSponsorButtonMessage:"wChs0Q3HkTdKiBoQ33bT",podcastSponsorCtaButtonWrapper:"gUwjluEACtt5LCUu5sxp",podcastSponsorCtaCardButton:"DJbGzgDKx2qXorbxCZzW",podcastSponsorTagline:"WQ3nvVdLWEI08Z4V2iY4"};var i=r(4637);function c(t){return(0,i.jsx)(e.D,{...t,variant:t.variant||"mesto",className:o()(a.podcastSponsorTagline,t.className)})}},8958:(t,n,r)=>{r.d(n,{extractColors:()=>f});var s=r(42493);const o="https://local-image.spotify.com";let e=function(t){return t[t.ARRAY_BUFFER=0]="ARRAY_BUFFER",t[t.IMAGE_BITMAP=1]="IMAGE_BITMAP",t}({});var a=r(92001),i=r.n(a);var c=r(95931);const u=new function(){return i()('(()=>{"use strict";let t=function(t){return t[t.HEX=0]="HEX",t[t.HEXA=1]="HEXA",t[t.RGB=2]="RGB",t[t.RGBA=3]="RGBA",t[t.HSL=4]="HSL",t[t.HSLA=5]="HSLA",t}({});function n(t,n,r=1e-6){return Math.abs(t-n)<r}function r(t){return t.toString(16).padStart(2,"0")}function s(t){return`${parseFloat((100*t).toFixed(1))}%`}function o(t){t=t.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,(function(t,n,r,s){return n+n+r+r+s+s}));const n=/^#?(?<r>[a-f\\d]{2})(?<g>[a-f\\d]{2})(?<b>[a-f\\d]{2})(?<a>[a-f\\d]{2})?$/i.exec(t),r=n?.groups?.r,s=n?.groups?.g,o=n?.groups?.b,i=n?.groups?.a;if(void 0===r||void 0===s||void 0===o)throw new Error(`Invalid hex color code "${t}"`);return{r,g:s,b:o,a:i}}function i(t){const{a:n}=o(t);if(!n)return 1;return function(t,n,r){const s=t.toLocaleString("en",{useGrouping:!1,minimumFractionDigits:n,maximumFractionDigits:r});return Number(s)}(parseInt(n,16)/255,0,2)}function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}function a({rgb:{r:t,g:n,b:r}}){return.2126*e(t/255)+.7152*e(n/255)+.0722*e(r/255)}function h(t,n){const r=a(t),s=a(n);return(Math.max(r,s)+.05)/(Math.min(r,s)+.05)}class u{constructor(t,n,r,s=1){this.rgb=t,this.hsl=n,this.hsv=r,this.a=s}static BLACK=u.fromRGB({r:0,g:0,b:0});static WHITE=u.fromRGB({r:255,g:255,b:255});static fromRGB(t,r){if(t.r<0||t.g<0||t.b<0||t.r>255||t.g>255||t.b>255||r&&r<0||r&&r>1)throw Error(`Invalid RGB color: ${JSON.stringify(t)}, alpha: ${r}`);const s=function({r:t,g:r,b:s}){const o=t/255,i=r/255,e=s/255,a=Math.max(o,i,e),h=Math.min(o,i,e),u=a-h;let c;const l=(a+h)/2,f=a;c=n(u,0)?0:n(f,o)?60*(0+(i-e)/u):n(f,i)?60*(2+(e-o)/u):60*(4+(o-i)/u),c%=360,c<0&&(c+=360);const g=0===l||1===l?0:(f-l)/Math.min(l,1-l);return{h:Math.round(c),s:g,l}}(t),o=function({r:t,g:r,b:s}){const o=t/255,i=r/255,e=s/255,a=Math.max(o,i,e),h=a-Math.min(o,i,e);let u;const c=a;u=n(h,0)?0:n(c,o)?60*(0+(i-e)/h):n(c,i)?60*(2+(e-o)/h):60*(4+(o-i)/h),u%=360,u<0&&(u+=360);const l=0===c?0:h/c;return{h:Math.round(u),s:l,v:c}}(t);return new u(t,s,o,r)}static fromHex(t,n){const r=function(t){const{r:n,g:r,b:s}=o(t);return{r:parseInt(n,16),g:parseInt(r,16),b:parseInt(s,16)}}(t),s=i(t);return u.fromRGB(r,n??s)}static fromHSV(t,n){const r=function({h:t,s:n,v:r}){const s=r*n,o=t/60,i=s*(1-Math.abs(o%2-1));let e;e=o>=0&&o<=1?[s,i,0]:o>1&&o<=2?[i,s,0]:o>2&&o<=3?[0,s,i]:o>3&&o<=4?[0,i,s]:o>4&&o<=5?[i,0,s]:o>5&&o<=6?[s,0,i]:[0,0,0];const a=r-s;return{r:Math.round(255*(e[0]+a)),g:Math.round(255*(e[1]+a)),b:Math.round(255*(e[2]+a))}}(t);return u.fromRGB(r,n)}static fromHSL(t,n){const r=function({h:t,s:n,l:r}){const s=(1-Math.abs(2*r-1))*n,o=t/60,i=s*(1-Math.abs(o%2-1));let e;e=o>=0&&o<=1?[s,i,0]:o>1&&o<=2?[i,s,0]:o>2&&o<=3?[0,s,i]:o>3&&o<=4?[0,i,s]:o>4&&o<=5?[i,0,s]:o>5&&o<=6?[s,0,i]:[0,0,0];const a=r-s/2;return{r:Math.round(255*(e[0]+a)),g:Math.round(255*(e[1]+a)),b:Math.round(255*(e[2]+a))}}(t);return u.fromRGB(r,n)}static fromCSS(t,n){const r=function(t,n){const r=t.match(/^rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*(\\d+(?:\\.\\d+)?))?\\)$/);if(r){const[t,s,o,i]=r.slice(1),e=n??parseFloat(i);return u.fromRGB({r:parseInt(t,10),g:parseInt(s,10),b:parseInt(o,10)},Number.isNaN(e)?void 0:e)}return null}(t,n);if(r)return r;const s=function(t,n){const r=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(r){const t=r[1];return u.fromHex(t,n)}return null}(t,n);if(s)return s;const o=function(t,n){const r=t.match(/^hsla?\\((\\d+),\\s*(\\d+)%,\\s*(\\d+)%(?:,\\s*(\\d*(?:\\.\\d+)?))?\\)$/);if(r){const[t,s,o,i]=r.slice(1),e=n??parseFloat(i);return u.fromHSL({h:parseInt(t,10),s:parseInt(s,10)/100,l:parseInt(o,10)/100},Number.isNaN(e)?void 0:e)}return null}(t,n);if(o)return o;throw new Error(`Invalid or unsupported CSS color: ${t}`)}toCSS(n){switch(n){case t.HEX:return`#${r((o=this).rgb.r)}${r(o.rgb.g)}${r(o.rgb.b)}`;case t.HEXA:return function(t){return`#${r(t.rgb.r)}${r(t.rgb.g)}${r(t.rgb.b)}${r(Math.floor(255*t.a))}`}(this);case t.RGB:return function(t){return`rgb(${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b})`}(this);case t.RGBA:return function(t){return`rgba(${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b}, ${t.a})`}(this);case t.HSL:return function(t){const{h:n,s:r,l:o}=t.hsl;return`hsl(${n}, ${s(r)}, ${s(o)})`}(this);case t.HSLA:return function(t){const{h:n,s:r,l:o}=t.hsl;return`hsla(${n}, ${s(r)}, ${s(o)}, ${t.a})`}(this);default:throw new Error("Invalid or unsupported CSSColorFormat!")}var o}contrastAdjust(t,n=4.5){let r=u.BLACK;return"light"===t&&(r=u.WHITE),function(t,n,r){if(n!==u.BLACK&&n!==u.WHITE)throw new Error("Only supports contrast calculation between black and white.");let s=h(t,n);if(s>=r)return t;let o=t.hsv.v,i=n===u.WHITE?-.02:.02,e=Number.MAX_VALUE,a=null;for(let n=0;n<100&&e>.07&&o>=0&&o<=1;n++){o=Math.min(o+i,1),a=u.fromHSV({h:t.hsv.h,s:t.hsl.s,v:o}),s=h(a,u.WHITE);const n=Math.round(10*Math.abs(s-r))/10;n>e&&(i*=-.5),e=n}return null===a?t:a}(this,r,n)}toString(){return`${this.rgb.r},${this.rgb.g},${this.rgb.b},${this.a}`}stringify(){return JSON.stringify(this)}static parse(t){const{rgb:n,hsl:r,hsv:s,a:o}=JSON.parse(t);return new u(n,r,s,o)}}class c{constructor(t,n){this.color=t,this.population=n}static fromColor(t,n){return new c(t,n)}static fromRGB(t,n){return new c(u.fromRGB(t),n)}}class l{constructor(t,n=[]){this._comparator=t,this._data=n}swap(t,n){[this._data[t],this._data[n]]=[this._data[n],this._data[t]]}compare(t,n){return this._comparator(this._data[t],this._data[n])}bubbleUp(t){for(;t>0;){const n=t-1>>>1;if(this.compare(t,n)>=0)break;this.swap(t,n),t=n}}bubbleDown(t){const n=this._data.length;for(;;){const r=1+(t<<1),s=r+1;let o=t;if(r<n&&this.compare(r,o)<=0&&(o=r),s<n&&this.compare(s,o)<0&&(o=s),o===t)break;this.swap(o,t),t=o}}size(){return this._data.length}push(t){this._data.push(t),this.bubbleUp(this._data.length-1)}pop(){if(0===this._data.length)return null;this.swap(0,this._data.length-1);const t=this._data.pop();return this.bubbleDown(0),t}clone(){return new l(this._comparator,[...this._data])}*popAll(){for(;this._data.length>0;)yield this.pop()}}const f=31;function g(t){const n=(t>>>10&31)<<3,r=(t>>>5&31)<<3,s=(t>>>0&31)<<3;return u.fromRGB({r:n,g:r,b:s})}function p(t,n){return Math.round((t>>>3)/n)<<3}function m({rgb:{r:t,g:n,b:r}},{rgb:{r:s,g:o,b:i}}){return t*f*f+n*f+r-(s*f*f+o*f+i)}function b({rgb:{r:t,g:n,b:r}},{rgb:{r:s,g:o,b:i}}){return n*f*f+t*f+r-(o*f*f+s*f+i)}function d({rgb:{r:t,g:n,b:r}},{rgb:{r:s,g:o,b:i}}){return r*f*f+n*f+t-(i*f*f+o*f+s)}class w{constructor(t,n){this.min=t,this.max=n}size(){return this.max-this.min+1}clampTo(t){this.min=this.max=t}extendTo(t){this.min=Math.min(this.min,t),this.max=Math.max(this.max,t)}}class _{_population=0;_spanR=new w(0,0);_spanG=new w(0,0);_spanB=new w(0,0);constructor(t){this._swatches=t,this.fitBox()}getVolume(){return this._spanR.size()*this._spanG.size()*this._spanB.size()}getColorCount(){return this._swatches.length}getAverageColor(){let t=0,n=0,r=0,s=0;for(const{color:o,population:i}of this._swatches)s+=i,t+=i*o.rgb.r,n+=i*o.rgb.g,r+=i*o.rgb.b;const o=p(t,s),i=p(n,s),e=p(r,s);return c.fromRGB({r:o,g:i,b:e},s)}canSplit(){return this.getColorCount()>1}split(){if(!this.canSplit())throw new Error("Can not split a box with only 1 color");const t=this.findSplitPoint(),n=new _(this._swatches.slice(t+1,this._swatches.length));return this._swatches.splice(t+1),this.fitBox(),n}fitBox(){this._population=0;for(let t=0;t<this._swatches.length;t++){const{color:n,population:r}=this._swatches[t];this._population+=r,0===t?(this._spanR.clampTo(n.rgb.r),this._spanG.clampTo(n.rgb.g),this._spanB.clampTo(n.rgb.b)):(this._spanR.extendTo(n.rgb.r),this._spanG.extendTo(n.rgb.g),this._spanB.extendTo(n.rgb.b))}}findSplitPoint(){const t=this.getLongestDimensionComparator();this._swatches.sort(((n,r)=>t(n.color,r.color)));const n=Math.floor(this._population/2);for(let t=0,r=0;t<this._swatches.length;t++)if(r+=this._swatches[t].population,r>=n)return Math.min(this._swatches.length-1,t);return 0}getLongestDimensionComparator(){const t=this._spanR.size(),n=this._spanG.size(),r=this._spanB.size();return t>=n&&t>=r?m:n>=t&&n>=r?b:d}}class M{queue=new l(((t,n)=>n.getVolume()-t.getVolume()));_swatches=[];constructor(t){this._options=t}static fromPixels(t,n){return new M(n).quantize(t)}quantize(t){const n=new Array(32768).fill(0);let r=0,s=0,o=0;for(let s=t.next();!s.done;s=t.next()){r++;n[((i=s.value)>>>0&255)>>3<<10|(i>>>8&255)>>3<<5|(i>>>16&255)>>3]++}var i;for(let t=0;t<n.length;t++){const r=n[t];if(0===r)continue;const i=g(t);(void 0===this._options.filter||this._options.filter(i))&&(s++,o+=i.hsv.s,this._swatches.push(c.fromColor(i,r)))}return this._swatches.length>this._options.maxColors&&(this._swatches=this.quantizePixels(this._options.maxColors)),{swatches:this._swatches,totalPixels:r,totalColors:s,totalSaturationFromHSV:o}}quantizePixels(t){this.queue.push(new _(this._swatches)),this.splitBoxes(t);const n=Array.from(this.queue.popAll()).map((t=>t.getAverageColor())),r=this._options.filter;return void 0!==r?n.filter((t=>r(t.color))):n}splitBoxes(t){for(;this.queue.size()<t;){const t=this.queue.pop();if(null===t||!t.canSplit())return;this.queue.push(t.split()),this.queue.push(t)}}}function v(t,n){return t.reduce(((t,r)=>null!==t&&n(t)>n(r)?t:r),null)}const x=30,S=80,R=2,B=.0016,A=.3,$=.1,I=45,G=.4,C=.6,E=.1,H=.02;function L(t,n,r){return(t-n)/(r-n)}function T(t){return(t%=360)<0?360+t:t}function y(t,n){const r=function(t){let n=Number.MAX_VALUE;for(const r of t)n=Math.min(n,r);n=-1*Math.abs(n);let r=0,s=360;for(const o of t){const t=T(o+n);t<180&&t>r&&(r=t),t>=180&&t<s&&(s=t)}return r=T(r-n),s=T(s-n),{hue1:Math.min(r,s),hue2:Math.max(r,s)}}(t);let s=0;return n>=r.hue1&&n<=r.hue2?L(T(n),r.hue1,r.hue2):(s=360-r.hue2,L(T(n+s),0,T(r.hue1+s)))}function F(t,n){const r=t.map((t=>t.color.hsv.h)),s=function(t){let n=0,r=0;for(const s of t)n+=Math.cos(s/180*Math.PI),r+=Math.sin(s/180*Math.PI);const s=n/t.length,o=r/t.length,i=180*Math.atan2(o,s)/Math.PI%360;return i>=0?i:360-Math.abs(i)}(r),o=y(r,s);return o>G||o<C?t.filter((t=>{return t.population/n>H||(r=t.color.hsv.h,o=s,i=I,Math.min(Math.abs(o-r),360-Math.abs(o-r))<i);var r,o,i})):t}function P({color:{hsv:t},population:n},r,s){return(r?1:function(t){const n=function(t,n,r){const s=(r-n)/2+n-n,o=t-n,i=(s-Math.abs(s-o))/s;return Math.max(0,Math.min(i,1))}(t,x,S);return-1*Math.abs(n*R)}(t.h))+n/s+t.s*t.v}function z(t,n,r,s){const o=s/r;if(o<$)return null;const i=t.filter((t=>t.population/n>=B)).filter((t=>!(o>=$+E)||function({hsv:t}){return(t.v>.85||t.v<.15)&&t.s<.2||t.v<.15||t.s<.2||t.s<.2&&t.v<.4?0:(t.v+t.s)/2}(t.color)>=A));if(0===i.length)return null;const e=F(i,n),a=function(t){return t.map((t=>t.color.hsv.h)).every((t=>t>=x&&t<=S))}(e);return v(e,(t=>P(t,a,n)))}const D={min:.3,target:.5,max:.7},N={min:0,target:.26,max:.45},q={min:.55,target:.74,max:1},k={min:.35,target:1,max:1},V={min:0,target:.3,max:.4},X={saturation:.24,luminance:.52,population:.24},O={vibrantLight:{lightness:q,saturation:k,weights:X},vibrant:{lightness:D,saturation:k,weights:X},vibrantDark:{lightness:N,saturation:k,weights:X},mutedLight:{lightness:q,saturation:V,weights:X},muted:{lightness:D,saturation:V,weights:X},mutedDark:{lightness:N,saturation:V,weights:X}},U=c.fromRGB({r:83,g:83,b:83},1),J=c.fromRGB({r:83,g:83,b:83},1),j=c.fromRGB({r:127,g:127,b:127},1);function W(t,n){const{color:{hsl:r}}=t;return r.s>=n.saturation.min&&r.s<=n.saturation.max&&r.l>=n.lightness.min&&r.l<=n.lightness.max}function K(t,n,r){const{color:{hsl:s}}=t;let o=0,i=0,e=0;return n.weights.saturation>0&&(o=n.weights.saturation*(1-Math.abs(s.s-n.saturation.target))),n.weights.luminance>0&&(i=n.weights.luminance*(1-Math.abs(s.l-n.lightness.target))),n.weights.population>0&&(e=n.weights.population*(t.population/r)),o+i+e}let Y=function(t){return t[t.ARRAY_BUFFER=0]="ARRAY_BUFFER",t[t.IMAGE_BITMAP=1]="IMAGE_BITMAP",t}({});const Q=self;const Z=t=>!function({hsl:t}){return t.l<=.05}(t)&&!function({hsl:t}){return t.l>=.95}(t)&&!function({hsl:t}){return t.h>=10&&t.h<=37&&t.s<=.82}(t)&&function({hsv:t}){return t.v>.2}(t);Q.addEventListener("message",(t=>{const[n,r]=t.data,s=function(t){if(t.source===Y.IMAGE_BITMAP){const n=t.data,r=new OffscreenCanvas(n.width,n.height).getContext("2d");return r.drawImage(n,0,0,n.width,n.height),r.getImageData(0,0,n.width,n.height).data.buffer}return t.data}(r),o=function*(t,n){const r=new Uint32Array(t),s=Math.ceil(r.length/n);for(let t=0;t<r.length;t+=s)yield r[t]}(s,2e4),i=M.fromPixels(o,{maxColors:16,filter:Z}),{visRefSwatch:e,visRefDarkSwatch:a,visRefLightSwatch:h}=function(t,n,r,s,o=O){const i=new Set,e=v(t,(t=>t.population)),a={};for(const[n,r]of Object.entries(o)){const s=v(t.filter((t=>!i.has(t.color.toString()))).filter((t=>W(t,r))),(t=>K(t,r,e?.population||1)));null!==s&&(a[n]=s,i.add(s.color.toString()))}const h=z(Object.values(a),n,r,s),u=h?c.fromColor(h.color.contrastAdjust("dark"),1):null,l=h?c.fromColor(h.color.contrastAdjust("light"),1):null;return{dominantSwatch:e,visRefSwatch:h||U,visRefDarkSwatch:u||J,visRefLightSwatch:l||j,visRefIsFallback:null===h,targetSwatches:a}}(i.swatches,i.totalPixels,i.totalColors,i.totalSaturationFromHSV);Q.postMessage([n,{colorRawJson:e.color.stringify(),colorLightJson:h.color.stringify(),colorDarkJson:a.color.stringify()}])}))})();\n',"Worker",void 0,void 0)};let l=0;async function h(t){const n=l++,r=new Promise(((t,r)=>{u.addEventListener("message",(r=>{const[o,e]=r.data;o===n&&t({colorRaw:s.Il.parse(e.colorRawJson),colorDark:s.Il.parse(e.colorDarkJson),colorLight:s.Il.parse(e.colorLightJson)})})),u.addEventListener("error",r)}));return u.postMessage([n,t],[t.data]),await r}async function f(t){let n;try{n=await async function(t){const n=new Image;return n.crossOrigin="anonymous",function(t){const n=0===t.indexOf("spotify:image:"),r=0===t.indexOf("spotify:mosaic:"),s=0===t.indexOf("spotify:localfileimage:");return n||r||s}(t)?n.src=`${o}?uri=${encodeURIComponent(t)}`:n.src=t,await n.decode(),n}(t)}catch(t){return Promise.resolve(c.ab)}const r=n.naturalWidth,s=n.naturalHeight;if("createImageBitmap"in window&&"OffscreenCanvas"in window){const t=await window.createImageBitmap(n);return await async function(t){return await h({source:e.IMAGE_BITMAP,data:t})}(t)}const a=document.createElement("canvas"),i=a.getContext("2d");return a.width=r,a.height=s,i.drawImage(n,0,0,r,s),await async function(t){return await h({source:e.ARRAY_BUFFER,data:t.data.buffer})}(i.getImageData(0,0,r,s))}},35765:(t,n,r)=>{r.d(n,{Z:()=>s});const s={wrapper:"KflyrIKeuFlbO02lH6gm",wrapperWithColorExtracted:"qWdZTWdaXPdqwCSb87wz",hidingHat:"Txlz4u73RM9Zgbe2rhEM",tagline:"Aj1dcimNye8mDxkfl2Xx",buttonWrapper:"Q8qs2J1vk9j0ZsaEEXUK",wrapperBackground:"lnrpcUtos2gCwG94AQWj"}}}]);
//# sourceMappingURL=8861.js.map
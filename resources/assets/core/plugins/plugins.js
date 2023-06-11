//
// 3rd-Party Plugins JavaScript Includes
//


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////  Mandatory Plugins Includes(do not remove or change order!)  ////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Jquery - jQuery is a popular and feature-rich JavaScript library. Learn more: https://jquery.com/
window.jQuery = window.$ = require('jquery');

// Bootstrap - The most popular framework uses as the foundation. Learn more: http://getbootstrap.com
import bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

// Popper.js - Tooltip & Popover Positioning Engine used by Bootstrap. Learn more: https://popper.js.org
import Popper from '@popperjs/core';
window.Popper = Popper;

// Wnumb - Number & Money formatting. Learn more: https://refreshless.com/wnumb/
import wNumb from 'wnumb';
window.wNumb = wNumb;

// Moment - Parse, validate, manipulate, and display dates and times in JavaScript. Learn more: https://momentjs.com/
import moment from 'moment';
window.moment = moment;

// ES6-Shim - ECMAScript 6 compatibility shims for legacy JS engines.  Learn more: https://github.com/paulmillr/es6-shim
import "es6-shim/es6-shim.min.js";

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///  Optional Plugins Includes(you can remove or add)  ///////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Apexcharts - modern charting library that helps developers to create beautiful and interactive visualizations for web pages: https://apexcharts.com/
import ApexCharts from 'apexcharts/dist/apexcharts.min.js';
window.ApexCharts = ApexCharts;

// FormValidation - Best premium validation library for JavaScript. Zero dependencies. Learn more: https://formvalidation.io/
import FormValidation from '../../core/plugins/formvalidation/dist/js/FormValidation.full.min.js';
window.FormValidation = FormValidation;
window.FormValidation.plugins.Bootstrap5 = require('../../core/plugins/formvalidation/dist/amd/plugins/Bootstrap5.js').default;

// Date Range Picker - A JavaScript component for choosing date ranges, dates and times: https://www.daterangepicker.com/
import 'bootstrap-daterangepicker/daterangepicker.js';

// Bootstrap Maxlength - This plugin integrates by default with Twitter bootstrap using badges to display the maximum length of the field where the user is inserting text: https://github.com/mimo84/bootstrap-maxlength
import 'bootstrap-maxlength/src/bootstrap-maxlength.js';
import '../../core/plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js';

// Select2 - Select2 is a jQuery based replacement for select boxes: https://select2.org/
// require('select2');
// require('../../core/js/vendors/plugins/select2.init.js');

// Flatpickr - is a lightweight and powerful datetime picker.
// require('flatpickr/dist/flatpickr.js');
// require('../../core/js/vendors/plugins/flatpickr.init.js');

// Inputmask - is a javascript library which creates an input mask: https://github.com/RobinHerbots/Inputmask
import 'inputmask/dist/inputmask.js';
import 'inputmask/dist/bindings/inputmask.binding.js';

// noUiSlider - is a lightweight range slider with multi-touch support and a ton of features. It supports non-linear ranges, requires no external dependencies: https://refreshless.com/nouislider/
import noUiSlider from 'nouislider/dist/nouislider.min.js';
window.noUiSlider = noUiSlider;

// The autosize - function accepts a single textarea element, or an array or array-like object (such as a NodeList or jQuery collection) of textarea elements: https://www.jacklmoore.com/autosize/
import autosize from 'autosize/dist/autosize.min.js';
window.autosize = autosize;

// Clipboard - Copy text to the clipboard shouldn't be hard. It shouldn't require dozens of steps to configure or hundreds of KBs to load: https://clipboardjs.com/
import ClipboardJS from 'clipboard/dist/clipboard.min.js';
window.ClipboardJS = ClipboardJS;

// DropzoneJS -  is an open source library that provides drag'n'drop file uploads with image previews: https://www.dropzonejs.com/
window.Dropzone = require('dropzone/dist/min/dropzone.min.js').default;
import '../../core/js/vendors/plugins/dropzone.init.js';

// Quill - is a free, open source WYSIWYG editor built for the modern web. Completely customize it for any need with its modular architecture and expressive API: https://quilljs.com/
import Quill from 'quill/dist/quill.js';
window.Quill = Quill;

// Tagify - Transforms an input field or a textarea into a Tags component, in an easy, customizable way, with great performance and small code footprint, exploded with features: https://github.com/yairEO/tagify
import '@yaireo/tagify/dist/tagify.polyfills.min.js';
import Tagify from '@yaireo/tagify/dist/tagify.min.js';
window.Tagify = Tagify;

// Toastr - is a Javascript library for non-blocking notifications. jQuery is required. The goal is to create a simple core library that can be customized and extended: https://github.com/CodeSeven/toastr
import toastr from 'toastr/build/toastr.min.js';
window.toastr = toastr;

// Bootstrap Session Timeout - Session timeout and keep-alive control with a nice Bootstrap warning dialog: https://github.com/orangehill/bootstrap-session-timeout
import sessionTimeout from '../../core/plugins/bootstrap-session-timeout/dist/bootstrap-session-timeout.min.js';
window.sessionTimeout = sessionTimeout;

// JQuery Idletimer - provides you a way to monitor user activity with a page: https://github.com/thorst/jquery-idletimer
import '../../core/plugins/jquery-idletimer/idle-timer.min.js';

// ES6 Promise Polyfill - This is a polyfill of the ES6 Promise: https://github.com/lahmatiy/es6-promise-polyfill
import 'es6-promise-polyfill/promise.min.js';

// Sweetalert2 - a beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes: https://sweetalert2.github.io/
window.Swal = window.swal = require('sweetalert2/dist/sweetalert2.min.js');
import '../../core/js/vendors/plugins/sweetalert2.init.js';

// CountUp.js - is a dependency-free, lightweight JavaScript class that can be used to quickly create animations that display numerical data in a more interesting way.
import countUp from 'countup.js/dist/countUp.withPolyfill.min.js';
window.countUp = countUp;

// Chart.js - Simple yet flexible JavaScript charting for designers & developers
import Chart from 'chart.js/dist/chart.js';
window.Chart = Chart;

// Tiny slider - for all purposes, inspired by Owl Carousel.
window.tns = require('tiny-slider/src/tiny-slider.js').tns;

// A lightweight script to animate scrolling to anchor links
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.js';
window.SmoothScroll = SmoothScroll;

// Axios - Promise based HTTP client for the browser and node.js
window.axios = require('axios').default;
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

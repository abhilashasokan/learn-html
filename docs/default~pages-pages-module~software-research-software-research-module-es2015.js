(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-pages-module~software-research-software-research-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js ***!
  \**********************************************************************/
/*! exports provided: CKD_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, Clipboard, ClipboardModule, PendingCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKD_COPY_TO_CLIPBOARD_CONFIG", function() { return CKD_COPY_TO_CLIPBOARD_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCopyToClipboard", function() { return CdkCopyToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingCopy", function() { return PendingCopy; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/pending-copy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a relayout. This relayout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * relayout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */

class PendingCopy {
    /**
     * @param {?} text
     * @param {?} _document
     */
    constructor(text, _document) {
        this._document = _document;
        /** @type {?} */
        const textarea = this._textarea = this._document.createElement('textarea');
        /** @type {?} */
        const styles = textarea.style;
        // Hide the element for display and accessibility. Set an
        // absolute position so the page layout isn't affected.
        styles.opacity = '0';
        styles.position = 'absolute';
        styles.left = styles.top = '-999em';
        textarea.setAttribute('aria-hidden', 'true');
        textarea.value = text;
        this._document.body.appendChild(textarea);
    }
    /**
     * Finishes copying the text.
     * @return {?}
     */
    copy() {
        /** @type {?} */
        const textarea = this._textarea;
        /** @type {?} */
        let successful = false;
        try { // Older browsers could throw if copy is not supported.
            if (textarea) {
                /** @type {?} */
                const currentFocus = (/** @type {?} */ (this._document.activeElement));
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);
                successful = this._document.execCommand('copy');
                if (currentFocus) {
                    currentFocus.focus();
                }
            }
        }
        catch (_a) {
            // Discard error.
            // Initial setting of {@code successful} will represent failure here.
        }
        return successful;
    }
    /**
     * Cleans up DOM changes used to perform the copy operation.
     * @return {?}
     */
    destroy() {
        /** @type {?} */
        const textarea = this._textarea;
        if (textarea) {
            if (textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
            }
            this._textarea = undefined;
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for copying text to the clipboard.
 */
class Clipboard {
    /**
     * @param {?} document
     */
    constructor(document) {
        this._document = document;
    }
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param {?} text The string to copy.
     * @return {?} Whether the operation was successful.
     */
    copy(text) {
        /** @type {?} */
        const pendingCopy = this.beginCopy(text);
        /** @type {?} */
        const successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
    }
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param {?} text The string to copy.
     * @return {?} the pending copy operation.
     */
    beginCopy(text) {
        return new PendingCopy(text, this._document);
    }
}
Clipboard.ɵfac = function Clipboard_Factory(t) { return new (t || Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
/** @nocollapse */
Clipboard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
/** @nocollapse */ Clipboard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Clipboard_Factory() { return new Clipboard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: Clipboard, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Clipboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/copy-to-clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object that can be used to configure the default options for `CdkCopyToClipboard`.
 * @record
 */
function CdkCopyToClipboardConfig() { }
if (false) {}
/**
 * Injection token that can be used to provide the default options to `CdkCopyToClipboard`.
 * @type {?}
 */
const CKD_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CKD_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
    /**
     * @param {?} _clipboard
     * @param {?=} _ngZone
     * @param {?=} config
     */
    constructor(_clipboard, _ngZone, config) {
        this._clipboard = _clipboard;
        this._ngZone = _ngZone;
        /**
         * Content to be copied.
         */
        this.text = '';
        /**
         * How many times to attempt to copy the text. This may be necessary for longer text, because
         * the browser needs time to fill an intermediate textarea element and copy the content.
         */
        this.attempts = 1;
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         */
        this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         * @deprecated Use `cdkCopyToClipboardCopied` instead.
         * \@breaking-change 10.0.0
         */
        this._deprecatedCopied = this.copied;
        /**
         * Copies that are currently being attempted.
         */
        this._pending = new Set();
        if (config && config.attempts != null) {
            this.attempts = config.attempts;
        }
    }
    /**
     * Copies the current text to the clipboard.
     * @param {?=} attempts
     * @return {?}
     */
    copy(attempts = this.attempts) {
        if (attempts > 1) {
            /** @type {?} */
            let remainingAttempts = attempts;
            /** @type {?} */
            const pending = this._clipboard.beginCopy(this.text);
            this._pending.add(pending);
            /** @type {?} */
            const attempt = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const successful = pending.copy();
                if (!successful && --remainingAttempts && !this._destroyed) {
                    // @breaking-change 10.0.0 Remove null check for `_ngZone`.
                    if (this._ngZone) {
                        this._currentTimeout = this._ngZone.runOutsideAngular((/**
                         * @return {?}
                         */
                        () => setTimeout(attempt, 1)));
                    }
                    else {
                        // We use 1 for the timeout since it's more predictable when flushing in unit tests.
                        this._currentTimeout = setTimeout(attempt, 1);
                    }
                }
                else {
                    this._currentTimeout = null;
                    this._pending.delete(pending);
                    pending.destroy();
                    this.copied.emit(successful);
                }
            });
            attempt();
        }
        else {
            this.copied.emit(this._clipboard.copy(this.text));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._currentTimeout) {
            clearTimeout(this._currentTimeout);
        }
        this._pending.forEach((/**
         * @param {?} copy
         * @return {?}
         */
        copy => copy.destroy()));
        this._pending.clear();
        this._destroyed = true;
    }
}
CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) { return new (t || CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CKD_COPY_TO_CLIPBOARD_CONFIG, 8)); };
CdkCopyToClipboard.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkCopyToClipboard, selectors: [["", "cdkCopyToClipboard", ""]], hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() { return ctx.copy(); });
    } }, inputs: { text: ["cdkCopyToClipboard", "text"], attempts: ["cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied", _deprecatedCopied: "copied" } });
/** @nocollapse */
CdkCopyToClipboard.ctorParameters = () => [
    { type: Clipboard },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CKD_COPY_TO_CLIPBOARD_CONFIG,] }] }
];
CdkCopyToClipboard.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkCopyToClipboard',] }],
    attempts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkCopyToClipboardAttempts',] }],
    copied: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cdkCopyToClipboardCopied',] }],
    _deprecatedCopied: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['copied',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkCopyToClipboard]',
                host: {
                    '(click)': 'copy()'
                }
            }]
    }], function () { return [{ type: Clipboard }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [CKD_COPY_TO_CLIPBOARD_CONFIG]
            }] }]; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboard']
        }], attempts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboardAttempts']
        }], copied: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkCopyToClipboardCopied']
        }], _deprecatedCopied: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['copied']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/clipboard-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClipboardModule {
}
ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClipboardModule });
ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClipboardModule, { declarations: [CdkCopyToClipboard], exports: [CdkCopyToClipboard] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CdkCopyToClipboard],
                exports: [CdkCopyToClipboard]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js ***!
  \**********************************************************************************/
/*! exports provided: NzAvatarComponent, NzAvatarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAvatarComponent", function() { return NzAvatarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAvatarModule", function() { return NzAvatarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");







/**
 * @fileoverview added by tsickle
 * Generated from: avatar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */






const _c0 = ["textEl"];
function NzAvatarComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r0.nzIcon);
} }
function NzAvatarComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function NzAvatarComponent_img_1_Template_img_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.imgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.nzSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("srcset", ctx_r1.nzSrcSet, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r1.nzAlt);
} }
function NzAvatarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r2.textStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.nzText);
} }
const NZ_CONFIG_COMPONENT_NAME = 'avatar';
class NzAvatarComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(nzConfigService, elementRef, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.platform = platform;
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.nzError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.textStyles = {};
        this.classMap = {};
        this.customSize = null;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    imgError($event) {
        this.nzError.emit($event);
        if (!$event.defaultPrevented) {
            this.hasSrc = false;
            this.hasIcon = false;
            this.hasText = false;
            if (this.nzIcon) {
                this.hasIcon = true;
            }
            else if (this.nzText) {
                this.hasText = true;
            }
            this.cdr.detectChanges();
            this.setSizeStyle();
            this.notifyCalc();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setSizeStyle();
        this.notifyCalc();
    }
    /**
     * @private
     * @return {?}
     */
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        const childrenWidth = (/** @type {?} */ (this.textEl)).nativeElement.offsetWidth;
        /** @type {?} */
        const avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: `scale(${scale}) translateX(-50%)`
        };
        if (this.customSize) {
            Object.assign(this.textStyles, {
                lineHeight: this.customSize
            });
        }
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        if (this.platform.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.calcStringSize();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setSizeStyle() {
        if (typeof this.nzSize === 'number') {
            this.customSize = `${this.nzSize}px`;
        }
        else {
            this.customSize = null;
        }
        this.cdr.markForCheck();
    }
}
NzAvatarComponent.ɵfac = function NzAvatarComponent_Factory(t) { return new (t || NzAvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
NzAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzAvatarComponent, selectors: [["nz-avatar"]], viewQuery: function NzAvatarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.textEl = _t.first);
    } }, hostVars: 22, hostBindings: function NzAvatarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.hasIcon && ctx.customSize ? ctx.nzSize / 2 : null, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-avatar", true)("ant-avatar-lg", ctx.nzSize === "large")("ant-avatar-sm", ctx.nzSize === "small")("ant-avatar-square", ctx.nzShape === "square")("ant-avatar-circle", ctx.nzShape === "circle")("ant-avatar-icon", ctx.nzIcon)("ant-avatar-image", ctx.hasSrc);
    } }, inputs: { nzShape: "nzShape", nzSize: "nzSize", nzText: "nzText", nzSrc: "nzSrc", nzSrcSet: "nzSrcSet", nzAlt: "nzAlt", nzIcon: "nzIcon" }, outputs: { nzError: "nzError" }, exportAs: ["nzAvatar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "src", "error", 4, "ngIf"], ["class", "ant-avatar-string", 3, "ngStyle", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "src", "error"], [1, "ant-avatar-string", 3, "ngStyle"], ["textEl", ""]], template: function NzAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzAvatarComponent_i_0_Template, 1, 1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzAvatarComponent_img_1_Template, 1, 3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzAvatarComponent_span_2_Template, 3, 2, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzIcon && ctx.hasIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzSrc && ctx.hasSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzText && ctx.hasText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzAvatarComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
];
NzAvatarComponent.propDecorators = {
    nzShape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSrcSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAlt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    textEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['textEl', { static: false },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NzAvatarComponent.prototype, "nzShape", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzAvatarComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzAvatarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-avatar',
                exportAs: 'nzAvatar',
                template: `
    <i nz-icon *ngIf="nzIcon && hasIcon" [nzType]="nzIcon"></i>
    <img *ngIf="nzSrc && hasSrc" [src]="nzSrc" [attr.srcset]="nzSrcSet" [attr.alt]="nzAlt" (error)="imgError($event)" />
    <span class="ant-avatar-string" #textEl [ngStyle]="textStyles" *ngIf="nzText && hasText">{{ nzText }}</span>
  `,
                host: {
                    '[class.ant-avatar]': 'true',
                    '[class.ant-avatar-lg]': `nzSize === 'large'`,
                    '[class.ant-avatar-sm]': `nzSize === 'small'`,
                    '[class.ant-avatar-square]': `nzShape === 'square'`,
                    '[class.ant-avatar-circle]': `nzShape === 'circle'`,
                    '[class.ant-avatar-icon]': `nzIcon`,
                    '[class.ant-avatar-image]': `hasSrc `,
                    '[style.width]': 'customSize',
                    '[style.height]': 'customSize',
                    '[style.line-height]': 'customSize',
                    // nzSize type is number when customSize is true
                    '[style.font-size.px]': '(hasIcon && customSize) ? $any(nzSize) / 2 : null'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }]; }, { nzShape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSrcSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAlt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], textEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['textEl', { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: avatar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzAvatarModule {
}
NzAvatarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzAvatarModule });
NzAvatarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzAvatarModule_Factory(t) { return new (t || NzAvatarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzAvatarModule, { declarations: function () { return [NzAvatarComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]; }, exports: function () { return [NzAvatarComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzAvatarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [NzAvatarComponent],
                exports: [NzAvatarComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-avatar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-avatar.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-breadcrumb.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-breadcrumb.js ***!
  \**************************************************************************************/
/*! exports provided: NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbModule, NzBreadCrumbSeparatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreadCrumbComponent", function() { return NzBreadCrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreadCrumbItemComponent", function() { return NzBreadCrumbItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreadCrumbModule", function() { return NzBreadCrumbModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreadCrumbSeparatorComponent", function() { return NzBreadCrumbSeparatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");














/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */






function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const breadcrumb_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.navigate(breadcrumb_r2.url, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", breadcrumb_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r2.label);
} }
function NzBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template, 3, 2, "nz-breadcrumb-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
} }
const _c0 = ["*"];
function NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzBreadCrumbItemComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
function NzBreadCrumbItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzBreadCrumbItemComponent_ng_container_0_i_3_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", ctx_r0.nzOverlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.nzOverlay);
} }
function NzBreadCrumbItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzBreadCrumbItemComponent_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.nzBreadCrumbComponent.nzSeparator, " ");
} }
function NzBreadCrumbItemComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzBreadCrumbItemComponent_span_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzBreadCrumbComponent.nzSeparator);
} }
function BreadcrumbOption() { }
if (false) {}
class NzBreadCrumbComponent {
    /**
     * @param {?} injector
     * @param {?} ngZone
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(injector, ngZone, cdr, elementRef, renderer) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzAutoGenerate = false;
        this.nzSeparator = '/';
        this.nzRouteLabel = 'breadcrumb';
        this.breadcrumbs = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    navigate(url, e) {
        e.preventDefault();
        this.ngZone.run((/**
         * @return {?}
         */
        () => this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]).navigateByUrl(url).then())).then();
    }
    /**
     * @private
     * @return {?}
     */
    registerRouterChange() {
        try {
            /** @type {?} */
            const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]);
            /** @type {?} */
            const activatedRoute = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]);
            router.events
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(true) // Trigger initial render.
            )
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
                this.cdr.markForCheck();
            }));
        }
        catch (e) {
            throw new Error(`${ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__["PREFIX"]} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
        }
    }
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        /** @type {?} */
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_3__["PRIMARY_OUTLET"]) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                /** @type {?} */
                const routeURL = child.snapshot.url
                    .map((/**
                 * @param {?} segment
                 * @return {?}
                 */
                segment => segment.path))
                    .filter((/**
                 * @param {?} path
                 * @return {?}
                 */
                path => path))
                    .join('/');
                /** @type {?} */
                const nextUrl = url + `/${routeURL}`;
                /** @type {?} */
                const breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                // If have data, go to generate a breadcrumb for it.
                if (routeURL && breadcrumbLabel) {
                    /** @type {?} */
                    const breadcrumb = {
                        label: breadcrumbLabel,
                        params: child.snapshot.params,
                        url: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
        return undefined;
    }
}
NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) { return new (t || NzBreadCrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NzBreadCrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzBreadCrumbComponent, selectors: [["nz-breadcrumb"]], inputs: { nzAutoGenerate: "nzAutoGenerate", nzSeparator: "nzSeparator", nzRouteLabel: "nzRouteLabel" }, exportAs: ["nzBreadcrumb"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function NzBreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzBreadCrumbComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAutoGenerate);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], NzBreadCrumbItemComponent]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzBreadCrumbComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
NzBreadCrumbComponent.propDecorators = {
    nzAutoGenerate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzRouteLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)
], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzBreadCrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'nz-breadcrumb',
                exportAs: 'nzBreadcrumb',
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
    <ng-container *ngIf="nzAutoGenerate">
      <nz-breadcrumb-item *ngFor="let breadcrumb of breadcrumbs">
        <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
      </nz-breadcrumb-item>
    </ng-container>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { nzAutoGenerate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzRouteLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzBreadCrumbItemComponent {
    /**
     * @param {?} nzBreadCrumbComponent
     */
    constructor(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
}
NzBreadCrumbItemComponent.ɵfac = function NzBreadCrumbItemComponent_Factory(t) { return new (t || NzBreadCrumbItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzBreadCrumbComponent)); };
NzBreadCrumbItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzBreadCrumbItemComponent, selectors: [["nz-breadcrumb-item"]], inputs: { nzOverlay: "nzOverlay" }, exportAs: ["nzBreadcrumbItem"], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noMenuTpl", ""], ["class", "ant-breadcrumb-separator", 4, "ngIf"], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], [1, "ant-breadcrumb-link"], [1, "ant-breadcrumb-separator"], [4, "nzStringTemplateOutlet"]], template: function NzBreadCrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzBreadCrumbItemComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzBreadCrumbItemComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzBreadCrumbItemComponent_span_3_Template, 2, 1, "span", 2);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.nzOverlay)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzBreadCrumbComponent.nzSeparator);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__["NzDropDownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzBreadCrumbItemComponent.ctorParameters = () => [
    { type: NzBreadCrumbComponent }
];
NzBreadCrumbItemComponent.propDecorators = {
    nzOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzBreadCrumbItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'nz-breadcrumb-item',
                exportAs: 'nzBreadcrumbItem',
                preserveWhitespaces: false,
                template: `
    <ng-container *ngIf="!!nzOverlay; else noMenuTpl">
      <span class="ant-breadcrumb-overlay-link" nz-dropdown [nzDropdownMenu]="nzOverlay">
        <ng-template [ngTemplateOutlet]="noMenuTpl"></ng-template>
        <i *ngIf="!!nzOverlay" nz-icon nzType="down"></i>
      </span>
    </ng-container>

    <ng-template #noMenuTpl>
      <span class="ant-breadcrumb-link">
        <ng-content></ng-content>
      </span>
    </ng-template>

    <span class="ant-breadcrumb-separator" *ngIf="nzBreadCrumbComponent.nzSeparator">
      <ng-container *nzStringTemplateOutlet="nzBreadCrumbComponent.nzSeparator">
        {{ nzBreadCrumbComponent.nzSeparator }}
      </ng-container>
    </span>
  `
            }]
    }], function () { return [{ type: NzBreadCrumbComponent }]; }, { nzOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb-separator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzBreadCrumbSeparatorComponent {
}
NzBreadCrumbSeparatorComponent.ɵfac = function NzBreadCrumbSeparatorComponent_Factory(t) { return new (t || NzBreadCrumbSeparatorComponent)(); };
NzBreadCrumbSeparatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzBreadCrumbSeparatorComponent, selectors: [["nz-breadcrumb-separator"]], exportAs: ["nzBreadcrumbSeparator"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-breadcrumb-separator"]], template: function NzBreadCrumbSeparatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzBreadCrumbSeparatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-breadcrumb-separator',
                exportAs: 'nzBreadcrumbSeparator',
                template: `
    <span class="ant-breadcrumb-separator">
      <ng-content></ng-content>
    </span>
  `
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzBreadCrumbModule {
}
NzBreadCrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzBreadCrumbModule });
NzBreadCrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzBreadCrumbModule_Factory(t) { return new (t || NzBreadCrumbModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_11__["NzOverlayModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__["NzDropDownModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzBreadCrumbModule, { declarations: function () { return [NzBreadCrumbComponent,
        NzBreadCrumbItemComponent,
        NzBreadCrumbSeparatorComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_11__["NzOverlayModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__["NzDropDownModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"]]; }, exports: function () { return [NzBreadCrumbComponent,
        NzBreadCrumbItemComponent,
        NzBreadCrumbSeparatorComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzBreadCrumbModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_11__["NzOverlayModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__["NzDropDownModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"]],
                declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
                exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-breadcrumb.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-breadcrumb.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-trans-button.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-trans-button.js ***!
  \*********************************************************************************************/
/*! exports provided: NzTransButtonDirective, NzTransButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTransButtonDirective", function() { return NzTransButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTransButtonModule", function() { return NzTransButtonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * Generated from: nz-trans-button.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class NzTransButtonDirective {
}
NzTransButtonDirective.ɵfac = function NzTransButtonDirective_Factory(t) { return new (t || NzTransButtonDirective)(); };
NzTransButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzTransButtonDirective, selectors: [["button", "nz-trans-button", ""]], hostVars: 8, hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border", "0")("background", "transparent", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"])("padding", "0")("line-height", "inherit");
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTransButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'button[nz-trans-button]',
                host: {
                    '[style.border]': '"0"',
                    '[style.background]': '"transparent"',
                    '[style.padding]': '"0"',
                    '[style.line-height]': '"inherit"'
                }
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: nz-trans-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTransButtonModule {
}
NzTransButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzTransButtonModule });
NzTransButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzTransButtonModule_Factory(t) { return new (t || NzTransButtonModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzTransButtonModule, { declarations: function () { return [NzTransButtonDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [NzTransButtonDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTransButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NzTransButtonDirective],
                exports: [NzTransButtonDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-trans-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-trans-button.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js ***!
  \********************************************************************************/
/*! exports provided: NzColDirective, NzGridModule, NzRowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzColDirective", function() { return NzColDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzGridModule", function() { return NzGridModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRowDirective", function() { return NzRowDirective; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









/**
 * @fileoverview added by tsickle
 * Generated from: row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




class NzRowDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} breakpointService
     */
    constructor(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.breakpointService = breakpointService;
        /**
         * @deprecated don't need nzType="flex" after 9.0
         */
        this.nzType = 'flex';
        this.nzAlign = null;
        this.nzJustify = null;
        this.nzGutter = null;
        this.actualGutter$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * @return {?}
     */
    getGutter() {
        /** @type {?} */
        const results = [null, null];
        /** @type {?} */
        const gutter = this.nzGutter || 0;
        /** @type {?} */
        const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
        normalizedGutter.forEach((/**
         * @param {?} g
         * @param {?} index
         * @return {?}
         */
        (g, index) => {
            if (typeof g === 'object' && g !== null) {
                results[index] = null;
                Object.keys(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["gridResponsiveMap"]).map((/**
                 * @param {?} screen
                 * @return {?}
                 */
                (screen) => {
                    /** @type {?} */
                    const bp = (/** @type {?} */ (screen));
                    if (this.mediaMatcher.matchMedia(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["gridResponsiveMap"][bp]).matches && g[bp]) {
                        results[index] = (/** @type {?} */ ((/** @type {?} */ (g))[bp]));
                    }
                }));
            }
            else {
                results[index] = g || null;
            }
        }));
        return results;
    }
    /**
     * @return {?}
     */
    setGutterStyle() {
        const [horizontalGutter, verticalGutter] = this.getGutter();
        this.actualGutter$.next([horizontalGutter, verticalGutter]);
        /** @type {?} */
        const renderGutter = (/**
         * @param {?} name
         * @param {?} gutter
         * @return {?}
         */
        (name, gutter) => {
            /** @type {?} */
            const nativeElement = this.elementRef.nativeElement;
            if (gutter !== null) {
                this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
            }
        });
        renderGutter('margin-left', horizontalGutter);
        renderGutter('margin-right', horizontalGutter);
        renderGutter('margin-top', verticalGutter);
        renderGutter('margin-bottom', verticalGutter);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setGutterStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzGutter) {
            this.setGutterStyle();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["gridResponsiveMap"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.setGutterStyle();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzRowDirective.ɵfac = function NzRowDirective_Factory(t) { return new (t || NzRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["NzBreakpointService"])); };
NzRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzRowDirective, selectors: [["", "nz-row", ""], ["nz-row"], ["nz-form-item"]], hostVars: 18, hostBindings: function NzRowDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-row", true)("ant-row-top", ctx.nzAlign === "top")("ant-row-middle", ctx.nzAlign === "middle")("ant-row-bottom", ctx.nzAlign === "bottom")("ant-row-start", ctx.nzJustify === "start")("ant-row-end", ctx.nzJustify === "end")("ant-row-center", ctx.nzJustify === "center")("ant-row-space-around", ctx.nzJustify === "space-around")("ant-row-space-between", ctx.nzJustify === "space-between");
    } }, inputs: { nzType: "nzType", nzAlign: "nzAlign", nzJustify: "nzJustify", nzGutter: "nzGutter" }, exportAs: ["nzRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NzRowDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["NzBreakpointService"] }
];
NzRowDirective.propDecorators = {
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzJustify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzGutter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzRowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nz-row],nz-row,nz-form-item',
                exportAs: 'nzRow',
                host: {
                    '[class.ant-row]': `true`,
                    '[class.ant-row-top]': `nzAlign === 'top'`,
                    '[class.ant-row-middle]': `nzAlign === 'middle'`,
                    '[class.ant-row-bottom]': `nzAlign === 'bottom'`,
                    '[class.ant-row-start]': `nzJustify === 'start'`,
                    '[class.ant-row-end]': `nzJustify === 'end'`,
                    '[class.ant-row-center]': `nzJustify === 'center'`,
                    '[class.ant-row-space-around]': `nzJustify === 'space-around'`,
                    '[class.ant-row-space-between]': `nzJustify === 'space-between'`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__["NzBreakpointService"] }]; }, { nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAlign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzJustify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzGutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: col.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function EmbeddedProperty() { }
if (false) {}
class NzColDirective {
    /**
     * @param {?} elementRef
     * @param {?} nzRowDirective
     * @param {?} renderer
     */
    constructor(elementRef, nzRowDirective, renderer) {
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.classMap = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.hostFlexStyle = null;
        this.nzFlex = null;
        this.nzSpan = null;
        this.nzOrder = null;
        this.nzOffset = null;
        this.nzPush = null;
        this.nzPull = null;
        this.nzXs = null;
        this.nzSm = null;
        this.nzMd = null;
        this.nzLg = null;
        this.nzXl = null;
        this.nzXXl = null;
    }
    /**
     * @return {?}
     */
    setHostClassMap() {
        /** @type {?} */
        const hostClassMap = Object.assign({ ['ant-col']: true, [`ant-col-${this.nzSpan}`]: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["isNotNil"])(this.nzSpan), [`ant-col-order-${this.nzOrder}`]: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["isNotNil"])(this.nzOrder), [`ant-col-offset-${this.nzOffset}`]: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["isNotNil"])(this.nzOffset), [`ant-col-pull-${this.nzPull}`]: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["isNotNil"])(this.nzPull), [`ant-col-push-${this.nzPush}`]: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["isNotNil"])(this.nzPush) }, this.generateClass());
        for (const i in this.classMap) {
            if (this.classMap.hasOwnProperty(i)) {
                this.renderer.removeClass(this.elementRef.nativeElement, i);
            }
        }
        this.classMap = Object.assign({}, hostClassMap);
        for (const i in this.classMap) {
            if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
                this.renderer.addClass(this.elementRef.nativeElement, i);
            }
        }
    }
    /**
     * @return {?}
     */
    setHostFlexStyle() {
        this.hostFlexStyle = this.parseFlex(this.nzFlex);
    }
    /**
     * @param {?} flex
     * @return {?}
     */
    parseFlex(flex) {
        if (typeof flex === 'number') {
            return `${flex} ${flex} auto`;
        }
        else if (typeof flex === 'string') {
            if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
                return `0 0 ${flex}`;
            }
        }
        return flex;
    }
    /**
     * @return {?}
     */
    generateClass() {
        /** @type {?} */
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        const listClassMap = {};
        listOfSizeInputName.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            /** @type {?} */
            const sizeName = name.replace('nz', '').toLowerCase();
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["isNotNil"])(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
                }
                else {
                    /** @type {?} */
                    const embedded = (/** @type {?} */ (this[name]));
                    /** @type {?} */
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach((/**
                     * @param {?} prefix
                     * @return {?}
                     */
                    prefix => {
                        /** @type {?} */
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["isNotNil"])(embedded[prefix]);
                    }));
                }
            }
        }));
        return listClassMap;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setHostClassMap();
        this.setHostFlexStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setHostClassMap();
        const { nzFlex } = changes;
        if (nzFlex) {
            this.setHostFlexStyle();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ([horizontalGutter, verticalGutter]) => {
                /** @type {?} */
                const renderGutter = (/**
                 * @param {?} name
                 * @param {?} gutter
                 * @return {?}
                 */
                (name, gutter) => {
                    /** @type {?} */
                    const nativeElement = this.elementRef.nativeElement;
                    if (gutter !== null) {
                        this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
                    }
                });
                renderGutter('padding-left', horizontalGutter);
                renderGutter('padding-right', horizontalGutter);
                renderGutter('padding-top', verticalGutter);
                renderGutter('padding-bottom', verticalGutter);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzColDirective.ɵfac = function NzColDirective_Factory(t) { return new (t || NzColDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzRowDirective, 9), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"])); };
NzColDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzColDirective, selectors: [["", "nz-col", ""], ["nz-col"], ["nz-form-control"], ["nz-form-label"]], hostVars: 2, hostBindings: function NzColDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("flex", ctx.hostFlexStyle);
    } }, inputs: { nzFlex: "nzFlex", nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, exportAs: ["nzCol"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NzColDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: NzRowDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
];
NzColDirective.propDecorators = {
    nzFlex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSpan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPush: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzXXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzColDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nz-col],nz-col,nz-form-control,nz-form-label',
                exportAs: 'nzCol',
                host: {
                    '[style.flex]': 'hostFlexStyle'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: NzRowDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }]; }, { nzFlex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSpan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPush: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPull: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzXs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzLg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzXl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzXXl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: grid.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzGridModule {
}
NzGridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzGridModule });
NzGridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzGridModule_Factory(t) { return new (t || NzGridModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzGridModule, { declarations: function () { return [NzColDirective,
        NzRowDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]; }, exports: function () { return [NzColDirective,
        NzRowDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzGridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [NzColDirective, NzRowDirective],
                exports: [NzColDirective, NzRowDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-grid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-grid.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js ***!
  \*********************************************************************************/
/*! exports provided: NzAutosizeDirective, NzInputDirective, NzInputGroupComponent, NzInputGroupSlotComponent, NzInputGroupWhitSuffixOrPrefixDirective, NzInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAutosizeDirective", function() { return NzAutosizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputDirective", function() { return NzInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputGroupComponent", function() { return NzInputGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputGroupSlotComponent", function() { return NzInputGroupSlotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputGroupWhitSuffixOrPrefixDirective", function() { return NzInputGroupWhitSuffixOrPrefixDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputModule", function() { return NzInputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");













/**
 * @fileoverview added by tsickle
 * Generated from: input.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */









function NzInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 7);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r7.nzAddOnBeforeIcon)("template", ctx_r7.nzAddOnBefore);
} }
function NzInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) { }
function NzInputGroupComponent_span_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function NzInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 7);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r9.nzAddOnAfterIcon)("template", ctx_r9.nzAddOnAfter);
} }
function NzInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzInputGroupComponent_span_0_span_2_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.nzAddOnBefore || ctx_r0.nzAddOnBeforeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isAffix)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.nzAddOnAfter || ctx_r0.nzAddOnAfterIcon);
} }
function NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function NzInputGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isAffix)("ngIfElse", _r5);
} }
function NzInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 13);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r13.nzPrefixIcon)("template", ctx_r13.nzPrefix);
} }
function NzInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function NzInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 14);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r15.nzSuffixIcon)("template", ctx_r15.nzSuffix);
} }
function NzInputGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzInputGroupComponent_ng_template_3_span_2_Template, 1, 2, "span", 12);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.nzPrefix || ctx_r4.nzPrefixIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.nzSuffix || ctx_r4.nzSuffixIcon);
} }
function NzInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
const _c1 = ["nz-input-group-slot", ""];
function NzInputGroupSlotComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r0.icon);
} }
function NzInputGroupSlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.template);
} }
class NzInputDirective {
    /**
     * @param {?} ngControl
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(ngControl, renderer, elementRef) {
        this.ngControl = ngControl;
        this.nzSize = 'default';
        this._disabled = false;
        this.disabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value != null && `${value}` !== 'false';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        var _a;
        if (this.ngControl) {
            (_a = this.ngControl.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @return {?}
             */
            () => this.ngControl.disabled !== null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                this.disabled$.next((/** @type {?} */ (this.ngControl.disabled)));
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { disabled } = changes;
        if (disabled) {
            this.disabled$.next(this.disabled);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzInputDirective.ɵfac = function NzInputDirective_Factory(t) { return new (t || NzInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
NzInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzInputDirective, selectors: [["input", "nz-input", ""], ["textarea", "nz-input", ""]], hostVars: 7, hostBindings: function NzInputDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-input-disabled", ctx.disabled)("ant-input-lg", ctx.nzSize === "large")("ant-input-sm", ctx.nzSize === "small");
    } }, inputs: { nzSize: "nzSize", disabled: "disabled" }, exportAs: ["nzInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NzInputDirective.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
NzInputDirective.propDecorators = {
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: input-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzInputGroupWhitSuffixOrPrefixDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
NzInputGroupWhitSuffixOrPrefixDirective.ɵfac = function NzInputGroupWhitSuffixOrPrefixDirective_Factory(t) { return new (t || NzInputGroupWhitSuffixOrPrefixDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
NzInputGroupWhitSuffixOrPrefixDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzInputGroupWhitSuffixOrPrefixDirective, selectors: [["nz-input-group", "nzSuffix", ""], ["nz-input-group", "nzPrefix", ""]] });
/** @nocollapse */
NzInputGroupWhitSuffixOrPrefixDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
if (false) {}
class NzInputGroupComponent {
    /**
     * @param {?} focusMonitor
     * @param {?} elementRef
     * @param {?} cdr
     */
    constructor(focusMonitor, elementRef, cdr) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.nzAddOnBeforeIcon = null;
        this.nzAddOnAfterIcon = null;
        this.nzPrefixIcon = null;
        this.nzSuffixIcon = null;
        this.nzSize = 'default';
        this.nzSearch = false;
        this.nzCompact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.focused = false;
        this.disabled = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * @return {?}
     */
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.nzSize = this.nzSize)));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenInputSize();
        /** @type {?} */
        const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(...[listOfInputChange$, ...list.map((/**
                 * @param {?} input
                 * @return {?}
                 */
                (input) => input.disabled$))]);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])((/**
         * @return {?}
         */
        () => listOfInputChange$)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} list
         * @return {?}
         */
        list => list.some((/**
         * @param {?} input
         * @return {?}
         */
        (input) => input.disabled)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} disabled
         * @return {?}
         */
        disabled => {
            this.disabled = disabled;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzSize, nzSuffix, nzPrefix, nzPrefixIcon, nzSuffixIcon, nzAddOnAfter, nzAddOnBefore, nzAddOnAfterIcon, nzAddOnBeforeIcon } = changes;
        if (nzSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.nzSize === 'large';
            this.isSmall = this.nzSize === 'small';
        }
        if (nzSuffix || nzPrefix || nzPrefixIcon || nzSuffixIcon) {
            this.isAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
        }
        if (nzAddOnAfter || nzAddOnBefore || nzAddOnAfterIcon || nzAddOnBeforeIcon) {
            this.isAddOn = !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzInputGroupComponent.ɵfac = function NzInputGroupComponent_Factory(t) { return new (t || NzInputGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
NzInputGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzInputGroupComponent, selectors: [["nz-input-group"]], contentQueries: function NzInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzInputDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listOfNzInputDirective = _t);
    } }, hostVars: 32, hostBindings: function NzInputGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-input-group-compact", ctx.nzCompact)("ant-input-search-enter-button", ctx.nzSearch)("ant-input-search", ctx.nzSearch)("ant-input-search-sm", ctx.nzSearch && ctx.isSmall)("ant-input-search-large", ctx.nzSearch && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
    } }, inputs: { nzAddOnBeforeIcon: "nzAddOnBeforeIcon", nzAddOnAfterIcon: "nzAddOnAfterIcon", nzPrefixIcon: "nzPrefixIcon", nzSuffixIcon: "nzSuffixIcon", nzSize: "nzSize", nzSearch: "nzSearch", nzCompact: "nzCompact", nzAddOnBefore: "nzAddOnBefore", nzAddOnAfter: "nzAddOnAfter", nzPrefix: "nzPrefix", nzSuffix: "nzSuffix" }, exportAs: ["nzInputGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template"]], template: function NzInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzInputGroupComponent_span_0_Template, 4, 4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAddOn)("ngIfElse", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], NzInputGroupSlotComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzInputGroupComponent.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
NzInputGroupComponent.propDecorators = {
    listOfNzInputDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [NzInputDirective,] }],
    nzAddOnBeforeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAddOnAfterIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPrefixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSuffixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAddOnBefore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAddOnAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPrefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSuffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCompact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzInputGroupComponent.prototype, "nzSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzInputGroupComponent.prototype, "nzCompact", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'input[nz-input],textarea[nz-input]',
                exportAs: 'nzInput',
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-lg]': `nzSize === 'large'`,
                    '[class.ant-input-sm]': `nzSize === 'small'`,
                    '[attr.disabled]': 'disabled || null'
                }
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzInputGroupWhitSuffixOrPrefixDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `nz-input-group[nzSuffix], nz-input-group[nzPrefix]`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzInputGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-input-group',
                exportAs: 'nzInputGroup',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="nzAddOnBefore || nzAddOnBeforeIcon"
        nz-input-group-slot
        type="addon"
        [icon]="nzAddOnBeforeIcon"
        [template]="nzAddOnBefore"
      >
      </span>
      <span
        *ngIf="isAffix; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="nzAddOnAfter || nzAddOnAfterIcon"
        nz-input-group-slot
        type="addon"
        [icon]="nzAddOnAfterIcon"
        [template]="nzAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span *ngIf="nzPrefix || nzPrefixIcon" nz-input-group-slot type="prefix" [icon]="nzPrefixIcon" [template]="nzPrefix"></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span *ngIf="nzSuffix || nzSuffixIcon" nz-input-group-slot type="suffix" [icon]="nzSuffixIcon" [template]="nzSuffix"></span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-input-group-compact]': `nzCompact`,
                    '[class.ant-input-search-enter-button]': `nzSearch`,
                    '[class.ant-input-search]': `nzSearch`,
                    '[class.ant-input-search-sm]': `nzSearch && isSmall`,
                    '[class.ant-input-search-large]': `nzSearch && isLarge`,
                    '[class.ant-input-group-wrapper]': `isAddOn`,
                    '[class.ant-input-group-wrapper-lg]': `isAddOn && isLarge`,
                    '[class.ant-input-group-wrapper-sm]': `isAddOn && isSmall`,
                    '[class.ant-input-affix-wrapper]': `isAffix && !isAddOn`,
                    '[class.ant-input-affix-wrapper-focused]': `isAffix && focused`,
                    '[class.ant-input-affix-wrapper-disabled]': `isAffix && disabled`,
                    '[class.ant-input-affix-wrapper-lg]': `isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-affix-wrapper-sm]': `isAffix && !isAddOn && isSmall`,
                    '[class.ant-input-group]': `!isAffix && !isAddOn`,
                    '[class.ant-input-group-lg]': `!isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-group-sm]': `!isAffix && !isAddOn && isSmall`
                }
            }]
    }], function () { return [{ type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { nzAddOnBeforeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAddOnAfterIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPrefixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSuffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCompact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], listOfNzInputDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [NzInputDirective]
        }], nzAddOnBefore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAddOnAfter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPrefix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSuffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: autosize.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AutoSizeType() { }
if (false) {}
class NzAutosizeDirective {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} resizeService
     */
    constructor(elementRef, ngZone, platform, resizeService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.resizeService = resizeService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.maxHeight = null;
        this.minHeight = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.inputGap = 10;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutosize(value) {
        /** @type {?} */
        const isAutoSizeType = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            return typeof data !== 'string' && typeof data !== 'boolean' && (!!data.maxRows || !!data.minRows);
        });
        if (typeof value === 'string') {
            this.autosize = true;
        }
        else if (isAutoSizeType(value)) {
            this.autosize = value;
            this.minRows = value.minRows;
            this.maxRows = value.maxRows;
            this.maxHeight = this.setMaxHeight();
            this.minHeight = this.setMinHeight();
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    resizeToFitContent(force = false) {
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        /** @type {?} */
        const textarea = (/** @type {?} */ (this.el));
        /** @type {?} */
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        /** @type {?} */
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('nz-textarea-autosize-measuring');
        textarea.placeholder = '';
        /** @type {?} */
        let height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
        if (this.maxHeight !== null && height > this.maxHeight) {
            height = (/** @type {?} */ (this.maxHeight));
        }
        if (this.minHeight !== null && height < this.minHeight) {
            height = (/** @type {?} */ (this.minHeight));
        }
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove('nz-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => requestAnimationFrame((/**
             * @return {?}
             */
            () => {
                const { selectionStart, selectionEnd } = textarea;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!this.destroy$.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }))));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    }
    /**
     * @private
     * @return {?}
     */
    cacheTextareaLineHeight() {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        /** @type {?} */
        const textareaClone = (/** @type {?} */ (this.el.cloneNode(false)));
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        (/** @type {?} */ (this.el.parentNode)).appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
        (/** @type {?} */ (this.el.parentNode)).removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.maxHeight = this.setMaxHeight();
        this.minHeight = this.setMinHeight();
    }
    /**
     * @return {?}
     */
    setMinHeight() {
        /** @type {?} */
        const minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
        if (minHeight !== null) {
            this.el.style.minHeight = `${minHeight}px`;
        }
        return minHeight;
    }
    /**
     * @return {?}
     */
    setMaxHeight() {
        /** @type {?} */
        const maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
        if (maxHeight !== null) {
            this.el.style.maxHeight = `${maxHeight}px`;
        }
        return maxHeight;
    }
    /**
     * @return {?}
     */
    noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.resizeService
                .subscribe()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => this.resizeToFitContent(true)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
}
NzAutosizeDirective.ɵfac = function NzAutosizeDirective_Factory(t) { return new (t || NzAutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzResizeService"])); };
NzAutosizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzAutosizeDirective, selectors: [["textarea", "nzAutosize", ""]], hostAttrs: ["rows", "1"], hostBindings: function NzAutosizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function NzAutosizeDirective_input_HostBindingHandler() { return ctx.noopInputHandler(); });
    } }, inputs: { nzAutosize: "nzAutosize" }, exportAs: ["nzAutosize"] });
/** @nocollapse */
NzAutosizeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzResizeService"] }
];
NzAutosizeDirective.propDecorators = {
    nzAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzAutosizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'textarea[nzAutosize]',
                exportAs: 'nzAutosize',
                host: {
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    rows: '1',
                    '(input)': 'noopInputHandler()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzResizeService"] }]; }, { nzAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: input-group-slot.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
}
NzInputGroupSlotComponent.ɵfac = function NzInputGroupSlotComponent_Factory(t) { return new (t || NzInputGroupSlotComponent)(); };
NzInputGroupSlotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzInputGroupSlotComponent, selectors: [["", "nz-input-group-slot", ""]], hostVars: 6, hostBindings: function NzInputGroupSlotComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
    } }, inputs: { icon: "icon", type: "type", template: "template" }, attrs: _c1, decls: 2, vars: 2, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function NzInputGroupSlotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.template);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzInputGroupSlotComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzInputGroupSlotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: '[nz-input-group-slot]',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                host: {
                    '[class.ant-input-group-addon]': `type === 'addon'`,
                    '[class.ant-input-prefix]': `type === 'prefix'`,
                    '[class.ant-input-suffix]': `type === 'suffix'`
                }
            }]
    }], function () { return []; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzInputModule {
}
NzInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzInputModule });
NzInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzInputModule_Factory(t) { return new (t || NzInputModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzInputModule, { declarations: function () { return [NzInputDirective,
        NzInputGroupComponent,
        NzAutosizeDirective,
        NzInputGroupSlotComponent,
        NzInputGroupWhitSuffixOrPrefixDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]; }, exports: function () { return [NzInputDirective,
        NzInputGroupComponent,
        NzAutosizeDirective,
        NzInputGroupWhitSuffixOrPrefixDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    NzInputDirective,
                    NzInputGroupComponent,
                    NzAutosizeDirective,
                    NzInputGroupSlotComponent,
                    NzInputGroupWhitSuffixOrPrefixDirective
                ],
                exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupWhitSuffixOrPrefixDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-input.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-page-header.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-page-header.js ***!
  \***************************************************************************************/
/*! exports provided: NzPageHeaderAvatarDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderModule, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderAvatarDirective", function() { return NzPageHeaderAvatarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderBreadcrumbDirective", function() { return NzPageHeaderBreadcrumbDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderComponent", function() { return NzPageHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderContentDirective", function() { return NzPageHeaderContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderExtraDirective", function() { return NzPageHeaderExtraDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderFooterDirective", function() { return NzPageHeaderFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderModule", function() { return NzPageHeaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderSubtitleDirective", function() { return NzPageHeaderSubtitleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderTagDirective", function() { return NzPageHeaderTagDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderTitleDirective", function() { return NzPageHeaderTitleDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/resize-observers */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-resize-observers.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











/**
 * @fileoverview added by tsickle
 * Generated from: page-header-cells.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */







function NzPageHeaderComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const backIcon_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", backIcon_r6 || "arrow-left");
} }
function NzPageHeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzPageHeaderComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPageHeaderComponent_div_3_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzBackIcon);
} }
function NzPageHeaderComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.nzTitle);
} }
function NzPageHeaderComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPageHeaderComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzTitle);
} }
function NzPageHeaderComponent_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 6, ["*ngIf", "!nzTitle"]);
} }
function NzPageHeaderComponent_span_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.nzSubtitle);
} }
function NzPageHeaderComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPageHeaderComponent_span_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzSubtitle);
} }
function NzPageHeaderComponent_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 7, ["*ngIf", "!nzSubtitle"]);
} }
const _c0 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
const _c1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
class NzPageHeaderTitleDirective {
}
NzPageHeaderTitleDirective.ɵfac = function NzPageHeaderTitleDirective_Factory(t) { return new (t || NzPageHeaderTitleDirective)(); };
NzPageHeaderTitleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzPageHeaderTitleDirective, selectors: [["nz-page-header-title"], ["", "nz-page-header-title", ""]], hostAttrs: [1, "ant-page-header-heading-title"], exportAs: ["nzPageHeaderTitle"] });
class NzPageHeaderSubtitleDirective {
}
NzPageHeaderSubtitleDirective.ɵfac = function NzPageHeaderSubtitleDirective_Factory(t) { return new (t || NzPageHeaderSubtitleDirective)(); };
NzPageHeaderSubtitleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzPageHeaderSubtitleDirective, selectors: [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]], hostAttrs: [1, "ant-page-header-heading-sub-title"], exportAs: ["nzPageHeaderSubtitle"] });
class NzPageHeaderContentDirective {
}
NzPageHeaderContentDirective.ɵfac = function NzPageHeaderContentDirective_Factory(t) { return new (t || NzPageHeaderContentDirective)(); };
NzPageHeaderContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzPageHeaderContentDirective, selectors: [["nz-page-header-content"], ["", "nz-page-header-content", ""]], hostAttrs: [1, "ant-page-header-content"], exportAs: ["nzPageHeaderContent"] });
class NzPageHeaderTagDirective {
}
NzPageHeaderTagDirective.ɵfac = function NzPageHeaderTagDirective_Factory(t) { return new (t || NzPageHeaderTagDirective)(); };
NzPageHeaderTagDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzPageHeaderTagDirective, selectors: [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], hostAttrs: [1, "ant-page-header-heading-tags"], exportAs: ["nzPageHeaderTags"] });
class NzPageHeaderExtraDirective {
}
NzPageHeaderExtraDirective.ɵfac = function NzPageHeaderExtraDirective_Factory(t) { return new (t || NzPageHeaderExtraDirective)(); };
NzPageHeaderExtraDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzPageHeaderExtraDirective, selectors: [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], hostAttrs: [1, "ant-page-header-heading-extra"], exportAs: ["nzPageHeaderExtra"] });
class NzPageHeaderFooterDirective {
}
NzPageHeaderFooterDirective.ɵfac = function NzPageHeaderFooterDirective_Factory(t) { return new (t || NzPageHeaderFooterDirective)(); };
NzPageHeaderFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzPageHeaderFooterDirective, selectors: [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], hostAttrs: [1, "ant-page-header-footer"], exportAs: ["nzPageHeaderFooter"] });
class NzPageHeaderBreadcrumbDirective {
}
NzPageHeaderBreadcrumbDirective.ɵfac = function NzPageHeaderBreadcrumbDirective_Factory(t) { return new (t || NzPageHeaderBreadcrumbDirective)(); };
NzPageHeaderBreadcrumbDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzPageHeaderBreadcrumbDirective, selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], exportAs: ["nzPageHeaderBreadcrumb"] });
class NzPageHeaderAvatarDirective {
}
NzPageHeaderAvatarDirective.ɵfac = function NzPageHeaderAvatarDirective_Factory(t) { return new (t || NzPageHeaderAvatarDirective)(); };
NzPageHeaderAvatarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzPageHeaderAvatarDirective, selectors: [["nz-avatar", "nz-page-header-avatar", ""]], exportAs: ["nzPageHeaderAvatar"] });

/**
 * @fileoverview added by tsickle
 * Generated from: page-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
class NzPageHeaderComponent {
    /**
     * @param {?} location
     * @param {?} nzConfigService
     * @param {?} elementRef
     * @param {?} nzResizeObserver
     * @param {?} cdr
     */
    constructor(location, nzConfigService, elementRef, nzResizeObserver, cdr) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.nzResizeObserver = nzResizeObserver;
        this.cdr = cdr;
        this.nzBackIcon = null;
        this.nzGhost = true;
        this.nzBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.compact = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.nzResizeObserver
            .observe(this.elementRef)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([entry]) => entry.contentRect.width)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.compact = width < 768;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    onBack() {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            if (!this.location) {
                throw new Error(`${ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_6__["PREFIX"]} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);
            }
            this.location.back();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzPageHeaderComponent.ɵfac = function NzPageHeaderComponent_Factory(t) { return new (t || NzPageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_7__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NzPageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzPageHeaderComponent, selectors: [["nz-page-header"]], contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzPageHeaderFooterDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzPageHeaderBreadcrumbDirective, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzPageHeaderFooter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
    } }, hostAttrs: [1, "ant-page-header"], hostVars: 8, hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb)("ant-page-header-compact", ctx.compact);
    } }, inputs: { nzBackIcon: "nzBackIcon", nzGhost: "nzGhost", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle" }, outputs: { nzBack: "nzBack" }, exportAs: ["nzPageHeader"], ngContentSelectors: _c1, decls: 13, vars: 5, consts: [[1, "ant-page-header-heading"], [1, "ant-page-header-heading-left"], ["class", "ant-page-header-back", 3, "click", 4, "ngIf"], ["class", "ant-page-header-heading-title", 4, "ngIf"], [4, "ngIf"], ["class", "ant-page-header-heading-sub-title", 4, "ngIf"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "ant-page-header-heading-title"], [1, "ant-page-header-heading-sub-title"]], template: function NzPageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzPageHeaderComponent_div_3_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NzPageHeaderComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NzPageHeaderComponent_6_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NzPageHeaderComponent_span_7_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NzPageHeaderComponent_8_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](11, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](12, 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzBackIcon !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzSubtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nzSubtitle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzPageHeaderComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_7__["NzResizeObserver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
NzPageHeaderComponent.propDecorators = {
    nzBackIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzGhost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzPageHeaderFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NzPageHeaderFooterDirective, { static: false },] }],
    nzPageHeaderBreadcrumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Boolean)
], NzPageHeaderComponent.prototype, "nzGhost", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderTitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'nz-page-header-title, [nz-page-header-title]',
                exportAs: 'nzPageHeaderTitle',
                host: {
                    class: 'ant-page-header-heading-title'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderSubtitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'nz-page-header-subtitle, [nz-page-header-subtitle]',
                exportAs: 'nzPageHeaderSubtitle',
                host: {
                    class: 'ant-page-header-heading-sub-title'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'nz-page-header-content, [nz-page-header-content]',
                exportAs: 'nzPageHeaderContent',
                host: {
                    class: 'ant-page-header-content'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderTagDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'nz-page-header-tags, [nz-page-header-tags]',
                exportAs: 'nzPageHeaderTags',
                host: {
                    class: 'ant-page-header-heading-tags'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderExtraDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'nz-page-header-extra, [nz-page-header-extra]',
                exportAs: 'nzPageHeaderExtra',
                host: {
                    class: 'ant-page-header-heading-extra'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'nz-page-header-footer, [nz-page-header-footer]',
                exportAs: 'nzPageHeaderFooter',
                host: {
                    class: 'ant-page-header-footer'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderBreadcrumbDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'nz-breadcrumb[nz-page-header-breadcrumb]',
                exportAs: 'nzPageHeaderBreadcrumb'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderAvatarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'nz-avatar[nz-page-header-avatar]',
                exportAs: 'nzPageHeaderAvatar'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                template: `
    <ng-content select="nz-breadcrumb[nz-page-header-breadcrumb]"></ng-content>

    <div class="ant-page-header-heading">
      <div class="ant-page-header-heading-left">
        <!--back-->
        <div *ngIf="nzBackIcon !== null" (click)="onBack()" class="ant-page-header-back">
          <div role="button" tabindex="0" class="ant-page-header-back-button">
            <ng-container *nzStringTemplateOutlet="nzBackIcon; let backIcon">
              <i nz-icon [nzType]="backIcon || 'arrow-left'" nzTheme="outline"></i>
            </ng-container>
          </div>
        </div>
        <!--avatar-->
        <ng-content select="nz-avatar[nz-page-header-avatar]"></ng-content>
        <!--title-->
        <span class="ant-page-header-heading-title" *ngIf="nzTitle">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzTitle" select="nz-page-header-title, [nz-page-header-title]"></ng-content>
        <!--subtitle-->
        <span class="ant-page-header-heading-sub-title" *ngIf="nzSubtitle">
          <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzSubtitle" select="nz-page-header-subtitle, [nz-page-header-subtitle]"></ng-content>
        <ng-content select="nz-page-header-tags, [nz-page-header-tags]"></ng-content>
      </div>

      <ng-content select="nz-page-header-extra, [nz-page-header-extra]"></ng-content>
    </div>

    <ng-content select="nz-page-header-content, [nz-page-header-content]"></ng-content>
    <ng-content select="nz-page-header-footer, [nz-page-header-footer]"></ng-content>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb',
                    '[class.ant-page-header-compact]': 'compact'
                }
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_7__["NzResizeObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { nzBackIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzGhost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPageHeaderFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NzPageHeaderFooterDirective, { static: false }]
        }], nzPageHeaderBreadcrumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NzPageHeaderBreadcrumbDirective, { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: page-header.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NzPageHeaderCells = [
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderContentDirective,
    NzPageHeaderTagDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderFooterDirective,
    NzPageHeaderBreadcrumbDirective,
    NzPageHeaderAvatarDirective
];
class NzPageHeaderModule {
}
NzPageHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzPageHeaderModule });
NzPageHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzPageHeaderModule_Factory(t) { return new (t || NzPageHeaderModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzPageHeaderModule, { declarations: function () { return [NzPageHeaderComponent,
        NzPageHeaderTitleDirective,
        NzPageHeaderSubtitleDirective,
        NzPageHeaderContentDirective,
        NzPageHeaderTagDirective,
        NzPageHeaderExtraDirective,
        NzPageHeaderFooterDirective,
        NzPageHeaderBreadcrumbDirective,
        NzPageHeaderAvatarDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"]]; }, exports: function () { return [NzPageHeaderComponent,
        NzPageHeaderTitleDirective,
        NzPageHeaderSubtitleDirective,
        NzPageHeaderContentDirective,
        NzPageHeaderTagDirective,
        NzPageHeaderExtraDirective,
        NzPageHeaderFooterDirective,
        NzPageHeaderBreadcrumbDirective,
        NzPageHeaderAvatarDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPageHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"]],
                exports: [NzPageHeaderComponent, NzPageHeaderCells],
                declarations: [NzPageHeaderComponent, NzPageHeaderCells]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-page-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-page-header.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js ***!
  \*******************************************************************************/
/*! exports provided: NzTagComponent, NzTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTagComponent", function() { return NzTagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTagModule", function() { return NzTagModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");









/**
 * @fileoverview added by tsickle
 * Generated from: tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.closeTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class NzTagComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.presetColor = false;
        this.cacheClassName = null;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzNoAnimation = false;
        this.nzAfterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color) ||
            /^(success|processing|error|default|warning)$/.test(color));
    }
    /**
     * @private
     * @return {?}
     */
    updateClassMap() {
        this.presetColor = this.isPresetColor(this.nzColor);
        if (this.cacheClassName) {
            this.renderer.removeClass(this.elementRef.nativeElement, this.cacheClassName);
        }
        if (this.presetColor) {
            this.cacheClassName = `ant-tag-${this.nzColor}`;
            this.renderer.addClass(this.elementRef.nativeElement, this.cacheClassName);
        }
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warnDeprecation"])(`'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateClassMap();
    }
}
NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NzTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzTagComponent, selectors: [["nz-tag"]], hostVars: 12, hostBindings: function NzTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcomponentHostSyntheticListener"]("@fadeMotion.done", function NzTagComponent_animation_fadeMotion_done_HostBindingHandler($event) { return ctx.afterAnimation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵupdateSyntheticHostBinding"]("@fadeMotion", undefined)("@.disabled", ctx.nzNoAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.presetColor ? null : ctx.nzColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-tag", true)("ant-tag-has-color", ctx.nzColor && !ctx.presetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked);
    } }, inputs: { nzMode: "nzMode", nzChecked: "nzChecked", nzNoAnimation: "nzNoAnimation", nzColor: "nzColor" }, outputs: { nzAfterClose: "nzAfterClose", nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzMode === "closeable");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["fadeMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzTagComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzNoAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzAfterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTagComponent.prototype, "nzChecked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTagComponent.prototype, "nzNoAnimation", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["fadeMotion"]],
                template: `
    <ng-content></ng-content>
    <i nz-icon nzType="close" *ngIf="nzMode === 'closeable'" tabindex="-1" (click)="closeTag($event)"></i>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                host: {
                    '[@fadeMotion]': '',
                    '[@.disabled]': 'nzNoAnimation',
                    '[style.background-color]': 'presetColor ? null : nzColor',
                    '[class.ant-tag]': `true`,
                    '[class.ant-tag-has-color]': `nzColor && !presetColor`,
                    '[class.ant-tag-checkable]': `nzMode === 'checkable'`,
                    '[class.ant-tag-checkable-checked]': `nzChecked`,
                    '(click)': 'updateCheckedStatus()',
                    '(@fadeMotion.done)': 'afterAnimation($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzNoAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzAfterClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzOnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tag.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTagModule {
}
NzTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzTagModule });
NzTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzTagModule_Factory(t) { return new (t || NzTagModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzTagModule, { declarations: function () { return [NzTagComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]]; }, exports: function () { return [NzTagComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-tag.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-tag.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js ***!
  \***********************************************************************************/
/*! exports provided: NzToolTipComponent, NzToolTipModule, NzTooltipBaseComponent, NzTooltipBaseDirective, NzTooltipDirective, isTooltipEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzToolTipComponent", function() { return NzToolTipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzToolTipModule", function() { return NzToolTipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTooltipBaseComponent", function() { return NzTooltipBaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTooltipBaseDirective", function() { return NzTooltipBaseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTooltipDirective", function() { return NzTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTooltipEmpty", function() { return isTooltipEmpty; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-no-animation.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");












/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */







const _c0 = ["overlay"];
function NzToolTipComponent_ng_template_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.nzTitle);
} }
function NzToolTipComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzToolTipComponent_ng_template_0_ng_container_4_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzTitle);
} }
class NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.noAnimation = noAnimation;
        this.specificVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'hover';
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         * Please use a more specific API. Like `nzTooltipPlacement`.
         */
        this.nzPlacement = 'top';
        this.visible = false;
        this.needProxyProperties = ['noAnimation'];
        this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.triggerDisposables = [];
    }
    /**
     * This true title that would be used in other parts on this component.
     * @protected
     * @return {?}
     */
    get title() {
        return this.specificTitle || this.directiveNameTitle || this.nzTitle || null;
    }
    /**
     * @protected
     * @return {?}
     */
    get content() {
        return this.specificContent || this.directiveNameContent || this.nzContent || null;
    }
    /**
     * @protected
     * @return {?}
     */
    get placement() {
        return this.specificPlacement || this.nzPlacement;
    }
    /**
     * @protected
     * @return {?}
     */
    get trigger() {
        // NzTooltipTrigger can be null.
        return typeof this.specificTrigger !== 'undefined' ? this.specificTrigger : this.nzTrigger;
    }
    /**
     * @protected
     * @return {?}
     */
    get isVisible() {
        return this.specificVisible || this.nzVisible || false;
    }
    /**
     * @protected
     * @return {?}
     */
    get mouseEnterDelay() {
        return this.specificMouseEnterDelay || this.nzMouseEnterDelay || 0.15;
    }
    /**
     * @protected
     * @return {?}
     */
    get mouseLeaveDelay() {
        return this.specificMouseLeaveDelay || this.nzMouseLeaveDelay || 0.1;
    }
    /**
     * @protected
     * @return {?}
     */
    get overlayClassName() {
        return this.specificOverlayClassName || this.nzOverlayClassName || null;
    }
    /**
     * @protected
     * @return {?}
     */
    get overlayStyle() {
        return this.specificOverlayStyle || this.nzOverlayStyle || null;
    }
    /**
     * @param {?} isNeeded
     * @param {?} property
     * @param {?} newProperty
     * @param {?=} comp
     * @param {?=} shared
     * @return {?}
     */
    warnDeprecationIfNeeded(isNeeded, property, newProperty, comp = 'nz-tooltip', shared = true) {
        if (isNeeded) {
            /** @type {?} */
            let message = `'${property}' of '${comp}' is deprecated and will be removed in 10.0.0.
      Please use '${newProperty}' instead.`;
            if (shared) {
                message = `${message} The same with 'nz-popover' and 'nz-popconfirm'.`;
            }
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__["warnDeprecation"])(message);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    warnDeprecationByChanges(changes) {
        // warn deprecated things when specific property is not given
        this.warnDeprecationIfNeeded(changes.nzTitle && !this.specificTitle && !this.directiveNameTitle, 'nzTitle', 'nzTooltipTitle');
        this.warnDeprecationIfNeeded(changes.nzContent && !this.specificContent, 'nzContent', 'nzPopoverContent', 'nz-popover', false);
        this.warnDeprecationIfNeeded(changes.nzPlacement && !this.specificPlacement, 'nzPlacement', 'nzTooltipPlacement');
        this.warnDeprecationIfNeeded(changes.nzTrigger && !this.specificTrigger, 'nzTrigger', 'nzTooltipTrigger');
        this.warnDeprecationIfNeeded(changes.nzVisible && !this.specificVisible, 'nzVisible', 'nzTooltipVisible');
        this.warnDeprecationIfNeeded(changes.nzMouseEnterDelay && !this.specificMouseEnterDelay, 'nzMouseEnterDelay', 'nzTooltipMouseEnterDelay');
        this.warnDeprecationIfNeeded(changes.nzMouseLeaveDelay && !this.specificMouseLeaveDelay, 'nzMouseLeaveDelay', 'nzTooltipMouseLeaveDelay');
        this.warnDeprecationIfNeeded(changes.nzOverlayClassName && !this.specificOverlayClassName, 'nzOverlayClassName', 'nzTooltipClassName');
        this.warnDeprecationIfNeeded(changes.nzOverlayStyle && !this.specificOverlayStyle, 'nzOverlayStyle', 'nzTooltipOverlayStyle');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTrigger, specificTrigger } = changes;
        /** @type {?} */
        const trigger = specificTrigger || nzTrigger;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.component) {
            this.updateChangedProperties(changes);
        }
        this.warnDeprecationByChanges(changes);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.createComponent();
        this.registerTriggers();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
    }
    /**
     * @return {?}
     */
    show() {
        var _a;
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.show();
    }
    /**
     * @return {?}
     */
    hide() {
        var _a;
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.hide();
    }
    /**
     * Force the component to update its position.
     * @return {?}
     */
    updatePosition() {
        if (this.component) {
            this.component.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    createComponent() {
        /** @type {?} */
        const componentRef = this.hostView.createComponent(this.componentFactory);
        this.component = componentRef.instance;
        // Remove the component's DOM because it should be in the overlay container.
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
        this.component.setOverlayOrigin({ elementRef: this.specificOrigin || this.elementRef });
        this.updateChangedProperties(this.needProxyProperties);
        this.component.nzVisibleChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        (visible) => {
            this.visible = visible;
            this.specificVisibleChange.emit(visible);
            this.nzVisibleChange.emit(visible);
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        /** @type {?} */
        const trigger = this.trigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            /** @type {?} */
            let overlayElement;
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', (/**
             * @return {?}
             */
            () => {
                this.delayEnterLeave(true, true, this.mouseEnterDelay);
            })));
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', (/**
             * @return {?}
             */
            () => {
                var _a;
                this.delayEnterLeave(true, false, this.mouseLeaveDelay);
                if (((_a = this.component) === null || _a === void 0 ? void 0 : _a.overlay.overlayRef) && !overlayElement) {
                    overlayElement = this.component.overlay.overlayRef.overlayElement;
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseenter', (/**
                     * @return {?}
                     */
                    () => {
                        this.delayEnterLeave(false, true);
                    })));
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseleave', (/**
                     * @return {?}
                     */
                    () => {
                        this.delayEnterLeave(false, false);
                    })));
                }
            })));
        }
        else if (trigger === 'focus') {
            this.triggerDisposables.push(this.renderer.listen(el, 'focus', (/**
             * @return {?}
             */
            () => this.show())));
            this.triggerDisposables.push(this.renderer.listen(el, 'blur', (/**
             * @return {?}
             */
            () => this.hide())));
        }
        else if (trigger === 'click') {
            this.triggerDisposables.push(this.renderer.listen(el, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                e.preventDefault();
                this.show();
            })));
        } // Else do nothing because user wants to control the visibility programmatically.
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    updatePropertiesByChanges(changes) {
        /** @type {?} */
        const properties = {
            specificTitle: ['nzTitle', this.title],
            directiveNameTitle: ['nzTitle', this.title],
            nzTitle: ['nzTitle', this.title],
            specificContent: ['nzContent', this.content],
            directiveNameContent: ['nzContent', this.content],
            nzContent: ['nzContent', this.content],
            specificTrigger: ['nzTrigger', this.trigger],
            nzTrigger: ['nzTrigger', this.trigger],
            specificPlacement: ['nzPlacement', this.placement],
            nzPlacement: ['nzPlacement', this.placement],
            specificVisible: ['nzVisible', this.isVisible],
            nzVisible: ['nzVisible', this.isVisible],
            specificMouseEnterDelay: ['nzMouseEnterDelay', this.mouseEnterDelay],
            nzMouseEnterDelay: ['nzMouseEnterDelay', this.mouseEnterDelay],
            specificMouseLeaveDelay: ['nzMouseLeaveDelay', this.mouseLeaveDelay],
            nzMouseLeaveDelay: ['nzMouseLeaveDelay', this.mouseLeaveDelay],
            specificOverlayClassName: ['nzOverlayClassName', this.overlayClassName],
            nzOverlayClassName: ['nzOverlayClassName', this.overlayClassName],
            specificOverlayStyle: ['nzOverlayStyle', this.overlayStyle],
            nzOverlayStyle: ['nzOverlayStyle', this.overlayStyle]
        };
        /** @type {?} */
        const keys = Object.keys(changes);
        keys.forEach((/**
         * @param {?} property
         * @return {?}
         */
        (property) => {
            // @ts-ignore
            if (properties[property]) {
                // @ts-ignore
                const [name, value] = properties[property];
                this.updateComponentValue(name, value);
            }
        }));
    }
    /**
     * @return {?}
     */
    updatePropertiesByArray() {
        this.updateComponentValue('nzTitle', this.title);
        this.updateComponentValue('nzContent', this.content);
        this.updateComponentValue('nzPlacement', this.placement);
        this.updateComponentValue('nzTrigger', this.trigger);
        this.updateComponentValue('nzVisible', this.isVisible);
        this.updateComponentValue('nzMouseEnterDelay', this.mouseEnterDelay);
        this.updateComponentValue('nzMouseLeaveDelay', this.mouseLeaveDelay);
        this.updateComponentValue('nzOverlayClassName', this.overlayClassName);
        this.updateComponentValue('nzOverlayStyle', this.overlayStyle);
    }
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    updateChangedProperties(propertiesOrChanges) {
        var _a;
        /** @type {?} */
        const isArray = Array.isArray(propertiesOrChanges);
        /** @type {?} */
        const keys = isArray ? ((/** @type {?} */ (propertiesOrChanges))) : Object.keys(propertiesOrChanges);
        keys.forEach((/**
         * @param {?} property
         * @return {?}
         */
        (property) => {
            if (this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                this.updateComponentValue(property, this[property]);
            }
        }));
        if (isArray) {
            this.updatePropertiesByArray();
        }
        else {
            this.updatePropertiesByChanges((/** @type {?} */ (propertiesOrChanges)));
        }
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.updateByDirective();
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.component[key] = value;
        }
    }
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }), delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeTriggerListeners() {
        this.triggerDisposables.forEach((/**
         * @param {?} dispose
         * @return {?}
         */
        dispose => dispose()));
        this.triggerDisposables.length = 0;
    }
    /**
     * @private
     * @return {?}
     */
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
}
NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(t) { return new (t || NzTooltipBaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"])); };
NzTooltipBaseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTooltipBaseDirective, inputs: { nzTrigger: "nzTrigger", nzPlacement: "nzPlacement", nzTitle: "nzTitle", nzContent: "nzContent", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzVisible: "nzVisible" }, outputs: { nzVisibleChange: "nzVisibleChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NzTooltipBaseDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"] }
];
NzTooltipBaseDirective.propDecorators = {
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMouseEnterDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMouseLeaveDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOverlayClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOverlayStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTooltipBaseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"] }]; }, { nzTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMouseEnterDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMouseLeaveDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOverlayClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOverlayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}
/**
 * @abstract
 */
// tslint:disable-next-line:directive-class-suffix
class NzTooltipBaseComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzVisibleChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.nzTitle = null;
        this.nzContent = null;
        this.nzOverlayStyle = {};
        this._visible = false;
        this._trigger = 'hover';
        this.preferredPlacement = 'top';
        this._classMap = {};
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = [...ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TOOLTIP_POSITIONS"]];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        /** @type {?} */
        const visible = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        if (this._visible !== visible) {
            this._visible = visible;
            this.nzVisibleChange.next(visible);
        }
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        if (value !== this.preferredPlacement) {
            this.preferredPlacement = value;
            this._positions = [ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_5__["POSITION_MAP"][this.nzPlacement], ...this._positions];
        }
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this.preferredPlacement;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzVisibleChange.complete();
    }
    /**
     * @return {?}
     */
    show() {
        if (this.nzVisible) {
            return;
        }
        if (!this.isEmpty()) {
            this.nzVisible = true;
            this.nzVisibleChange.next(true);
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this.nzVisible) {
            return;
        }
        this.nzVisible = false;
        this.nzVisibleChange.next(false);
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    updateByDirective() {
        this.setClassMap();
        this.cdr.detectChanges();
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.updatePosition();
            this.updateVisibilityByTitle();
        }));
    }
    /**
     * Force the component to update its position.
     * @return {?}
     */
    updatePosition() {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.preferredPlacement = (/** @type {?} */ (Object(ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_5__["getPlacementName"])(position)));
        this.setClassMap();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [this.nzOverlayClassName]: true,
            [`${this._prefix}-${this.preferredPlacement}`]: true
        };
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    setOverlayOrigin(origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    }
    /**
     * Hide the component while the content is empty.
     * @private
     * @return {?}
     */
    updateVisibilityByTitle() {
        if (this.isEmpty()) {
            this.hide();
        }
    }
}
NzTooltipBaseComponent.ɵfac = function NzTooltipBaseComponent_Factory(t) { return new (t || NzTooltipBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"])); };
NzTooltipBaseComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTooltipBaseComponent, viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
    } } });
/** @nocollapse */
NzTooltipBaseComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"] }
];
NzTooltipBaseComponent.propDecorators = {
    overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['overlay', { static: false },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTooltipBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"] }]; }, { overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['overlay', { static: false }]
        }] }); })();
if (false) {}
/**
 * @param {?} value
 * @return {?}
 */
function isTooltipEmpty(value) {
    return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] ? false : value === '' || !Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["isNotNil"])(value);
}

/**
 * @fileoverview added by tsickle
 * Generated from: tooltip.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTooltipDirective extends NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        // tslint:disable-next-line:no-output-rename
        this.specificVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.componentFactory = this.resolver.resolveComponentFactory(NzToolTipComponent);
    }
}
NzTooltipDirective.ɵfac = function NzTooltipDirective_Factory(t) { return new (t || NzTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"], 9)); };
NzTooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTooltipDirective, selectors: [["", "nz-tooltip", ""]], hostVars: 2, hostBindings: function NzTooltipDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tooltip-open", ctx.visible);
    } }, inputs: { specificTitle: ["nzTooltipTitle", "specificTitle"], directiveNameTitle: ["nz-tooltip", "directiveNameTitle"], specificTrigger: ["nzTooltipTrigger", "specificTrigger"], specificPlacement: ["nzTooltipPlacement", "specificPlacement"], specificOrigin: ["nzTooltipOrigin", "specificOrigin"], specificVisible: ["nzTooltipVisible", "specificVisible"], specificMouseEnterDelay: ["nzTooltipMouseEnterDelay", "specificMouseEnterDelay"], specificMouseLeaveDelay: ["nzTooltipMouseLeaveDelay", "specificMouseLeaveDelay"], specificOverlayClassName: ["nzTooltipOverlayClassName", "specificOverlayClassName"], specificOverlayStyle: ["nzTooltipOverlayStyle", "specificOverlayStyle"] }, outputs: { specificVisibleChange: "nzTooltipVisibleChange" }, exportAs: ["nzTooltip"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
NzTooltipDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzTooltipDirective.propDecorators = {
    specificTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nzTooltipTitle',] }],
    directiveNameTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nz-tooltip',] }],
    specificTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nzTooltipTrigger',] }],
    specificPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nzTooltipPlacement',] }],
    specificOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nzTooltipOrigin',] }],
    specificVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nzTooltipVisible',] }],
    specificMouseEnterDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nzTooltipMouseEnterDelay',] }],
    specificMouseLeaveDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nzTooltipMouseLeaveDelay',] }],
    specificOverlayClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nzTooltipOverlayClassName',] }],
    specificOverlayStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nzTooltipOverlayStyle',] }],
    specificVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['nzTooltipVisibleChange',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nz-tooltip]',
                exportAs: 'nzTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'visible'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { specificVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['nzTooltipVisibleChange']
        }], specificTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nzTooltipTitle']
        }], directiveNameTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nz-tooltip']
        }], specificTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nzTooltipTrigger']
        }], specificPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nzTooltipPlacement']
        }], specificOrigin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nzTooltipOrigin']
        }], specificVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nzTooltipVisible']
        }], specificMouseEnterDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nzTooltipMouseEnterDelay']
        }], specificMouseLeaveDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nzTooltipMouseLeaveDelay']
        }], specificOverlayClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nzTooltipOverlayClassName']
        }], specificOverlayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nzTooltipOverlayStyle']
        }] }); })();
if (false) {}
class NzToolTipComponent extends NzTooltipBaseComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzTitle = null;
    }
    /**
     * @protected
     * @return {?}
     */
    isEmpty() {
        return isTooltipEmpty(this.nzTitle);
    }
}
NzToolTipComponent.ɵfac = function NzToolTipComponent_Factory(t) { return new (t || NzToolTipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"], 9)); };
NzToolTipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzToolTipComponent, selectors: [["nz-tooltip"]], inputs: { nzTitle: "nzTitle" }, exportAs: ["nzTooltipComponent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-inner"], [4, "nzStringTemplateOutlet"]], template: function NzToolTipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzToolTipComponent_ng_template_0_Template, 5, 6, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function NzToolTipComponent_Template_ng_template_backdropClick_0_listener() { return ctx.hide(); })("detach", function NzToolTipComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function NzToolTipComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_5__["NzConnectedOverlayDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzStringTemplateOutletDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_1__["zoomBigMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzToolTipComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzToolTipComponent.propDecorators = {
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzToolTipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tooltip',
                exportAs: 'nzTooltipComponent',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_1__["zoomBigMotion"]],
                template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      [cdkConnectedOverlayPositions]="_positions"
      (backdropClick)="hide()"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow"></div>
          <div class="ant-tooltip-inner">
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tooltip.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzToolTipModule {
}
NzToolTipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzToolTipModule });
NzToolTipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzToolTipModule_Factory(t) { return new (t || NzToolTipModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_5__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzToolTipModule, { declarations: function () { return [NzToolTipComponent,
        NzTooltipDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_5__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationModule"]]; }, exports: function () { return [NzToolTipComponent,
        NzTooltipDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzToolTipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NzToolTipComponent, NzTooltipDirective],
                exports: [NzToolTipComponent, NzTooltipDirective],
                entryComponents: [NzToolTipComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_5__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__["NzNoAnimationModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-tooltip.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-tooltip.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-typography.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-typography.js ***!
  \**************************************************************************************/
/*! exports provided: NzTextCopyComponent, NzTextEditComponent, NzTypographyComponent, NzTypographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTextCopyComponent", function() { return NzTextCopyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTextEditComponent", function() { return NzTextEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTypographyComponent", function() { return NzTypographyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTypographyModule", function() { return NzTypographyModule; });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/trans-button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-trans-button.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-polyfill.js");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");

















/**
 * @fileoverview added by tsickle
 * Generated from: text-copy.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */












const _c0 = ["textarea"];
function NzTextEditComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTextEditComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", ctx_r0.locale == null ? null : ctx_r0.locale.edit);
} }
function NzTextEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "textarea", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function NzTextEditComponent_ng_container_1_Template_textarea_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.onInput($event); })("blur", function NzTextEditComponent_ng_container_1_Template_textarea_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.confirm(); })("keydown.esc", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_esc_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.onCancel(); })("keydown.enter", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_enter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onEnter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTextEditComponent_ng_container_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
const _c1 = ["ellipsisContainer"];
const _c2 = ["expandable"];
const _c3 = ["contentTemplate"];
function NzTypographyComponent_ng_template_0_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0, 0, ["*ngIf", "!content"]);
} }
function NzTypographyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTypographyComponent_ng_template_0_0_Template, 1, 0, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
} if (rf & 2) {
    const content_r5 = ctx.content;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !content_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", content_r5, " ");
} }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.nzSuffix);
} }
const _c4 = function (a0) { return { content: a0 }; };
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c4, ctx_r7.nzContent));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.nzSuffix);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r13.ellipsisStr);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r14.nzSuffix);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r17.onExpand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r15.locale == null ? null : ctx_r15.locale.expand);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template, 3, 1, "a", 8);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.isEllipsis);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.nzSuffix);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.nzExpandable && ctx_r9.isEllipsis);
} }
function NzTypographyComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 3, 5, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTypographyComponent_ng_container_2_ng_template_2_Template, 5, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.expanded || !ctx_r2.nzExpandable && ctx_r2.nzEllipsisRows === 1 && !ctx_r2.hasEllipsisObservers || ctx_r2.canCssEllipsis || ctx_r2.nzSuffix && ctx_r2.expanded)("ngIfElse", _r8);
} }
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-text-edit", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.onEndEditing($event); })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.onStartEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", ctx_r3.nzContent);
} }
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-text-copy", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.onTextCopy($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", ctx_r4.copyText);
} }
const _c5 = ["*"];
class NzTextCopyComponent {
    /**
     * @param {?} host
     * @param {?} cdr
     * @param {?} clipboard
     * @param {?} i18n
     */
    constructor(host, cdr, clipboard, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.clipboard = clipboard;
        this.i18n = i18n;
        this.copied = false;
        this.copyId = -1;
        this.nativeElement = this.host.nativeElement;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.textCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        /** @type {?} */
        const text = this.text;
        this.textCopy.emit(text);
        this.clipboard.copy(text);
        this.onCopied();
    }
    /**
     * @return {?}
     */
    onCopied() {
        clearTimeout(this.copyId);
        this.copyId = setTimeout((/**
         * @return {?}
         */
        () => {
            this.copied = false;
            this.cdr.detectChanges();
        }), 3000);
    }
}
NzTextCopyComponent.ɵfac = function NzTextCopyComponent_Factory(t) { return new (t || NzTextCopyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"])); };
NzTextCopyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTextCopyComponent, selectors: [["nz-text-copy"]], inputs: { text: "text" }, outputs: { textCopy: "textCopy" }, exportAs: ["nzTextCopy"], decls: 2, vars: 4, consts: [["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "nzTooltipTitle", "click"], ["nz-icon", "", 3, "nzType"]], template: function NzTextCopyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTextCopyComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-typography-copy-success", ctx.copied);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", ctx.copied ? ctx.locale == null ? null : ctx.locale.copied : ctx.locale == null ? null : ctx.locale.copy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.copied ? "check" : "copy");
    } }, directives: [ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_4__["NzTransButtonDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTextCopyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["Clipboard"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] }
];
NzTextCopyComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    textCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: text-edit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTextEditComponent {
    /**
     * @param {?} host
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(host, cdr, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.i18n = i18n;
        this.editing = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.startEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.endEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nativeElement = this.host.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    onClick() {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    }
    /**
     * @return {?}
     */
    confirm() {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        this.currentText = target.value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEnter(event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.currentText = this.beforeText;
        this.confirm();
    }
    /**
     * @return {?}
     */
    focusAndSetValue() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            var _a;
            if ((_a = this.textarea) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                this.textarea.nativeElement.focus();
                this.textarea.nativeElement.value = this.currentText || '';
                this.autosizeDirective.resizeToFitContent();
            }
        }));
    }
}
NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) { return new (t || NzTextEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"])); };
NzTextEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTextEditComponent, selectors: [["nz-text-edit"]], viewQuery: function NzTextEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzAutosizeDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.textarea = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.autosizeDirective = _t.first);
    } }, inputs: { text: "text" }, outputs: { startEditing: "startEditing", endEditing: "endEditing" }, exportAs: ["nzTextEdit"], decls: 2, vars: 2, consts: [["nz-tooltip", "", "nz-trans-button", "", "class", "ant-typography-edit", 3, "nzTooltipTitle", "click", 4, "ngIf"], [4, "ngIf"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "edit"], ["nz-input", "", "nzAutosize", "", 3, "input", "blur", "keydown.esc", "keydown.enter"], ["textarea", ""], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"]], template: function NzTextEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTextEditComponent_button_0_Template, 2, 1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTextEditComponent_ng_container_1_Template, 6, 0, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_4__["NzTransButtonDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzAutosizeDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTextEditComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] }
];
NzTextEditComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    startEditing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    endEditing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['textarea', { static: false },] }],
    autosizeDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzAutosizeDirective"], { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: typography.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'typography';
/** @type {?} */
const EXPAND_ELEMENT_CLASSNAME = 'ant-typography-expand';
class NzTypographyComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} host
     * @param {?} cdr
     * @param {?} viewContainerRef
     * @param {?} renderer
     * @param {?} platform
     * @param {?} i18n
     * @param {?} document
     * @param {?} resizeService
     */
    constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.platform = platform;
        this.i18n = i18n;
        this.resizeService = resizeService;
        this.nzCopyable = false;
        this.nzEditable = false;
        this.nzDisabled = false;
        this.nzExpandable = false;
        this.nzEllipsis = false;
        this.nzEllipsisRows = 1;
        this.nzContentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // This is not a two-way binding output with {@link nzEllipsis}
        this.nzOnEllipsis = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.expandableBtnElementCache = null;
        this.editing = false;
        this.cssEllipsis = false;
        this.isEllipsis = true;
        this.expanded = false;
        this.ellipsisStr = '...';
        this.viewInit = false;
        this.rfaId = -1;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.windowResizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        this.document = document;
    }
    /**
     * @return {?}
     */
    get hasEllipsisObservers() {
        return this.nzOnEllipsis.observers.length > 0;
    }
    /**
     * @return {?}
     */
    get canCssEllipsis() {
        return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
    }
    /**
     * @return {?}
     */
    get copyText() {
        return (/** @type {?} */ ((typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent)));
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onTextCopy(text) {
        this.nzCopy.emit(text);
    }
    /**
     * @return {?}
     */
    onStartEditing() {
        this.editing = true;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onEndEditing(text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    }
    /**
     * @return {?}
     */
    onExpand() {
        this.isEllipsis = false;
        this.expanded = true;
        this.nzExpandChange.emit();
        this.nzOnEllipsis.emit(false);
    }
    /**
     * @return {?}
     */
    canUseCSSEllipsis() {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
            return false;
        }
        // make sure {@link nzOnEllipsis} works, will force use JS to calculations
        if (this.hasEllipsisObservers) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__["isStyleSupport"])('textOverflow');
        }
        else {
            return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__["isStyleSupport"])('webkitLineClamp');
        }
    }
    /**
     * @return {?}
     */
    renderOnNextFrame() {
        Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_13__["cancelRequestAnimationFrame"])(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_13__["reqAnimFrame"])((/**
         * @return {?}
         */
        () => {
            this.syncEllipsis();
        }));
    }
    /**
     * @return {?}
     */
    getOriginContentViewRef() {
        /** @type {?} */
        const viewRef = this.viewContainerRef.createEmbeddedView((/** @type {?} */ (this.contentTemplate)), {
            content: (/** @type {?} */ (this.nzContent))
        });
        viewRef.detectChanges();
        return {
            viewRef,
            removeView: (/**
             * @return {?}
             */
            () => {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
            })
        };
    }
    /**
     * @return {?}
     */
    syncEllipsis() {
        if (this.cssEllipsis) {
            return;
        }
        const { viewRef, removeView } = this.getOriginContentViewRef();
        /** @type {?} */
        const fixedNodes = [this.textCopyRef, this.textEditRef].filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e && e.nativeElement)).map((/**
         * @param {?} e
         * @return {?}
         */
        e => (/** @type {?} */ (e)).nativeElement));
        /** @type {?} */
        const expandableBtnElement = this.getExpandableBtnElement();
        if (expandableBtnElement) {
            fixedNodes.push(expandableBtnElement);
        }
        const { contentNodes, text, ellipsis } = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__["measure"])(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
        removeView();
        this.ellipsisText = text;
        if (ellipsis !== this.isEllipsis) {
            this.isEllipsis = ellipsis;
            this.nzOnEllipsis.emit(ellipsis);
        }
        /** @type {?} */
        const ellipsisContainerNativeElement = (/** @type {?} */ (this.ellipsisContainer)).nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        }));
        this.cdr.markForCheck();
    }
    // Need to create the element for calculation size before view init
    /**
     * @private
     * @return {?}
     */
    getExpandableBtnElement() {
        if (this.nzExpandable) {
            /** @type {?} */
            const expandText = this.locale ? this.locale.expand : '';
            /** @type {?} */
            const cache = this.expandableBtnElementCache;
            if (!cache || cache.innerText === expandText) {
                /** @type {?} */
                const el = this.document.createElement('a');
                el.className = EXPAND_ELEMENT_CLASSNAME;
                el.innerText = expandText;
                this.expandableBtnElementCache = el;
            }
            return this.expandableBtnElementCache;
        }
        else {
            this.expandableBtnElementCache = null;
            return null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    renderAndSubscribeWindowResize() {
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.resizeService
                .subscribe()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => this.renderOnNextFrame()));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzCopyable, nzEditable, nzExpandable, nzEllipsis, nzContent, nzEllipsisRows, nzSuffix } = changes;
        if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
            if (this.nzEllipsis) {
                if (this.expanded) {
                    this.windowResizeSubscription.unsubscribe();
                }
                else {
                    this.renderAndSubscribeWindowResize();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.expandableBtnElementCache = null;
        this.windowResizeSubscription.unsubscribe();
    }
}
NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) { return new (t || NzTypographyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_14__["NzResizeService"])); };
NzTypographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTypographyComponent, selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]], viewQuery: function NzTypographyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](NzTextEditComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](NzTextCopyComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.textEditRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.textCopyRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ellipsisContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.expandableBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
    } }, hostVars: 20, hostBindings: function NzTypographyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-typography", !ctx.editing)("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
    } }, inputs: { nzCopyable: "nzCopyable", nzEditable: "nzEditable", nzDisabled: "nzDisabled", nzExpandable: "nzExpandable", nzEllipsis: "nzEllipsis", nzEllipsisRows: "nzEllipsisRows", nzContent: "nzContent", nzType: "nzType", nzCopyText: "nzCopyText", nzSuffix: "nzSuffix" }, outputs: { nzContentChange: "nzContentChange", nzCopy: "nzCopy", nzExpandChange: "nzExpandChange", nzOnEllipsis: "nzOnEllipsis" }, exportAs: ["nzTypography"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c5, decls: 5, vars: 3, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "text", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "textCopy", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["jsEllipsis", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ellipsisContainer", ""], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], ["expandable", ""], [3, "text", "endEditing", "startEditing"], [3, "text", "textCopy"]], template: function NzTypographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTypographyComponent_ng_container_2_Template, 4, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzTypographyComponent_nz_text_edit_3_Template, 1, 1, "nz-text-edit", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTypographyComponent_nz_text_copy_4_Template, 1, 1, "nz-text-copy", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzCopyable && !ctx.editing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], NzTextEditComponent,
        NzTextCopyComponent], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTypographyComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_14__["NzResizeService"] }
];
NzTypographyComponent.propDecorators = {
    nzCopyable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzEditable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzExpandable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzEllipsis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzEllipsisRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzCopyText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSuffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzContentChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzExpandChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzOnEllipsis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    textEditRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [NzTextEditComponent, { static: false },] }],
    textCopyRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [NzTextCopyComponent, { static: false },] }],
    ellipsisContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['ellipsisContainer', { static: false },] }],
    expandableBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['expandable', { static: false },] }],
    contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contentTemplate', { static: false },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTypographyComponent.prototype, "nzEditable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTypographyComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTypographyComponent.prototype, "nzExpandable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTypographyComponent.prototype, "nzEllipsis", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Number)
], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTextCopyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-text-copy',
                exportAs: 'nzTextCopy',
                template: `
    <button
      nz-tooltip
      nz-trans-button
      [nzTooltipTitle]="copied ? locale?.copied : locale?.copy"
      class="ant-typography-copy"
      [class.ant-typography-copy-success]="copied"
      (click)="onClick()"
    >
      <i nz-icon [nzType]="copied ? 'check' : 'copy'"></i>
    </button>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["Clipboard"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] }]; }, { textCopy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTextEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-text-edit',
                exportAs: 'nzTextEdit',
                template: `
    <button *ngIf="!editing" [nzTooltipTitle]="locale?.edit" nz-tooltip nz-trans-button class="ant-typography-edit" (click)="onClick()">
      <i nz-icon nzType="edit"></i>
    </button>
    <ng-container *ngIf="editing">
      <textarea
        #textarea
        nz-input
        nzAutosize
        (input)="onInput($event)"
        (blur)="confirm()"
        (keydown.esc)="onCancel()"
        (keydown.enter)="onEnter($event)"
      >
      </textarea>
      <button nz-trans-button class="ant-typography-edit-content-confirm" (click)="confirm()">
        <i nz-icon nzType="enter"></i>
      </button>
    </ng-container>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] }]; }, { startEditing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], endEditing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], textarea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['textarea', { static: false }]
        }], autosizeDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzAutosizeDirective"], { static: false }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTypographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
                exportAs: 'nzTypography',
                template: `
    <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
    <ng-container *ngIf="!editing">
      <ng-container
        *ngIf="
          expanded || (!nzExpandable && nzEllipsisRows === 1 && !hasEllipsisObservers) || canCssEllipsis || (nzSuffix && expanded);
          else jsEllipsis
        "
      >
        <ng-template [ngTemplateOutlet]="contentTemplate" [ngTemplateOutletContext]="{ content: nzContent }"></ng-template>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
      </ng-container>
      <ng-template #jsEllipsis>
        <span #ellipsisContainer></span>
        <ng-container *ngIf="isEllipsis">{{ ellipsisStr }}</ng-container>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
        <a #expandable *ngIf="nzExpandable && isEllipsis" class="ant-typography-expand" (click)="onExpand()">{{ locale?.expand }}</a>
      </ng-template>
    </ng-container>

    <nz-text-edit *ngIf="nzEditable" [text]="nzContent" (endEditing)="onEndEditing($event)" (startEditing)="onStartEditing()">
    </nz-text-edit>

    <nz-text-copy *ngIf="nzCopyable && !editing" [text]="copyText" (textCopy)="onTextCopy($event)"></nz-text-copy>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-typography]': '!editing',
                    '[class.ant-typography-edit-content]': 'editing',
                    '[class.ant-typography-secondary]': 'nzType === "secondary"',
                    '[class.ant-typography-warning]': 'nzType === "warning"',
                    '[class.ant-typography-danger]': 'nzType === "danger"',
                    '[class.ant-typography-disabled]': 'nzDisabled',
                    '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                    '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                    '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                    '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_14__["NzResizeService"] }]; }, { nzCopyable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzExpandable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzEllipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzEllipsisRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzContentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzCopy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzExpandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzOnEllipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzCopyText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSuffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], textEditRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [NzTextEditComponent, { static: false }]
        }], textCopyRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [NzTextCopyComponent, { static: false }]
        }], ellipsisContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['ellipsisContainer', { static: false }]
        }], expandableBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['expandable', { static: false }]
        }], contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['contentTemplate', { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: typography.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTypographyModule {
}
NzTypographyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzTypographyModule });
NzTypographyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzTypographyModule_Factory(t) { return new (t || NzTypographyModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_4__["NzTransButtonModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzTypographyModule, { declarations: function () { return [NzTypographyComponent,
        NzTextCopyComponent,
        NzTextEditComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_4__["NzTransButtonModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]]; }, exports: function () { return [NzTypographyComponent,
        NzTextCopyComponent,
        NzTextEditComponent,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTypographyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_4__["NzTransButtonModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]],
                exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]],
                declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-typography.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-typography.js.map

/***/ }),

/***/ "./src/app/pages/scene/overview/overview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/scene/overview/overview.component.ts ***!
  \************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-page-header.js");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/typography */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-typography.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");







function OverviewComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-avatar", 13);
} }
function OverviewComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
class OverviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 20, vars: 2, consts: [[1, "site-page-header"], ["nz-page-header-avatar", "", "nzSrc", "https://en.gravatar.com/userimage/191149759/9dc926d7c6f696789d02290ed72a031c.jpeg"], ["nz-row", ""], [1, "content"], ["nz-paragraph", ""], [1, "content-link"], ["href", "mailto:aparnaabhilash@rediffmail.com"], ["src", "https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg", "alt", "start"], ["nz-col", "", 2, "margin", "0 auto"], [2, "width", "300px", 3, "nzCover"], ["nzTitle", "Aparna Abhilash", "nzDescription", "SNMC Collage Maliankara", 3, "nzAvatar"], ["avatarTemplate", ""], ["coverTemplate", ""], ["nzSrc", "https://en.gravatar.com/userimage/191149759/9dc926d7c6f696789d02290ed72a031c.jpeg"], ["alt", "example", "src", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-page-header-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-page-header-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Experienced Computer Science Instructor with a demonstrated history of working in the higher education industry. I am a passionate and experienced teaching professional with nearly seven years of experience in teaching undergraduate courses with various higher education institutions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-card-meta", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OverviewComponent_ng_template_16_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OverviewComponent_ng_template_18_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCover", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAvatar", _r0);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__["NzAvatarComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderAvatarDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderTitleDirective"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_1__["NzPageHeaderContentDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__["NzTypographyComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardMetaComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.content-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.content-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.content-image[_ngcontent-%COMP%] {\n  margin: 0 0 0 60px;\n  display: flex;\n  align-items: center;\n}\n\n.content-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  .content-image[_ngcontent-%COMP%] {\n    flex: 100%;\n    margin: 24px 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpbGFzaC9Eb2N1bWVudHMvR2l0SHViL2xlYXJuLWh0bWwvc3JjL2FwcC9wYWdlcy9zY2VuZS9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NlbmUvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NlbmUvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uY29udGVudC1saW5rIGEge1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLmNvbnRlbnQtbGluayBhIGltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltYWdlIHtcclxuICBtYXJnaW46IDAgMCAwIDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC1pbWFnZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGVudC1pbWFnZSB7XHJcbiAgICBmbGV4OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMDtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRlbnQge1xuICBmbGV4OiAxO1xufVxuXG4uY29udGVudCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uY29udGVudC1saW5rIGEge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5jb250ZW50LWxpbmsgYSBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXJnaW46IDAgMCAwIDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGZsZXg6IDEwMCU7XG4gICAgbWFyZ2luOiAyNHB4IDAgMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-overview',
                templateUrl: './overview.component.html',
                styleUrls: ['./overview.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-pages-module~software-research-software-research-module-es2015.js.map
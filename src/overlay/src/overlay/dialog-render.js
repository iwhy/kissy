/**
 * @ignore
 * render for dialog
 * @author yiminghe@gmail.com
 */
KISSY.add("overlay/dialog-render", function (S, OverlayRender, DialogTpl, CloseTpl) {

    function _setStdModRenderContent(self, part, v) {
        part = self.get(part);
        part.html(v);
    }

    return OverlayRender.extend({
        initializer: function () {
            S.mix(this.get('elAttrs'), {
                role: 'dialog',
                'aria-labelledby': 'ks-stdmod-header' + this.get('id')
            });
            S.mix(this.get('childrenElSelectors'), {
                header: '#ks-stdmod-header-{id}',
                body: '#ks-stdmod-body-{id}',
                footer: '#ks-stdmod-footer-{id}'
            });
        },

        getChildrenContainerEl: function () {
            return this.get('body');
        },

        '_onSetBodyStyle': function (v) {
            this.get("body").css(v);
        },

        '_onSetHeaderStyle': function (v) {
            this.get("header").css(v);
        },
        '_onSetFooterStyle': function (v) {
            this.get("footer").css(v);
        },

        '_onSetBodyContent': function (v) {
            _setStdModRenderContent(this, "body", v);
        },

        '_onSetHeaderContent': function (v) {
            _setStdModRenderContent(this, "header", v);
        },

        '_onSetFooterContent': function (v) {
            _setStdModRenderContent(this, "footer", v);
        }
    }, {

        ATTRS: {
            closable: {
                value: false
            },
            contentTpl: {
                value: CloseTpl+DialogTpl
            },
            headerContent: {
                sync: 0
            },
            bodyContent: {
                sync: 0
            },
            footerContent: {
                sync: 0
            },
            headerStyle: {
                sync: 0
            },
            bodyStyle: {
                sync: 0
            },
            footerStyle: {
                sync: 0
            },
            body: {},
            header: {},
            footer: {}
        },

        HTML_PARSER: {
            header: function (el) {
                return el.one("." + this.getBaseCssClass('header'));
            },
            body: function (el) {
                return el.one("." + this.getBaseCssClass('body'));
            },
            footer: function (el) {
                return el.one("." + this.getBaseCssClass('footer'));
            },
            headerContent: function (el) {
                return el.one("." + this.getBaseCssClass('header')).html();
            },
            bodyContent: function (el) {
                return el.one("." + this.getBaseCssClass('body')).html();
            },
            footerContent: function (el) {
                var footer = el.one("." + this.getBaseCssClass('footer'));
                return footer && footer.html();
            }
        }});
}, {
    requires: ['./overlay-render', './dialog-tpl', './close-tpl']
});
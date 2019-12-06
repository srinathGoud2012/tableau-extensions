(this["webpackJsonptableau-extension-exportall"] = this["webpackJsonptableau-extension-exportall"] || []).push([
    [0], {
        195: function(e, t) {},
        204: function(e, t, n) {
            e.exports = n.p + "static/media/logo.78313ace.svg"
        },
        217: function(e, t, n) {
            e.exports = n(440)
        },
        423: function(e, t, n) {},
        429: function(e, t) {},
        430: function(e, t) {},
        436: function(e, t, n) {},
        437: function(e, t, n) {},
        438: function(e, t, n) {},
        440: function(e, t, n) {
            "use strict";
            n.r(t);
            n(218), n(227);
            var a = n(0),
                o = n.n(a),
                l = n(51),
                s = n.n(l),
                i = (n(423), n(98)),
                r = n(198),
                c = n(199),
                u = n(208),
                d = n(200),
                g = n(209),
                m = n(205),
                h = n(52),
                f = n(18);
            var p = function(e) {
                    return o.a.createElement("div", null, o.a.createElement(f.Button, {
                        kind: e.style,
                        disabled: e.disabled,
                        onClick: e.export
                    }, e.label))
                },
                b = n(81),
                v = n.n(b),
                E = n(201);

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var y = function() {
                    return new Promise((function(e, t) {
                        console.log("[func.js] Saving settings"), tableau.extensions.settings.saveAsync().then((function(t) {
                            return e(t)
                        })).catch(t)
                    }))
                },
                S = function(e, t) {
                    return new Promise((function(n, a) {
                        console.log("[func.js] Set settings", e, t);
                        var o = "";
                        switch (e) {
                            case "sheets":
                                o = "selectedSheets";
                                break;
                            case "label":
                                o = "buttonLabel";
                                break;
                            case "style":
                                o = "buttonStyle";
                                break;
                            case "filename":
                                o = "filename";
                                break;
                            default:
                                o = "selectedSheets"
                        }
                        tableau.extensions.settings.set(o, JSON.stringify(t)), n()
                    }))
                },
                j = function() {
                    return new Promise((function(e, t) {
                        console.log("[func.js] Initialise Meta");
                        var n = [],
                            a = tableau.extensions.dashboardContent._dashboard.worksheets.map((function(e) {
                                var t = e,
                                    a = {};
                                return a.sheetName = t.name, a.selected = !1, a.changeName = null, a.customCols = !1, n.push(function(e, t, n) {
                                    return new Promise((function(a, o) {
                                        e.getSummaryDataAsync({
                                            ignoreSelection: !0
                                        }).then((function(e) {
                                            var o = e.columns,
                                                l = [],
                                                s = [];
                                            if (n) {
                                                for (var i = 0; i < t.length; i++) s.push(t[i].name);
                                                for (var r = 0; r < o.length; r++) {
                                                    var c = {};
                                                    if (c.name = o[r].fieldName, c.dataType = o[r].dataType, c.changeName = null, s.indexOf(o[r].fieldName) > -1) {
                                                        var u = s.indexOf(o[r].fieldName);
                                                        c.selected = t[u].selected
                                                    } else c.selected = !1;
                                                    l.push(c)
                                                }
                                            } else
                                                for (var d = 0; d < o.length; d++) {
                                                    var g = {};
                                                    g.name = o[d].fieldName, g.selected = !0, g.order = d + 1, l.push(g)
                                                }
                                            a(l)
                                        }))
                                    }))
                                }(t, null, !1)), a
                            }));
                        console.log("[func.js] Found ".concat(a.length, " sheets"), a), Promise.all(n).then((function(t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = a[n];
                                o.columns = t[n], a[n] = o, console.log("[func.js] Added ".concat(t[n].length, " columns to ").concat(o.sheetName), a)
                            }
                            console.log("[func.js] Meta initialised", a), e(a)
                        }))
                    }))
                },
                C = function(e, t, n) {
                    return new Promise((function(t, a) {
                        var o = "export.xlsx";
                        n && n.length > 0 && (o = n + ".xlsx"), O(e).then((function(e) {
                            var n = v.a.write(e, {
                                bookType: "xlsx",
                                bookSST: !1,
                                type: "array",
                                ignoreEC: !1
                            });
                            Object(E.saveAs)(new Blob([n], {
                                type: "application/octet-stream"
                            }), o), t()
                        }))
                    }))
                },
                O = function(e) {
                    return new Promise((function(t, n) {
                        console.log("[func.js] Got Meta", e);
                        for (var a = tableau.extensions.dashboardContent.dashboard.worksheets, o = v.a.utils.book_new(), l = 0, s = 0, r = [], c = [], u = [], d = 0; d < e.length; d++) e[d].selected && (r.push(e[d].sheetName), u.push(e[d].changeName || e[d].sheetName), c.push(e[d].columns), l += 1);
                        r.map((function(e, n) {
                            console.log("[func.js] Finding sheet", e, a);
                            var r = a.find((function(t) {
                                return t.name === e
                            }));
                            return r.getSummaryDataAsync({
                                ignoreSelection: !0
                            }).then((function(e) {
                                var n = e.columns,
                                    a = c[s],
                                    r = [];
                                a.map((function(e, t) {
                                    return e.selected && r.push(e.changeName || e.name), e
                                })), n.map((function(e, t) {
                                    var o = a.find((function(t) {
                                        return t.name === e.fieldName
                                    }));
                                    if (o) {
                                        var l = function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? x(n, !0).forEach((function(t) {
                                                    Object(i.a)(e, t, n[t])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(n).forEach((function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                }))
                                            }
                                            return e
                                        }({}, e, {
                                            selected: o.selected
                                        });
                                        return l.outputName = o.changeName || o.name, n[t] = l, l
                                    }
                                    return null
                                })), w(n, e.data).then((function(e) {
                                    console.log("[func.js] Header Order", r);
                                    var n = v.a.utils.json_to_sheet(e, {
                                            header: r
                                        }),
                                        a = u[s];
                                    s += 1, v.a.utils.book_append_sheet(o, n, a), s === l && t(o)
                                }))
                            })), r
                        }))
                    }))
                },
                w = function(e, t) {
                    return new Promise((function(n, a) {
                        for (var o = [], l = 0; l < t.length; l++) o.push(N(e, t[l]));
                        Promise.all(o).then((function(e) {
                            n(e)
                        }))
                    }))
                },
                N = function(e, t) {
                    return new Promise((function(n, a) {
                        for (var o = {}, l = 0; l < e.length; l++)
                            if (e[l].selected) {
                                var s = void 0,
                                    i = void 0;
                                switch (e[l]._dataType) {
                                    case "int":
                                    case "float":
                                        s = "n", i = Number(t[l].value), isNaN(i) && (i = t[l].formattedValue);
                                        break;
                                    case "date":
                                    case "date-time":
                                        s = "s", i = t[l].formattedValue;
                                        break;
                                    case "bool":
                                        s = "b", i = t[l].value;
                                        break;
                                    default:
                                        s = "s", i = t[l].formattedValue
                                }
                                var r = {
                                    v: i,
                                    t: s
                                };
                                o[e[l].outputName] = r
                            } n(o)
                    }))
                },
                k = n(202),
                B = n.n(k);
            var H = function(e) {
                    function t() {
                        var t = tableau.extensions.settings.get("selectedSheets");
                        t && null != t && (console.log("[Extension.js] refreshSettings Existing Sheet Settings Found. Refreshing", JSON.parse(t)), e.updateMeta(JSON.parse(t)), e.disableButton(!1));
                        var n = tableau.extensions.settings.get("buttonLabel");
                        n && null != n && (n = n.replace(/"/g, ""), console.log("[Extension.js] refreshSettings Existing Label Settings Found", n), e.updateLabel(n));
                        var a = tableau.extensions.settings.get("buttonStyle");
                        a && null != a && (console.log("[Extension.js] refreshSettings Existing Label Style Found", a), e.updateButtonStyle(a));
                        var o = tableau.extensions.settings.get("filename");
                        o && null != o && (console.log("[Extension.js] refreshSettings Existing Filename Found", o), e.updateFilename(o))
                    }

                    function n(n) {
                        var a = "";
                        n && (a = JSON.stringify(n)), console.log("[Extension.js] configure Sending payload", a);
                        var o = "".concat(window.location.origin, "/configure");
                        tableau.extensions.ui.displayDialogAsync(o, a, {
                            height: 500,
                            width: 500
                        }).then((function(n) {
                            t(), console.log("[Extension.js] Config window closed", e)
                        })).catch((function(n) {
                            switch (n.errorCode) {
                                case tableau.ErrorCodes.DialogClosedByUser:
                                    console.log("[Extension.js] Dialog was closed by user"), t(), console.log("[Extension.js] Config window closed", e);
                                    break;
                                default:
                                    console.error("[Extension.js]", n.message)
                            }
                        }))
                    }
                    return Object(a.useEffect)((function() {
                        console.log("[Extension.js] Props Changed", e)
                    }), [e]), Object(a.useEffect)((function() {
                        console.log("[Extension.js] useEffect"), console.log("[Extension.js] Initialise Extension", e), tableau.extensions.initializeAsync({
                            configure: n
                        }).then((function() {
                            var t = tableau.extensions.settings.get("selectedSheets");
                            t && null != t ? (console.log("[Extension.js] Existing Sheet Settings Found", JSON.parse(t)), e.updateMeta(JSON.parse(t)), e.disableButton(!1)) : (console.log("[Extension.js] Can't find existing sheet settings"), j().then((function(t) {
                                return e.updateMeta(t), S("sheets", t), S("label", "Export All"), y()
                            })).then((function(e) {
                                return n(e)
                            })));
                            var a = tableau.extensions.settings.get("buttonLabel");
                            a && null != a && (a = a.replace(/"/g, ""), console.log("[Extension.js] initializeAsync Existing Label Settings Found", a), e.updateLabel(a));
                            var o = tableau.extensions.settings.get("buttonStyle");
                            o && null != o && (console.log("[Extension.js] initializeAsync Existing Label Style Found", o), e.updateButtonStyle(o));
                            var l = tableau.extensions.settings.get("filename");
                            l && null != l && (console.log("[Extension.js] initializeAsync Existing Filename Found", l), e.updateFilename(l))
                        }))
                    }), []), o.a.createElement(p, {
                        label: e.label,
                        style: e.style,
                        disabled: e.disabled,
                        export: function() {
                            "server" === tableau.extensions.environment.context ? C(e.meta, "server", e.filename) : (console.log("[Extension.js] Tableau Version", tableau.extensions.environment.tableauVersion), B.a.compare(tableau.extensions.environment.tableauVersion, "2019.4.0", ">=") ? C(e.meta, "desktop", e.filename) : function() {
                                var e = "".concat(window.location.origin, "/desktopexport");
                                tableau.extensions.ui.displayDialogAsync(e, "", {
                                    height: 350,
                                    width: 400
                                }).then((function(e) {
                                    console.log("[Extension.js] Export window closed")
                                })).catch((function(e) {
                                    switch (e.errorCode) {
                                        case tableau.ErrorCodes.DialogClosedByUser:
                                            console.log("[Extension.js] Export window was closed by user");
                                            break;
                                        default:
                                            console.error("[Extension.js]", e.message)
                                    }
                                }))
                            }())
                        }
                    })
                },
                D = n(207),
                F = n(457),
                M = n(16),
                T = n(463),
                L = n(459),
                P = n(462),
                A = Object(F.a)((function(e) {
                    return {
                        root: {
                            width: "100%"
                        },
                        heading: {
                            fontSize: e.typography.pxToRem(15)
                        },
                        details: {
                            alignItems: "center"
                        },
                        column: {
                            flexBasis: "50%"
                        },
                        label: {
                            display: "block",
                            fontSize: 10,
                            lineHeight: "10px",
                            order: 0,
                            marginBottom: 3
                        },
                        group: {
                            color: "rgba(0, 0, 0, 0.56)",
                            display: "inline-flex",
                            flexDirection: "column",
                            fontFamily: "Benton Sans, Arial, Helvetica, sans-serif",
                            position: "relative"
                        },
                        stepper: {
                            marginBottom: 13
                        },
                        strikeThrough: {
                            textDecoration: "line-through",
                            marginRight: 5,
                            color: "rgba(156, 156, 156, 0.8)"
                        }
                    }
                })),
                I = Object(M.a)({
                    root: {
                        boxShadow: "none",
                        "&:not(:last-child)": {
                            borderBottom: 0
                        },
                        "&:before": {
                            display: "none"
                        },
                        "&$expanded": {
                            margin: "auto"
                        }
                    },
                    expanded: {}
                })(T.a);
            var z = function(e) {
                var t, n, a = A(),
                    l = {
                        label: "Rename",
                        onChange: function(t) {
                            return e.changeName(t.target.value)
                        },
                        onClear: function() {
                            e.changeName(null)
                        },
                        placeholder: e.name || "Override Export Tab Name",
                        style: {
                            width: 200
                        },
                        value: e.rename || ""
                    };
                return o.a.createElement("div", {
                    className: a.root
                }, o.a.createElement(I, {
                    square: !0,
                    expanded: e.selected
                }, o.a.createElement(P.a, {
                    "aria-controls": "panel1c-content",
                    id: "panel1c-header"
                }, o.a.createElement("div", null, o.a.createElement(f.Checkbox, {
                    checked: e.selected,
                    onChange: e.select
                }, (t = e.name, (n = e.rename) ? o.a.createElement("div", null, o.a.createElement("span", {
                    className: a.strikeThrough
                }, t), o.a.createElement("span", null, n)) : o.a.createElement("div", null, t))))), o.a.createElement(L.a, {
                    className: a.details
                }, o.a.createElement("div", {
                    className: a.column
                }, o.a.createElement(f.TextField, l)), o.a.createElement("div", {
                    className: a.column
                }, o.a.createElement("div", {
                    className: a.group
                }, o.a.createElement("label", {
                    className: a.label
                }, "Change Order"), o.a.createElement(f.Stepper, {
                    min: 1,
                    max: e.sheets.length,
                    step: 1,
                    pageSteps: 1,
                    value: e.id + 1,
                    onValueChange: function(t) {
                        return e.changeOrder(t)
                    },
                    className: a.stepper
                }))))))
            };
            var J = function(e) {
                    return e && e.sheets ? e.sheets.map((function(t, n) {
                        return o.a.createElement(z, {
                            id: n,
                            key: t.sheetName,
                            name: t.sheetName,
                            rename: t.changeName,
                            sheets: e.sheets,
                            selected: t.selected,
                            select: function() {
                                return e.selectSheet(n)
                            },
                            changeName: function(t) {
                                return e.changeName(n, t)
                            },
                            changeOrder: function(t) {
                                return e.changeOrder(n, t)
                            }
                        })
                    })) : o.a.createElement("div", null)
                },
                R = n(203),
                U = n.n(R),
                V = Object(F.a)((function(e) {
                    return {
                        root: {
                            width: "100%"
                        },
                        heading: {
                            fontSize: e.typography.pxToRem(15)
                        },
                        details: {
                            alignItems: "center"
                        },
                        column: {
                            flexBasis: "50%"
                        },
                        label: {
                            display: "block",
                            fontSize: 10,
                            lineHeight: "10px",
                            order: 0,
                            marginBottom: 3
                        },
                        group: {
                            color: "rgba(0, 0, 0, 0.56)",
                            display: "inline-flex",
                            flexDirection: "column",
                            fontFamily: "Benton Sans, Arial, Helvetica, sans-serif",
                            position: "relative"
                        },
                        stepper: {
                            marginBottom: 13
                        },
                        strikeThrough: {
                            textDecoration: "line-through",
                            color: "rgba(156, 156, 156, 0.8)",
                            marginRight: 5
                        }
                    }
                })),
                _ = Object(M.a)({
                    root: {
                        boxShadow: "none",
                        "&:not(:last-child)": {
                            borderBottom: 0
                        },
                        "&:before": {
                            display: "none"
                        },
                        "&$expanded": {
                            margin: "auto"
                        }
                    },
                    expanded: {}
                })(T.a);
            var W = function(e) {
                var t, n, a = V(),
                    l = {
                        label: "Rename",
                        onChange: function(t) {
                            return e.changeName(t.target.value)
                        },
                        onClear: function() {
                            e.changeName(null)
                        },
                        placeholder: e.name || "Override Export Column Name",
                        style: {
                            width: 200
                        },
                        value: e.rename || ""
                    };
                return o.a.createElement("div", {
                    className: a.root
                }, o.a.createElement(_, {
                    square: !0
                }, o.a.createElement(P.a, {
                    expandIcon: o.a.createElement(U.a, null),
                    "aria-controls": "panel1c-content",
                    id: "panel1c-header"
                }, o.a.createElement("div", null, o.a.createElement(f.Checkbox, {
                    checked: e.selected,
                    onChange: e.select
                }, (t = e.name, (n = e.rename) ? o.a.createElement("div", null, o.a.createElement("span", {
                    className: a.strikeThrough
                }, t), o.a.createElement("span", null, n)) : o.a.createElement("div", null, t))))), o.a.createElement(L.a, {
                    className: a.details
                }, o.a.createElement("div", {
                    className: a.column
                }, o.a.createElement(f.TextField, l)), o.a.createElement("div", {
                    className: a.column
                }, o.a.createElement("div", {
                    className: a.group
                }, o.a.createElement("label", {
                    className: a.label
                }, "Change Order"), o.a.createElement(f.Stepper, {
                    min: 1,
                    max: e.cols.length,
                    step: 1,
                    pageSteps: 1,
                    value: e.id + 1,
                    onValueChange: function(t) {
                        return e.changeOrder(t)
                    },
                    className: a.stepper
                }))))))
            };
            var q = function(e) {
                return e && e.cols ? e.cols.map((function(t, n) {
                    return o.a.createElement(W, {
                        id: n,
                        key: t.name,
                        name: t.name,
                        rename: t.changeName,
                        selected: t.selected,
                        select: function() {
                            return e.colSelect(e.id, n)
                        },
                        changeName: function(t) {
                            return e.changeName(e.id, n, t)
                        },
                        cols: e.cols,
                        changeOrder: function(t) {
                            return e.changeOrder(e.id, n, t)
                        }
                    })
                })) : o.a.createElement("div", null)
            };
            var $ = function(e) {
                    return e && e.sheets ? e.sheets.map((function(t, n) {
                        return t.selected ? o.a.createElement("div", {
                            key: t.sheetName
                        }, o.a.createElement("div", null, o.a.createElement("b", null, t.sheetName)), o.a.createElement(q, {
                            id: n,
                            name: t.sheetName,
                            cols: t.columns,
                            colSelect: e.colSelect,
                            changeName: e.changeName,
                            changeOrder: e.changeOrder
                        })) : o.a.createElement("div", {
                            key: t.sheetName
                        })
                    })) : o.a.createElement("div", null)
                },
                G = {
                    bottom: 10,
                    right: 10,
                    position: "fixed"
                };
            var K = function(e) {
                    return o.a.createElement("div", {
                        style: G
                    }, o.a.createElement(f.Button, {
                        kind: "outline",
                        style: {
                            marginRight: 12
                        },
                        onClick: e.resetSettings
                    }, "Reset"), o.a.createElement(f.Button, {
                        kind: "primary",
                        style: {
                            marginRight: 12
                        },
                        disabled: !e.enableButton,
                        onClick: e.save
                    }, "Save Changes"))
                },
                Q = n(460),
                X = Object(F.a)((function(e) {
                    return {
                        root: {
                            flexGrow: 1
                        }
                    }
                }));
            var Y = function(e) {
                    var t = X(),
                        n = {
                            label: "Button Label",
                            onChange: function(t) {
                                console.log("[ConfigureTab.js] Updating Button Label", t.target.value), e.updateLabel(t.target.value)
                            },
                            onClear: function() {
                                e.updateLabel("Export All")
                            },
                            placeholder: "Button Label",
                            style: {
                                width: 400
                            },
                            value: e.label || ""
                        },
                        a = {
                            label: "Export Filename",
                            onChange: function(t) {
                                return e.updateFilename(JSON.stringify(t.target.value))
                            },
                            onClear: function() {
                                e.updateFilename("ExportAll")
                            },
                            placeholder: "Export Filename",
                            style: {
                                width: 400
                            },
                            value: e.filename || ""
                        };
                    return o.a.createElement("div", {
                        className: t.root
                    }, o.a.createElement(Q.a, {
                        container: !0
                    }, o.a.createElement(Q.a, {
                        item: !0,
                        xs: 12
                    }, o.a.createElement(f.TextField, n)), o.a.createElement(Q.a, {
                        item: !0,
                        xs: 12
                    }, o.a.createElement(f.TextField, a)), o.a.createElement(Q.a, {
                        item: !0,
                        xs: 12
                    }, o.a.createElement(o.a.Fragment, null, "Set Button Style to:", o.a.createElement(f.DropdownSelect, {
                        kind: "line",
                        value: e.style,
                        onChange: function(t) {
                            return e.updateButtonStyle(JSON.stringify(t.target.value))
                        },
                        style: {
                            marginLeft: 10
                        }
                    }, o.a.createElement("option", null, "outline"), o.a.createElement("option", null, "primary"), o.a.createElement("option", null, "destructive"))))))
                },
                Z = n(204),
                ee = n.n(Z),
                te = (n(436), {
                    height: "calc(100vh - 170px)"
                }),
                ne = {
                    backgroundColor: "rgb(245, 245, 245)",
                    height: 26,
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 18
                };
            var ae = function(e) {
                    var t = Object(a.useState)(0),
                        n = Object(D.a)(t, 2),
                        l = n[0],
                        s = n[1];

                    function i(e, t, n) {
                        if (n >= e.length)
                            for (var a = n - e.length + 1; a--;) e.push(void 0);
                        return e.splice(n, 0, e.splice(t, 1)[0]), e
                    }
                    return console.log("[Configure.js] Initialise Config Screen", e), Object(a.useEffect)((function() {
                        console.log("[Configure.js] useEffect"), tableau.extensions.initializeDialogAsync().then((function(t) {
                            console.log("[Configure.js] Initialise Dialog", t);
                            var n = tableau.extensions.settings.get("selectedSheets");
                            n && null != n && (console.log("[Configure.js] Existing Sheet Settings Found", n), e.updateMeta(JSON.parse(n)));
                            var a = tableau.extensions.settings.get("buttonLabel");
                            a && null != a && (a = a.replace(/"/g, ""), console.log("[Configure.js] initializeDialogAsync Existing Label Settings Found", a), e.updateLabel(a));
                            var o = tableau.extensions.settings.get("buttonStyle");
                            o && null != o && (console.log("[Configure.js] initializeDialogAsync Existing Label Style Found", o), e.updateButtonStyle(o));
                            var l = tableau.extensions.settings.get("filename");
                            l && null != l && (console.log("[Configure.js] initializeDialogAsync Existing Filename Found", l), e.updateFilename(l))
                        }))
                    }), []), o.a.createElement("div", null, o.a.createElement("div", {
                        style: ne
                    }, o.a.createElement("img", {
                        style: {
                            height: 20
                        },
                        src: ee.a,
                        alt: "The Information Lab"
                    })), o.a.createElement(f.Tabs, {
                        onTabChange: function(e) {
                            s(e)
                        },
                        selectedTabIndex: l,
                        tabs: [{
                            content: "Select Sheets"
                        }, {
                            content: "Select Columns"
                        }, {
                            content: "Configure"
                        }]
                    }, o.a.createElement("div", {
                        style: te
                    }, 0 === l ? o.a.createElement(J, {
                        sheets: e.meta,
                        selectSheet: function(t) {
                            console.log("[Configure.js] selectSheetHandler", t);
                            var n = e.meta;
                            n[t].selected = !n[t].selected, e.updateMeta(n), e.changeSettings(!0)
                        },
                        changeOrder: function(t, n) {
                            if (console.log("[Configure.js] changeSheetOrderHandler", t, n), n > 0) {
                                var a = i(e.meta, t, n - 1);
                                e.updateMeta(a), e.changeSettings(!0)
                            }
                        },
                        changeName: function(t, n) {
                            console.log("[Configure.js] changeSheetNameHandler", t, n);
                            var a = e.meta;
                            a[t].changeName = n, e.updateMeta(a), e.changeSettings(!0)
                        }
                    }) : null, 1 === l ? o.a.createElement($, {
                        sheets: e.meta,
                        colSelect: function(t, n) {
                            console.log("[Configure.js] selectColumnHandler", t, n);
                            var a = e.meta,
                                o = a[t];
                            o.columns[n].selected = !o.columns[n].selected, a[t] = o, e.updateMeta(a), e.changeSettings(!0)
                        },
                        changeName: function(t, n, a) {
                            console.log("[Configure.js] changeColumnNameHandler", t, n, a);
                            var o = e.meta,
                                l = o[t];
                            l.columns[n].changeName = a, o[t] = l, e.updateMeta(o), e.changeSettings(!0)
                        },
                        changeOrder: function(t, n, a) {
                            if (console.log("[Configure.js] changeColumnOrderHandler", t, n, a), a > 0) {
                                var o = e.meta,
                                    l = i(o[t].columns, n, a - 1);
                                o[t].columns = l, e.updateMeta(o), e.changeSettings(!0)
                            }
                        }
                    }) : null, 2 === l ? o.a.createElement(Y, {
                        label: e.label,
                        filename: e.filename,
                        style: e.style,
                        updateLabel: function(t) {
                            console.log("[Configure.js] changeUpdateLabelHandler", t), e.updateLabel(t), e.changeSettings(!0)
                        },
                        updateButtonStyle: function(t) {
                            console.log("[Configure.js] changeLabelStyleHandler", t), e.updateButtonStyle(t), e.changeSettings(!0)
                        },
                        updateFilename: function(t) {
                            console.log("[Configure.js] updateFilenameHandler", t), e.updateFilename(t), e.changeSettings(!0)
                        }
                    }) : null)), o.a.createElement(K, {
                        enableButton: e.enableSave,
                        save: function() {
                            console.log("[Configure.js] saveSettingsHandler - Saving Settings", e);
                            var t = e.meta,
                                n = e.label,
                                a = e.style,
                                o = e.filename;
                            e.disableButton(!1), S("sheets", t).then(S("label", n)).then(S("style", a)).then(S("filename", o)).then(y()).then(e.changeSettings(!1))
                        },
                        resetSettings: function() {
                            console.log("[Configure.js] resetSettingsHandler - Reset Settings"), e.resetSettings()
                        }
                    }))
                },
                oe = n(461);
            n(437);
            var le = function() {
                return console.log("[DesktopExport.js] Initialise Export Screen"), encodeURI("Hi Michael,\n\nI'm such a huge fan of the Export All extension created by Craig Bloodworth. Trouble is my users make use of Tableau Desktop just as much as Server and I really want them to feel the same love for all things data in Excel. Please please please please enable the downloads API in extensions. It would make such a huge difference to my Tableau life. I promise I won't export all my data, just the important stuff.\n\nThanks so much for your time and helping to build an amazing product!"), Object(a.useEffect)((function() {
                    console.log("[DesktopExport.js] useEffect"), tableau.extensions.initializeDialogAsync().then((function(e) {
                        console.log("[DesktopExport.js] Initialise Dialog", e);
                        tableau.extensions.settings.get("selectedSheets")
                    }))
                }), []), o.a.createElement(Q.a, {
                    container: !0,
                    spacing: 0,
                    align: "left",
                    justify: "center"
                }, o.a.createElement(Q.a, {
                    item: !0
                }, o.a.createElement(oe.a, {
                    component: "div",
                    style: {
                        padding: 20
                    }
                }, o.a.createElement("p", null, "Hi There!"), o.a.createElement("p", null, "It looks like you're trying to create the Excel file using a desktop version earlier than 2019.4. Unfortunately you ", "can't", " as the download function is disabled, however there are two solutions. Either publish your dashboard to Server where the Excel file will download as expected, or upgrade your copy of Desktop to 2019.4 or greater."), o.a.createElement("p", null, "To those who've previously emailed Tableau to request they enable the download feature...we did it!! Thank you so much for taking the time to present the case, I ", "can't", " believe how many emails you sent. ", "I'm", " humbled."), o.a.createElement("p", null, "Craig"))))
            };
            n(438);

            function se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(n, !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var re = function(e) {
                function t(e) {
                    var n;
                    return Object(r.a)(this, t), console.log("[Main.js] constructor"), (n = Object(u.a)(this, Object(d.a)(t).call(this, e))).labelChangedHandler = function(e) {
                        console.log("[Main.js] Updating label text to ".concat(e));
                        var t = ie({}, n.state.button, {
                            label: e
                        });
                        n.setState({
                            button: t
                        })
                    }, n.filenameChangedHandler = function(e) {
                        console.log("[Main.js] Updating filename to ".concat(JSON.parse(e))), n.setState({
                            filename: JSON.parse(e)
                        })
                    }, n.buttonStateChangedHandler = function(e) {
                        console.log("[Main.js] Changing button state to ".concat(e));
                        var t = ie({}, n.state.button, {
                            disabled: e
                        });
                        n.setState({
                            button: t
                        })
                    }, n.buttonStyleChangedHandler = function(e) {
                        console.log("[Main.js] Changing button style to ".concat(e));
                        var t = ie({}, n.state.button, {
                            style: JSON.parse(e)
                        });
                        n.setState({
                            button: t
                        })
                    }, n.metaChangedHandler = function(e) {
                        console.log("[Main.js] Meta changed", e), n.setState({
                            meta: e
                        })
                    }, n.settingsChangedHandler = function(e) {
                        console.log("[Main.js] Settings changed"), n.setState({
                            settingsChanged: e
                        })
                    }, n.resetSettingsHandler = function() {
                        console.log("[Main.js] Reset Settings"), n.setState({
                            meta: void 0,
                            button: {
                                label: "Export All",
                                style: "outline",
                                disabled: !0
                            },
                            isLoading: !1,
                            filename: "ExportAll",
                            settingsChanged: !1
                        })
                    }, n.renderExtension = function() {
                        return o.a.createElement(H, {
                            label: n.state.button.label,
                            meta: n.state.meta,
                            style: n.state.button.style,
                            filename: n.state.filename,
                            disabled: n.state.button.disabled,
                            updateMeta: n.metaChangedHandler,
                            disableButton: n.buttonStateChangedHandler,
                            updateLabel: n.labelChangedHandler,
                            updateButtonStyle: n.buttonStyleChangedHandler,
                            updateFilename: n.filenameChangedHandler
                        })
                    }, n.renderConfigure = function() {
                        return o.a.createElement(ae, {
                            label: n.state.button.label,
                            meta: n.state.meta,
                            style: n.state.button.style,
                            filename: n.state.filename,
                            enableSave: n.state.settingsChanged,
                            updateMeta: n.metaChangedHandler,
                            disableButton: n.buttonStateChangedHandler,
                            updateLabel: n.labelChangedHandler,
                            changeSettings: n.settingsChangedHandler,
                            updateButtonStyle: n.buttonStyleChangedHandler,
                            updateFilename: n.filenameChangedHandler,
                            resetSettings: n.resetSettingsHandler
                        })
                    }, n.renderDesktopExport = function() {
                        return o.a.createElement(le, null)
                    }, n.state = {
                        meta: void 0,
                        button: {
                            label: "Export All",
                            style: "outline",
                            disabled: !0
                        },
                        isLoading: !1,
                        filename: "ExportAll",
                        settingsChanged: !1
                    }, console.log("[Main.js] state initialised", n.state), n
                }
                return Object(g.a)(t, e), Object(c.a)(t, [{
                    key: "componentWillMount",
                    value: function() {
                        console.log("[Main.js] componentWillMount")
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        console.log("[Main.js] componentDidMount")
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement(m.a, null, o.a.createElement("div", null, o.a.createElement(h.a, {
                            path: "/",
                            render: this.renderExtension,
                            exact: !0
                        }), o.a.createElement(h.a, {
                            path: "/configure",
                            render: this.renderConfigure,
                            exact: !0
                        }), o.a.createElement(h.a, {
                            path: "/desktopexport",
                            render: this.renderDesktopExport,
                            exact: !0
                        })))
                    }
                }]), t
            }(a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            s.a.render(o.a.createElement(re, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        }
    },
    [
        [217, 1, 2]
    ]
]);
//# sourceMappingURL=main.38b10a52.chunk.js.map
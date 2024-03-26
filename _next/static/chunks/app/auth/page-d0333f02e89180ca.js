(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [235],
  {
    9384: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 4868));
    },
    4868: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          Redirect: function () {
            return a;
          }
        });
      var o = t(7437),
        r = t(4033);
      let a = () => {
        let e = (0, r.usePathname)();
        return (
          e
            .toLowerCase()
            .split('/')
            .some((e) => 'app' == e || 'auth' == e) &&
            ('www.aladdinmiles.com' == window.location.host
              ? window.location.replace('aladdinmiles:/'.concat(e))
              : 'staging.aladdinmiles.com' == window.location.host
              ? window.location.replace('com.aladdinmiles.staging:/'.concat(e))
              : window.location.replace(
                  'com.aladdinmiles.amatest:/'.concat(e)
                )),
          (0, o.jsx)(o.Fragment, {})
        );
      };
    },
    622: function (e, n, t) {
      'use strict';
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var o = t(2265),
        r = Symbol.for('react.element'),
        a = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        c =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        s = { key: !0, ref: !0, __self: !0, __source: !0 };
      function l(e, n, t) {
        var o,
          a = {},
          l = null,
          u = null;
        for (o in (void 0 !== t && (l = '' + t),
        void 0 !== n.key && (l = '' + n.key),
        void 0 !== n.ref && (u = n.ref),
        n))
          i.call(n, o) && !s.hasOwnProperty(o) && (a[o] = n[o]);
        if (e && e.defaultProps)
          for (o in (n = e.defaultProps)) void 0 === a[o] && (a[o] = n[o]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: u,
          props: a,
          _owner: c.current
        };
      }
      (n.Fragment = a), (n.jsx = l), (n.jsxs = l);
    },
    7437: function (e, n, t) {
      'use strict';
      e.exports = t(622);
    },
    4033: function (e, n, t) {
      e.exports = t(8165);
    }
  },
  function (e) {
    e.O(0, [971, 596, 744], function () {
      return e((e.s = 9384));
    }),
      (_N_E = e.O());
  }
]);

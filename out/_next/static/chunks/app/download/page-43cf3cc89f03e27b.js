(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [40],
  {
    1720: function (e, n, r) {
      Promise.resolve().then(r.bind(r, 323));
    },
    323: function (e, n, r) {
      'use strict';
      r.r(n),
        r.d(n, {
          Redirect: function () {
            return t;
          }
        });
      var i = r(7437);
      let t = () => {
        let e = (function () {
          if ('undefined' != typeof navigator) {
            let e = navigator.platform;
            if (-1 !== e.indexOf('Win')) return 'Windows';
            if (-1 !== e.indexOf('Mac')) return 'Mac OS';
            if (-1 !== e.indexOf('Linux')) return 'Linux';
            if (-1 !== e.indexOf('iPhone')) return 'iOS';
            if (-1 !== e.indexOf('Android')) return 'Android';
            if (-1 !== e.indexOf('iPad')) return 'iPad';
          }
          return 'Unknown';
        })();
        return (
          'iPad' == e || 'iOS' == e || 'Mac OS' == e
            ? window.location.replace(
                'https://apps.apple.com/app/aladdin-miles-%D8%A7%D9%85%D9%8A%D8%A7%D9%84-%D8%B9%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%D9%8A%D9%86/id1503894088'
              )
            : window.location.replace(
                'https://play.google.com/store/apps/details?id=com.aladdinmiles.customer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
              ),
          (0, i.jsx)('div', {})
        );
      };
    },
    622: function (e, n, r) {
      'use strict';
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = r(2265),
        t = Symbol.for('react.element'),
        o = (Symbol.for('react.fragment'), Object.prototype.hasOwnProperty),
        a =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        f = { key: !0, ref: !0, __self: !0, __source: !0 };
      function d(e, n, r) {
        var i,
          d = {},
          u = null,
          c = null;
        for (i in (void 0 !== r && (u = '' + r),
        void 0 !== n.key && (u = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          o.call(n, i) && !f.hasOwnProperty(i) && (d[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === d[i] && (d[i] = n[i]);
        return {
          $$typeof: t,
          type: e,
          key: u,
          ref: c,
          props: d,
          _owner: a.current
        };
      }
      (n.jsx = d), (n.jsxs = d);
    },
    7437: function (e, n, r) {
      'use strict';
      e.exports = r(622);
    }
  },
  function (e) {
    e.O(0, [971, 596, 744], function () {
      return e((e.s = 1720));
    }),
      (_N_E = e.O());
  }
]);

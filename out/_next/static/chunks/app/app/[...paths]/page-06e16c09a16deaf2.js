(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [245],
  {
    6730: function (e, n, a) {
      Promise.resolve().then(a.t.bind(a, 3222, 23)),
        Promise.resolve().then(a.bind(a, 6773)),
        Promise.resolve().then(a.bind(a, 4868)),
        Promise.resolve().then(a.bind(a, 231)),
        Promise.resolve().then(a.t.bind(a, 4372, 23));
    },
    4868: function (e, n, a) {
      'use strict';
      a.r(n),
        a.d(n, {
          Redirect: function () {
            return l;
          }
        });
      var o = a(7437),
        t = a(4033);
      let l = () => {
        let e = (0, t.usePathname)();
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
    4372: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Raleway_4cc6a0', '__Raleway_Fallback_4cc6a0'",
          fontWeight: 700,
          fontStyle: 'normal'
        },
        className: '__className_4cc6a0'
      };
    },
    6566: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Manrope_30f681', '__Manrope_Fallback_30f681'",
          fontWeight: 400,
          fontStyle: 'normal'
        },
        className: '__className_30f681'
      };
    },
    4053: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Manrope_44e3df', '__Manrope_Fallback_44e3df'",
          fontStyle: 'normal'
        },
        className: '__className_44e3df'
      };
    },
    4033: function (e, n, a) {
      e.exports = a(8165);
    }
  },
  function (e) {
    e.O(0, [641, 205, 971, 596, 744], function () {
      return e((e.s = 6730));
    }),
      (_N_E = e.O());
  }
]);

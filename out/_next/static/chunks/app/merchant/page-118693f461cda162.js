(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [872],
  {
    4238: function (e, n, t) {
      Promise.resolve().then(t.t.bind(t, 3222, 23)),
        Promise.resolve().then(t.bind(t, 6773)),
        Promise.resolve().then(t.bind(t, 431)),
        Promise.resolve().then(t.bind(t, 4914)),
        Promise.resolve().then(t.bind(t, 3839)),
        Promise.resolve().then(t.bind(t, 750));
    },
    4914: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          BottomSection: function () {
            return u;
          },
          HeroContent: function () {
            return a;
          },
          HeroContentTextArea: function () {
            return f;
          },
          HeroSection: function () {
            return l;
          }
        });
      var o = t(230),
        i = t(7247),
        r = t(8600);
      function s() {
        let e = (0, o._)([
          '\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 40px;\n  width: ',
          ';\n'
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        let e = (0, o._)(['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n']);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      let l = r.Z.div({
          backgroundColor: '#FFF5F8',
          display: 'flex',
          flexDirection: 'row',
          padding: ''.concat((0, i.Wk)(100), ' ').concat((0, i.so)(80)),
          alignItems: 'center',
          justifyContent: 'space-between',
          '& img': { width: (0, i.so)(616), height: (0, i.so)(600), objectFit: 'cover', objectPosition: 'center' }
        }),
        a = r.Z.div(s(), (0, i.so)(560)),
        f = r.Z.div(c()),
        u = r.Z.div({
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'row',
          padding: ''
            .concat((0, i.Wk)(81), ' ')
            .concat((0, i.so)(80), ' ')
            .concat((0, i.Wk)(79)),
          alignItems: 'center',
          gap: (0, i.so)(54),
          justifyContent: 'space-between',
          '& img': { width: (0, i.so)(586), height: (0, i.so)(600), objectFit: 'cover', objectPosition: 'center' }
        });
    },
    750: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          Button: function () {
            return f;
          }
        });
      var o = t(7437),
        i = t(6566),
        r = t.n(i),
        s = t(7247),
        c = t(8600),
        l = t(1396),
        a = t.n(l);
      t(2265);
      let f = (e) => {
          let { children: n, href: t = '/#' } = e;
          return (0, o.jsx)(u, { href: t, children: (0, o.jsx)(d, { className: r().className, children: n }) });
        },
        u = (0, c.Z)(a())({
          backgroundColor: '#FF1654',
          width: (0, s.so)(240),
          height: (0, s.Wk)(56),
          borderRadius: (0, s.so)(4),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'inline-flex',
          textDecoration: 'none'
        }),
        d = c.Z.span({
          fontSize: (0, s.JB)(16),
          color: '#ffffff',
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          '& svg': { strokeWidth: (0, s.so)(24), height: (0, s.so)(24) }
        });
    },
    6566: function (e) {
      e.exports = {
        style: { fontFamily: "'__Manrope_30f681', '__Manrope_Fallback_30f681'", fontWeight: 400, fontStyle: 'normal' },
        className: '__className_30f681'
      };
    }
  },
  function (e) {
    e.O(0, [107, 36, 971, 596, 744], function () {
      return e((e.s = 4238));
    }),
      (_N_E = e.O());
  }
]);

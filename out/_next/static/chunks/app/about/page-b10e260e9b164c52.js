(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [301],
  {
    9955: function (e, n, t) {
      Promise.resolve().then(t.t.bind(t, 3222, 23)),
        Promise.resolve().then(t.bind(t, 6773)),
        Promise.resolve().then(t.bind(t, 431)),
        Promise.resolve().then(t.bind(t, 5297)),
        Promise.resolve().then(t.bind(t, 3839)),
        Promise.resolve().then(t.bind(t, 750));
    },
    5297: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          BlueBox: function () {
            return x;
          },
          BoxArea: function () {
            return g;
          },
          HeroLeft: function () {
            return u;
          },
          HeroRight: function () {
            return d;
          },
          HeroSection: function () {
            return a;
          },
          HistoryContent: function () {
            return b;
          },
          HistorySection: function () {
            return p;
          },
          JoinUs: function () {
            return m;
          },
          JoinUsContent: function () {
            return k;
          },
          JoinUsContentTextArea: function () {
            return y;
          },
          JoinUsHeader: function () {
            return v;
          },
          PinkBox: function () {
            return h;
          },
          RaleTextWhite: function () {
            return F;
          }
        });
      var o = t(230),
        i = t(7247),
        r = t(8600),
        c = t(431);
      function s() {
        let e = (0, o._)([
          '\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 24px;\n'
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        let e = (0, o._)([
          '\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 40px;\n'
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        let e = (0, o._)(['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n']);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      let a = r.Z.section({
          backgroundColor: '#FFF5F8',
          padding: ''.concat((0, i.Wk)(60), ' ').concat((0, i.so)(100)),
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center'
        }),
        u = r.Z.div({ display: 'flex', flexDirection: 'column', gap: (0, i.Wk)(16), width: (0, i.so)(560) }),
        d = r.Z.div({
          display: 'flex',
          gap: (0, i.so)(24),
          '& .phone': { width: (0, i.so)(300), height: (0, i.Wk)(600), objectFit: 'cover', objectPosition: 'center' }
        }),
        g = r.Z.div({ display: 'flex', flexDirection: 'column', gap: (0, i.Wk)(20) }),
        h = r.Z.div({
          width: (0, i.so)(300),
          height: (0, i.Wk)(290),
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FEE6F9',
          borderRadius: (0, i.so)(16),
          '& img': { width: (0, i.so)(160), height: (0, i.so)(160), objectFit: 'cover', objectPosition: 'center' }
        }),
        x = r.Z.div({
          width: (0, i.so)(300),
          height: (0, i.Wk)(290),
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9CBEFC',
          borderRadius: (0, i.so)(16),
          '& img': { width: (0, i.so)(160), height: (0, i.so)(160), objectFit: 'cover', objectPosition: 'center' }
        }),
        p = r.Z.div({
          backgroundColor: '#EBF2FF',
          display: 'flex',
          flexDirection: 'row',
          gap: (0, i.so)(40),
          padding: ''.concat((0, i.Wk)(100), ' ').concat((0, i.so)(80)),
          alignItems: 'center',
          '& img': { width: (0, i.so)(600), height: (0, i.so)(500), objectFit: 'cover', objectPosition: 'center' }
        }),
        b = r.Z.div(s()),
        m = r.Z.section({
          background: 'url(/images/blueBg.png), no-repeat',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: ''.concat((0, i.Wk)(157), ' ').concat((0, i.so)(100)),
          minHeight: (0, i.Wk)(760),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          '& img': { width: (0, i.so)(400), height: (0, i.so)(480), objectFit: 'cover', objectPosition: 'center' }
        }),
        k = r.Z.div(l()),
        y = r.Z.div(f()),
        v = (0, r.Z)(c.MultiStyleText)({ color: '#ffffff', width: (0, i.so)(711) }),
        F = (0, r.Z)(c.RaleText)({ color: '#ffffff', width: (0, i.so)(560), textAlign: 'left' });
    },
    750: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          Button: function () {
            return a;
          }
        });
      var o = t(7437),
        i = t(6566),
        r = t.n(i),
        c = t(7247),
        s = t(8600),
        l = t(1396),
        f = t.n(l);
      t(2265);
      let a = (e) => {
          let { children: n, href: t = '/#' } = e;
          return (0, o.jsx)(u, { href: t, children: (0, o.jsx)(d, { className: r().className, children: n }) });
        },
        u = (0, s.Z)(f())({
          backgroundColor: '#FF1654',
          width: (0, c.so)(240),
          height: (0, c.Wk)(56),
          borderRadius: (0, c.so)(4),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'inline-flex',
          textDecoration: 'none'
        }),
        d = s.Z.span({
          fontSize: (0, c.JB)(16),
          color: '#ffffff',
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          '& svg': { strokeWidth: (0, c.so)(24), height: (0, c.so)(24) }
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
      return e((e.s = 9955));
    }),
      (_N_E = e.O());
  }
]);

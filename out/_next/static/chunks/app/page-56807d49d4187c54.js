(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    1131: function (t, n, e) {
      Promise.resolve().then(e.t.bind(e, 3222, 23)),
        Promise.resolve().then(e.bind(e, 431)),
        Promise.resolve().then(e.bind(e, 3839)),
        Promise.resolve().then(e.bind(e, 750)),
        Promise.resolve().then(e.t.bind(e, 8142, 23));
    },
    3839: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, {
          Card: function () {
            return C;
          },
          CardContent: function () {
            return W;
          },
          CardHeader: function () {
            return j;
          },
          Content: function () {
            return D;
          },
          ContentArea: function () {
            return v;
          },
          Header: function () {
            return b;
          },
          HeaderSection: function () {
            return _;
          },
          ItemRows: function () {
            return F;
          },
          LegalContainerView: function () {
            return B;
          },
          MainContent: function () {
            return I;
          },
          NewLink: function () {
            return N;
          },
          SideLink: function () {
            return T;
          },
          SideNav: function () {
            return R;
          },
          SmallerHeader: function () {
            return y;
          },
          Text: function () {
            return S;
          },
          Wrapper: function () {
            return w;
          }
        });
      var o = e(230),
        i = e(984),
        r = e.n(i),
        c = e(6968),
        a = e.n(c),
        l = e(9855),
        s = e.n(l),
        f = e(7247),
        u = e(8600),
        d = e(1396),
        g = e.n(d),
        h = e(4033),
        p = e(431);
      function m() {
        let t = (0, o._)([
          '\n  display: flex;\n  width: 100%;\n  height: auto;\n  padding: ',
          ' ',
          ';\n  justify-content: center;\n  align-items: center;\n'
        ]);
        return (
          (m = function () {
            return t;
          }),
          t
        );
      }
      function x() {
        let t = (0, o._)(['\n  display: flex;\n  align-items: flex-start;\n  gap: 80px;\n']);
        return (
          (x = function () {
            return t;
          }),
          t
        );
      }
      function k() {
        let t = (0, o._)([
          '\n  color: #515665;\n  font-size: ',
          ';\n  font-style: normal;\n  line-height: 140%;\n  padding: ',
          ' ',
          ';\n'
        ]);
        return (
          (k = function () {
            return t;
          }),
          t
        );
      }
      let w = u.Z.section({
          width: '100%',
          padding: ''.concat((0, f.Wk)(95), ' ').concat((0, f.so)(135)),
          flexDirection: 'column',
          display: 'flex',
          gap: (0, f.Wk)(50)
        }),
        y = u.Z.p([
          r().style,
          { fontSize: (0, f.JB)(16), color: '#FF1654', textTransform: 'uppercase', lineHeight: '150%' }
        ]),
        b = u.Z.p([r().style, { fontSize: (0, f.JB)(32), color: '#1D2029', lineHeight: '150%' }]),
        _ = u.Z.div({ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }),
        F = u.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 0,
          gap: (0, f.so)(24)
        }),
        v = u.Z.div({
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: (0, f.Wk)(24),
          padding: '0px'
        }),
        Z = (t) => {
          switch (t) {
            case 0:
              return {
                backgroundColor: '#D9FFE8',
                '&:hover': { backgroundColor: '#194C2E', '& p': { color: '#ffffff' } }
              };
            case 1:
              return {
                backgroundColor: '#FFE5EC',
                '&:hover': { backgroundColor: '#5C0A20', '& p': { color: '#ffffff' } }
              };
            case 2:
              return {
                backgroundColor: '#FFF0E5',
                '&:hover': { backgroundColor: '#662B00', '& p': { color: '#ffffff' } }
              };
            case 3:
              return {
                backgroundColor: '#EBF2FF',
                '&:hover': { backgroundColor: '#0A275C', '& p': { color: '#ffffff' } }
              };
          }
        },
        C = u.Z.div((t) => {
          let { index: n } = t;
          return [
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: (0, f.so)(572),
              padding: ''.concat((0, f.Wk)(69), ' ').concat((0, f.so)(40)),
              borderRadius: (0, f.so)(16),
              height: (0, f.Wk)(240),
              gap: (0, f.so)(24),
              '& img': { width: (0, f.so)(120), height: (0, f.so)(120), objectFit: 'cover', objectPosition: 'center' }
            },
            Z(n)
          ];
        }),
        W = u.Z.div({ display: 'flex', flexDirection: 'column', gap: (0, f.Wk)(12), width: (0, f.so)(329) }),
        S = (0, u.Z)(p.RaleText)({ fontSize: (0, f.JB)(22) }),
        j = (0, u.Z)(p.RaleText)([a().style, { color: '#1D2029' }]),
        B = u.Z.section(m(), (0, f.Wk)(80), (0, f.so)(100)),
        D = u.Z.div(x()),
        R = u.Z.aside({ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }),
        I = u.Z.article([
          {
            width: (0, f.so)(977),
            margin: 'auto !important',
            '& p': {
              fontWeight: 400,
              margin: 'auto !important',
              ...s().style,
              color: '#515665',
              fontSize: (0, f.JB)(22),
              lineHeight: '160%',
              padding: ''.concat((0, f.Wk)(12))
            }
          }
        ]),
        N = (0, u.Z)(g())(k(), (0, f.JB)(16), (0, f.Wk)(12), (0, f.so)(10)),
        T = (0, u.Z)(N)((t) => {
          let { href: n } = t,
            e = (0, h.usePathname)();
          return [
            {
              ':hover': { color: '#FF1654' },
              ':active': { color: '#FF1654', borderLeft: ''.concat((0, f.so)(4), ' solid #FF1654') }
            },
            e === n && { color: '#FF1654', borderLeft: ''.concat((0, f.so)(4), ' solid #FF1654') }
          ];
        });
    },
    431: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, {
          AppDownload: function () {
            return A;
          },
          AppDownloadArea: function () {
            return I;
          },
          Arrow: function () {
            return Y;
          },
          BigCircle: function () {
            return q;
          },
          BlueBackground: function () {
            return J;
          },
          ButtonContainer: function () {
            return T;
          },
          ColoredHalf: function () {
            return F;
          },
          ColoredText: function () {
            return C;
          },
          ContentView: function () {
            return y;
          },
          DownloadContent: function () {
            return M;
          },
          DownloadHeader: function () {
            return E;
          },
          HeroImage: function () {
            return z;
          },
          HeroSection: function () {
            return b;
          },
          Line: function () {
            return j;
          },
          MainView: function () {
            return w;
          },
          ManText: function () {
            return D;
          },
          MultiStyleText: function () {
            return Z;
          },
          Page404: function () {
            return $;
          },
          Partners: function () {
            return P;
          },
          PinkBackground: function () {
            return O;
          },
          QRCodeBackground: function () {
            return N;
          },
          RaleBase: function () {
            return B;
          },
          RaleText: function () {
            return R;
          },
          RaleTextWhite: function () {
            return V;
          },
          SB: function () {
            return K;
          },
          SmallMultiStyleText: function () {
            return X;
          },
          SmallboldText: function () {
            return U;
          },
          StartShoppingAreaLeft: function () {
            return G;
          },
          StartShoppingAreaRight: function () {
            return Q;
          },
          StoreButtons: function () {
            return H;
          },
          TextContentArea: function () {
            return W;
          },
          TextWithSVG: function () {
            return S;
          },
          Trusted: function () {
            return L;
          },
          WhiteHalf: function () {
            return v;
          }
        });
      var o = e(7437),
        i = e(3424),
        r = e.n(i),
        c = e(7945),
        a = e.n(c),
        l = e(7676),
        s = e.n(l),
        f = e(2821),
        u = e.n(f),
        d = e(7247),
        g = e(9538),
        h = e(8600),
        p = e(6691),
        m = e.n(p),
        x = e(1396),
        k = e.n(x);
      let w = h.Z.div({ width: '100%', minHeight: '100%', backgroundColor: '#ffffff' }),
        y = h.Z.div({ width: '100%' }),
        b = h.Z.section({ height: (0, d.Wk)(824), width: '100%', display: 'flex', flexDirection: 'row' }),
        _ = (0, g.F4)({
          from: { transform: 'translate3d(0px, '.concat((0, d.Wk)(-90), ' , 0px)') },
          '50%': { transform: 'translate3d(0px, '.concat((0, d.Wk)(90), ' , 0px)') },
          '90%': { transform: 'translate3d(0px, '.concat((0, d.Wk)(-100), ' , 0px)') },
          to: { transform: 'translate3d(0px, '.concat((0, d.Wk)(-90), ' , 0px)') }
        }),
        F = h.Z.div({
          height: (0, d.Wk)(824),
          width: '50%',
          background: '#FFF5F8',
          borderBottomRightRadius: (0, d.so)(160),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          '& img': { animation: ''.concat(_, ' 5s ease infinite') }
        }),
        v = h.Z.div({ height: (0, d.Wk)(824), width: '50%' }),
        Z = h.Z.h1([r().style, { fontSize: (0, d.JB)(44), color: '#1D2029' }]),
        C = h.Z.span({ color: '#FF1453' }),
        W = h.Z.div({
          margin: ''
            .concat((0, d.Wk)(168), ' ')
            .concat((0, d.so)(24), ' ')
            .concat((0, d.Wk)(120), ' ')
            .concat((0, d.so)(100))
        }),
        S = h.Z.div({ display: 'inline-block' }),
        j = () =>
          (0, o.jsx)('svg', {
            width: (0, d.so)(154),
            height: (0, d.Wk)(8),
            viewBox: '0 0 154 8',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, o.jsx)('path', {
              id: 'Vector',
              d: 'M2 5.64611C28.1648 2.81791 94.7954 -1.0708 152 6',
              stroke: '#FF1F7D',
              'stroke-width': '4',
              'stroke-linecap': 'round'
            })
          }),
        B = (t) => {
          let { className: n, children: e } = t;
          return (0, o.jsx)('p', { className: ''.concat(s().className, ' ').concat(n), children: e });
        },
        D = h.Z.p([
          a().style,
          { fontSize: (0, d.JB)(16), color: '#1D2029', textTransform: 'uppercase', lineHeight: '150%' }
        ]),
        R = (0, h.Z)(B)({ color: '#515665', fontSize: (0, d.JB)(22), lineHeight: '160%' }),
        I = h.Z.div({
          display: 'flex',
          flexDirection: 'row',
          gap: (0, d.so)(24),
          alignItems: 'center',
          marginTop: (0, d.Wk)(40)
        }),
        N = h.Z.div({
          width: (0, d.so)(140),
          height: (0, d.so)(140),
          borderRadius: (0, d.so)(140),
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FF3251',
          display: 'flex'
        }),
        T = h.Z.div({ display: 'flex', flexDirection: 'row', gap: (0, d.so)(10), alignItems: 'center' }),
        H = (0, h.Z)(k())({}),
        z = (0, h.Z)(m())({
          width: (0, d.so)(600),
          height: (0, d.Wk)(600),
          objectFit: 'contain',
          alignSelf: 'center',
          objectPosition: 'center'
        }),
        P = h.Z.div({ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: (0, d.so)(16) }),
        L = h.Z.div({
          margin: ''
            .concat((0, d.Wk)(0), ' ')
            .concat((0, d.so)(24), ' ')
            .concat((0, d.Wk)(40), ' ')
            .concat((0, d.so)(100))
        }),
        J = h.Z.section({
          padding: ''.concat((0, d.Wk)(100), ' ').concat((0, d.so)(80)),
          width: '100%',
          backgroundColor: '#002466',
          alignItems: 'center',
          justifyContent: 'center'
        }),
        A = h.Z.div({
          background: 'url(/images/dotBg.png), no-repeat',
          width: (0, d.so)(1280),
          height: (0, d.Wk)(480),
          display: 'flex',
          backgroundSize: 'cover',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }),
        M = h.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: (0, d.Wk)(40),
          width: (0, d.so)(1220),
          height: '100%',
          backgroundColor: '#00000012',
          borderTopLeftRadius: (0, d.so)(178),
          borderBottomRightRadius: (0, d.so)(178)
        }),
        E = (0, h.Z)(R)([u().style, { color: '#ffffff', fontSize: (0, d.JB)(32) }]),
        V = (0, h.Z)(R)({ color: '#ffffff', textAlign: 'center', width: (0, d.so)(440), fontSize: (0, d.JB)(24) }),
        O = h.Z.section({
          backgroundColor: '#FFF5F8',
          borderTopRightRadius: (0, d.so)(160),
          width: '100%',
          display: 'flex',
          flexDirection: 'row'
        }),
        G = h.Z.div({
          width: '50%',
          padding: ''
            .concat((0, d.Wk)(162), ' ')
            .concat((0, d.so)(80), ' ')
            .concat((0, d.Wk)(92)),
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: (0, d.Wk)(40)
        }),
        Q = h.Z.div({
          width: '50%',
          padding: ''.concat((0, d.Wk)(92), ' ').concat((0, d.so)(80)),
          position: 'relative',
          '& img': {
            width: (0, d.so)(404),
            height: (0, d.Wk)(640),
            position: 'absolute',
            top: (0, d.Wk)(60),
            right: (0, d.so)(195),
            objectFit: 'contain',
            objectPosition: 'center'
          }
        }),
        q = h.Z.div({
          borderRadius: (0, d.so)(560),
          backgroundColor: '#FF80A1',
          backdropFilter: 'blur('.concat((0, d.so)(43.75), ')'),
          width: (0, d.Wk)(560),
          height: (0, d.Wk)(560),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }),
        K = h.Z.div({
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: (0, d.so)(16),
          '& img': { width: (0, d.so)(32), height: (0, d.Wk)(48), objectFit: 'contain', objectPosition: 'center' }
        }),
        U = (0, h.Z)(R)([u().style]),
        X = (0, h.Z)(Z)({ fontSize: (0, d.JB)(32) }),
        Y = () =>
          (0, o.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '25',
            height: '24',
            viewBox: '0 0 25 24',
            fill: 'none',
            children: (0, o.jsx)('path', {
              d: 'M12.5 4L11.09 5.41L16.67 11H4.5V13H16.67L11.09 18.59L12.5 20L20.5 12L12.5 4Z',
              fill: 'white'
            })
          }),
        $ = h.Z.div({
          height: (0, d.Wk)(520),
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          display: 'flex'
        });
    },
    750: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, {
          Button: function () {
            return f;
          }
        });
      var o = e(7437),
        i = e(6566),
        r = e.n(i),
        c = e(7247),
        a = e(8600),
        l = e(1396),
        s = e.n(l);
      e(2265);
      let f = (t) => {
          let { children: n, href: e = '/#' } = t;
          return (0, o.jsx)(u, { href: e, children: (0, o.jsx)(d, { className: r().className, children: n }) });
        },
        u = (0, a.Z)(s())({
          backgroundColor: '#FF1654',
          width: (0, c.so)(240),
          height: (0, c.Wk)(56),
          borderRadius: (0, c.so)(4),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'inline-flex',
          textDecoration: 'none'
        }),
        d = a.Z.span({
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
    7247: function (t, n, e) {
      'use strict';
      e.d(n, {
        JB: function () {
          return r;
        },
        Wk: function () {
          return i;
        },
        so: function () {
          return o;
        }
      });
      let o = function (t) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1440;
          return ''.concat((t / n) * 100, 'vw');
        },
        i = function (t) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 924;
          return ''.concat((t / n) * 100, 'vh');
        },
        r = (t, n) => o(t, n);
    },
    8142: function (t) {
      t.exports = {
        style: { fontFamily: "'__Raleway_1d251f', '__Raleway_Fallback_1d251f'", fontWeight: 700, fontStyle: 'normal' },
        className: '__className_1d251f'
      };
    },
    984: function (t) {
      t.exports = {
        style: { fontFamily: "'__Manrope_90b4c2', '__Manrope_Fallback_90b4c2'", fontWeight: 600, fontStyle: 'normal' },
        className: '__className_90b4c2'
      };
    },
    9855: function (t) {
      t.exports = {
        style: { fontFamily: "'__Raleway_f8758a', '__Raleway_Fallback_f8758a'", fontWeight: 400, fontStyle: 'normal' },
        className: '__className_f8758a'
      };
    },
    6968: function (t) {
      t.exports = {
        style: { fontFamily: "'__Raleway_8be77d', '__Raleway_Fallback_8be77d'", fontWeight: 600, fontStyle: 'normal' },
        className: '__className_8be77d'
      };
    },
    6566: function (t) {
      t.exports = {
        style: { fontFamily: "'__Manrope_30f681', '__Manrope_Fallback_30f681'", fontWeight: 400, fontStyle: 'normal' },
        className: '__className_30f681'
      };
    },
    4033: function (t, n, e) {
      t.exports = e(8165);
    },
    230: function (t, n, e) {
      'use strict';
      function o(t, n) {
        return n || (n = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(n) } }));
      }
      e.d(n, {
        _: function () {
          return o;
        }
      });
    }
  },
  function (t) {
    t.O(0, [107, 971, 596, 744], function () {
      return t((t.s = 1131));
    }),
      (_N_E = t.O());
  }
]);

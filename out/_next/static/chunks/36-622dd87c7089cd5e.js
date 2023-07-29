(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [36],
  {
    3839: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, {
          Card: function () {
            return C;
          },
          CardContent: function () {
            return Z;
          },
          CardHeader: function () {
            return B;
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
            return W;
          },
          ItemRows: function () {
            return F;
          },
          LegalContainerView: function () {
            return _;
          },
          MainContent: function () {
            return R;
          },
          NewLink: function () {
            return T;
          },
          SideLink: function () {
            return I;
          },
          SideNav: function () {
            return j;
          },
          SmallerHeader: function () {
            return y;
          },
          Text: function () {
            return S;
          },
          Wrapper: function () {
            return k;
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
        d = e(8600),
        u = e(1396),
        g = e.n(u),
        p = e(4033),
        h = e(431);
      function x() {
        let t = (0, o._)([
          '\n  display: flex;\n  width: 100%;\n  height: auto;\n  padding: ',
          ' ',
          ';\n  justify-content: center;\n  align-items: center;\n'
        ]);
        return (
          (x = function () {
            return t;
          }),
          t
        );
      }
      function m() {
        let t = (0, o._)(['\n  display: flex;\n  align-items: flex-start;\n  gap: 80px;\n']);
        return (
          (m = function () {
            return t;
          }),
          t
        );
      }
      function w() {
        let t = (0, o._)([
          '\n  color: #515665;\n  font-size: ',
          ';\n  font-style: normal;\n  line-height: 140%;\n  padding: ',
          ' ',
          ';\n'
        ]);
        return (
          (w = function () {
            return t;
          }),
          t
        );
      }
      let k = d.Z.section({
          width: '100%',
          padding: ''.concat((0, f.Wk)(95), ' ').concat((0, f.so)(135)),
          flexDirection: 'column',
          display: 'flex',
          gap: (0, f.Wk)(50),
          ...(0, f.wz)({ padding: ''.concat((0, f.Wk)(40), ' ').concat((0, f.so)(24)) })
        }),
        y = d.Z.p([
          r().style,
          { fontSize: (0, f.JB)(16), color: '#FF1654', textTransform: 'uppercase', lineHeight: '150%' },
          (0, f.wz)({ fontSize: (0, f.JB)(12) })
        ]),
        b = d.Z.p([
          r().style,
          { fontSize: (0, f.JB)(32), color: '#1D2029', lineHeight: '150%', textAlign: 'center' },
          (0, f.wz)({ fontSize: (0, f.JB)(24) })
        ]),
        W = d.Z.div({ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }),
        F = d.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 0,
          gap: (0, f.so)(24),
          ...(0, f.wz)({ flexDirection: 'column', marginBottom: (0, f.Wk)(12) })
        }),
        v = d.Z.div({
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: (0, f.Wk)(24),
          padding: '0px'
        }),
        z = (t) => {
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
        C = d.Z.div((t) => {
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
            z(n),
            (0, f.wz)({
              width: (0, f.so)(366),
              '& img': {
                width: (0, f.so)(76.783),
                height: (0, f.so)(76.783),
                objectFit: 'cover',
                objectPosition: 'center'
              },
              padding: ''.concat((0, f.Wk)(44), ' ').concat((0, f.so)(26))
            })
          ];
        }),
        Z = d.Z.div({
          display: 'flex',
          flexDirection: 'column',
          gap: (0, f.Wk)(12),
          width: (0, f.so)(329),
          ...(0, f.wz)({ maxWidth: (0, f.so)(210), gap: (0, f.Wk)(7.678) })
        }),
        S = (0, d.Z)(h.RaleText)({
          fontSize: (0, f.JB)(22),
          ...(0, f.wz)({ fontSize: (0, f.JB)(14), maxWidth: (0, f.so)(210) })
        }),
        B = (0, d.Z)(h.RaleText)([
          a().style,
          { color: '#1D2029', ...(0, f.wz)({ fontSize: (0, f.JB)(16), maxWidth: (0, f.so)(210) }) }
        ]),
        _ = d.Z.section(x(), (0, f.Wk)(80), (0, f.so)(100)),
        D = d.Z.div(m()),
        j = d.Z.aside({ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }),
        R = d.Z.article([
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
        T = (0, d.Z)(g())(w(), (0, f.JB)(16), (0, f.Wk)(12), (0, f.so)(10)),
        I = (0, d.Z)(T)((t) => {
          let { href: n } = t,
            e = (0, p.usePathname)();
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
            return M;
          },
          AppDownloadArea: function () {
            return T;
          },
          Arrow: function () {
            return $;
          },
          BigCircle: function () {
            return K;
          },
          BlueBackground: function () {
            return P;
          },
          ButtonContainer: function () {
            return J;
          },
          ColoredHalf: function () {
            return v;
          },
          ColoredText: function () {
            return Z;
          },
          ContentView: function () {
            return y;
          },
          DownloadContent: function () {
            return E;
          },
          DownloadHeader: function () {
            return V;
          },
          HeroImage: function () {
            return L;
          },
          HeroSection: function () {
            return b;
          },
          Line: function () {
            return _;
          },
          MainView: function () {
            return k;
          },
          ManText: function () {
            return j;
          },
          MultiStyleText: function () {
            return C;
          },
          Page404: function () {
            return tt;
          },
          Partners: function () {
            return A;
          },
          PinkBackground: function () {
            return q;
          },
          QRCodeBackground: function () {
            return I;
          },
          RaleBase: function () {
            return D;
          },
          RaleText: function () {
            return R;
          },
          RaleTextWhite: function () {
            return O;
          },
          SB: function () {
            return U;
          },
          SmallMultiStyleText: function () {
            return Y;
          },
          SmallboldText: function () {
            return X;
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
            return S;
          },
          TextWithSVG: function () {
            return B;
          },
          Trusted: function () {
            return N;
          },
          WhiteHalf: function () {
            return z;
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
        d = e.n(f),
        u = e(7247),
        g = e(9538),
        p = e(8600),
        h = e(6691),
        x = e.n(h),
        m = e(1396),
        w = e.n(m);
      let k = p.Z.div({ width: '100%', minHeight: '100%', backgroundColor: '#ffffff' }),
        y = p.Z.div({ width: '100%' }),
        b = p.Z.section({
          height: (0, u.Wk)(824),
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          '@media(max-width: 480px)': { flexDirection: 'column', background: '#FFF5F8', minHeight: (0, u.Wk)(1024) }
        }),
        W = (0, g.F4)({
          from: { transform: 'translate3d(0px, '.concat((0, u.Wk)(-90), ' , 0px)') },
          '50%': { transform: 'translate3d(0px, '.concat((0, u.Wk)(90), ' , 0px)') },
          '90%': { transform: 'translate3d(0px, '.concat((0, u.Wk)(-100), ' , 0px)') },
          to: { transform: 'translate3d(0px, '.concat((0, u.Wk)(-90), ' , 0px)') }
        }),
        F = (0, g.F4)({
          from: { transform: 'translate3d(0px, '.concat((0, u.Wk)(-40), ' , 0px)') },
          '50%': { transform: 'translate3d(0px, '.concat((0, u.Wk)(40), ' , 0px)') },
          '90%': { transform: 'translate3d(0px, '.concat((0, u.Wk)(-50), ' , 0px)') },
          to: { transform: 'translate3d(0px, '.concat((0, u.Wk)(-40), ' , 0px)') }
        }),
        v = p.Z.div({
          height: (0, u.Wk)(824),
          width: '50%',
          background: '#FFF5F8',
          borderBottomRightRadius: (0, u.so)(160),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          '@media(max-width: 480px)': {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'normal',
            justifyContent: 'space-between',
            '& #mobileTrusted': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: (0, u.Wk)(42)
            }
          }
        }),
        z = p.Z.div({
          height: (0, u.Wk)(824),
          width: '50%',
          '@media(max-width: 480px)': { width: '100%', flexDirection: 'row' }
        }),
        C = p.Z.h1([
          r().style,
          {
            fontSize: (0, u.JB)(44),
            color: '#1D2029',
            '@media(max-width: 480px)': {
              fontSize: (0, u.JB)(32),
              width: (0, u.so)(366),
              '& svg': { width: (0, u.so)(110) }
            }
          }
        ]),
        Z = p.Z.span({ color: '#FF1453' }),
        S = p.Z.div({
          margin: ''
            .concat((0, u.Wk)(168), ' ')
            .concat((0, u.so)(24), ' ')
            .concat((0, u.Wk)(120), ' ')
            .concat((0, u.so)(100)),
          '@media(max-width: 480px)': { margin: ''.concat((0, u.Wk)(40), ' ').concat((0, u.so)(24)) }
        }),
        B = p.Z.div({ display: 'inline-block' }),
        _ = () =>
          (0, o.jsx)('svg', {
            width: (0, u.so)(154),
            height: (0, u.Wk)(8),
            viewBox: '0 0 154 8',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, o.jsx)('path', {
              id: 'Vector',
              d: 'M2 5.64611C28.1648 2.81791 94.7954 -1.0708 152 6',
              stroke: '#FF1F7D',
              strokeWidth: '4',
              strokeLinecap: 'round'
            })
          }),
        D = (t) => {
          let { className: n, children: e } = t;
          return (0, o.jsx)('p', { className: ''.concat(s().className, ' ').concat(n), children: e });
        },
        j = p.Z.p([
          a().style,
          { fontSize: (0, u.JB)(16), color: '#1D2029', textTransform: 'uppercase', lineHeight: '150%' },
          (0, u.wz)({ fontSize: (0, u.JB)(12) })
        ]),
        R = (0, p.Z)(D)({
          color: '#515665',
          fontSize: (0, u.JB)(22),
          lineHeight: '160%',
          '@media(max-width: 480px)': { fontSize: (0, u.JB)(16), width: (0, u.so)(366) }
        }),
        T = p.Z.div([
          { display: 'flex', flexDirection: 'row', gap: (0, u.so)(24), alignItems: 'center', marginTop: (0, u.Wk)(40) },
          (0, u.wz)({ marginTop: (0, u.Wk)(24), '& .scanText': { display: 'none' } })
        ]),
        I = p.Z.div([
          {
            width: (0, u.so)(140),
            height: (0, u.so)(140),
            borderRadius: (0, u.so)(140),
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FF3251',
            display: 'flex'
          },
          (0, u.wz)({ display: 'none' })
        ]),
        J = p.Z.div({ display: 'flex', flexDirection: 'row', gap: (0, u.so)(10), alignItems: 'center' }),
        H = (0, p.Z)(w())({}),
        L = (0, p.Z)(x())([
          {
            width: (0, u.so)(600),
            height: (0, u.Wk)(600),
            objectFit: 'contain',
            alignSelf: 'center',
            objectPosition: 'center',
            animation: ''.concat(W, ' 5s ease infinite'),
            ...(0, u.wz)({ animation: ''.concat(F, ' 5s ease infinite') })
          },
          (0, u.wz)({ width: (0, u.so)(414), height: (0, u.so)(414) })
        ]),
        A = p.Z.div([
          { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: (0, u.so)(16) },
          (0, u.wz)({ '& img': {} })
        ]),
        N = p.Z.div([
          {
            margin: ''
              .concat((0, u.Wk)(0), ' ')
              .concat((0, u.so)(24), ' ')
              .concat((0, u.Wk)(40), ' ')
              .concat((0, u.so)(100))
          },
          (0, u.wz)({ margin: ''.concat((0, u.Wk)(40), ' ').concat((0, u.so)(24)), display: 'none' })
        ]),
        P = p.Z.section({
          padding: ''.concat((0, u.Wk)(100), ' ').concat((0, u.so)(80)),
          width: '100%',
          backgroundColor: '#002466',
          alignItems: 'center',
          justifyContent: 'center',
          ...(0, u.wz)({ padding: ''.concat((0, u.Wk)(100), ' ').concat((0, u.so)(24)) })
        }),
        M = p.Z.div({
          background: 'url(/images/dotBg.png), no-repeat',
          width: (0, u.so)(1280),
          height: (0, u.Wk)(480),
          display: 'flex',
          backgroundSize: 'cover',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          ...(0, u.wz)({ width: (0, u.so)(414), backgroundSize: 'scale-down' })
        }),
        E = p.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: (0, u.Wk)(40),
          width: (0, u.so)(1220),
          height: '100%',
          backgroundColor: '#00000012',
          borderTopLeftRadius: (0, u.so)(178),
          borderBottomRightRadius: (0, u.so)(178),
          ...(0, u.wz)({ gap: (0, u.Wk)(24) })
        }),
        V = (0, p.Z)(R)([
          d().style,
          { color: '#ffffff', fontSize: (0, u.JB)(32), textAlign: 'center' },
          (0, u.wz)({ width: (0, u.so)(316) })
        ]),
        O = (0, p.Z)(R)({
          color: '#ffffff',
          textAlign: 'center',
          width: (0, u.so)(440),
          fontSize: (0, u.JB)(24),
          ...(0, u.wz)({ width: (0, u.so)(316), margin: '0px', fontSize: (0, u.JB)(16) })
        }),
        q = p.Z.section({
          backgroundColor: '#FFF5F8',
          borderTopRightRadius: (0, u.so)(160),
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          ...(0, u.wz)({ flexDirection: 'column', borderTopRightRadius: (0, u.so)(0) })
        }),
        G = p.Z.div({
          width: '50%',
          padding: ''
            .concat((0, u.Wk)(162), ' ')
            .concat((0, u.so)(80), ' ')
            .concat((0, u.Wk)(92)),
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: (0, u.Wk)(40),
          ...(0, u.wz)({
            padding: ''.concat((0, u.Wk)(40), ' ').concat((0, u.so)(24)),
            '& h1': { fontSize: (0, u.JB)(24) }
          })
        }),
        Q = p.Z.div({
          width: '50%',
          padding: ''.concat((0, u.Wk)(92), ' ').concat((0, u.so)(80)),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          '& img': {
            width: (0, u.so)(404),
            height: (0, u.Wk)(640),
            position: 'absolute',
            objectFit: 'contain',
            objectPosition: 'center'
          },
          ...(0, u.wz)({ width: '100%' })
        }),
        K = p.Z.div({
          borderRadius: (0, u.so)(560),
          backgroundColor: '#FF80A1',
          backdropFilter: 'blur('.concat((0, u.so)(43.75), ')'),
          width: (0, u.Wk)(560),
          height: (0, u.Wk)(560),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(0, u.wz)({})
        }),
        U = p.Z.div({
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: (0, u.so)(16),
          '& img': { width: (0, u.so)(32), height: (0, u.Wk)(48), objectFit: 'contain', objectPosition: 'center' }
        }),
        X = (0, p.Z)(R)([d().style]),
        Y = (0, p.Z)(C)({ fontSize: (0, u.JB)(32) }),
        $ = () =>
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
        tt = p.Z.div({
          height: (0, u.Wk)(520),
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          display: 'flex'
        });
    },
    6773: function (t, n, e) {
      'use strict';
      function o(t) {
        let { src: n, width: e, quality: o } = t;
        return ''
          .concat(n, '?w=')
          .concat(e, '&q=')
          .concat(o || 75);
      }
      e.r(n),
        e.d(n, {
          default: function () {
            return o;
          }
        });
    },
    7247: function (t, n, e) {
      'use strict';
      e.d(n, {
        JB: function () {
          return c;
        },
        Wk: function () {
          return r;
        },
        so: function () {
          return i;
        },
        wz: function () {
          return a;
        }
      });
      let o = 'undefined' != typeof document ? document.body.clientWidth : 1440,
        i = function (t) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1440;
          return o <= 480 ? ''.concat((t / 414) * 100, 'vw') : ''.concat((t / n) * 100, 'vw');
        },
        r = function (t) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 924;
          return o <= 480 ? ''.concat((t / 740) * 100, 'vh') : ''.concat((t / n) * 100, 'vh');
        },
        c = (t, n) => i(t, n),
        a = (t) => ({ '@media(max-width: 480px)': t });
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
  }
]);

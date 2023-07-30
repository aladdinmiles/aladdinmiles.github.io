(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [36],
  {
    3839: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, {
          Card: function () {
            return z;
          },
          CardContent: function () {
            return F;
          },
          CardHeader: function () {
            return v;
          },
          Content: function () {
            return j;
          },
          ContentArea: function () {
            return b;
          },
          Header: function () {
            return k;
          },
          HeaderSection: function () {
            return C;
          },
          ItemRows: function () {
            return y;
          },
          LegalContainerView: function () {
            return Z;
          },
          MainContent: function () {
            return _;
          },
          NewLink: function () {
            return B;
          },
          SideLink: function () {
            return R;
          },
          SideNav: function () {
            return S;
          },
          SmallerHeader: function () {
            return x;
          },
          Text: function () {
            return W;
          },
          Wrapper: function () {
            return m;
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
        h = e(4033),
        p = e(431);
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
      let m = d.Z.section({
          width: '100%',
          padding: ''.concat((0, f.Wk)(95), ' ').concat((0, f.so)(135)),
          flexDirection: 'column',
          display: 'flex',
          gap: (0, f.Wk)(50),
          ...(0, f.wz)({
            width: (0, f.CD)(414),
            paddingTop: ''.concat((0, f.$s)(40)),
            alignItems: 'center',
            justifyContent: 'center'
          })
        }),
        x = d.Z.p([
          r().style,
          {
            fontSize: (0, f.JB)(16),
            color: '#FF1654',
            textTransform: 'uppercase',
            lineHeight: '150%'
          },
          (0, f.wz)({ fontSize: (0, f.jo)(12) })
        ]),
        k = d.Z.p([
          r().style,
          {
            fontSize: (0, f.JB)(32),
            color: '#1D2029',
            lineHeight: '150%',
            textAlign: 'center'
          },
          (0, f.wz)({ fontSize: (0, f.jo)(24), width: (0, f.CD)(390) })
        ]),
        C = d.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }),
        y = d.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 0,
          gap: (0, f.so)(24),
          ...(0, f.wz)({ flexDirection: 'column', gap: (0, f.CD)(24) })
        }),
        b = d.Z.div({
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: (0, f.Wk)(24),
          padding: '0px',
          ...(0, f.wz)({ alignItems: 'center', justifyContent: 'center' })
        }),
        D = (t) => {
          switch (t) {
            case 0:
              return {
                backgroundColor: '#D9FFE8',
                '&:hover': {
                  backgroundColor: '#194C2E',
                  '& p': { color: '#ffffff' }
                }
              };
            case 1:
              return {
                backgroundColor: '#FFE5EC',
                '&:hover': {
                  backgroundColor: '#5C0A20',
                  '& p': { color: '#ffffff' }
                }
              };
            case 2:
              return {
                backgroundColor: '#FFF0E5',
                '&:hover': {
                  backgroundColor: '#662B00',
                  '& p': { color: '#ffffff' }
                }
              };
            case 3:
              return {
                backgroundColor: '#EBF2FF',
                '&:hover': {
                  backgroundColor: '#0A275C',
                  '& p': { color: '#ffffff' }
                }
              };
          }
        },
        z = d.Z.div((t) => {
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
              '& img': {
                width: (0, f.so)(120),
                height: (0, f.so)(120),
                objectFit: 'cover',
                objectPosition: 'center'
              }
            },
            D(n),
            (0, f.wz)({
              width: (0, f.CD)(366),
              '& img': {
                width: (0, f.CD)(76.783),
                height: (0, f.CD)(76.783),
                objectFit: 'cover',
                objectPosition: 'center'
              },
              padding: ''.concat((0, f.$s)(44), ' ').concat((0, f.CD)(26)),
              borderRadius: (0, f.CD)(8),
              gap: (0, f.CD)(24),
              flexShrink: 0
            })
          ];
        }),
        F = d.Z.div({
          display: 'flex',
          flexDirection: 'column',
          gap: (0, f.Wk)(12),
          width: (0, f.so)(329),
          ...(0, f.wz)({ width: (0, f.CD)(210), gap: (0, f.$s)(7.678) })
        }),
        W = (0, d.Z)(p.RaleText)({
          fontSize: (0, f.JB)(22),
          ...(0, f.wz)({ fontSize: (0, f.jo)(14), width: (0, f.CD)(210) })
        }),
        v = (0, d.Z)(p.RaleText)([
          a().style,
          {
            color: '#1D2029',
            ...(0, f.wz)({ fontSize: (0, f.jo)(16), width: (0, f.CD)(210) })
          }
        ]),
        Z = d.Z.section([
          '\n  display: flex;\n  width: 100%;\n  height: auto;\n  padding: '
            .concat((0, f.Wk)(80), ' ')
            .concat(
              (0, f.so)(100),
              ';\n  justify-content: center;\n  align-items: center;\n'
            ),
          (0, f.wz)({
            padding: ''.concat((0, f.Wk)(40), ' ').concat((0, f.so)(24))
          })
        ]),
        j = d.Z.div([
          '\n  display: flex;\n  align-items: flex-start;\n  gap: '.concat(
            (0, f.so)(80),
            ';\n'
          ),
          (0, f.wz)({ flexDirection: 'column' })
        ]),
        S = d.Z.aside({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          ...(0, f.wz)({ display: 'none' })
        }),
        _ = d.Z.article([
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
          },
          (0, f.wz)({
            width: '100%',
            '& p': {
              fontWeight: 400,
              margin: 'auto !important',
              ...s().style,
              color: '#515665',
              fontSize: (0, f.jo)(16),
              lineHeight: '160%',
              padding: ''.concat((0, f.$s)(12))
            }
          })
        ]),
        B = (0, d.Z)(g())(w(), (0, f.JB)(16), (0, f.Wk)(12), (0, f.so)(10)),
        R = (0, d.Z)(B)((t) => {
          let { href: n } = t,
            e = (0, h.usePathname)();
          return [
            {
              ':hover': { color: '#FF1654' },
              ':active': {
                color: '#FF1654',
                borderLeft: ''.concat((0, f.so)(4), ' solid #FF1654')
              }
            },
            e === n && {
              color: '#FF1654',
              borderLeft: ''.concat((0, f.so)(4), ' solid #FF1654')
            }
          ];
        });
    },
    431: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, {
          AppDownload: function () {
            return P;
          },
          AppDownloadArea: function () {
            return T;
          },
          Arrow: function () {
            return Y;
          },
          BigCircle: function () {
            return Q;
          },
          BlueBackground: function () {
            return N;
          },
          ButtonContainer: function () {
            return $;
          },
          ColoredHalf: function () {
            return z;
          },
          ColoredText: function () {
            return v;
          },
          ContentView: function () {
            return C;
          },
          DownloadContent: function () {
            return M;
          },
          DownloadHeader: function () {
            return E;
          },
          HeroImage: function () {
            return L;
          },
          HeroSection: function () {
            return y;
          },
          Line: function () {
            return S;
          },
          MainView: function () {
            return k;
          },
          ManText: function () {
            return B;
          },
          MultiStyleText: function () {
            return W;
          },
          Page404: function () {
            return tt;
          },
          Partners: function () {
            return A;
          },
          PinkBackground: function () {
            return O;
          },
          QRCodeBackground: function () {
            return I;
          },
          RaleBase: function () {
            return _;
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
            return q;
          },
          StartShoppingAreaRight: function () {
            return G;
          },
          StoreButtons: function () {
            return H;
          },
          TextContentArea: function () {
            return Z;
          },
          TextWithSVG: function () {
            return j;
          },
          Trusted: function () {
            return J;
          },
          WhiteHalf: function () {
            return F;
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
        h = e(8600),
        p = e(6691),
        w = e.n(p),
        m = e(1396),
        x = e.n(m);
      let k = h.Z.div({
          width: '100%',
          minHeight: '100%',
          backgroundColor: '#ffffff'
        }),
        C = h.Z.div({ width: '100%' }),
        y = h.Z.section({
          height: (0, u.Wk)(824),
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          '@media(max-width: 480px)': {
            flexDirection: 'column',
            background: '#FFF5F8',
            height: (0, u.$s)(868),
            marginBottom: (0, u.$s)(50)
          }
        }),
        b = (0, g.F4)({
          from: {
            transform: 'translate3d(0px, '.concat((0, u.Wk)(-90), ' , 0px)')
          },
          '50%': {
            transform: 'translate3d(0px, '.concat((0, u.Wk)(90), ' , 0px)')
          },
          '90%': {
            transform: 'translate3d(0px, '.concat((0, u.Wk)(-100), ' , 0px)')
          },
          to: {
            transform: 'translate3d(0px, '.concat((0, u.Wk)(-90), ' , 0px)')
          }
        }),
        D = (0, g.F4)({
          from: {
            transform: 'translate3d(0px, '.concat((0, u.Wk)(-40), ' , 0px)')
          },
          '50%': {
            transform: 'translate3d(0px, '.concat((0, u.Wk)(40), ' , 0px)')
          },
          '90%': {
            transform: 'translate3d(0px, '.concat((0, u.Wk)(-50), ' , 0px)')
          },
          to: {
            transform: 'translate3d(0px, '.concat((0, u.Wk)(-40), ' , 0px)')
          }
        }),
        z = h.Z.div({
          height: (0, u.Wk)(824),
          width: '50%',
          background: '#FFF5F8',
          borderBottomRightRadius: (0, u.so)(160),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          '& #mobileTrusted': { display: 'none' },
          '@media(max-width: 480px)': {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'normal',
            justifyContent: 'space-between',
            height: (0, u.$s)(868),
            '& #mobileTrusted': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: (0, u.$s)(42)
            }
          }
        }),
        F = h.Z.div({
          height: (0, u.Wk)(824),
          width: '50%',
          '@media(max-width: 480px)': {
            width: '100%',
            flexDirection: 'row',
            height: (0, u.$s)(868)
          }
        }),
        W = h.Z.h1([
          r().style,
          {
            fontSize: (0, u.JB)(44),
            color: '#1D2029',
            '@media(max-width: 480px)': {
              fontSize: (0, u.jo)(32),
              width: (0, u.CD)(366),
              '& svg': { width: (0, u.CD)(110) }
            }
          }
        ]),
        v = h.Z.span({ color: '#FF1453' }),
        Z = h.Z.div({
          margin: ''
            .concat((0, u.Wk)(168), ' ')
            .concat((0, u.so)(24), ' ')
            .concat((0, u.Wk)(120), ' ')
            .concat((0, u.so)(100)),
          '@media(max-width: 480px)': {
            margin: ''.concat((0, u.$s)(40), ' ').concat((0, u.CD)(24))
          }
        }),
        j = h.Z.div({ display: 'inline-block' }),
        S = () =>
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
        _ = (t) => {
          let { className: n, children: e } = t;
          return (0, o.jsx)('p', {
            className: ''.concat(s().className, ' ').concat(n),
            children: e
          });
        },
        B = h.Z.p([
          a().style,
          {
            fontSize: (0, u.JB)(16),
            color: '#1D2029',
            textTransform: 'uppercase',
            lineHeight: '150%'
          },
          (0, u.wz)({ fontSize: (0, u.jo)(12) })
        ]),
        R = (0, h.Z)(_)({
          color: '#515665',
          fontSize: (0, u.JB)(22),
          lineHeight: '160%',
          '@media(max-width: 480px)': {
            fontSize: (0, u.jo)(16),
            width: (0, u.CD)(366)
          }
        }),
        T = h.Z.div([
          {
            display: 'flex',
            flexDirection: 'row',
            gap: (0, u.so)(24),
            alignItems: 'center',
            marginTop: (0, u.Wk)(40)
          },
          (0, u.wz)({
            marginTop: (0, u.$s)(24),
            '& .scanText': { display: 'none' }
          })
        ]),
        I = h.Z.div([
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
        $ = h.Z.div({
          display: 'flex',
          flexDirection: 'row',
          gap: (0, u.so)(10),
          alignItems: 'center'
        }),
        H = (0, h.Z)(x())({}),
        L = (0, h.Z)(w())([
          {
            width: (0, u.so)(600),
            height: (0, u.Wk)(600),
            objectFit: 'contain',
            alignSelf: 'center',
            objectPosition: 'center',
            animation: ''.concat(b, ' 5s ease infinite'),
            ...(0, u.wz)({ animation: ''.concat(D, ' 5s ease infinite') })
          },
          (0, u.wz)({ width: (0, u.CD)(414), height: (0, u.$s)(414) })
        ]),
        A = h.Z.div([
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: (0, u.so)(16)
          },
          (0, u.wz)({ '& img': {} })
        ]),
        J = h.Z.div([
          {
            margin: ''
              .concat((0, u.Wk)(0), ' ')
              .concat((0, u.so)(24), ' ')
              .concat((0, u.Wk)(40), ' ')
              .concat((0, u.so)(100))
          },
          (0, u.wz)({
            margin: ''.concat((0, u.$s)(40), ' ').concat((0, u.CD)(24)),
            display: 'none'
          })
        ]),
        N = h.Z.section({
          padding: ''.concat((0, u.Wk)(100), ' ').concat((0, u.so)(80)),
          width: '100%',
          display: 'flex',
          backgroundColor: '#002466',
          alignItems: 'center',
          justifyContent: 'center',
          ...(0, u.wz)({
            padding: ''.concat((0, u.$s)(100), ' ').concat((0, u.CD)(24))
          })
        }),
        P = h.Z.div({
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
          ...(0, u.wz)({ width: (0, u.CD)(414), backgroundSize: 'scale-down' })
        }),
        M = h.Z.div({
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
          ...(0, u.wz)({ gap: (0, u.$s)(24), width: (0, u.CD)(414) })
        }),
        E = (0, h.Z)(R)([
          d().style,
          { color: '#ffffff', fontSize: (0, u.JB)(32), textAlign: 'center' },
          (0, u.wz)({ minWidth: (0, u.CD)(351), fontSize: (0, u.jo)(24) })
        ]),
        V = (0, h.Z)(R)({
          color: '#ffffff',
          textAlign: 'center',
          width: (0, u.so)(440),
          fontSize: (0, u.JB)(24),
          ...(0, u.wz)({
            width: (0, u.CD)(316),
            margin: '0px',
            fontSize: (0, u.jo)(16)
          })
        }),
        O = h.Z.section({
          backgroundColor: '#FFF5F8',
          borderTopRightRadius: (0, u.so)(160),
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          ...(0, u.wz)({
            flexDirection: 'column',
            borderTopRightRadius: (0, u.CD)(0)
          })
        }),
        q = h.Z.div({
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
            padding: ''.concat((0, u.$s)(40), ' ').concat((0, u.CD)(24))
          })
        }),
        G = h.Z.div({
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
          ...(0, u.wz)({
            width: '100%',
            '& img': {
              width: (0, u.CD)(233.88),
              height: (0, u.$s)(506.38),
              position: 'absolute',
              objectFit: 'contain',
              objectPosition: 'center'
            }
          })
        }),
        Q = h.Z.div({
          borderRadius: (0, u.so)(560),
          backgroundColor: '#FF80A1',
          backdropFilter: 'blur('.concat((0, u.so)(43.75), ')'),
          width: (0, u.Wk)(560),
          height: (0, u.Wk)(560),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(0, u.wz)({ width: (0, u.$s)(370), height: (0, u.$s)(370) })
        }),
        K = h.Z.div({
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: (0, u.so)(16),
          '& img': {
            width: (0, u.so)(32),
            height: (0, u.Wk)(48),
            objectFit: 'contain',
            objectPosition: 'center'
          },
          ...(0, u.wz)({
            '& img': { width: (0, u.CD)(16), height: (0, u.$s)(24) }
          })
        }),
        U = (0, h.Z)(R)([d().style]),
        X = (0, h.Z)(W)({
          fontSize: (0, u.JB)(32),
          ...(0, u.wz)({ fontSize: (0, u.jo)(24), width: (0, u.CD)(366) })
        }),
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
        tt = h.Z.div({
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
        $s: function () {
          return c;
        },
        CD: function () {
          return r;
        },
        JB: function () {
          return a;
        },
        Wk: function () {
          return i;
        },
        jo: function () {
          return l;
        },
        so: function () {
          return o;
        },
        wz: function () {
          return s;
        }
      });
      let o = function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1440;
          return ''.concat((t / n) * 100, 'vw');
        },
        i = function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 924;
          return ''.concat((t / n) * 100, 'vh');
        },
        r = (t) => o(t, 414),
        c = (t) => i(t, 740),
        a = (t, n) => o(t, n),
        l = (t) => o(t, 414),
        s = (t) => ({ '@media(max-width: 480px)': t });
    },
    984: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Manrope_90b4c2', '__Manrope_Fallback_90b4c2'",
          fontWeight: 600,
          fontStyle: 'normal'
        },
        className: '__className_90b4c2'
      };
    },
    9855: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Raleway_f8758a', '__Raleway_Fallback_f8758a'",
          fontWeight: 400,
          fontStyle: 'normal'
        },
        className: '__className_f8758a'
      };
    },
    6968: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Raleway_8be77d', '__Raleway_Fallback_8be77d'",
          fontWeight: 600,
          fontStyle: 'normal'
        },
        className: '__className_8be77d'
      };
    },
    4033: function (t, n, e) {
      t.exports = e(8165);
    },
    230: function (t, n, e) {
      'use strict';
      function o(t, n) {
        return (
          n || (n = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(n) } })
          )
        );
      }
      e.d(n, {
        _: function () {
          return o;
        }
      });
    }
  }
]);

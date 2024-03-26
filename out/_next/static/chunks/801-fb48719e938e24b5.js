(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [801],
  {
    8974: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          MerchantForm: function () {
            return x;
          }
        });
      var o = n(7437),
        i = n(8430),
        r = n(4019),
        a = n(6691),
        c = n.n(a),
        s = n(4281),
        l = n.n(s),
        d = n(2265),
        u = n(171),
        f = n(4589),
        h = n.n(f),
        p = n(431),
        g = n(4914);
      let x = () => {
        let [e, t] = (0, d.useState)({}),
          n = (e) => {
            let n = e.target.name;
            t((t) => ({ ...t, [n]: e.target.value }));
          },
          a = async (t) => {
            var n, o;
            t.preventDefault();
            let i =
              Object.values(e).length > 0 && Object.values(e).every((e) => !!e);
            if (i) {
              if (h().isEmail(e.email || '')) {
                if (
                  !l()(null !== (n = e.phone) && void 0 !== n ? n : '').isValid
                ) {
                  (0, u.toast)(
                    'Please enter a valid phone number(including country code)',
                    { type: 'error' }
                  );
                  return;
                }
              } else {
                (0, u.toast)('Please enter a valid email', { type: 'error' });
                return;
              }
            } else {
              (0, u.toast)('Please fill all fields', { type: 'error' });
              return;
            }
            try {
              await fetch('/api/v1/merchant/leads/open?lang=english', {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  ...e,
                  phone: l()(null !== (o = e.phone) && void 0 !== o ? o : '')
                    .phoneNumber
                }),
                method: 'POST'
              }),
                (0, u.toast)('Request submitted!', { type: 'success' });
            } catch (e) {
              (0, u.toast)('Request failed!', { type: 'error' }),
                console.log(e);
            }
          };
        return (0, o.jsx)(g.FormWrapper, {
          id: 'formWrapper',
          children: (0, o.jsxs)(g.FormCard, {
            children: [
              (0, o.jsx)(g.CloseButton, {
                href: '/merchant',
                children: (0, o.jsx)(r.CloseIcon, {})
              }),
              (0, o.jsxs)(g.FormContainer, {
                autoComplete: 'on',
                onSubmit: a,
                children: [
                  (0, o.jsxs)(g.CardHeaderSection, {
                    children: [
                      (0, o.jsx)(c(), {
                        src: '/images/Aladdin-Logo-Color.svg',
                        alt: 'aladdin logo',
                        width: 64,
                        height: 46
                      }),
                      (0, o.jsxs)(g.CHeaderTextArea, {
                        children: [
                          (0, o.jsx)(g.CHT, { children: 'Become a merchant' }),
                          (0, o.jsx)(g.CT, {
                            children:
                              'Join AladdinMiles as a merchant and grow your customer base.'
                          })
                        ]
                      })
                    ]
                  }),
                  (0, o.jsxs)(g.Form, {
                    children: [
                      (0, o.jsx)(i.TextInput, {
                        placeholder: 'Name',
                        name: 'name',
                        value: e.name,
                        onChange: n
                      }),
                      (0, o.jsx)(i.TextInput, {
                        placeholder: 'Venue name',
                        name: 'venue_name',
                        value: e.venue_name,
                        onChange: n
                      }),
                      (0, o.jsx)(i.TextInput, {
                        placeholder: 'Phone number +96600000000',
                        name: 'phone',
                        value: e.phone,
                        onChange: n
                      }),
                      (0, o.jsx)(i.TextInput, {
                        placeholder: 'Email address',
                        name: 'email',
                        value: e.email,
                        onChange: n
                      })
                    ]
                  }),
                  (0, o.jsx)(g.Submit, { children: 'Submit Request' })
                ]
              }),
              (0, o.jsx)(g.FormRight, {
                children: (0, o.jsxs)(g.IconWrapper, {
                  children: [
                    (0, o.jsxs)(g.CardText, {
                      children: [
                        'Get ',
                        (0, o.jsx)(p.ColoredText, { children: 'access' }),
                        ' to the right audience and',
                        ' ',
                        (0, o.jsx)(p.ColoredText, { children: 'grow' }),
                        ' your business.'
                      ]
                    }),
                    (0, o.jsx)(g.CardIcon, {})
                  ]
                })
              })
            ]
          })
        });
      };
    },
    431: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          AppDownload: function () {
            return E;
          },
          AppDownloadArea: function () {
            return R;
          },
          Arrow: function () {
            return en;
          },
          BigCircle: function () {
            return X;
          },
          BlueBackground: function () {
            return V;
          },
          ButtonContainer: function () {
            return A;
          },
          ChildrenContainer: function () {
            return S;
          },
          ColoredHalf: function () {
            return D;
          },
          ColoredText: function () {
            return Z;
          },
          ContentView: function () {
            return j;
          },
          DownloadContent: function () {
            return q;
          },
          DownloadHeader: function () {
            return O;
          },
          HeroImage: function () {
            return N;
          },
          HeroSection: function () {
            return C;
          },
          Line: function () {
            return I;
          },
          MainView: function () {
            return b;
          },
          ManText: function () {
            return M;
          },
          MultiStyleText: function () {
            return F;
          },
          Page404: function () {
            return eo;
          },
          Partners: function () {
            return P;
          },
          PinkBackground: function () {
            return Q;
          },
          QRCodeBackground: function () {
            return _;
          },
          RaleBase: function () {
            return L;
          },
          RaleText: function () {
            return $;
          },
          RaleTextWhite: function () {
            return G;
          },
          SB: function () {
            return Y;
          },
          SideLeft404: function () {
            return ei;
          },
          SmallMultiStyleText: function () {
            return et;
          },
          SmallboldText: function () {
            return ee;
          },
          StartShoppingAreaLeft: function () {
            return K;
          },
          StartShoppingAreaRight: function () {
            return U;
          },
          StoreButtons: function () {
            return H;
          },
          StyledQRCode: function () {
            return z;
          },
          TextContentArea: function () {
            return B;
          },
          TextWithSVG: function () {
            return T;
          },
          Trusted: function () {
            return J;
          },
          WhiteHalf: function () {
            return W;
          }
        });
      var o = n(7437),
        i = n(3424),
        r = n.n(i),
        a = n(7945),
        c = n.n(a),
        s = n(7676),
        l = n.n(s),
        d = n(2821),
        u = n.n(d),
        f = n(7247),
        h = n(9538),
        p = n(8600),
        g = n(6691),
        x = n.n(g),
        m = n(1396),
        w = n.n(m),
        k = n(7747);
      let b = p.Z.div({
          width: '100%',
          minHeight: '100%',
          backgroundColor: '#ffffff'
        }),
        j = p.Z.div({ width: '100%' }),
        C = p.Z.section({
          height: (0, f.Wk)(824),
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          '@media(max-width: 480px)': {
            flexDirection: 'column',
            background: '#FFF5F8',
            height: (0, f.$s)(868)
          }
        }),
        y = (0, h.F4)({
          from: {
            transform: 'translate3d(0px, '.concat((0, f.Wk)(-90), ' , 0px)')
          },
          '50%': {
            transform: 'translate3d(0px, '.concat((0, f.Wk)(90), ' , 0px)')
          },
          to: {
            transform: 'translate3d(0px, '.concat((0, f.Wk)(-90), ' , 0px)')
          }
        }),
        v = (0, h.F4)({
          from: {
            transform: 'translate3d(0px, '.concat((0, f.Wk)(-40), ' , 0px)')
          },
          '50%': {
            transform: 'translate3d(0px, '.concat((0, f.Wk)(40), ' , 0px)')
          },
          to: {
            transform: 'translate3d(0px, '.concat((0, f.Wk)(-40), ' , 0px)')
          }
        }),
        D = p.Z.div({
          height: (0, f.Wk)(824),
          width: '50%',
          background: '#FFF5F8',
          borderBottomRightRadius: (0, f.so)(160),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          '& #mobileTrusted': { display: 'none' },
          '@media(max-width: 480px)': {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'normal',
            justifyContent: 'space-between',
            height: (0, f.$s)(552),
            borderBottomRightRadius: 0,
            '& #mobileTrusted': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: (0, f.$s)(42)
            }
          }
        }),
        W = p.Z.div({
          height: (0, f.Wk)(824),
          width: '50%',
          '@media(max-width: 480px)': { width: '100%' }
        }),
        F = p.Z.h1([
          r().style,
          {
            fontSize: (0, f.JB)(44),
            color: '#1D2029',
            '@media(max-width: 480px)': {
              fontSize: (0, f.jo)(32),
              width: (0, f.CD)(366),
              '& svg': { width: (0, f.CD)(110) }
            }
          }
        ]),
        z = (0, p.Z)(k.Z)({
          width: (0, f.so)(78.4),
          height: (0, f.so)(78.4),
          alignSelf: 'center'
        }),
        Z = p.Z.span({ color: '#FF1453' }),
        S = p.Z.div({ position: 'relative', width: '100%' }),
        B = p.Z.div({
          margin: ''
            .concat((0, f.Wk)(168), ' ')
            .concat((0, f.so)(24), ' ')
            .concat((0, f.Wk)(120), ' ')
            .concat((0, f.so)(100)),
          '@media(max-width: 480px)': {
            margin: ''.concat((0, f.$s)(40), ' ').concat((0, f.CD)(24))
          }
        }),
        T = p.Z.div({ display: 'inline-block' }),
        I = () =>
          (0, o.jsx)('svg', {
            width: (0, f.so)(154),
            height: (0, f.Wk)(8),
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
        L = (e) => {
          let { className: t, children: n } = e;
          return (0, o.jsx)('p', {
            className: ''.concat(l().className, ' ').concat(t),
            children: n
          });
        },
        M = p.Z.p([
          c().style,
          {
            fontSize: (0, f.JB)(16),
            color: '#1D2029',
            textTransform: 'uppercase',
            lineHeight: '150%'
          },
          (0, f.wz)({ fontSize: (0, f.jo)(12) })
        ]),
        $ = (0, p.Z)(L)({
          color: '#515665',
          fontSize: (0, f.JB)(22),
          lineHeight: '160%',
          '@media(max-width: 480px)': {
            fontSize: (0, f.jo)(16),
            width: (0, f.CD)(366)
          }
        }),
        R = p.Z.div([
          {
            display: 'flex',
            flexDirection: 'row',
            gap: (0, f.so)(24),
            alignItems: 'center',
            marginTop: (0, f.Wk)(40)
          },
          (0, f.wz)({
            marginTop: (0, f.$s)(24),
            '& .scanText': { display: 'none' }
          })
        ]),
        _ = p.Z.div([
          {
            width: (0, f.so)(140),
            height: (0, f.so)(140),
            borderRadius: (0, f.so)(140),
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FF3251',
            display: 'flex'
          },
          (0, f.wz)({ display: 'none' })
        ]),
        A = p.Z.div({
          display: 'flex',
          flexDirection: 'row',
          gap: (0, f.so)(10),
          alignItems: 'center'
        }),
        H = (0, p.Z)(w())({}),
        N = (0, p.Z)(x())([
          {
            width: (0, f.so)(600),
            height: (0, f.Wk)(600),
            objectFit: 'contain',
            alignSelf: 'center',
            objectPosition: 'center',
            animation: ''.concat(y, ' 5s ease infinite'),
            ...(0, f.wz)({ animation: ''.concat(v, ' 5s ease infinite') })
          },
          (0, f.wz)({ width: (0, f.CD)(414), height: (0, f.$s)(414) })
        ]),
        P = p.Z.div([
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: (0, f.so)(16)
          },
          (0, f.wz)({ '& img': {} })
        ]),
        J = p.Z.div([
          {
            margin: ''
              .concat((0, f.Wk)(0), ' ')
              .concat((0, f.so)(24), ' ')
              .concat((0, f.Wk)(40), ' ')
              .concat((0, f.so)(100))
          },
          (0, f.wz)({
            margin: ''.concat((0, f.$s)(40), ' ').concat((0, f.CD)(24)),
            display: 'none'
          })
        ]),
        V = p.Z.section({
          padding: ''.concat((0, f.Wk)(100), ' ').concat((0, f.so)(80)),
          width: '100%',
          display: 'flex',
          backgroundColor: '#002466',
          alignItems: 'center',
          justifyContent: 'center',
          ...(0, f.wz)({
            padding: ''.concat((0, f.$s)(100), ' ').concat((0, f.CD)(24))
          })
        }),
        E = p.Z.div({
          background: 'url(/images/dotBg.png), no-repeat',
          width: (0, f.so)(1280),
          height: (0, f.Wk)(480),
          display: 'flex',
          backgroundSize: 'cover',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          ...(0, f.wz)({ width: (0, f.CD)(414), backgroundSize: 'scale-down' })
        }),
        q = p.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: (0, f.Wk)(40),
          width: (0, f.so)(1220),
          height: '100%',
          backgroundColor: '#00000012',
          borderTopLeftRadius: (0, f.so)(178),
          borderBottomRightRadius: (0, f.so)(178),
          ...(0, f.wz)({ gap: (0, f.$s)(24), width: (0, f.CD)(414) })
        }),
        O = (0, p.Z)($)([
          u().style,
          { color: '#ffffff', fontSize: (0, f.JB)(32), textAlign: 'center' },
          (0, f.wz)({ minWidth: (0, f.CD)(351), fontSize: (0, f.jo)(24) })
        ]),
        G = (0, p.Z)($)({
          color: '#ffffff',
          textAlign: 'center',
          width: (0, f.so)(440),
          fontSize: (0, f.JB)(24),
          ...(0, f.wz)({
            width: (0, f.CD)(316),
            margin: '0px',
            fontSize: (0, f.jo)(16)
          })
        }),
        Q = p.Z.section({
          backgroundColor: '#FFF5F8',
          borderTopRightRadius: (0, f.so)(160),
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          ...(0, f.wz)({
            flexDirection: 'column',
            borderTopRightRadius: (0, f.CD)(0)
          })
        }),
        K = p.Z.div({
          width: '50%',
          padding: ''
            .concat((0, f.Wk)(162), ' ')
            .concat((0, f.so)(80), ' ')
            .concat((0, f.Wk)(92)),
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: (0, f.Wk)(40),
          ...(0, f.wz)({
            padding: ''.concat((0, f.$s)(40), ' ').concat((0, f.CD)(24))
          })
        }),
        U = p.Z.div({
          width: '50%',
          padding: ''.concat((0, f.Wk)(92), ' ').concat((0, f.so)(80)),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          '& img': {
            width: (0, f.Wk)(404),
            height: (0, f.Wk)(640),
            position: 'absolute',
            objectFit: 'contain',
            objectPosition: 'center'
          },
          ...(0, f.wz)({
            width: '100%',
            '& img': {
              width: (0, f.$s)(233.88),
              height: (0, f.$s)(450.38),
              position: 'absolute',
              objectFit: 'cover',
              objectPosition: 'center'
            }
          })
        }),
        X = p.Z.div({
          borderRadius: (0, f.so)(560),
          backgroundColor: '#FF80A1',
          backdropFilter: 'blur('.concat((0, f.so)(43.75), ')'),
          width: (0, f.Wk)(560),
          height: (0, f.Wk)(560),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(0, f.wz)({ width: (0, f.$s)(370), height: (0, f.$s)(370) })
        }),
        Y = p.Z.div({
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: (0, f.so)(16),
          '& img': {
            width: (0, f.so)(32),
            height: (0, f.Wk)(48),
            objectFit: 'contain',
            objectPosition: 'center'
          },
          ...(0, f.wz)({
            '& img': { width: (0, f.CD)(16), height: (0, f.$s)(24) }
          })
        }),
        ee = (0, p.Z)($)([u().style]),
        et = (0, p.Z)(F)({
          fontSize: (0, f.JB)(32),
          ...(0, f.wz)({ fontSize: (0, f.jo)(24), width: (0, f.CD)(366) })
        }),
        en = () =>
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
        eo = p.Z.div({
          height: (0, f.Wk)(824),
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          background:
            'linear-gradient(163deg, #FFEBF0 0%, #FFF8EB 99.99%, #FFF8EB 100%)',
          '& img': { height: (0, f.Wk)(506), width: (0, f.so)(480) },
          ...(0, f.wz)({
            flexDirection: 'column',
            justifyContent: 'center',
            '& img': { height: (0, f.Wk)(317), width: (0, f.so)(300) }
          })
        }),
        ei = p.Z.div({
          paddingLeft: (0, f.so)(100),
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: (0, f.Wk)(40),
          width: (0, f.so)(596),
          ...(0, f.wz)({
            justifyContent: 'center',
            alignItems: 'center',
            padding: ''.concat((0, f.Wk)(40), ' ').concat((0, f.so)(24))
          })
        });
    },
    3141: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          BaseHeader: function () {
            return m;
          },
          BaseText: function () {
            return x;
          },
          Content: function () {
            return g;
          },
          FooterBar: function () {
            return p;
          },
          FooterHeader: function () {
            return k;
          },
          FooterLink: function () {
            return b;
          },
          FooterSection: function () {
            return j;
          },
          FooterText: function () {
            return w;
          },
          Socials: function () {
            return y;
          },
          StyledImageText: function () {
            return C;
          }
        });
      var o = n(7437),
        i = n(3192),
        r = n.n(i),
        a = n(3833),
        c = n.n(a),
        s = n(7247),
        l = n(8600),
        d = n(6691),
        u = n.n(d),
        f = n(1396),
        h = n.n(f);
      let p = l.Z.footer({
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: ''.concat((0, s.Wk)(74), ' ').concat((0, s.so)(80)),
          background: '#002466',
          ...(0, s.wz)({
            padding: ''.concat((0, s.$s)(24), ' ').concat((0, s.CD)(24)),
            flexDirection: 'column-reverse',
            alignItems: 'flex-start',
            gap: (0, s.$s)(56)
          })
        }),
        g = l.Z.div({
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: ''
            .concat((0, s.so)(209), ' ')
            .concat((0, s.so)(109), ' ')
            .concat((0, s.so)(109)),
          ...(0, s.wz)({ flexDirection: 'column' })
        }),
        x = (e) => {
          let { className: t, children: n } = e;
          return (0, o.jsx)('p', {
            className: ''.concat(r().className, ' ').concat(t),
            children: n
          });
        },
        m = (e) => {
          let { className: t, children: n } = e;
          return (0, o.jsx)('p', {
            className: ''.concat(c().className, ' ').concat(t),
            children: n
          });
        },
        w = (0, l.Z)(x)({
          fontSize: (0, s.JB)(16),
          color: '#ffffff',
          display: 'block',
          ...(0, s.wz)({ fontSize: (0, s.jo)(16) })
        }),
        k = (0, l.Z)(m)({
          fontSize: (0, s.JB)(16),
          color: '#ffffff',
          display: 'block',
          ...(0, s.wz)({ fontSize: (0, s.jo)(16) })
        }),
        b = w.withComponent(h()),
        j = l.Z.div({
          maxWidth: (0, s.so)(280),
          display: 'flex',
          flexDirection: 'column',
          gap: (0, s.Wk)(16),
          ...(0, s.wz)({ maxWidth: (0, s.CD)(270) })
        }),
        C = (0, l.Z)(u())({
          width: (0, s.so)(214),
          height: (0, s.Wk)(48),
          objectFit: 'cover',
          ...(0, s.wz)({ width: (0, s.CD)(178.333), height: (0, s.$s)(40) })
        }),
        y = l.Z.div({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: (0, s.so)(16),
          paddingTop: (0, s.Wk)(8),
          ...(0, s.wz)({ gap: (0, s.CD)(48) })
        });
    },
    8430: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          TextInput: function () {
            return c;
          }
        });
      var o = n(4053),
        i = n.n(o),
        r = n(7247),
        a = n(8600);
      let c = a.Z.input({
        width: '100%',
        height: (0, r.Wk)(56),
        fontSize: (0, r.JB)(14),
        border: ''.concat((0, r.so)(1), ' solid #B2B7C2'),
        borderRadius: (0, r.so)(8),
        padding: ''.concat((0, r.Wk)(8), ' ').concat((0, r.so)(16)),
        ...i().style,
        ...(0, r.wz)({
          padding: ''.concat((0, r.$s)(8), ' ').concat((0, r.CD)(16)),
          fontSize: (0, r.jo)(14),
          borderRadius: (0, r.CD)(8)
        })
      });
    },
    6773: function (e, t, n) {
      'use strict';
      function o(e) {
        let { src: t, width: n, quality: o } = e;
        return ''
          .concat(t, '?w=')
          .concat(n, '&q=')
          .concat(o || 75);
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          }
        });
    },
    4019: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          CloseIcon: function () {
            return d;
          },
          TopBarMobile: function () {
            return u;
          }
        });
      var o = n(7437),
        i = n(6691),
        r = n.n(i),
        a = n(2265),
        c = n(750),
        s = n(7746);
      let l = () =>
          (0, o.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            children: (0, o.jsx)('path', {
              d: 'M3 12H21M3 6H21M9 18H21',
              stroke: '#1D2029',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            })
          }),
        d = () =>
          (0, o.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            children: (0, o.jsx)('path', {
              d: 'M18 6L6 18M6 6L18 18',
              stroke: '#1D2029',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            })
          }),
        u = () => {
          let [e, t] = (0, a.useState)(!1);
          return (0, o.jsxs)(s.MobileWrapper, {
            children: [
              (0, o.jsxs)(s.NavBar, {
                id: 'mobile',
                children: [
                  (0, o.jsx)(s.LogoArea, {
                    href: '/',
                    children: (0, o.jsx)(r(), {
                      className: 'actualLogo',
                      src: '/images/Aladdin-Logo-Vertical-Color.svg',
                      alt: 'AladdinMiles logo',
                      width: 124.44,
                      height: 28
                    })
                  }),
                  (0, o.jsx)(s.MenuAction, {
                    onClick: () => t((e) => !e),
                    'aria-label': 'toogle-navigation',
                    children: e ? (0, o.jsx)(d, {}) : (0, o.jsx)(l, {})
                  })
                ]
              }),
              e &&
                (0, o.jsxs)(s.DropDownView, {
                  children: [
                    (0, o.jsx)(s.MobileLink, { href: '/', children: 'Home' }),
                    (0, o.jsx)(s.MobileLink, {
                      href: '/about',
                      children: 'About us'
                    }),
                    (0, o.jsx)(s.MobileLink, {
                      href: '/merchant',
                      children: 'Become a merchant'
                    }),
                    (0, o.jsx)(s.MobileLink, {
                      href: '/privacy-policy',
                      children: 'Privacy policy'
                    }),
                    (0, o.jsx)(s.MobileLink, {
                      href: '/terms-conditions',
                      children: 'Terms and conditions'
                    }),
                    (0, o.jsx)(s.MobileLink, {
                      href: '/merchant-tc',
                      children: 'Merchant terms and conditions'
                    }),
                    (0, o.jsx)(c.Button, {
                      href: '/#download',
                      children: 'Download the app'
                    })
                  ]
                })
            ]
          });
        };
    },
    7746: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          DropDownView: function () {
            return h;
          },
          LogoArea: function () {
            return d;
          },
          MenuAction: function () {
            return f;
          },
          MobileLink: function () {
            return p;
          },
          MobileWrapper: function () {
            return u;
          },
          NavBar: function () {
            return l;
          },
          Wrapper: function () {
            return s;
          }
        });
      var o = n(431),
        i = n(7247),
        r = n(8600),
        a = n(1396),
        c = n.n(a);
      let s = r.Z.div({
          width: '100%',
          '& #mobile': { display: 'none' },
          ...(0, i.wz)({
            '& #mobile': { display: 'flex' },
            '& #large': { display: 'none' }
          })
        }),
        l = r.Z.div({
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: ''.concat((0, i.Wk)(22), ' ').concat((0, i.so)(100)),
          ...(0, i.wz)({
            height: (0, i.$s)(60),
            padding: ''.concat((0, i.$s)(16), ' ').concat((0, i.CD)(14))
          })
        }),
        d = (0, r.Z)(c())({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          '& .actualLogo': {
            width: (0, i.so)(177.8),
            height: (0, i.Wk)(40),
            objectFit: 'cover',
            objectPosition: 'center'
          },
          ...(0, i.wz)({
            '& .actualLogo': {
              width: (0, i.CD)(124.444),
              height: (0, i.$s)(28),
              objectFit: 'cover',
              objectPosition: 'center'
            }
          })
        }),
        u = r.Z.div({
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          position: 'relative'
        }),
        f = r.Z.button({
          textDecoration: 'none',
          width: (0, i.CD)(50),
          height: (0, i.$s)(50),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }),
        h = r.Z.div({
          width: '100%',
          minHeight: (0, i.$s)(740),
          padding: ''.concat((0, i.$s)(40), ' ').concat((0, i.CD)(24)),
          position: 'absolute',
          zIndex: 100,
          top: (0, i.$s)(60),
          backgroundColor: '#ffffff',
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: (0, i.$s)(40)
        }),
        p = (0, r.Z)(o.RaleText.withComponent(c()))({ width: (0, i.CD)(158) });
    },
    7247: function (e, t, n) {
      'use strict';
      n.d(t, {
        $s: function () {
          return a;
        },
        CD: function () {
          return r;
        },
        JB: function () {
          return c;
        },
        Wk: function () {
          return i;
        },
        jo: function () {
          return s;
        },
        so: function () {
          return o;
        },
        wz: function () {
          return l;
        }
      });
      let o = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1440;
          return ''.concat((e / t) * 100, 'vw');
        },
        i = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 924;
          return ''.concat((e / t) * 100, 'vh');
        },
        r = (e) => o(e, 414),
        a = (e) => i(e, 740),
        c = (e, t) => o(e, t),
        s = (e) => o(e, 414),
        l = (e) => ({ '@media(max-width: 480px)': e });
    },
    3192: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Manrope_30f681', '__Manrope_Fallback_30f681'",
          fontWeight: 400,
          fontStyle: 'normal'
        },
        className: '__className_30f681'
      };
    },
    3833: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Manrope_90b4c2', '__Manrope_Fallback_90b4c2'",
          fontWeight: 600,
          fontStyle: 'normal'
        },
        className: '__className_90b4c2'
      };
    },
    4033: function (e, t, n) {
      e.exports = n(8165);
    }
  }
]);

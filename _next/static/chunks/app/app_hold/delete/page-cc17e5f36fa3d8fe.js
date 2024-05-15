(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43],
  {
    6536: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 3107));
    },
    3107: function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n(7437),
        o = n(4589),
        r = n.n(o),
        a = n(2265),
        c = n(9249),
        l = n(6576),
        s = n(171),
        d = n(4281),
        u = n.n(d);
      e.default = () => {
        let [t, e] = (0, a.useState)({ password: '', username: '' }),
          [n, o] = a.useState(!1),
          [d, f] = (0, a.useState)(!1),
          h = (t) => {
            let n = t.target.name,
              i = t.target.value;
            e((t) => ({ ...t, [n]: i }));
          },
          p = async (e) => {
            var n, i;
            e.preventDefault(), f(!0);
            let o =
              Object.values(t).length > 0 && Object.values(t).every((t) => !!t);
            if (o) {
              if (
                !u()(null !== (n = t.username) && void 0 !== n ? n : '')
                  .isValid &&
                !r().isEmail(t.username || '')
              ) {
                (0, s.toast)(
                  'Please enter a valid phone number(including country code) or email address',
                  { type: 'error' }
                );
                return;
              }
            } else {
              (0, s.toast)('Please fill all fields', { type: 'error' });
              return;
            }
            try {
              let e = new FormData();
              e.append('username', t.username),
                e.append('password', t.password);
              let n = await fetch(
                  'https://staging.ambe.aladdinmiles.com/api/v1/login/access-token',
                  { body: e, method: 'POST' }
                ),
                i = await n.json();
              if (n.status >= 400) throw i;
              console.log(i),
                await fetch(
                  'https://staging.ambe.aladdinmiles.com/api/v1/users/me',
                  {
                    headers: { Authorization: 'Bearer ' + i.access_token },
                    method: 'DELETE'
                  }
                ),
                (0, s.toast)('Account Deleted!', { type: 'success' });
            } catch (t) {
              console.log(t),
                (0, s.toast)(
                  null !== (i = JSON.stringify(t.detail)) && void 0 !== i
                    ? i
                    : 'Request failed!',
                  { type: 'error' }
                ),
                console.log(t);
            } finally {
              f(!1);
            }
          };
        return (0, i.jsx)(c.DeleteView, {
          children: (0, i.jsxs)(c.DeleteCard, {
            children: [
              (0, i.jsxs)(c.LeftCard, {
                children: [
                  (0, i.jsx)(c.DeleteManText, {
                    children: 'Do you want to permanently delete your account?'
                  }),
                  (0, i.jsx)(c.DeleteSmallText, {
                    children:
                      'You will delete your entire account and will not be able to access your account and lose access to all data on your account.'
                  })
                ]
              }),
              (0, i.jsxs)(c.RightCard, {
                onSubmit: p,
                children: [
                  (0, i.jsxs)(l.InputWrapper, {
                    children: [
                      (0, i.jsx)(l.Label, { children: 'Phone number / Email' }),
                      (0, i.jsx)(c.Input, {
                        name: 'username',
                        placeholder: 'e.g +234800000000',
                        onChange: h
                      })
                    ]
                  }),
                  (0, i.jsxs)(l.InputWrapper, {
                    children: [
                      (0, i.jsx)(l.Label, { children: 'Password' }),
                      (0, i.jsx)(c.Input, {
                        name: 'password',
                        onChange: h,
                        type: n ? 'text' : 'password'
                      })
                    ]
                  }),
                  (0, i.jsx)(l.InputWrapper, {
                    children: (0, i.jsxs)(l.Label, {
                      htmlFor: 'show',
                      children: [
                        (0, i.jsx)(c.Checkbox, {
                          id: 'show',
                          name: 'show',
                          type: 'checkbox',
                          checked: n,
                          onChange: () => {
                            o(!n);
                          }
                        }),
                        'Show paswword'
                      ]
                    })
                  }),
                  (0, i.jsxs)(c.Actions, {
                    children: [
                      (0, i.jsx)(c.CancelButton, {
                        href: '/',
                        children: 'Cancel'
                      }),
                      (0, i.jsx)(c.DeleteButton, {
                        disabled: d,
                        children: 'Delete Account'
                      })
                    ]
                  })
                ]
              })
            ]
          })
        });
      };
    },
    6576: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          Background: function () {
            return h;
          },
          Form: function () {
            return p;
          },
          GetHelp: function () {
            return g;
          },
          Header: function () {
            return m;
          },
          Img: function () {
            return j;
          },
          InputWrapper: function () {
            return k;
          },
          Label: function () {
            return y;
          },
          SideBySide: function () {
            return x;
          },
          SubHeader: function () {
            return w;
          },
          Submit: function () {
            return b;
          },
          TwentyFour: function () {
            return C;
          }
        });
      var i = n(6074),
        o = n.n(i),
        r = n(6842),
        a = n.n(r),
        c = n(750),
        l = n(7247),
        s = n(8600),
        d = n(6691),
        u = n.n(d),
        f = n(431);
      let h = s.Z.div([
          {
            background:
              'linear-gradient(107deg, #FFEBF0 -16.65%, #FFF8EB 106.72%)',
            padding: ''.concat((0, l.Wk)(80), ' 0'),
            justifyContent: 'center',
            display: 'flex'
          }
        ]),
        p = s.Z.div({
          width: (0, l.so)(720),
          gap: ''.concat((0, l.Wk)(40), ' 0'),
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          ...(0, l.wz)({
            width: '100%',
            padding: '0 '.concat((0, l.CD)(40)),
            alignItems: 'center'
          })
        }),
        g = s.Z.p([
          o().style,
          { fontSize: (0, l.JB)(14), color: '#FF1654', textAlign: 'center' },
          (0, l.wz)({ fontSize: (0, l.jo)(24) })
        ]),
        w = s.Z.p([
          a().style,
          { fontSize: (0, l.JB)(14), color: '#515665', textAlign: 'center' },
          (0, l.wz)({ fontSize: (0, l.jo)(14) })
        ]),
        m = (0, s.Z)(f.MultiStyleText)({
          color: '#1D2029',
          width: (0, l.so)(711),
          fontSize: (0, l.JB)(32),
          textAlign: 'center',
          ...(0, l.wz)({ fontSize: (0, l.jo)(24) })
        }),
        x = s.Z.div({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: (0, l.so)(16),
          ...(0, l.wz)({
            width: '100%',
            flexDirection: 'column',
            rowGap: (0, l.$s)(24),
            columnGap: 0
          })
        }),
        y = s.Z.label([
          a().style,
          {
            fontSize: (0, l.JB)(14),
            color: '#515665',
            textAlign: 'center',
            verticalAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            columnGap: (0, l.so)(10)
          },
          (0, l.wz)({ fontSize: (0, l.jo)(14) })
        ]),
        k = s.Z.div([
          {
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '50%'
          },
          (0, l.wz)({ width: '100%' })
        ]),
        b = (0, s.Z)(c.Button)([
          { width: (0, l.so)(720) },
          (0, l.wz)({ width: '100%' })
        ]),
        C = s.Z.div([
          { display: 'flex', flexDirection: 'column', rowGap: (0, l.so)(24) },
          (0, l.wz)({ rowGap: (0, l.$s)(24), width: '100%' })
        ]),
        j = (0, s.Z)(u())({
          width: (0, l.so)(240),
          height: (0, l.so)(240),
          alignSelf: 'center',
          ...(0, l.wz)({ width: (0, l.CD)(240), height: (0, l.CD)(240) })
        });
    },
    431: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          AppDownload: function () {
            return G;
          },
          AppDownloadArea: function () {
            return L;
          },
          Arrow: function () {
            return tn;
          },
          BigCircle: function () {
            return U;
          },
          BlueBackground: function () {
            return N;
          },
          ButtonContainer: function () {
            return P;
          },
          ChildrenContainer: function () {
            return W;
          },
          ColoredHalf: function () {
            return S;
          },
          ColoredText: function () {
            return Z;
          },
          ContentView: function () {
            return b;
          },
          DownloadContent: function () {
            return V;
          },
          DownloadHeader: function () {
            return O;
          },
          HeroImage: function () {
            return H;
          },
          HeroSection: function () {
            return C;
          },
          Line: function () {
            return _;
          },
          MainView: function () {
            return k;
          },
          ManText: function () {
            return R;
          },
          MultiStyleText: function () {
            return z;
          },
          Page404: function () {
            return ti;
          },
          Partners: function () {
            return M;
          },
          PinkBackground: function () {
            return q;
          },
          QRCodeBackground: function () {
            return $;
          },
          RaleBase: function () {
            return T;
          },
          RaleText: function () {
            return A;
          },
          RaleTextWhite: function () {
            return Q;
          },
          SB: function () {
            return X;
          },
          SideLeft404: function () {
            return to;
          },
          SmallMultiStyleText: function () {
            return te;
          },
          SmallboldText: function () {
            return tt;
          },
          StartShoppingAreaLeft: function () {
            return Y;
          },
          StartShoppingAreaRight: function () {
            return K;
          },
          StoreButtons: function () {
            return E;
          },
          StyledQRCode: function () {
            return F;
          },
          TextContentArea: function () {
            return B;
          },
          TextWithSVG: function () {
            return I;
          },
          Trusted: function () {
            return J;
          },
          WhiteHalf: function () {
            return v;
          }
        });
      var i = n(7437),
        o = n(3424),
        r = n.n(o),
        a = n(7945),
        c = n.n(a),
        l = n(7676),
        s = n.n(l),
        d = n(2821),
        u = n.n(d),
        f = n(7247),
        h = n(9538),
        p = n(8600),
        g = n(6691),
        w = n.n(g),
        m = n(1396),
        x = n.n(m),
        y = n(7747);
      let k = p.Z.div({
          width: '100%',
          minHeight: '100%',
          backgroundColor: '#ffffff'
        }),
        b = p.Z.div({ width: '100%' }),
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
        j = (0, h.F4)({
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
        D = (0, h.F4)({
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
        S = p.Z.div({
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
        v = p.Z.div({
          height: (0, f.Wk)(824),
          width: '50%',
          '@media(max-width: 480px)': { width: '100%' }
        }),
        z = p.Z.h1([
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
        F = (0, p.Z)(y.Z)({
          width: (0, f.so)(78.4),
          height: (0, f.so)(78.4),
          alignSelf: 'center'
        }),
        Z = p.Z.span({ color: '#FF1453' }),
        W = p.Z.div({ position: 'relative', width: '100%' }),
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
        I = p.Z.div({ display: 'inline-block' }),
        _ = () =>
          (0, i.jsx)('svg', {
            width: (0, f.so)(154),
            height: (0, f.Wk)(8),
            viewBox: '0 0 154 8',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, i.jsx)('path', {
              id: 'Vector',
              d: 'M2 5.64611C28.1648 2.81791 94.7954 -1.0708 152 6',
              stroke: '#FF1F7D',
              strokeWidth: '4',
              strokeLinecap: 'round'
            })
          }),
        T = (t) => {
          let { className: e, children: n } = t;
          return (0, i.jsx)('p', {
            className: ''.concat(s().className, ' ').concat(e),
            children: n
          });
        },
        R = p.Z.p([
          c().style,
          {
            fontSize: (0, f.JB)(16),
            color: '#1D2029',
            textTransform: 'uppercase',
            lineHeight: '150%'
          },
          (0, f.wz)({ fontSize: (0, f.jo)(12) })
        ]),
        A = (0, p.Z)(T)({
          color: '#515665',
          fontSize: (0, f.JB)(22),
          lineHeight: '160%',
          '@media(max-width: 480px)': {
            fontSize: (0, f.jo)(16),
            width: (0, f.CD)(366)
          }
        }),
        L = p.Z.div([
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
        $ = p.Z.div([
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
        P = p.Z.div({
          display: 'flex',
          flexDirection: 'row',
          gap: (0, f.so)(10),
          alignItems: 'center'
        }),
        E = (0, p.Z)(x())({}),
        H = (0, p.Z)(w())([
          {
            width: (0, f.so)(600),
            height: (0, f.Wk)(600),
            objectFit: 'contain',
            alignSelf: 'center',
            objectPosition: 'center',
            animation: ''.concat(j, ' 5s ease infinite'),
            ...(0, f.wz)({ animation: ''.concat(D, ' 5s ease infinite') })
          },
          (0, f.wz)({ width: (0, f.CD)(414), height: (0, f.$s)(414) })
        ]),
        M = p.Z.div([
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
        N = p.Z.section({
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
        G = p.Z.div({
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
        V = p.Z.div({
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
        O = (0, p.Z)(A)([
          u().style,
          { color: '#ffffff', fontSize: (0, f.JB)(32), textAlign: 'center' },
          (0, f.wz)({ minWidth: (0, f.CD)(351), fontSize: (0, f.jo)(24) })
        ]),
        Q = (0, p.Z)(A)({
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
        q = p.Z.section({
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
        Y = p.Z.div({
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
        K = p.Z.div({
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
        U = p.Z.div({
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
        X = p.Z.div({
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
        tt = (0, p.Z)(A)([u().style]),
        te = (0, p.Z)(z)({
          fontSize: (0, f.JB)(32),
          ...(0, f.wz)({ fontSize: (0, f.jo)(24), width: (0, f.CD)(366) })
        }),
        tn = () =>
          (0, i.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '25',
            height: '24',
            viewBox: '0 0 25 24',
            fill: 'none',
            children: (0, i.jsx)('path', {
              d: 'M12.5 4L11.09 5.41L16.67 11H4.5V13H16.67L11.09 18.59L12.5 20L20.5 12L12.5 4Z',
              fill: 'white'
            })
          }),
        ti = p.Z.div({
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
        to = p.Z.div({
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
    6842: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Manrope_1875da', '__Manrope_Fallback_1875da'",
          fontWeight: 400,
          fontStyle: 'normal'
        },
        className: '__className_1875da'
      };
    },
    6074: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Manrope_2081b7', '__Manrope_Fallback_2081b7'",
          fontWeight: 600,
          fontStyle: 'normal'
        },
        className: '__className_2081b7'
      };
    }
  },
  function (t) {
    t.O(0, [641, 822, 630, 728, 971, 596, 744], function () {
      return t((t.s = 6536));
    }),
      (_N_E = t.O());
  }
]);

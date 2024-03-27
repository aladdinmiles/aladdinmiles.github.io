(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [388],
  {
    253: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 6304));
    },
    6304: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = n(7437),
        i = n(4589),
        r = n.n(i),
        a = n(2265),
        c = n(231),
        s = n(6576),
        l = n(750),
        d = n(171),
        u = n(4281),
        f = n.n(u);
      e.default = () => {
        let [t, e] = (0, a.useState)({ password: '', username: '' }),
          [n, i] = a.useState(!1),
          [u, h] = (0, a.useState)(!1),
          p = (t) => {
            let n = t.target.name,
              o = t.target.value;
            e((t) => ({ ...t, [n]: o }));
          },
          g = async (e) => {
            var n, o;
            e.preventDefault(), h(!0);
            let i =
              Object.values(t).length > 0 && Object.values(t).every((t) => !!t);
            if (i) {
              if (
                !f()(null !== (n = t.username) && void 0 !== n ? n : '')
                  .isValid &&
                !r().isEmail(t.username || '')
              ) {
                (0, d.toast)(
                  'Please enter a valid phone number(including country code) or email address',
                  { type: 'error' }
                );
                return;
              }
            } else {
              (0, d.toast)('Please fill all fields', { type: 'error' });
              return;
            }
            try {
              let e = new FormData();
              e.append('username', t.username),
                e.append('password', t.password);
              let n = await fetch(
                  'https://ambe.aladdinmiles.com/api/v1/login/access-token',
                  {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    body: e,
                    method: 'POST'
                  }
                ),
                o = await n.json();
              if (n.status >= 400) throw o;
              console.log(o),
                await fetch('https://ambe.aladdinmiles.com/api/v1/users/me', {
                  headers: { Authorization: 'Bearer ' + o.access_token },
                  method: 'DELETE'
                }),
                (0, d.toast)('Account Deleted!', { type: 'success' });
            } catch (t) {
              console.log(t),
                (0, d.toast)(
                  null !== (o = JSON.stringify(t.detail)) && void 0 !== o
                    ? o
                    : 'Request failed!',
                  { type: 'error' }
                ),
                console.log(t);
            } finally {
              h(!1);
            }
          };
        return (0, o.jsx)(c.DeleteView, {
          children: (0, o.jsxs)(c.DeleteCard, {
            children: [
              (0, o.jsxs)(c.LeftCard, {
                children: [
                  (0, o.jsx)(c.DeleteManText, {
                    children: 'Do you want to permanently delete your account?'
                  }),
                  (0, o.jsx)(c.DeleteSmallText, {
                    children:
                      'You will delete your entire account and will not be able to access your account and lose access to all data on your account.'
                  })
                ]
              }),
              (0, o.jsxs)(c.RightCard, {
                onSubmit: g,
                children: [
                  (0, o.jsxs)(s.InputWrapper, {
                    children: [
                      (0, o.jsx)(s.Label, { children: 'Phone number / Email' }),
                      (0, o.jsx)(c.Input, {
                        name: 'username',
                        placeholder: '+234800000000',
                        onChange: p
                      })
                    ]
                  }),
                  (0, o.jsxs)(s.InputWrapper, {
                    children: [
                      (0, o.jsx)(s.Label, { children: 'Password' }),
                      (0, o.jsx)(c.Input, {
                        name: 'password',
                        onChange: p,
                        type: n ? 'text' : 'password'
                      })
                    ]
                  }),
                  (0, o.jsx)(s.InputWrapper, {
                    children: (0, o.jsxs)(s.Label, {
                      htmlFor: 'show',
                      children: [
                        (0, o.jsx)(c.Checkbox, {
                          id: 'show',
                          name: 'show',
                          type: 'checkbox',
                          checked: n,
                          onChange: () => {
                            i(!n);
                          }
                        }),
                        'Show paswword'
                      ]
                    })
                  }),
                  (0, o.jsxs)(c.Actions, {
                    children: [
                      (0, o.jsx)(l.OutlinedButton, {
                        href: '/',
                        children: 'Cancel'
                      }),
                      (0, o.jsx)(l.NoLinkButton, {
                        disabled: u,
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
    231: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          Actions: function () {
            return tw;
          },
          AppDownload: function () {
            return O;
          },
          AppDownloadArea: function () {
            return A;
          },
          Arrow: function () {
            return to;
          },
          BigCircle: function () {
            return X;
          },
          BlueBackground: function () {
            return V;
          },
          ButtonContainer: function () {
            return P;
          },
          Checkbox: function () {
            return tm;
          },
          ChildrenContainer: function () {
            return _;
          },
          ColoredHalf: function () {
            return W;
          },
          ColoredText: function () {
            return z;
          },
          ContentView: function () {
            return C;
          },
          DeleteCard: function () {
            return td;
          },
          DeleteManText: function () {
            return th;
          },
          DeleteSmallText: function () {
            return tp;
          },
          DeleteView: function () {
            return tl;
          },
          DownloadContent: function () {
            return G;
          },
          DownloadHeader: function () {
            return Q;
          },
          DownloadImage: function () {
            return tc;
          },
          HeroImage: function () {
            return E;
          },
          HeroSection: function () {
            return D;
          },
          Input: function () {
            return tg;
          },
          Left: function () {
            return ts;
          },
          LeftCard: function () {
            return tu;
          },
          Line: function () {
            return B;
          },
          MainView: function () {
            return b;
          },
          ManText: function () {
            return L;
          },
          MultiStyleText: function () {
            return S;
          },
          Page404: function () {
            return ti;
          },
          Partners: function () {
            return M;
          },
          PinkBackground: function () {
            return Y;
          },
          QRCodeBackground: function () {
            return N;
          },
          RaleBase: function () {
            return I;
          },
          RaleText: function () {
            return $;
          },
          RaleTextWhite: function () {
            return q;
          },
          RightCard: function () {
            return tf;
          },
          SB: function () {
            return tt;
          },
          SideLeft404: function () {
            return tr;
          },
          SmallMultiStyleText: function () {
            return tn;
          },
          SmallboldText: function () {
            return te;
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
            return Z;
          },
          TextContentArea: function () {
            return R;
          },
          TextWithSVG: function () {
            return T;
          },
          Trusted: function () {
            return J;
          },
          View: function () {
            return ta;
          },
          WhiteHalf: function () {
            return v;
          }
        });
      var o = n(7437),
        i = n(7620),
        r = n.n(i),
        a = n(5792),
        c = n.n(a),
        s = n(687),
        l = n.n(s),
        d = n(6655),
        u = n.n(d),
        f = n(8430),
        h = n(7247),
        p = n(9538),
        g = n(8600),
        w = n(6691),
        m = n.n(w),
        x = n(1396),
        y = n.n(x),
        k = n(7747);
      let b = g.Z.div({
          width: '100%',
          minHeight: '100%',
          backgroundColor: '#ffffff'
        }),
        C = g.Z.div({ width: '100%' }),
        D = g.Z.section({
          height: (0, h.Wk)(824),
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          '@media(max-width: 480px)': {
            flexDirection: 'column',
            background: '#FFF5F8',
            height: (0, h.$s)(868)
          }
        }),
        j = (0, p.F4)({
          from: {
            transform: 'translate3d(0px, '.concat((0, h.Wk)(-90), ' , 0px)')
          },
          '50%': {
            transform: 'translate3d(0px, '.concat((0, h.Wk)(90), ' , 0px)')
          },
          to: {
            transform: 'translate3d(0px, '.concat((0, h.Wk)(-90), ' , 0px)')
          }
        }),
        F = (0, p.F4)({
          from: {
            transform: 'translate3d(0px, '.concat((0, h.Wk)(-40), ' , 0px)')
          },
          '50%': {
            transform: 'translate3d(0px, '.concat((0, h.Wk)(40), ' , 0px)')
          },
          to: {
            transform: 'translate3d(0px, '.concat((0, h.Wk)(-40), ' , 0px)')
          }
        }),
        W = g.Z.div({
          height: (0, h.Wk)(824),
          width: '50%',
          background: '#FFF5F8',
          borderBottomRightRadius: (0, h.so)(160),
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          '& #mobileTrusted': { display: 'none' },
          '@media(max-width: 480px)': {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'normal',
            justifyContent: 'space-between',
            height: (0, h.$s)(552),
            borderBottomRightRadius: 0,
            '& #mobileTrusted': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: (0, h.$s)(42)
            }
          }
        }),
        v = g.Z.div({
          height: (0, h.Wk)(824),
          width: '50%',
          '@media(max-width: 480px)': { width: '100%' }
        }),
        S = g.Z.h1([
          r().style,
          {
            fontSize: (0, h.JB)(44),
            color: '#1D2029',
            '@media(max-width: 480px)': {
              fontSize: (0, h.jo)(32),
              width: (0, h.CD)(366),
              '& svg': { width: (0, h.CD)(110) }
            }
          }
        ]),
        Z = (0, g.Z)(k.Z)({
          width: (0, h.so)(78.4),
          height: (0, h.so)(78.4),
          alignSelf: 'center'
        }),
        z = g.Z.span({ color: '#FF1453' }),
        _ = g.Z.div({ position: 'relative', width: '100%' }),
        R = g.Z.div({
          margin: ''
            .concat((0, h.Wk)(168), ' ')
            .concat((0, h.so)(24), ' ')
            .concat((0, h.Wk)(120), ' ')
            .concat((0, h.so)(100)),
          '@media(max-width: 480px)': {
            margin: ''.concat((0, h.$s)(40), ' ').concat((0, h.CD)(24))
          }
        }),
        T = g.Z.div({ display: 'inline-block' }),
        B = () =>
          (0, o.jsx)('svg', {
            width: (0, h.so)(210),
            height: (0, h.Wk)(8),
            viewBox: '0 0 210 8',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, o.jsx)('path', {
              id: 'Vector',
              d: 'M2 5.64611C28.1648 2.81791 94.7954 -1.0708 210 6',
              stroke: '#FF1F7D',
              strokeWidth: '4',
              strokeLinecap: 'round'
            })
          }),
        I = (t) => {
          let { className: e, children: n } = t;
          return (0, o.jsx)('p', {
            className: ''.concat(l().className, ' ').concat(e),
            children: n
          });
        },
        L = g.Z.p([
          c().style,
          {
            fontSize: (0, h.JB)(16),
            color: '#1D2029',
            textTransform: 'uppercase',
            lineHeight: '150%'
          },
          (0, h.wz)({ fontSize: (0, h.jo)(12) })
        ]),
        $ = (0, g.Z)(I)({
          color: '#515665',
          fontSize: (0, h.JB)(22),
          lineHeight: '160%',
          marginTop: (0, h.Wk)(24),
          '@media(max-width: 480px)': {
            fontSize: (0, h.jo)(16),
            width: (0, h.CD)(366)
          }
        }),
        A = g.Z.div([
          {
            display: 'flex',
            flexDirection: 'row',
            gap: (0, h.so)(24),
            alignItems: 'center',
            marginTop: (0, h.Wk)(40)
          },
          (0, h.wz)({
            marginTop: (0, h.$s)(24),
            '& .scanText': { display: 'none' }
          })
        ]),
        N = g.Z.div([
          {
            width: (0, h.so)(140),
            height: (0, h.so)(140),
            borderRadius: (0, h.so)(140),
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FF3251',
            display: 'flex'
          },
          (0, h.wz)({ display: 'none' })
        ]),
        P = g.Z.div({
          display: 'flex',
          flexDirection: 'row',
          gap: (0, h.so)(10),
          alignItems: 'center',
          marginTop: (0, h.Wk)(64)
        }),
        H = (0, g.Z)(y())({}),
        E = (0, g.Z)(m())([
          {
            width: (0, h.so)(600),
            height: (0, h.Wk)(600),
            objectFit: 'contain',
            alignSelf: 'center',
            objectPosition: 'center',
            animation: ''.concat(j, ' 5s ease infinite'),
            ...(0, h.wz)({ animation: ''.concat(F, ' 5s ease infinite') })
          },
          (0, h.wz)({ width: (0, h.CD)(414), height: (0, h.$s)(414) })
        ]),
        M = g.Z.div([
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: (0, h.so)(16)
          },
          (0, h.wz)({ '& img': {} })
        ]),
        J = g.Z.div([
          {
            margin: ''
              .concat((0, h.Wk)(0), ' ')
              .concat((0, h.so)(24), ' ')
              .concat((0, h.Wk)(40), ' ')
              .concat((0, h.so)(100))
          },
          (0, h.wz)({
            margin: ''.concat((0, h.$s)(40), ' ').concat((0, h.CD)(24)),
            display: 'none'
          })
        ]),
        V = g.Z.section({
          padding: ''.concat((0, h.Wk)(100), ' ').concat((0, h.so)(80)),
          width: '100%',
          display: 'flex',
          backgroundColor: '#002466',
          alignItems: 'center',
          justifyContent: 'center',
          ...(0, h.wz)({
            padding: ''.concat((0, h.$s)(100), ' ').concat((0, h.CD)(24))
          })
        }),
        O = g.Z.div({
          background: 'url(/images/dotBg.png), no-repeat',
          width: (0, h.so)(1280),
          height: (0, h.Wk)(480),
          display: 'flex',
          backgroundSize: 'cover',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          ...(0, h.wz)({ width: (0, h.CD)(414), backgroundSize: 'scale-down' })
        }),
        G = g.Z.div({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: (0, h.Wk)(40),
          width: (0, h.so)(1220),
          height: '100%',
          backgroundColor: '#00000012',
          borderTopLeftRadius: (0, h.so)(178),
          borderBottomRightRadius: (0, h.so)(178),
          ...(0, h.wz)({ gap: (0, h.$s)(24), width: (0, h.CD)(414) })
        }),
        Q = (0, g.Z)($)([
          u().style,
          { color: '#ffffff', fontSize: (0, h.JB)(32), textAlign: 'center' },
          (0, h.wz)({ minWidth: (0, h.CD)(351), fontSize: (0, h.jo)(24) })
        ]),
        q = (0, g.Z)($)({
          color: '#ffffff',
          textAlign: 'center',
          width: (0, h.so)(440),
          fontSize: (0, h.JB)(24),
          ...(0, h.wz)({
            width: (0, h.CD)(316),
            margin: '0px',
            fontSize: (0, h.jo)(16)
          })
        }),
        Y = g.Z.section({
          backgroundColor: '#FFF5F8',
          borderTopRightRadius: (0, h.so)(160),
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          ...(0, h.wz)({
            flexDirection: 'column',
            borderTopRightRadius: (0, h.CD)(0)
          })
        }),
        K = g.Z.div({
          width: '50%',
          padding: ''
            .concat((0, h.Wk)(162), ' ')
            .concat((0, h.so)(80), ' ')
            .concat((0, h.Wk)(92)),
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: (0, h.Wk)(40),
          ...(0, h.wz)({
            padding: ''.concat((0, h.$s)(40), ' ').concat((0, h.CD)(24))
          })
        }),
        U = g.Z.div({
          width: '50%',
          padding: ''.concat((0, h.Wk)(92), ' ').concat((0, h.so)(80)),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          '& img': {
            width: (0, h.Wk)(404),
            height: (0, h.Wk)(640),
            position: 'absolute',
            objectFit: 'contain',
            objectPosition: 'center'
          },
          ...(0, h.wz)({
            width: '100%',
            '& img': {
              width: (0, h.$s)(233.88),
              height: (0, h.$s)(450.38),
              position: 'absolute',
              objectFit: 'cover',
              objectPosition: 'center'
            }
          })
        }),
        X = g.Z.div({
          borderRadius: (0, h.so)(560),
          backgroundColor: '#FF80A1',
          backdropFilter: 'blur('.concat((0, h.so)(43.75), ')'),
          width: (0, h.Wk)(560),
          height: (0, h.Wk)(560),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(0, h.wz)({ width: (0, h.$s)(370), height: (0, h.$s)(370) })
        }),
        tt = g.Z.div({
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: (0, h.so)(16),
          '& img': {
            width: (0, h.so)(32),
            height: (0, h.Wk)(48),
            objectFit: 'contain',
            objectPosition: 'center'
          },
          ...(0, h.wz)({
            '& img': { width: (0, h.CD)(16), height: (0, h.$s)(24) }
          })
        }),
        te = (0, g.Z)($)([u().style]),
        tn = (0, g.Z)(S)({
          fontSize: (0, h.JB)(32),
          ...(0, h.wz)({ fontSize: (0, h.jo)(24), width: (0, h.CD)(366) })
        }),
        to = () =>
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
        ti = g.Z.div({
          height: (0, h.Wk)(824),
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          background:
            'linear-gradient(163deg, #FFEBF0 0%, #FFF8EB 99.99%, #FFF8EB 100%)',
          '& img': { height: (0, h.Wk)(506), width: (0, h.so)(480) },
          ...(0, h.wz)({
            flexDirection: 'column',
            justifyContent: 'center',
            '& img': { height: (0, h.Wk)(317), width: (0, h.so)(300) }
          })
        }),
        tr = g.Z.div({
          paddingLeft: (0, h.so)(100),
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: (0, h.Wk)(40),
          width: (0, h.so)(596),
          ...(0, h.wz)({
            justifyContent: 'center',
            alignItems: 'center',
            padding: ''.concat((0, h.Wk)(40), ' ').concat((0, h.so)(24))
          })
        }),
        ta = g.Z.div({
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          ...(0, h.wz)({ flexDirection: 'column', height: (0, h.$s)(824) })
        }),
        tc = (0, g.Z)(m())({
          width: (0, h.so)(720),
          height: (0, h.Wk)(824),
          objectFit: 'contain',
          ...(0, h.wz)({ width: (0, h.CD)(720), height: (0, h.$s)(824) })
        }),
        ts = g.Z.div({ paddingLeft: (0, h.so)(80) }),
        tl = g.Z.section({
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          padding: ''.concat((0, h.Wk)(50), ' 0'),
          ...(0, h.wz)({ width: (0, h.CD)(720), height: (0, h.$s)(824) })
        }),
        td = g.Z.div({
          display: 'flex',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px '
            .concat((0, h.so)(3), ' ')
            .concat((0, h.Wk)(8)),
          borderRadius: (0, h.so)(16)
        }),
        tu = g.Z.div((t) => {
          let { theme: e } = t;
          return {
            display: 'flex',
            flexDirection: 'column',
            rowGap: (0, h.Wk)(20),
            width: (0, h.so)(400),
            borderTopLeftRadius: (0, h.so)(16),
            borderBottomLeftRadius: (0, h.so)(16),
            backgroundColor: '#FF1654df',
            padding: ''.concat((0, h.Wk)(32), ' ').concat((0, h.so)(32)),
            justifyContent: 'center',
            ...(0, h.wz)({
              width: (0, h.CD)(400),
              borderTopLeftRadius: (0, h.CD)(16),
              borderBottomLeftRadius: (0, h.CD)(16)
            })
          };
        }),
        tf = g.Z.form((t) => {
          let { theme: e } = t;
          return {
            display: 'flex',
            flexDirection: 'column',
            rowGap: (0, h.Wk)(20),
            width: (0, h.so)(600),
            minHeight: (0, h.Wk)(500),
            borderTopRightRadius: (0, h.so)(16),
            borderBottomRightRadius: (0, h.so)(16),
            backgroundColor: '#FFFFFF',
            padding: ''.concat((0, h.Wk)(32), ' ').concat((0, h.so)(32)),
            justifyContent: 'center',
            ...(0, h.wz)({
              width: (0, h.CD)(400),
              borderTopLeftRadius: (0, h.CD)(16),
              borderBottomLeftRadius: (0, h.CD)(16),
              minHeight: (0, h.$s)(500)
            })
          };
        }),
        th = g.Z.h2([
          u().style,
          { fontSize: (0, h.JB)(22), color: '#ffffff' },
          (0, h.wz)({ fontSize: (0, h.jo)(16) })
        ]),
        tp = g.Z.p([
          c().style,
          { fontSize: (0, h.JB)(16), color: '#ffffff' },
          (0, h.wz)({ fontSize: (0, h.jo)(12) })
        ]),
        tg = (0, g.Z)(f.TextInput)({
          width: (0, h.so)(490),
          ...(0, h.wz)({ width: (0, h.CD)(400) })
        }),
        tw = (0, g.Z)(tt)({ marginTop: (0, h.Wk)(20) }),
        tm = g.Z.input({});
    },
    5792: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Manrope_30f681', '__Manrope_Fallback_30f681'",
          fontWeight: 400,
          fontStyle: 'normal'
        },
        className: '__className_30f681'
      };
    },
    687: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Raleway_5e2547', '__Raleway_Fallback_5e2547'",
          fontWeight: 400,
          fontStyle: 'normal'
        },
        className: '__className_5e2547'
      };
    },
    6655: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Raleway_501d33', '__Raleway_Fallback_501d33'",
          fontWeight: 600,
          fontStyle: 'normal'
        },
        className: '__className_501d33'
      };
    },
    7620: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Raleway_25e0a3', '__Raleway_Fallback_25e0a3'",
          fontWeight: 700,
          fontStyle: 'normal'
        },
        className: '__className_25e0a3'
      };
    }
  },
  function (t) {
    t.O(0, [641, 822, 341, 158, 971, 596, 744], function () {
      return t((t.s = 253));
    }),
      (_N_E = t.O());
  }
]);

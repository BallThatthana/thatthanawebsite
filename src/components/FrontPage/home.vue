<template>
     <Topbar/>
     <Banner/>
     <Portfolio/>
     <Footer/>
 </template>
 
 <script>
 import { mapGetters } from 'vuex';
 import Topbar from './topbar.vue'
 import Banner from './banner.vue'
 import Portfolio from './portfolio.vue'
 import Footer from './footer.vue'
 
 export default {
     components:{
         Topbar,
         Banner,
         Portfolio,
         Footer
     },
     computed:{
         ...mapGetters(['isAuth']),
         showLogin(){
             return !this.isAuth;
         }
     },
     async beforeMount(){
    try {
      let { ip } = await this.$axios.$get('/api/v1/utils/ip-address')
      let eventData = {
        content_type: 'package page',
        contents: [],
        //client_ip_address: ip,
        client_user_agent: navigator.userAgent,
        // email: this.hashing(this.user.email), ip
        // phone_number: this.hashing(this.user.phone),
      }
      this.loadTikTokPixel(eventData)
      await this.trackTikTokEvent('PageView',0,eventData, ip)
    } catch(err){ console.log(err)}
  },
  methods: {
    async hashing(data) {
      return crypto.createHash('sha256').update(data).digest('hex')
    },
    async loadTikTokPixel(eventData) {
      // Load the TikTok Pixel script dynamically
      const script = document.createElement('script');
      script.src = `https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=${this.$config.TIKTOK_PIXEL}`;
      script.async = true;
      document.head.appendChild(script);
      
      // Call the tiktokScript function after the script is loaded
      script.onload = () => {
         this.tiktokScript(eventData);
      };
    },
    async tiktokScript(eventData) {
      let tiktokPixel = this.$config.TIKTOK_PIXEL;
      !(function (w, d, t) {
        w.TiktokAnalyticsObject = t
        var ttq = (w[t] = w[t] || [])
        ;(ttq.methods = [
          'page',
          'track',
          'identify',
          'instances',
          'debug',
          'on',
          'off',
          'once',
          'ready',
          'alias',
          'group',
          'enableCookie',
          'disableCookie',
        ]),
          (ttq.setAndDefer = function (t, e) {
            t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
            }
          })
        for (var i = 0; i < ttq.methods.length; i++)
          ttq.setAndDefer(ttq, ttq.methods[i])
        ;(ttq.instance = function (t) {
          for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
            ttq.setAndDefer(e, ttq.methods[n])
          return e
        }),
          (ttq.load = function (e, n) {
            var i = 'https://analytics.tiktok.com/i18n/pixel/events.js'
            ;(ttq._i = ttq._i || {}),
              (ttq._i[e] = []),
              (ttq._i[e]._u = i),
              (ttq._t = ttq._t || {}),
              (ttq._t[e] = +new Date()),
              (ttq._o = ttq._o || {}),
              (ttq._o[e] = n || {})
            var o = document.createElement('script')
            ;(o.type = 'text/javascript'),
              (o.async = !0),
              (o.src = i + '?sdkid=' + e + '&lib=' + t)
            var a = document.getElementsByTagName('script')[0]
            a.parentNode.insertBefore(o, a)
          })

        //Part 2
        ttq.load(tiktokPixel)
        ttq.page(eventData)
      })(window, document, 'ttq')
    },
    async trackTikTokEvent(eventName, amount, eventData, ip) {

      const {
        client_ip_address,
        client_user_agent,
        currency,
        value,
        contents,
        content_type
      } = eventData;

      const {
        content_id,
        content_name,
        price,
      } = contents[0];

      const em = this.user.email
      const ph = this.user.email

      try {
          let window = window;
          window.ttq.track(eventName, {
           content_type,
          contents: [{ content_id, content_name, price }],
          client_ip_address,
          client_user_agent,
          currency,
          value,
          user: {
            email: em,
            phone: ph,
          }
        });

        await this.tiktok_event_api(eventName, amount, this.user, eventData, ip);
      
      } catch (error) {
        console.log(error);
      }
    },
    async tiktok_event_api(track, amount = 0, user_data, eventData, ip) {
      try {
        let externalIdHashed = '';
        let emailHashed = '';
        let phoneHashed = '';
        const ttpMatch = document.cookie.match(/_ttp=([^;]+)/);
        const ttp = ttpMatch ? ttpMatch[1] : null;
    
        if (user_data?.email) {
          externalIdHashed = this.hashing(Date.now().toString());
          emailHashed = this.hashing(user_data.email);
          phoneHashed = this.hashing(user_data.phone);
        }
    
        const postData = {
          data: {
            pixel_code: 'CI0KR9RC77UCDSLJEN8G',
            event: track,
            event_id: (+new Date() + Math.floor(Math.random() * 1000)).toString(),
            ...(ttp && user_data && {
              user: {
                external_id: externalIdHashed,
                email: emailHashed,
                phone_number: phoneHashed,
                ttp: ttp
              }
            }),
            context: {
              page: {
                url: window.location.href,
                referrer: window.location.href
              }
            },
            ipAddress: ip,
            ...(amount > 0 && {
              properties: {
                content_type: 'product_group',
                contents: eventData.contents,
                currency: 'THB',
                value: +amount
              }
            })
          }
        };

        await this.$axios.$post(`/api/v1/conversion/tiktok`, postData);

      } catch (error) {
        console.log(error);
      }
    }
  },
}
 </script>
 
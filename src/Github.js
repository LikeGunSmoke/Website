import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from './utils/gsap/MorphSVGPlugin.js';
gsap.registerPlugin(MorphSVGPlugin);

export default function Github() {

  const tl = useRef();
  const openEyes = useRef();
  const closedEyes = useRef();
  const dimples = useRef();
  const legStart = useRef();
  const legMid1 = useRef();
  const legMid2 = useRef();
  const legMid3 = useRef();
  const legEnd = useRef();
  const whiskerLU1 = useRef();
  const whiskerLU2 = useRef();
  const whiskerLD1 = useRef();
  const whiskerLD2 = useRef();
  const whiskerRU1 = useRef();
  const whiskerRU2 = useRef();
  const whiskerRD1 = useRef();
  const whiskerRD2 = useRef();
  const text = useRef()

  useEffect(() => {

    tl.current = gsap.timeline({paused: true});

    tl.current.to(legStart.current, {morphSVG: legMid1.current, duration: 0.01})
    .to(legStart.current, {morphSVG: legMid2.current, duration: 0.01})
    .to(legStart.current, {morphSVG: legMid3.current, duration: 0.01})
    .to(legStart.current, {morphSVG: legEnd.current, duration: 0.01});

    tl.current.to(whiskerLD1.current, {morphSVG: whiskerLU1.current, duration: 0.5}, 0)
    .to(whiskerLD2.current, {morphSVG: whiskerLU2.current, duration: 0.5}, 0)
    .to(whiskerRD1.current, {morphSVG: whiskerRU1.current, duration: 0.5}, 0)
    .to(whiskerRD2.current, {morphSVG: whiskerRU2.current, duration: 0.5}, 0);

    tl.current.to(openEyes.current, {opacity: 0, duration: 0.1}, 0)
    .to(closedEyes.current, {opacity: 1, duration: 0.1}, 0);

    tl.current.to(dimples.current, {opacity: 1, duration: 0.5}, 0);

    tl.current.to(text.current, {opacity: 1, duration: 0.5}, 0);


    return () => {
      tl.current.kill();
    };

  }, []);

  const onEnter = () => {
    tl.current.play();
  };

  const onLeave = () => {
    tl.current.reverse();
  };


  return (
    <svg
      style={{height: '100%', width: '100%'}}
      version="1.1"
      viewBox="0 0 821.85 227.67"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      >
      <defs>
        <linearGradient id="linearGradient2436" x1="308.57" x2="-686.84" y1="103.46" y2="-240.11" gradientUnits="userSpaceOnUse">
            <stop style={{stopColor: "#050829"}} offset="0"/>
            <stop style={{stopColor: "#639fe900", stopOpacity: "0"}} offset="1"/>
        </linearGradient>
      </defs>
      <g transform="translate(370.23 106.29)" >
        <path d="m-331.19-106.29h743.77c21.629 0 39.042 17.413 39.042 39.042v149.59c0 21.629-17.413 39.042-39.042 39.042h-743.77c-21.629 0-39.042-17.413-39.042-39.042v-149.59c0-21.629 17.413-39.042 39.042-39.042z" style={{fill: "url(#linearGradient2436)"}}/>
        <g transform="translate(-355.13 -81.23)">
        <g transform="translate(.24307 .00014259)">
          <path transform="translate(649.09,306.3)" d="m-575.07-296.38s21.923-6.2522 44.496-0.3248c0 0 18.188-11.449 24.522-9.3378 0 0 5.765 7.5514 1.5428 23.06 0 0 8.607 5.5215 11.043 22.979l-0.23839 12.875s-1.0074 21.911-14.355 28.963c-13.348 7.0518-19.392 6.9678-27.284 7.9752s-25.773 0.5237-32.239 0.0185c-6.4666-0.5052-21.522-3.5364-29.302-10.003s-12.226-14.348-13.944-28.291c-1.7177-13.944 2.1218-24.856 9.3968-32.838 0 0-4.4458-8.9926 0.80832-24.654 0 0 7.2547-2.5663 25.553 9.5788z" style={{fill: "#201f1f"}}/>
          <path ref={whiskerLD2} d="m0.23617 76.307s33.072-5.8882 44.165-3.3329" style={{fill: "none", strokeWidth: ".75", stroke: "#201f1f"}}/>
          <g>
          <path ref={whiskerRD2} d="m149.85 74.509s33.57 1.2179 43.875 6.0546" style={{fill: "none", strokeWidth: ".75", stroke: "#201f1f"}}/>
          <path ref={whiskerRD1} d="m150.32 68.098s33.57 1.2179 43.875 6.0546" style={{fill: "none", strokeWidth: ".75", stroke: "#201f1f"}}/>
          <path ref={whiskerLD1} d="m-0.17734 69.897s33.072-5.8882 44.165-3.3329" style={{fill: "none", strokeWidth: ".75", stroke: "#201f1f"}}/>
          <path ref={whiskerRU1} d="m150.32 68.098s33.57-1.2179 43.875-6.0546" style={{fill: "none", strokeWidth: ".75", stroke: "#201f1f", opacity: 0}}/>
          <path ref={whiskerRU2} d="m149.85 74.509s33.57-1.2179 43.875-6.0546" style={{fill: "none", strokeWidth: ".75", stroke: "#201f1f", opacity: 0}}/>
          <path ref={whiskerLU1} d="m-0.17734 63.231s33.072 5.8882 44.165 3.3329" style={{fill: "none", strokeWidth: ".75", stroke: "#201f1f", opacity: 0}}/>
          <path ref={whiskerLU2} d="m0.23617 69.642s33.072 5.8882 44.165 3.3329" style={{fill: "none", strokeWidth: ".75", stroke: "#201f1f", opacity: 0}}/>
          </g>
        </g>
        <g transform="translate(.24307 .00014259)">
          <path transform="translate(649.09,306.3)" d="m-566.91-210.26s-5.0624 2.9046-7.718 11.37l-0.33195 31.121s0.41495 2.7386-4.9794 6.3072c0 0-4.5644 1.7428-0.91288 3.7345 0 0 5.4773-0.24897 6.3902-0.49794s8.7139-2.6557 8.8799-9.1288l0.083-23.32s0.8299-6.6392 2.8216-5.9752l-2e-5 37.345s-0.49793 3.2366-1.8258 3.9005c-1.3278 0.66391-3.4856 3.5685-0.74691 4.7304 0 0 10.457 0.083 12.531-9.1288v-38.175s1.1618-2.4067 2.7386-0.083v38.424s1.9917 7.469 10.623 8.9628c0 0 5.8922-0.24897 2.2407-4.2325 0 0-2.4897-1.0789-2.9876-4.9794v-36.432l5.0623-14.357h-31.536z" style={{fill: "#201f1f"}}/>
        </g>
        <g transform="translate(.24307 .00014259)">
          <path transform="translate(649.09,306.3)" d="m-574.62-198.89s-5.1308 2.382-7.1733 2.4458-5.9998 0.25532-7.9784-0.76593-5.936-3.1914-7.2764-5.2977-1.6595-2.2978-2.8722-4.2126-3.702-3.8935-4.5318-4.5318-3.8297-2.4255-5.936-2.6169-4.085-0.0638-4.6594 0.25531c-0.57446 0.31914-1.9787 1.5957 0 2.9361s5.2977 2.6169 6.5104 4.0212c1.2127 1.4042 3.1914 3.1914 4.0212 5.2977 0.82976 2.1063 3.3829 6.1913 5.2977 7.8508s4.7871 5.0424 11.872 6.2551c0 0 2.8723 0.51062 5.1701 0.25531s6.6381-0.89356 7.2764-0.82976c0.41707 0.0417 0.40861-4.6946 0.35265-7.9826-0.0297-1.744-0.0727-3.0804-0.0727-3.0804z" style={{fill: "#201f1f"}}/>
          <ellipse transform="matrix(.99218 .12485 -.16029 .98707 649.09 306.3)" cx="-599.93" cy="-122.48" rx="1.5889" ry="1.1237" style={{fill: "#9cdaf0"}}/>
          <ellipse transform="matrix(.90644 .42233 -.45451 .89074 649.09 306.3)" cx="-617.92" cy="72.574" rx="1.5889" ry="1.1237" style={{fill: "#9cdaf0"}}/>
          <ellipse transform="matrix(.99218 .12485 -.16029 .98707 649.09 306.3)" cx="-611.65" cy="-119.78" rx="1.5889" ry="1.1237" style={{fill: "#9cdaf0"}}/>
          <ellipse transform="matrix(.99218 .12485 -.16029 .98707 649.09 306.3)" cx="-605.6" cy="-120.46" rx="1.5889" ry="1.1237" style={{fill: "#9cdaf0"}}/>
          <ellipse transform="matrix(.58523 .81087 -.8313 .55582 649.09 306.3)" cx="-498.84" cy="367.56" rx="1.5889" ry="1.1237" style={{fill: "#9cdaf0"}}/>
          <ellipse transform="matrix(.58523 .81087 -.8313 .55582 649.09 306.3)" cx="-504.48" cy="367.73" rx="1.5889" ry="1.1237" style={{fill: "#9cdaf0"}}/>
          <ellipse transform="matrix(.81082 .58529 -.51861 .85501 649.09 306.3)" cx="-626.89" cy="185.27" rx="1.3902" ry=".94164" style={{fill: "#9cdaf0"}}/>
          <ellipse transform="matrix(.83843 .54501 -.55865 .8294 649.09 306.3)" cx="-622.07" cy="154.26" rx="1.1558" ry=".75152" style={{fill: "#9cdaf0"}}/>
        </g>
        <g transform="translate(649.33,306.3)">
          <path d="m-578.21-261.18s6.6378-0.25048 10.645 0c4.0077 0.25048 6.763 0.37574 8.6416 0.75144 0 0 11.898 0.37573 14.277-0.25047 0 0 13.217-0.82949 15.575-0.77931 2.3587 0.0502 6.2732 0.20074 9.6356 1.8067 3.3624 1.6059 9.3846 6.0222 11.894 15.457 0 0 1.1041 9.485-2.71 17.214s-11.894 9.9367-16.912 11.241-38.707 3.2445-47.408-0.21904c-8.7012-3.4636-14.446-3.2102-19.683-14.615 0 0-4.4773-12.756 0.84478-20.528s11.138-10.189 15.199-10.079z" style={{fill: "#f4cab1"}}/>
        </g>
        <g ref={openEyes} transform="translate(.24307 .00014259)">
          <g transform="translate(649.09,306.3)">
          <path d="m-567.38-239.9a8.4536 12.722 0 0 1-8.4536 12.722 8.4536 12.722 0 0 1-8.4536-12.722 8.4536 12.722 0 0 1 8.4536-12.722 8.4536 12.722 0 0 1 8.4536 12.722z" style={{fill: "#fff"}}/>
          <path d="m-569.1-240.29a5.9137 8.9 0 0 1-5.9137 8.9 5.9137 8.9 0 0 1-5.9137-8.9 5.9137 8.9 0 0 1 5.9137-8.9 5.9137 8.9 0 0 1 5.9137 8.9z" style={{fill: "#ac5c51"}}/>
          <path d="m-575.79-243.98a1.7984 1.7984 0 0 1-1.7984 1.7984 1.7984 1.7984 0 0 1-1.7984-1.7984 1.7984 1.7984 0 0 1 1.7984-1.7984 1.7984 1.7984 0 0 1 1.7984 1.7984z" style={{fill: "#fff"}}/>
          </g>
          <g transform="translate(649.09,306.3)">
          <path d="m-518.87-240.51a8.4536 12.722 0 0 1-8.4536 12.722 8.4536 12.722 0 0 1-8.4536-12.722 8.4536 12.722 0 0 1 8.4536-12.722 8.4536 12.722 0 0 1 8.4536 12.722z" style={{fill: "#fff"}}/>
          <path d="m-521.95-240.91a5.9137 8.9 0 0 1-5.9137 8.9 5.9137 8.9 0 0 1-5.9137-8.9 5.9137 8.9 0 0 1 5.9137-8.9 5.9137 8.9 0 0 1 5.9137 8.9z" style={{fill: "#ac5c51"}}/>
          <path d="m-529.5-245.02a1.199 1.199 0 0 1-1.199 1.199 1.199 1.199 0 0 1-1.199-1.199 1.199 1.199 0 0 1 1.199-1.199 1.199 1.199 0 0 1 1.199 1.199z" style={{fill: "#fff"}}/>
          </g>
        </g>
        <g ref={closedEyes} style={{opacity: 0}} transform="translate(.24307 .00014259)">
          <path transform="translate(649.09,306.3)" d="m-584.18-237.24s8.833-12.829 16.93 0" style={{fill: "none", strokeLinecap: "round", strokeWidth: "2.3186", stroke: "#ac5c51"}}/>
          <path transform="translate(649.09,306.3)" d="m-535.61-237.24s8.833-12.829 16.93 0" style={{fill: "none", strokeLinecap: "round", strokeWidth: "2.3186", stroke: "#ac5c51"}}/>
        </g>
        <g transform="translate(.24307 .00014259)">
          <path transform="translate(649.09,306.3)" d="m-556.43-222.63s4.9526 7.1931 9.4925 0" style={{fill: "none", strokeLinecap: "round", strokeWidth: "1.3", stroke: "#ac5c51"}}/>
        </g>
        <g transform="translate(.24307 .00014259)">
          <path transform="translate(649.09,306.3)" d="m-549.36-228.61a2.3956 2.3956 0 0 1-2.3956 2.3956 2.3956 2.3956 0 0 1-2.3956-2.3956 2.3956 2.3956 0 0 1 2.3956-2.3956 2.3956 2.3956 0 0 1 2.3956 2.3956z" style={{fill: "#ac5c51"}}/>
        </g>
        <g ref={dimples} style={{opacity: 0}} transform="translate(.24307 .00014259)">
          <g transform="translate(649.09,306.3)">
          <path d="m-555.13-225s-3.9415-2.0862-4.2973 2.2427" style={{fill: "none", strokeLinecap: "round", strokeWidth: ".66384", stroke: "#ac5c51"}}/>
          <path d="m-548.76-225s3.9415-2.0862 4.2973 2.2427" style={{fill: "none", strokeLinecap: "round", strokeWidth: ".66384", stroke: "#ac5c51"}}/>
          </g>
        </g>
        <g transform="translate(.24307 .00014259)">
          <GithubTextPath transform="translate(649.09,306.3)" d="m-598.71-121.28c-5.9819-0.69475-9.2625-3.9345-10.352-10.224-0.26168-1.51-0.29619-6.1089-0.0584-7.7757 0.90266-6.3258 3.7062-9.767 8.8719-10.89 1.4781-0.32121 5.6807-0.3165 7.5214 8e-3 1.4491 0.2558 3.025 0.74265 3.4541 1.0671l0.29385 0.22219-0.53096 2.2677c-0.29202 1.2472-0.60207 2.344-0.689 2.4372-0.13157 0.14104-0.37775 0.11279-1.4694-0.16866-1.602-0.41302-4.6557-0.57381-6.1401-0.3233-2.5817 0.43571-4.2528 2.0797-4.9737 4.8933-0.56772 2.2157-0.56576 5.9627 4e-3 8.1916 0.46158 1.8048 1.4868 3.3331 2.7222 4.0583 0.95286 0.55928 1.9542 0.72491 3.9898 0.65998 1.0142-0.0323 1.9101-0.0997 1.991-0.14967 0.10449-0.0646 0.14699-0.89285 0.14699-2.8644v-2.7736h-1.8917c-1.7409 0-1.9021-0.0195-2.0226-0.24451-0.0759-0.14182-0.13086-1.1733-0.13086-2.456 0-1.8419 0.0332-2.2446 0.19864-2.4101 0.17333-0.17332 0.78658-0.19864 4.8119-0.19864 2.9383 0 4.702 0.0475 4.8578 0.13086 0.23731 0.127 0.24451 0.34113 0.24451 7.2713v7.1405l-0.59503 0.37735c-2.2935 1.4545-6.5519 2.1821-10.254 1.7521zm65.711 0.0582c-1.7485-0.23456-2.9964-0.7586-3.8579-1.6201-0.67991-0.67991-1.0169-1.3279-1.3327-2.563-0.22804-0.89165-0.24503-1.4465-0.24503-8.0033 0-6.3077 0.0209-7.0532 0.19995-7.1219 0.28858-0.11073 5.397-0.0909 5.5739 0.0217 0.10974 0.0698 0.15932 1.7632 0.18961 6.4766 0.0391 6.085 0.0528 6.4055 0.29384 6.886 0.13905 0.27718 0.45191 0.63788 0.69525 0.80156 0.40321 0.27121 0.54891 0.29342 1.6433 0.25052 1.0264-0.0402 1.3248-0.10521 2.0542-0.44729l0.85327-0.40023v-6.6811c0-5.0278 0.0375-6.7186 0.15169-6.8328 0.21474-0.21474 5.4232-0.21474 5.6379 0 0.21951 0.21951 0.21951 18.439 0 18.658-0.10325 0.10325-0.70589 0.15169-1.8871 0.15169-1.9504 0-2.1327-0.071-2.1327-0.83069 0-0.23837-0.0318-0.43341-0.0707-0.43341s-0.53661 0.22454-1.1061 0.49897c-1.6382 0.78943-3.0654 1.1497-4.7645 1.2027-0.79954 0.0249-1.6528 0.0186-1.8962-0.014zm24.334 5e-3c-1.7895-0.26318-3.634-0.92192-4.5609-1.629-0.44874-0.34226-0.5567-0.26131-0.56062 0.42036-4e-3 0.68572-0.0835 0.71326-2.1877 0.75676-1.6709 0.0346-1.9759 0.0109-2.1538-0.16704-0.18953-0.18953-0.20729-1.3649-0.20729-13.715 0-12.111 0.0205-13.528 0.19864-13.706 0.16767-0.16766 0.60271-0.19864 2.7893-0.19864 1.5441 0 2.6895 0.0529 2.8352 0.13086 0.23488 0.1257 0.24451 0.31245 0.24451 4.7404 0 2.5352 0.0214 4.6095 0.0475 4.6095s0.37517-0.14492 0.7757-0.32205c1.762-0.77926 4.5118-1.0552 6.1976-0.62202 3.9338 1.0109 5.6555 5.1244 4.9758 11.888-0.44885 4.4666-1.9634 6.8164-4.8839 7.5774-0.74926 0.19522-2.8357 0.336-3.51 0.23683zm1.0793-5.1376c0.44702-0.22542 0.63545-0.42865 0.90831-0.97967 0.44459-0.8978 0.65716-2.6076 0.56577-4.5508-0.10852-2.3074-0.59838-3.5199-1.6476-4.0782-0.94163-0.50108-2.8988-0.33239-4.2873 0.36953l-0.34763 0.17573v8.5582l0.62513 0.26893c0.89537 0.38517 1.4508 0.49357 2.6031 0.50797 0.81937 0.0102 1.1253-0.0424 1.5801-0.27173zm-61.895 4.9002c-0.99015-0.21541-1.9504-0.70495-2.6528-1.3523-0.66525-0.6132-0.97515-1.0923-1.3463-2.0814-0.26365-0.70257-0.28095-0.98981-0.34522-5.7328l-0.0677-4.9932-3.0338-0.1264-0.0351-1.8863c-0.0202-1.0836 0.0164-1.9378 0.0859-2.0073 0.0665-0.0665 0.76495-0.27201 1.552-0.45661l1.431-0.33563 0.0342-2.7076c0.0249-1.9726 0.0764-2.7344 0.18961-2.8063 0.18179-0.11548 5.1593-0.13909 5.4543-0.0259 0.17349 0.0666 0.19995 0.42583 0.19995 2.7148v2.638l4.2347 0.0694v4.8036l-4.1715 0.1264v4.1309c0 4.6955-0.0281 4.5622 1.0819 5.1328 0.48136 0.24745 0.73542 0.28582 1.7812 0.26906 0.67084-0.0108 1.2824 0.0192 1.3589 0.0665 0.21548 0.13318 0.18933 4.0436-0.0282 4.2242-0.57086 0.47377-4.1298 0.68287-5.723 0.33624zm8.6399-0.32795c-0.20852-0.12145-0.22122-0.9118-0.22122-13.77 0-13.358 5e-3 -13.644 0.24451-13.772 0.32574-0.17433 5.1265-0.17433 5.4522 0 0.23548 0.12602 0.24451 0.31746 0.24451 5.1828v5.0519h8.0902v-5.0519c0-4.8653 9e-3 -5.0568 0.24451-5.1828 0.31005-0.16594 5.309-0.17233 5.5704-7e-3 0.16664 0.10534 0.18962 1.7754 0.18962 13.781 0 12.006-0.023 13.676-0.18962 13.781-0.26134 0.16521-5.2603 0.15882-5.5704-7e-3 -0.23635-0.12649-0.24451-0.32678-0.24451-6.0045v-5.8736h-8.0902v5.8736c0 5.6777-8e-3 5.878-0.24451 6.0045-0.32248 0.17258-5.1781 0.16755-5.4755-6e-3zm-23.961-0.14157c-0.2195-0.21949-0.2195-18.312 0-18.532 0.10869-0.10869 0.93164-0.15169 2.903-0.15169 2.5908 0 2.7589 0.0143 2.8822 0.24451 0.0867 0.16193 0.13086 3.2601 0.13086 9.173s-0.0442 9.0111-0.13086 9.173c-0.12322 0.23024-0.2914 0.24451-2.8822 0.24451-1.9713 0-2.7943-0.043-2.903-0.1517zm1.9965-20.318c-1.3336-0.40565-2.2412-1.5245-2.3676-2.9187-0.28956-3.1933 3.6358-4.8696 5.7578-2.4589 0.56668 0.64378 0.78213 1.2662 0.78213 2.2594 0 1.2908-0.61089 2.2581-1.802 2.8533-0.78441 0.39197-1.6388 0.48747-2.3703 0.26495z" />
        </g>
        <g ref={text} transform="translate(.24307 .00014259)" style={{fill: "#84c3cc", opacity: 0}}>
          <TextPath transform="translate(649.09,306.3)" d="m-385.77-229.19q0 0.24804-0.0248 0.79375-0.0248 0.5209-0.0248 0.76894 0 1.6619 0.14882 3.5223 0.14883 1.8604 0.47129 4.0928l-2.4557 0.42168q-0.39688-3.6959-3.1502-5.7299-2.7533-2.0588-7.2678-2.0588-5.7547 0-8.9297 3.5967-3.1502 3.5719-3.1502 10.12 0 7.0693 3.5719 11.261 3.5967 4.192 9.5994 4.192 3.7703 0 6.4244-1.7115 2.6789-1.7115 4.3408-5.209l2.1828 1.017q-0.99218 1.9596-1.7363 3.8447-0.74414 1.8604-1.265 3.6959-3.0014 1.2154-5.8787 1.8356-2.8525 0.64492-5.5066 0.64492-8.632 0-13.99-5.1098-5.3578-5.1098-5.3578-13.345 0-8.1359 5.6059-13.395 5.6307-5.2834 14.263-5.2834 3.1006 0 6.0772 0.4961 3.0014 0.49609 6.0524 1.5379z" />
          <TextPath transform="translate(649.09,306.3)" d="m-371-233.41q-0.0248 1.2898-0.0992 3.8943-0.24805 8.756-0.29766 13.196 2.8525-2.0836 5.0106-3.0014 2.1828-0.94258 4.1424-0.94258 3.7207 0 5.6059 2.2572 1.91 2.2324 1.91 6.6973 0 0.76894-0.0496 3.7951-0.0496 3.0014-0.0496 5.1842v0.71934q0 3.0758 0.5457 3.7951 0.54571 0.71933 2.1332 0.71933h0.47129v2.0836q-2.2076-0.14883-3.7703-0.22325-1.5627-0.0744-2.5301-0.0744-1.0418 0-2.5797 0.0744-1.5131 0.0744-3.5223 0.22325v-2.0836h0.29766q3.0758 0 3.1502-6.1764 0-0.22325 0-0.32247l0.0496-4.3656v-0.76895q0-4.2912-1.017-5.8291-0.99219-1.5379-3.3486-1.5379-1.2898 0-2.7533 0.5209t-3.5471 1.7611l-0.0992 6.2012v5.8043q0 3.0758 0.5457 3.8943 0.5457 0.81855 2.1084 0.81855h0.34727v2.0836q-2.1828-0.14883-3.7455-0.22325-1.5627-0.0744-2.5549-0.0744-1.265 0-2.8277 0.0744t-3.4727 0.22325v-2.0588q0.14883 0 0.32247 0.0248 0.19843 0 0.5457 0 1.7115 0 2.3316-1.1162t0.62012-5.1346v-5.4322l0.0496-14.064v-1.6371q0-3.2494-0.42168-4.0432-0.42168-0.81855-1.6123-0.81855-0.57051 0-0.89297 0.0248-0.29765 0.0248-0.59531 0.0496l-0.19844-1.9596q2.3564-0.32246 4.7873-0.86816 2.4557-0.57051 5.0105-1.3643z" />
          <TextPath transform="translate(649.09,306.3)" d="m-324.91-208.23-10.344 0.0248q-2.6541 0-3.9688 0.0496-1.3146 0.0248-2.4309 0.14883 0 4.44 2.1828 6.9701 2.2076 2.5301 6.0772 2.5301 1.8604 0 3.6711-0.57051 1.8356-0.59531 3.6959-1.7859l1.1162 2.1332q-2.8773 2.282-5.6555 3.423-2.7781 1.1162-5.5066 1.1162-5.1842 0-8.508-3.4478-3.3238-3.4727-3.3238-8.9049 0-5.9035 3.5967-9.8475 3.5967-3.9688 8.8305-3.9688 4.6881 0 7.5902 3.3238 2.9022 3.299 2.9766 8.8057zm-5.8787-3.0262q-0.5209-2.9022-1.91-4.5145-1.3643-1.6371-3.2742-1.6371-2.282 0-3.7703 1.7611t-1.8604 4.9361h1.5627q3.051 0 5.3082-0.12402 2.2572-0.14883 3.9439-0.42168z" />
          <TextPath transform="translate(649.09,306.3)" d="m-300.07-200.74 1.3643 2.4309q-2.7781 2.0588-5.3082 3.1006-2.5301 1.017-4.8121 1.017-5.1098 0-8.384-3.4975-3.2494-3.4975-3.2494-9.0041 0-5.7795 4.068-9.7234t10.12-3.9439q3.3982 0 5.1346 1.017 1.7611 0.99219 1.7611 2.9518 0 1.1162-0.81855 2.0092-0.81856 0.89296-1.8604 0.89296-0.89297 0-2.8277-1.5379-1.9348-1.5627-3.6215-1.5627-2.6045 0-4.1672 2.158-1.5379 2.158-1.5379 5.8043 0 4.6633 2.1332 7.3174 2.158 2.6541 5.9035 2.6541 1.4139 0 2.9022-0.5209 1.5131-0.5209 3.1998-1.5627z" />
          <TextPath transform="translate(649.09,306.3)" d="m-276.52-195.01v-0.44649q0-0.5457-0.37207-1.1906-0.34727-0.66973-1.5131-2.0092l-7.8135-9.3514q4.5145-4.192 6.3004-6.0772t1.7859-2.4557q0-0.47129-0.37207-0.66973-0.34726-0.19844-1.2154-0.19844h-0.64492v-2.1828q2.3068 0.14883 3.5223 0.19844 1.2154 0.0496 2.0092 0.0496 1.0914 0 2.4805-0.0496 1.4139-0.0744 3.299-0.19844v2.158q-0.0992 0-0.24805 0-0.12402-0.0248-0.39687-0.0248-2.6541 0-8.3096 5.2586-1.6371 1.5131-2.5797 2.3564l7.9871 8.9793q0.24804 0.29766 0.69453 0.81855 2.5549 2.9518 4.5393 2.9518 0.0744 0 0.22324-0.0248 0.17363-0.0248 0.27285-0.0248l-0.0496 2.1332q-1.4883-0.14883-2.8525-0.22325-1.3643-0.0744-2.6293-0.0744-0.34726 0-1.3146 0.0744-0.96739 0.0496-2.8029 0.22325zm-19.149-2.1332h0.44648q1.141 0 1.8604-0.34726 0.71934-0.37207 0.94258-1.017 0.5209-1.4387 0.59531-13.643 0.0248-0.81856 0.0248-1.2402l0.0496-4.5889v-5.6803q0-3.7951-0.47129-4.7129-0.44648-0.91777-1.7611-0.91777-0.19844 0-0.5209 0.0496-0.29766 0.0248-0.76895 0.0744l-0.39687-2.0588q2.6293-0.34726 5.085-0.89297 2.4805-0.5457 4.8617-1.2898-0.22324 8.8801-0.37207 15.354-0.12403 6.474-0.12403 9.3762v9.0537q0 1.3146 0.62012 1.91 0.62012 0.5705 2.0836 0.5705h0.5457v2.1332q-2.0836-0.14883-3.7207-0.22325-1.6371-0.0744-2.7781-0.0744-1.4635 0-3.0014 0.0744t-3.1998 0.22325z" />
          <TextPath transform="translate(649.09,306.3)" d="m-235.3-217.11q-3.051 0-4.7377 2.282-1.6619 2.2572-1.6619 6.3996 0 5.0354 1.91 7.9871t5.1346 2.9518q3.0758 0 4.8369-2.3812 1.7859-2.3812 1.7859-6.5236 0-4.9361-1.9844-7.8135-1.9596-2.9022-5.2834-2.9022zm0.49609-3.2494q5.8291 0 9.5498 3.5967 3.7207 3.5719 3.7207 9.0537 0 5.7547-3.8943 9.6242-3.8695 3.8447-9.6738 3.8447t-9.4754-3.6215-3.6711-9.277q0-5.5562 3.9191-9.3762 3.944-3.8447 9.525-3.8447z" />
          <TextPath transform="translate(649.09,306.3)" d="m-208.67-220.23q-0.17363 4.4152-0.27285 7.9871-0.0744 3.5719-0.0744 5.9531 0 4.316 1.017 6.0275t3.3982 1.7115q1.1906 0 2.6789-0.54571 1.4883-0.5457 3.1998-1.5875 0.0744-3.5471 0.0992-6.0275 0.0496-2.4805 0.0496-3.9439v-1.1162q0-3.0758-0.5457-3.8447-0.5457-0.76894-2.0836-0.76894-0.27286 0-0.54571 0.0248-0.27285 0-0.57051 0.0248l-0.14882-1.9844q2.6045-0.24805 5.085-0.59531 2.4805-0.34727 4.8617-0.81856-0.17364 5.7547-0.24805 8.7561-0.0496 2.9766-0.0496 5.5562v2.282q0 3.2246 0.39687 4.068 0.39688 0.81855 1.5875 0.81855 0.29766 0 0.64493-0.0496 0.37207-0.0496 0.76894-0.14883l0.24805 2.034-9.5002 2.1332v-3.8199q-2.8525 2.0836-4.8865 2.9518-2.034 0.86816-3.9439 0.86816-3.7207 0-5.5562-2.3068-1.8108-2.3316-1.8108-7.0445 0-0.99219 0-1.6371 0.0248-0.64493 0.0496-1.2898l0.0992-3.3734q0-0.49609 0.0248-1.265 0.0248-0.79375 0.0248-1.1162 0-2.4557-0.42168-3.299-0.42168-0.86816-1.5131-0.86816-0.47129 0-1.3146 0.0744-0.0992 0.0248-0.14883 0.0248l-0.14883-2.034q2.3564-0.29765 4.7377-0.74414 2.3812-0.47129 4.8121-1.0666z" />
          <TextPath transform="translate(649.09,306.3)" d="m-177.98-224.67 2.1828 0.62012q-0.14883 1.3891-0.27286 2.6541-0.0992 1.2402-0.12402 2.3564 3.2494 0 4.8369-0.0496t2.927-0.14883l-0.64492 3.3982q-1.5627-0.12402-3.3734-0.17363-1.7859-0.0744-3.7455-0.0496-0.0744 3.2742-0.12402 5.6059-0.0248 2.3068-0.0248 3.6215 0 5.4322 0.76895 7.0941 0.79375 1.6371 2.7781 1.6371 0.79375 0 1.8108-0.32246 1.017-0.32246 2.3068-0.99219l0.96738 2.0836q-2.7285 1.5379-4.8617 2.3316-2.1332 0.81855-3.5223 0.81855-3.175 0-4.6881-1.9844-1.5131-2.0092-1.5131-6.2012 0-0.81855 0.12402-5.3826 0.14883-4.5641 0.14883-8.3344-0.0496 0-1.1906 0.0496-1.1162 0.0496-2.6293 0.0992v-2.3812q2.8773-0.42168 4.8121-1.9844 1.9596-1.5875 3.051-4.3656z" />
          <TextPath transform="translate(649.09,306.3)" d="m-129.91-219.14q0 1.5627 0.14883 3.175 0.14883 1.5875 0.47129 3.2246l-2.4557 0.47128q-0.29766-2.7533-1.6371-4.0184-1.3395-1.265-3.8943-1.265-2.0092 0-3.2742 1.017-1.2402 0.99219-1.2402 2.5797 0 2.2076 5.7795 3.9688l0.17363 0.0496q4.316 1.3146 5.8787 2.9022 1.5875 1.5875 1.5875 4.316 0 3.6711-3.1006 6.0772-3.1006 2.406-7.9871 2.406-1.9844 0-3.9191-0.39687-1.91-0.37207-3.6959-1.141 0.0248-0.27285 0.0248-0.62012 0.0248-0.34726 0.0248-1.0418 0-1.3891-0.12403-2.7533-0.12402-1.3643-0.37207-2.6789l2.282-0.57051q0.5705 3.3982 2.1084 4.9361 1.5379 1.5131 4.3408 1.5131 2.3812 0 3.7703-1.0666 1.4139-1.0666 1.4139-2.9022 0-2.1828-6.1268-4.2416-1.017-0.34727-1.5627-0.5209-2.9518-1.017-4.2416-2.5053-1.2898-1.5131-1.2898-3.8943 0-3.6959 2.7781-5.9531 2.7781-2.282 7.4414-2.282 1.3891 0 3.0262 0.29765 1.6619 0.29766 3.6711 0.91778z" />
          <TextPath transform="translate(649.09,306.3)" d="m-110.5-217.11q-3.051 0-4.7377 2.282-1.6619 2.2572-1.6619 6.3996 0 5.0354 1.91 7.9871t5.1346 2.9518q3.0758 0 4.8369-2.3812 1.7859-2.3812 1.7859-6.5236 0-4.9361-1.9844-7.8135-1.9596-2.9022-5.2834-2.9022zm0.49609-3.2494q5.8291 0 9.5498 3.5967 3.7207 3.5719 3.7207 9.0537 0 5.7547-3.8943 9.6242-3.8695 3.8447-9.6738 3.8447t-9.4754-3.6215-3.6711-9.277q0-5.5562 3.9191-9.3762 3.944-3.8447 9.525-3.8447z" />
          <TextPath transform="translate(649.09,306.3)" d="m-83.633-220.36q-0.09922 0.79375-0.22324 2.6045-0.04961 0.84336-0.07441 1.2402 3.0262-2.0836 5.0354-2.9518 2.0092-0.89296 3.6959-0.89296 2.282 0 3.8943 1.0418 1.6123 1.017 2.6045 3.1254 3.0262-2.2324 5.1842-3.1998t4.0184-0.96738q3.4727 0 5.3578 2.3316 1.91 2.3316 1.91 6.6725v2.1332l-0.09922 6.226q0 0.17363-0.02481 1.017-0.0248 0.81855-0.0248 1.4883 0 2.1084 0.5457 2.7533 0.57051 0.64492 2.1828 0.64492h0.62012v2.0836q-1.9844-0.14883-3.5967-0.22325-1.5875-0.0744-2.8029-0.0744-0.86816 0-2.3564 0.0744-1.4635 0.0744-3.4975 0.22325l0.02481-2.0836q0.12402 0.0248 0.29766 0.0496 0.17363 0 0.49609 0 1.5131 0 2.0092-0.99219 0.5209-1.017 0.5209-5.0602v-2.7781q0-0.86816 0.02481-2.282 0.04961-1.4387 0.04961-1.9844 0-3.0758-1.0666-4.5145t-3.3238-1.4387q-1.0666 0-2.5053 0.54571-1.4387 0.52089-3.2246 1.5875l-0.09922 11.435q0 1.141-0.04961 2.2324 0 0.12402 0 0.14883 0 1.91 0.47129 2.4805 0.47129 0.57051 1.8604 0.57051h0.62012v2.0836q-1.9596-0.14883-3.5719-0.22325-1.5875-0.0744-2.8277-0.0744-0.69453 0-2.034 0.0744-1.3395 0.0744-3.299 0.22325v-2.0836q0.14883 0.0248 0.32246 0.0496 0.17363 0 0.47129 0 1.4139 0 1.91-1.0418 0.49609-1.0418 0.49609-4.6385v-7.5158q0-3.0758-1.0418-4.4648-1.017-1.3891-3.2246-1.3891-1.1162 0-2.5549 0.5209-1.4387 0.49609-3.1998 1.5131-0.0248 0.81855-0.04961 2.3564-0.14883 7.0693-0.14883 9.7234 0 3.423 0.47129 4.1672 0.49609 0.71933 2.0092 0.71933h0.71934v2.0836q-2.1332-0.14883-3.7703-0.22325-1.6123-0.0744-2.7285-0.0744-1.0914 0-4.2912 0.19844-1.0914 0.0744-1.6371 0.0992l-0.02481-2.0836h0.62012q3.051 0 3.0758-6.102 0.02481-0.74414 0.02481-1.1658v-7.4166q0-2.8277-0.44648-3.6711-0.42168-0.84336-1.5875-0.84336-0.17363 0-0.47129 0.0496-0.29766 0.0248-0.69453 0.0992l-0.22324-1.9348q1.7859-0.34727 3.8447-0.84336 2.0588-0.5209 5.4074-1.4387z" />
          <TextPath transform="translate(649.09,306.3)" d="m-22.406-208.23-10.344 0.0248q-2.6541 0-3.9688 0.0496-1.3146 0.0248-2.4309 0.14883 0 4.44 2.1828 6.9701 2.2076 2.5301 6.0771 2.5301 1.8604 0 3.6711-0.57051 1.8355-0.59531 3.6959-1.7859l1.1162 2.1332q-2.8773 2.282-5.6555 3.423-2.7781 1.1162-5.5066 1.1162-5.1842 0-8.508-3.4478-3.3238-3.4727-3.3238-8.9049 0-5.9035 3.5967-9.8475 3.5967-3.9688 8.8305-3.9688 4.6881 0 7.5902 3.3238 2.9021 3.299 2.9766 8.8057zm-5.8787-3.0262q-0.5209-2.9022-1.91-4.5145-1.3643-1.6371-3.2742-1.6371-2.282 0-3.7703 1.7611t-1.8604 4.9361h1.5627q3.051 0 5.3082-0.12402 2.2572-0.14883 3.9439-0.42168z" />
          <TextPath transform="translate(649.09,306.3)" d="m18.248-200.74 1.3643 2.4309q-2.7781 2.0588-5.3082 3.1006-2.5301 1.017-4.8121 1.017-5.1098 0-8.384-3.4975-3.2494-3.4975-3.2494-9.0041 0-5.7795 4.068-9.7234t10.12-3.9439q3.3982 0 5.1346 1.017 1.7611 0.99219 1.7611 2.9518 0 1.1162-0.81855 2.0092-0.81856 0.89296-1.8604 0.89296-0.89297 0-2.8277-1.5379-1.9348-1.5627-3.6215-1.5627-2.6045 0-4.1672 2.158-1.5379 2.158-1.5379 5.8043 0 4.6633 2.1332 7.3174 2.158 2.6541 5.9035 2.6541 1.4139 0 2.9021-0.5209 1.5131-0.5209 3.1998-1.5627z" />
          <TextPath transform="translate(649.09,306.3)" d="m36.116-217.11q-3.051 0-4.7377 2.282-1.6619 2.2572-1.6619 6.3996 0 5.0354 1.91 7.9871t5.1346 2.9518q3.0758 0 4.8369-2.3812 1.7859-2.3812 1.7859-6.5236 0-4.9361-1.9844-7.8135-1.9596-2.9022-5.2834-2.9022zm0.49609-3.2494q5.8291 0 9.5498 3.5967 3.7207 3.5719 3.7207 9.0537 0 5.7547-3.8943 9.6242-3.8695 3.8447-9.6738 3.8447t-9.4754-3.6215-3.6711-9.277q0-5.5562 3.9191-9.3762 3.9439-3.8447 9.525-3.8447z" />
          <TextPath transform="translate(649.09,306.3)" d="m72.24-215.12q-1.3643-0.79375-2.6293-1.1658-1.265-0.39687-2.5053-0.39687-3.3734 0-5.2586 2.2324-1.8604 2.2076-1.8604 6.3004 0 4.3408 1.8852 6.9453t4.9857 2.6045q1.0914 0 2.3812-0.44649 1.3146-0.44648 2.9518-1.3891zm6.226-18.331q-0.14883 5.4818-0.27285 11.361-0.12402 5.8539-0.22324 12.477v7.3422q0 3.1006 0.39688 3.944 0.42168 0.84336 1.4883 0.84336 0.37207 0 0.76895-0.0744 0.42168-0.0992 0.91777-0.27285l0.44648 1.9596q-2.2076 0.86817-4.5145 1.2898-2.3068 0.44648-4.8865 0.47129-0.14883-0.74415-0.24805-1.6371-0.09922-0.89297-0.17363-2.034-2.2572 1.6619-4.192 2.4557-1.91 0.76894-3.7207 0.76894-4.5641 0-7.5158-3.3486-2.9518-3.3734-2.9518-8.6816 0-5.9283 3.6959-9.6242t9.6242-3.6959q1.265 0 2.5549 0.22324t2.7285 0.69453q0-0.14882 0.0248-0.47129 0.07441-3.4478 0.07441-4.9609 0-3.4975-0.49609-4.316-0.49609-0.81855-1.8355-0.81855-0.22324 0-0.59531 0.0496-0.37207 0.0248-0.91777 0.0992l-0.22324-2.0092q2.3316-0.29766 4.8121-0.79375 2.5053-0.5209 5.2338-1.2402z" />
          <TextPath transform="translate(649.09,306.3)" d="m108.24-208.23-10.344 0.0248q-2.6541 0-3.9688 0.0496-1.3146 0.0248-2.4309 0.14883 0 4.44 2.1828 6.9701 2.2076 2.5301 6.0771 2.5301 1.8604 0 3.6711-0.57051 1.8356-0.59531 3.6959-1.7859l1.1162 2.1332q-2.8773 2.282-5.6555 3.423-2.7781 1.1162-5.5066 1.1162-5.1842 0-8.508-3.4478-3.3238-3.4727-3.3238-8.9049 0-5.9035 3.5967-9.8475 3.5967-3.9688 8.8305-3.9688 4.6881 0 7.5902 3.3238 2.9021 3.299 2.9766 8.8057zm-5.8787-3.0262q-0.5209-2.9022-1.91-4.5145-1.3643-1.6371-3.2742-1.6371-2.282 0-3.7703 1.7611t-1.8604 4.9361h1.5627q3.051 0 5.3082-0.12402 2.2572-0.14883 3.9439-0.42168z" />
          <TextPath transform="translate(649.09,306.3)" d="m118.99-202.13 2.2572 1.5379q0.81856 0.5457 1.2402 1.1906 0.42168 0.62011 0.42168 1.3394 0 0.74414-0.32246 1.2898-0.32246 0.5209-1.141 1.0914l-2.406 1.6371-2.2324-1.4635q-0.86816-0.59531-1.3146-1.2154-0.44649-0.64492-0.44649-1.3394 0-0.76895 0.34727-1.3146 0.34726-0.5457 1.265-1.1658zm-2.8277-28.277h6.7469q0 5.1098-1.4635 16.942-0.66973 5.457-0.96738 8.3344h-2.7037q-0.14883-5.3578-0.57051-11.733-0.39688-6.3996-1.0418-13.543z" />
        </g>
        <g transform="translate(.24307 .00014259)">
          <path ref={legStart} transform="translate(649.09,306.3)" d="m-540.83-196.32-0.29235-7.8124 5.3546-6.5446s7.3378 3.8672 7.7345 13.684c0.39663 9.8168 0 17.948 0 17.948l-0.19833 8.2303s0.29749 6.6437 4.6605 8.1311c4.363 1.4874 3.074 3.5698 2.9748 3.4706s-1.3882 1.4874-6.5446 0.29748c-5.1563-1.1899-9.1227-2.7765-9.916-8.2303-0.79328-5.4538 0.0992-22.212-0.39664-24.096-0.4958-1.884-1.1951-3.8885-3.3766-5.0784z" style={{fill: "#201f1f"}}/>
          <path ref={legMid1} transform="translate(649.09,306.3)" d="m-540.83-196.32-0.29235-7.8124 5.3546-6.5446s7.3465 0.29618 9.263 9.9323c1.7861 8.9803 0.78059 7.0758 2.7017 9.9099 2.169 3.1997 3.9332 5.512 6.5022 8.4699 2.6397 3.0393 5.5716 7.7959 10.126 8.5047 4.2885 0.66729 3.074 3.9079 2.9748 3.8088-0.0992-0.0992-3.3336 2.3211-8.4899 1.1312s-14.802-9.8209-17.975-13.788c-3.5716-4.466-6.0012-7.2419-6.7886-8.533-0.63475-2.4399-1.1951-3.8885-3.3766-5.0784z" style={{fill: "#201f1f", opacity: 0}}/>
          <path ref={legMid2} transform="translate(649.09,306.3)" d="m-540.83-196.32-0.29235-7.8124 5.3546-6.5446c4.2276-1.0879 6.3142-3.2267 15.677 4.4328l5.9544 4.8712 7.8255 10.817s4.046 6.9178 8.6008 7.6265c4.2885 0.66729 3.074 3.5698 2.9748 3.4706s-3.3336 2.3211-8.4899 1.1312-13.752-11.792-16.925-15.76c-3.5716-4.466-7.7283-5.1157-9.9455-5.2629-3.5186 0.27434-8.5525 4.2203-10.734 3.0303z" style={{fill: "#201f1f", opacity: 0}}/>
          <path ref={legEnd} transform="translate(649.09,306.3)" d="m-540.83-196.32-0.29235-7.8124 5.3546-6.5446c3.8463-1.7551 4.6782-3.5318 17.679-1.3819l6.4453 2.5271s6.6991 2.3538 10.617 2.4758c5.43 0.16909 14.286-3.3719 18.21-4.2 3.5928-0.7582 2.2864 3.829 2.2041 3.9426-1.952 2.6967-13.628 9.2259-19.157 9.3338-5.6523 0.11023-15.678-1.5166-18.203-2.6067-5.2504-2.2659-8.4433-2.3585-10.903-0.22831-2.5139 1.48-9.7724 5.6846-11.954 4.4947z" style={{fill: "#201f1f", opacity: 0}}/>
        </g>
        </g>
      </g>
    </svg>
  );
};


const TextPath = styled.path`
 fill: ${props => props.theme.contact_Btn_Text};
 stroke-width: .26458;
`
const GithubTextPath = styled.path`
  fill: ${props => props.theme.contact_Btn_Text};
  stroke-width: .12641;
`
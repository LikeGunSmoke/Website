import Main from './Main.js';
import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from './utils/gsap/MorphSVGPlugin.js';
import { DrawSVGPlugin } from './utils/gsap/DrawSVGPlugin.js';
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

export default function Intro() {

  const [main, set] = useState(false);

  const brain = useRef();
  const bg = useRef();
  const circle = useRef();
  const tl = useRef();

  const b1 = useRef(); // lh upper left
  const b2 = useRef(); // rh small
  const b3 = useRef(); // lh small
  const b4 = useRef(); // rh upper right
  const b5 = useRef(); // upper mid
  const b6 = useRef(); // rh lower mid
  const b7 = useRef(); // rh lower
  const b8 = useRef(); // lh lower left

  const t1 = useRef(); // top strange
  const t2 = useRef(); // top mind
  const t3 = useRef(); // top designs
  const t4 = useRef(); // dot right
  const t5 = useRef(); // bottom strange
  const t6 = useRef(); // bottom mind
  const t7 = useRef(); // bottom designs
  const t8 = useRef(); // dot left

  useLayoutEffect(() => {

    tl.current = gsap.timeline();

    tl.current.fromTo(b1.current, {drawSVG: '0%'}, {duration: 8, drawSVG: '100%'}, 1)
    .fromTo(b2.current, {drawSVG: '0%'}, {duration: 8, drawSVG: '100%'}, 1)
    .fromTo(b3.current, {drawSVG: '0%'}, {duration: 8, drawSVG: '100%'}, 1)
    .fromTo(b4.current, {drawSVG: '0%'}, {duration: 8, drawSVG: '100%'}, 1)
    .fromTo(b5.current, {drawSVG: '0%'}, {duration: 8, drawSVG: '100%'}, 1)
    .fromTo(b6.current, {drawSVG: '0%'}, {duration: 8, drawSVG: '100%'}, 1)
    .fromTo(b7.current, {drawSVG: '0%'}, {duration: 8, drawSVG: '100%'}, 1)
    .fromTo(b8.current, {drawSVG: '0%'}, {duration: 8, drawSVG: '100%'}, 1);

    tl.current.to(b1.current, {morphSVG: t1.current, duration: 3, y: 267, x: -217}, 5.5)
    .to(b2.current, {morphSVG: t4.current, duration: 3, y: 267, x: -217}, 5.5)
    .to(b3.current, {morphSVG: t8.current, duration: 3, y: 267, x: -217}, 5.5)
    .to(b4.current, {morphSVG: t3.current, duration: 3, y: 267, x: -217}, 5.5)
    .to(b5.current, {morphSVG: t2.current, duration: 3, y: 267, x: -217}, 5.5)
    .to(b6.current, {morphSVG: t5.current, duration: 3, y: 267, x: -217}, 5.5)
    .to(b7.current, {morphSVG: t6.current, duration: 3, y: 267, x: -217}, 5.5)
    .to(b8.current, {morphSVG: t7.current, duration: 3, y: 267, x: -217}, 5.5);

    tl.current.to(brain.current, {duration: 3, transformOrigin: '50% 50%', rotate: '360deg', repeat: 1}, 5.5);

    tl.current.to(circle.current, {opacity: 1, scale: 75, duration: 3, y: -350, x: -400}, 10.5)
    .to(circle.current, {scale: 0.5, duration: 1, y: 0, x: 0}, 13.5)
    .to(bg.current, {morphSVG: circle.current, duration: 2, x: -551.5, y: 220, opacity: 0}, 14)
    .to(brain.current, {opacity: 0, duration: 0.1}, 13.7)
    .to(circle.current, {opacity: 0, duration: 1, onComplete: handleSwitch}, 13.7);

    return () => {
      tl.current.kill();
    };

  }, []);

  const handleSwitch = () => {
    setTimeout(() => {
      set(true);
    }, 1000);
  };

  return (
    <>
    {main && <Main />}
    {!main &&
    <svg
      style={{height: '100%', width: '100%'}}
      version="1.1"
      viewBox="0 0 374.93 374.93"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(549.33 -222.78)">
        <path ref={bg} d="m-549.33 222.78h374.93v374.93h-374.93z"/>
        <g style={{opacity: 0}} transform="translate(-247.53,75.658)" fill="none" stroke="#fff">
        <path ref={t1} d="m-138.74 276.62c1.1486-1.4813 4.2715-0.24802 3.0256 0.84244-3.2344-2.193-2.9381 3.847-0.60915 2.2372 1.9333-1.3178 1.2937 1.8822-0.81718 1.4738-0.21171 3.7141 3.5638-0.22851 3.66 1.0408-0.087 2.1731-3.054 1.741-4.4297 2.9697-2.2997 0.43401 1.333-2.0628-0.59305-3.3244-0.67792-1.2728-0.37915-4.1209-2.421-3.549-1.1144-1.1067 1.7364-1.2081 2.1845-1.6905zm-5.944 2.3717c2.5236-1.0097 4.1108 3.1023 0.33093 1.2778-6.2278 1.2103 2.3997 9.5026 1.9635 4.0746-2.928-0.62611 0.3739-2.0207 1.5043-2.2339-1.4279 1.4118 1.7932 3.5717-0.48882 4.6164-1.918 1.0469-4.5571 1.6305-5.7984-0.81833-1.8327-2.2139-0.79327-5.5652 1.8407-6.5718 0.21623-0.11437 0.43185-0.22986 0.64775-0.34484zm-13.848 9.1566c2.3408-0.89991 6.0616 1.6376 7.7759 0.38195-1.016-1.2298-1.7168-3.5202-3.6512-2.3702-1.2258-1.5236 2.3962-2.4179 3.2886-3.4427 0.61717 1.0286-1.7972 3.1049 0.9757 4.4861 0.41518 1.3326 3.4536 2.9363 1.93 4.003-1.758 8e-3 -8.2122-3.0075-6.8077-0.34821 0.26773 3.0713 5.7232 0.63678 3.2311 2.5743-1.0602 0.65067-3.6668 3.6313-3.6484 1.4508 2.1172-0.94461-0.13547-1.6444-0.8804-2.8559-0.29172-2.2649-3.9678-1.4524-3.0104-3.2609 0.26561-0.20611 0.53121-0.41223 0.79682-0.61834zm-5.5968 5.0977c2.5175-0.26308 5.0298 3.36 7.6459 2.895 2.2971-1.0874-0.50957 2.3555-1.4241 2.902 0.98213-1.9957-2.9744-3.1833-2.7879-0.7806 0.21287 1.5181 3.1453 1.3287 1.2139 2.6387-1.7398 3.0612-1.3285-0.0753-2.1906-1.9243-0.27805-2.0306-2.9138-3.8375-2.4571-5.7308zm1.8889 1.8925c-0.14806 1.9434 2.7332 1.1711 0.42208 0.13785l-0.22469-0.11975-0.19746-0.0183zm-7.6956 5.9937c2.8522-2.3532 3.8266 1.5357 5.6199 2.2476 2.3062-0.83789 5.0653-0.81311 1.6143 1.1315-2.8907-0.34263-5.1536 2.1862-1.1424 1.882 2.0682-0.77168-1.1558 3.3054-2.0641 3.7113 1.2402-1.9589-1.1402-2.8296-2.7566-3.8057-1.0778-2.8172-4.5385 1.6018-3.4676-1.2217 0.69703-1.3394 1.5568-2.5859 2.1967-3.945zm0.53929 1.9594c-0.57186 1.3206 2.606 2.9056 2.5834 0.83816 1.1003-1.3389-2.1667-2.5229-2.5834-0.83816zm-4.5895 4.7076c3.2906 0.27791 2.3324 1.2852 0.47923 2.576-0.48292 2.1328 2.7293 1.9545 4.0518 2.8908 2.5482-0.94008 3.6334-1.3483 1.8165 1.8005-8e-3 2.2414-1.9272 4.0712-1.613 0.78153-0.49893-1.5632-3.1507-1.6511-4.5128-2.6085-2.8802 0.46335 0.81978 4.4903-1.4468 3.7393-2.3773-0.75819-1.1049-2.0139-0.39931-3.5815 0.51597-1.8431 1.8394-3.6571 1.6245-5.5981zm-3.2609 15.683c-3.7514-2.0491 2.0845-5.9816 0.11918-1.9428 1.2361 2.1613 3.2088-4.8836 6.0946-2.2693 2.6119 1.2968 2.2445 6.7398-1.079 6.6878-2.408-1.8142 4.8854-3.026 0.0305-5.1381-2.1383-0.32515-2.683 4.0073-5.1653 2.6624z" fill="none" strokeWidth=".34171" stroke="#fff"/>
        <path ref={t2} d="m-92.674 276.22c4.1292 0.91788 3.1316 7.6463-0.67992 7.9023-2.3587-0.39008-4.8797-0.88517-6.7947-2.074 0.0282-1.7947 3.5584 1.1049 3.154-1.8812 0.32451-1.4403 2.124-3.8178-0.22354-4.1742-1.0255-1.7626 3.3242 0.0358 4.5444 0.22738zm-1.1055 1.117c-1.6841 0.31907-1.4476 3.0164-2.1529 4.411 1.2352 3.1001 6.7358-1.8788 3.233-3.9181-0.37252-0.13191-0.71716-0.33699-1.0802-0.49289zm-15.142-4.8907c2.2681 1.0689 3.0082 5.5124 5.1003 5.8814 0.18795-1.5847 1.3557-3.6737-0.81236-4.276 0.25308-1.9389 3.4036 0.0591 4.761-5e-3 -0.35176 1.1251-3.0513 0.8933-2.1804 3.8068-0.67525 1.2214-0.11772 4.5253-1.9421 4.162-1.2213-1.2646-3.505-8.0121-4.4558-5.1587-1.8688 2.2114 2.9094 4.3028 0.73192 4.1664-1.3096-0.45352-4.9832 0.0697-4.1717-1.6323 1.5682 0.37324 2.0303-0.39177 1.5983-2.1597 1.3684-2.013-0.2162-3.357-0.1693-4.9246 0.48815-0.14123 1.0357 0.12751 1.54 0.13953zm-4.8359-0.22079c2.4758 0.39714-0.95782 1.323 0.0696 3.0649 0.56647 1.3328-0.80219 3.6518 0.59796 4.2773 1.3083 1.4744-5.3424 1.5359-2.1829-0.34763-0.0872-1.9596 0.29714-4.2026-0.24726-5.9374-2.583-1.444 1.1961-0.63949 1.7626-1.0572zm-5.2976-0.36629c2.3032 1.0884-2.2894 1.9628-0.47254 4.2718-0.16744 2.0932 1.9883 3.5834 2.2142 4.2518-1.1241-0.13411-5.0848 1.4477-3.9248-0.35486 2.0016 0.14475 0.56332-2.6147 0.2303-3.6298-0.99435 0.82566-1.7273 6.3876-2.7489 3.1259-1.1432-3.5901-2.1131-3.0153-1.7229 0.32114 2.2342 2.0509-0.3007 1.7048-2.1645 1.9351-2.2412-0.43446 2.3941-1.1409 0.71356-3.2437-0.0721-1.7441 1.0419-4.124-0.82513-5.0459 2.8517-2.1939 3.8904 2.0993 4.8159 4.372 1.6106-0.45213 0.42309-6.3637 3.5668-5.8308l0.31618-0.17233z" fill="none" strokeWidth=".34171" stroke="#fff"/>
        <path ref={t3} d="m-51.803 323.79c4.2399 0.54222 0.23699 6.3305 0.59678 1.8536-1.9387-1.5627-1.2106 5.7168-4.8501 4.3331-2.9049-0.25644-4.5447-5.4599-1.4305-6.6213 2.9034 0.81238-3.4474 4.5976 1.8431 4.7962 2.1095-0.4772 1.0397-4.707 3.8407-4.3616zm-2.3993-12.213c0.12438 2.5046-3.4477 5.2476-2.7889 7.2687 1.486-0.58136 3.8794-0.5334 3.3902-2.7301 1.8301-0.6891 1.5496 3.0309 2.2448 4.1985-1.1696 0.26506-2.3892-2.6767-4.5666-0.47305-1.3956-0.0213-3.8672 2.3654-4.4053 0.58444 0.541-1.6727 5.4195-6.8638 2.4546-6.3593-3.0016-0.70378-2.3904 5.2389-3.4537 2.2672-0.28743-1.2106-2.3064-4.6164-0.2403-3.9186 0.23607 2.3071 1.6022 0.25337 2.9855-0.0763 2.2431 0.42943 2.6195-3.1854 4.0397-1.7116zm-2.5182-5.117c1.1046 2.4837-2.9432 4.225-1.2633 0.37891-1.4456-6.1775-9.4049 2.7581-3.9972 2.1166 0.5116-2.9443 2.0365 0.2955 2.2897 1.4187-1.465-1.3729-3.5011 1.9277-4.6316-0.31305-1.1194-1.8768-1.8012-4.492 0.59841-5.8252 2.1428-1.9152 5.5311-1.0034 6.6368 1.5905 0.12259 0.21112 0.24485 0.42242 0.36726 0.63364zm-4.2509-6.7526c1.173 2.2164-1.633 0.031-2.406 1.8996-0.72413 1.2538-3.3988 1.5573-3.0567 3.0516-0.39678 1.9345-4.4382-3.3432-1.0358-1.9526 1.5112-1.2501 3.5367-2.29 4.5936-3.7702-0.39966-2.9333 1.2296 0.57269 1.9049 0.77162zm-6.9569-6.3632c3.856-1.8453 3.6329 5.1884 1.506 1.2326-2.4762-0.26075 2.0853 5.4587-1.7228 6.2712-2.5791 1.3606-6.7804-2.1206-4.7937-4.7856 2.8797-0.89277-0.40113 5.733 4.1506 3.0295 1.5122-1.5458-1.6798-4.5197 0.85991-5.7477zm-3.6273-4.9391c1.8512 0.29539 2.2694 3.627 0.71462 3.0582 0.36876-3.8905-4.7855-0.72755-2.2546 0.54121 2.0836 1.0636-1.0295 2.0394-1.6857-8e-3 -3.359 1.5992 1.913 3.0152 0.84588 3.7101-1.8411 0.93996-2.8937-1.5916-4.4547-2.3338-2.2515-1.868 1.9983 0.0876 2.1717-2.0318 0.76365-1.3106 3.6449-2.4306 2.1294-4.0384 0.43537-1.509 1.8932 0.94291 2.5334 1.1023zm-6.9544-5.2144c3.8003 1.8574 1.2581 8.1662-2.5077 7.5246-2.202-0.93276-4.5407-1.9924-6.1222-3.6037 0.44588-1.7384 3.2017 1.9051 3.5059-1.0928 0.65184-1.325 2.9575-3.2152 0.75824-4.1111-0.58553-1.9534 3.2237 0.81119 4.3656 1.2825zm-1.3358 0.8277c-1.7725-0.0538-2.2124 2.7446-3.2321 4.0102 1.4306 3.0789 6.8702-0.8281 4.0558-3.3498-0.27458-0.22014-0.54916-0.44029-0.82374-0.66043z" fill="none" strokeWidth=".34171" stroke="#fff"/>
        <path ref={t4} d="m-55.128 336.05c-2.127 4.9196-4.64-4.2168 0 0z" fill="none" strokeWidth=".34171" stroke="#fff"/>
        <path ref={t5} d="m-89.268 392.19c-1.1285 1.4968-4.2677 0.30542-3.0367-0.80172 3.264 2.1492 2.8851-3.8865 0.57832-2.2452-1.9151 1.3428-1.319-1.8653 0.79729-1.4852 0.16136-3.7165-3.5598 0.27644-3.674-0.99096 0.05771-2.1739 3.0302-1.7818 4.3892-3.029 2.2936-0.4646-1.3051 2.0807 0.63791 3.3164 0.70001 1.2469 0.43257 4.1199 2.4687 3.5157 1.1293 1.0914-1.7195 1.231-2.1607 1.7201zm5.9041-2.4558c-2.5097 1.0445-4.1524-3.0451-0.34813-1.2727 6.2105-1.2955-2.5295-9.4689-2.0193-4.0474 2.9362 0.5853-0.34954 2.025-1.4738 2.2549 1.4276-1.3695-1.6508-3.331 0.21512-4.458 1.8845-1.2144 4.7019-1.9403 6.0192 0.57498 1.8659 2.1998 0.86732 5.5482-1.7509 6.5963-0.21407 0.11739-0.42819 0.23468-0.64229 0.35201zm13.719-9.3451c-2.3278 0.93288-6.0842-1.5535-7.7804-0.27222 1.0331 1.2165 1.7662 3.4946 3.6844 2.3163 1.2471 1.5063-2.3621 2.4513-3.2401 3.4884-0.6316-1.0199 1.7538-3.1298-1.0383-4.472-0.43386-1.3266-3.4944-2.8876-1.9861-3.9756 1.7576-0.0326 8.2534 2.8921 6.8119 0.25246-0.34614-2.8745-5.1317-0.80096-3.5493-2.3028 1.224-0.64997 3.3443-3.6948 4.0371-1.9417-1.6189 1.0152-0.59458 1.9917 0.7793 3.0716 0.43945 2.3857 2.9201 1.4588 3.3519 2.9783-0.35676 0.28576-0.71352 0.57153-1.0703 0.85729zm5.5422-5.1709c-2.5136 0.3007-5.0779-3.2868-7.687-2.7834-2.2811 1.1204 0.47541-2.3627 1.3819-2.9224-0.9528 2.0099 3.0203 3.1397 2.7992 0.7401-0.2346-1.5149-3.1643-1.2826-1.2522-2.6207 1.6952-3.0861 1.3296 0.0563 2.2182 1.8925 0.30711 2.0258 2.9695 3.7958 2.5398 5.6939zm-1.9161-1.8649c0.11994-1.9454-2.7498-1.1316-0.42393-0.13199l0.2264 0.11648 0.19771 0.0153zm7.6062-6.1166c-2.8169 2.3952-3.8489-1.4798-5.6524-2.164-2.6032 1.1848-4.9512 0.5667-1.3939-1.2211 3.6559 0.67266 4.1104-2.969 0.431-1.4917-0.87911-0.53484 1.5367-3.6262 2.5086-3.9531-1.4806 2.0631 1.5398 2.7884 2.9994 3.8242 1.1564 2.5821 4.6525-2.0521 3.0763 1.3467-0.63311 1.2386-1.3998 2.3958-1.9689 3.659zm-0.5684-1.9511c0.55358-1.3288-2.6491-2.8666-2.5941-0.79946-1.0813 1.3553 2.2062 2.4904 2.5941 0.79946zm4.5091-4.771c-3.2941-0.2298-2.3517-1.2498-0.51808-2.5686 0.45162-2.1397-2.7581-1.9133-4.0944-2.8296-2.5337 0.97908-3.6127 1.4031-1.8435-1.7726-0.02555-2.2416 1.867-4.0991 1.6027-0.80521 0.52346 1.5558 3.1755 1.6034 4.5523 2.5403 2.8723-0.50643-0.88565-4.4777 1.391-3.76 2.3886 0.72226 1.135 1.997 0.45301 3.575-0.49045 1.8502-1.7782 3.6857-1.543 5.6207zm3.0199-15.731c3.7816 1.9925-1.995 6.0125-0.09018 1.9448-1.2682-2.1429-3.1356 4.932-6.0601 2.3592-2.6313-1.2568-2.3445-6.7057 0.97918-6.7025 2.4349 1.7779-4.8396 3.0993 0.0463 5.1381 2.1427 0.29236 2.6231-4.0471 5.1248-2.7395z" fill="none" strokeWidth=".34171" stroke="#fff"/>
        <path ref={t6} d="m-135.31 393.19c-4.1407-0.86374-3.2316-7.6045 0.57613-7.9106 2.3637 0.35862 4.8912 0.81995 6.8215 1.9837-4e-3 1.7946-3.5724-1.0577-3.1287 1.9226-0.30542 1.4448-2.0741 3.8446 0.27801 4.1714 1.0488 1.7492-3.3245 9e-3 -4.5471-0.16666zm1.0907-1.1314c1.6882-0.33275 1.3699-3.0689 2.0952-4.4384-1.276-3.0833-6.7106 1.967-3.1814 3.9604 0.37403 0.12704 0.72136 0.32703 1.0862 0.47801zm15.187 4.7006c-2.2817-1.0408-3.0782-5.4727-5.1758-5.8159-0.16626 1.5871-1.308 3.6906 0.86791 4.2657-0.22763 1.9422-3.4039-0.0161-4.7602 0.0654 0.33826-1.1294 2.8472-1.1296 1.9394-4.0318 0.6592-1.2301 0.25238-4.3288 2.0816-3.9892 1.2372 1.2489 3.6082 7.9665 4.5218 5.101 1.8392-2.2357-2.9642-4.264-0.7856-4.1576 1.3154 0.43546 4.9821-0.13229 4.1919 1.58-1.8522-0.46881-1.836 0.64987-1.6676 2.39-1.422 1.9653 0.94575 3.4139 0.14498 4.7756-0.45281-0.0611-0.90561-0.12217-1.3584-0.18325zm4.8452 0.1569c-2.4806-0.3656 0.94068-1.3363-0.10954-3.0645-0.58347-1.3252 0.75317-3.6621-0.65454-4.2692-1.3274-1.4572 5.3219-1.6059 2.1873 0.31893 0.11435 1.9578-0.2426 4.2063 0.32549 5.9336 2.6029 1.4106-1.1894 0.65355-1.7487 1.0813zm5.3069 0.30238c-2.296-1.0638 2.3125-2.0536 0.40093-4.3842 0.13891-2.0721-2.0733-3.44-2.2554-4.1158 1.1258 0.11966 5.0651-1.5149 3.9292 0.30279-2.0034-0.11804-0.52943 2.622-0.18279 3.6325 0.98361-0.83878 1.6416-6.4102 2.7066-3.1622 1.1903 3.5747 2.1533 2.9867 1.7187-0.34406-2.2601-2.02 0.27879-1.7083 2.1396-1.9628 2.2472 0.40363-2.343 1.24-0.63466 3.32 0.0935 1.7429-1.0243 4.0698 0.85489 4.9666-2.8221 2.2322-3.9182-2.0471-4.8736-4.3074-1.6039 0.47355-0.3389 6.3686-3.4897 5.8778l-0.31385 0.17651z" fill="none" strokeWidth=".34171" stroke="#fff"/>
        <path ref={t7} d="m-176.84 346.21c-4.2474-0.47899-0.33269-6.3256-0.62395-1.8435 1.9613 1.5339 1.1238-5.7345 4.7838-4.4052 2.9087 0.21259 4.6256 5.391 1.5294 6.5988-2.9152-0.76903 3.3781-4.6489-1.9148-4.768-2.102 0.50713-0.96886 4.7238-3.7744 4.4179zm2.5619 12.171c-0.16124-2.5029 3.3703-5.2967 2.6817-7.3095-1.477 0.60326-3.8718 0.59006-3.3491 2.7796-1.8196 0.71589-1.594-3.0078-2.3062-4.1652 1.1657-0.28267 2.2509 2.1971 4.3956-0.0382 1.3956 7.7e-4 4.0096-1.9781 4.5734-0.20542-0.51656 1.6803-5.318 7.3862-2.3612 6.8381 2.8393 0.56607 2.3591-5.071 3.2935-3.0995 0.23651 1.3656 2.4699 4.3285 0.58807 4.4411-0.46053-1.8549-1.4975-0.84958-2.9516 0.11986-2.404-0.32495-2.5053 1.9835-4.0838 1.9225-0.16008-0.42782-0.32017-0.85563-0.48025-1.2834zm2.6023 5.077c-1.0848-2.5308 2.8403-4.2171 1.2581-0.39638 1.5333 6.1562 9.3646-2.8917 3.9667-2.1733-0.47259 2.9565-2.0371-0.26894-2.3092-1.3865 1.4236 1.3726 3.2652-1.7778 4.4631 0.043 1.2857 1.8364 2.1198 4.6238-0.34321 6.0369-2.1153 1.9454-5.5162 1.082-6.6586-1.4958-0.12535-0.20942-0.25119-0.41855-0.3768-0.62781zm4.3387 6.687c-1.2038-2.1996 1.6327-0.0537 2.3795-1.9329 0.70676-1.2637 3.3766-1.6046 3.0141-3.094 0.34619-1.9256 4.4968 3.2773 1.0628 1.9381-1.486 1.2766-3.5088 2.3361-4.5403 3.8341 0.44087 2.9281-1.2373-0.55662-1.9161-0.74529zm7.0357 6.2703c-3.8304 1.8987-3.7041-5.1377-1.5235-1.2116 2.4792 0.2282-2.1604-5.4293 1.6361-6.2937 2.5603-1.3968 6.8086 2.0268 4.8594 4.719-2.8672 0.93228 0.32196-5.7382-4.192-2.9717-1.4909 1.5648 1.742 4.4971-0.7801 5.7581zm3.7005 4.8845c-1.8552-0.27023-2.3185-3.5958-0.75605-3.0483-0.31589 3.8951 4.7949 0.66271 2.247-0.57175-2.098-1.0332 1.002-2.0529 1.6858-0.0143 3.337-1.6446-1.9538-2.989-0.89618-3.6981 1.9341-0.99417 3.0188 1.801 4.7656 2.3934 1.5014 1.7836-2.5122-0.13402-2.6562 2.2179-0.78214 1.1831-3.3346 2.3238-1.8422 3.7897-0.41899 1.4984-1.9082-0.90106-2.5477-1.0685zm7.0332 5.1214c-3.8249-1.806-1.3676-8.1491 2.4065-7.5572 2.214 0.90316 4.565 1.9359 6.1699 3.5214-0.42161 1.7447-3.2269-1.8627-3.4904 1.1391-0.63466 1.3336-2.9142 3.2542-0.70351 4.1211 0.6024 1.9434-3.225-0.76659-4.3824-1.2238zm1.3246-0.84555c1.7128 0.0625 2.0774-2.6222 3.0729-3.8262-0.52151-3.2955-6.9844 0.34686-4.0178 3.1088 0.33393 0.21076 0.62528 0.48562 0.94486 0.71734z" fill="none" strokeWidth=".34171" stroke="#fff"/>
        <path ref={t8} d="m-173.71 333.89c2.0527-4.9511 4.7032 4.1463 0 0z" fill="none" strokeWidth=".34171" stroke="#fff"/>
        </g>
        <g ref={brain} transform="translate(-30.369,-192.03)" stroke="#fff">
        <path ref={b1} d="m-345.29 558.39-0.0192 3.1877 0.78732 1.6707s-3.2261 1.8435-4.0326 3.7638l-0.88333 1.7475-0.096 3.7638 0.6337 3.2453-2.1315 1.7667s-1.3634 2.2275-1.3634 3.6294c0 0-0.57609 3.975 0.32644 4.8583l1.7859 1.7091-0.86412 1.8435-2.4772-1.3058 2.5924 2.8996s-0.42246 3.8022-0.15362 4.3015c0 0-3.3989-1.0178-5.1656-0.49928l-6.625 3.4949-2.3236 0.24964-2.0547-0.99855s-0.80652-3.2069-0.38406-4.1094c0 0 0.92174-1.5362 1.4402-1.613l-0.0384 2.2467 0.59529 1.8819s0.59528 0.32645 0.59528-0.096v-2.0355s0.44167-1.8243 1.8819-1.8243c1.4402 0 5.9721 0.82572 5.9721 0.82572l-5.7417-1.7667-0.80651-0.32645-0.26885-0.76812-1.1138 0.46087 0.0768-5.0888s0.21123-3.4949 3.2837-3.2645c0 0 2.458 0.13442 2.554 1.6514 0 0 1.7859 2.9188 3.2261 2.8804l0.24964-0.17283-2.4964-2.3428s-0.94094-4.7047-0.38406-4.7815c0 0 1.4978-3.8598 2.3044-3.8982 0.80652-0.0384 2.9188-0.0768 2.9188-0.0768l1.7859-1.8435 0.34565-1.229-1.7475 0.90254s-1.6322 0.40326-2.7268-0.096l-0.55688-1.3442 1.2098-2.8612 1.9395-1.9011-2.362 1.3634-1.2866 1.6899 0.15362-2.0547 2.4964-2.4772 2.5732-1.1522 1.3442-2.362 1.2098-1.6899zm12.113-2.949-2.6854-1.513-4.4466-0.0188s-7.4612 4.6538-8.7801 4.8046c0 0-2.6001 2.4682-2.5059 2.6567l-0.65945 1.7523-4.277 2.3552-1.9972 2.6755-0.9986 3.2031-2.6566 2.5813-0.92323 2.6755-0.47104 1.1682-0.0377 3.1088-1.9784 2.0537-0.47104 0.73482-0.28262 1.432-0.5464 1.1493 0.0188 3.919-1.5638 0.7725-0.81018 2.016s-0.67829 3.8248-0.0565 4.7481c0.62177 0.92323 1.074 1.432 1.074 1.432s-2.5059 2.3363-2.4306 3.4103c0 0-1.5073 5.8974 0.65946 7.1221 0 0-0.65945 6.5757 0.4522 6.9714l-0.71598 1.2059 0.0565 4.7669 1.4131 2.5624s-0.15376 3.9152 1.0348 5.057m6.9345-56.341-1.5637 3.9925-0.53234 2.695 3.3271-0.0998 0.4658-3.4935 1.6636-2.3955 0.0333-2.4288-1.0647-0.0665z" fill="none" strokeWidth=".26458px" stroke="#fff"/>
        <path ref={b2} d="m-324.68 575.62s-1.1075 3.6432-0.43718 3.9347l3.002 0.61206s-5.596 0.67035-6.5578 3.0311c0 0 0.58292-2.1859 1.5156-2.9146 0 0 0.90351-4.6342 2.4774-4.6633z" fill="none" strokeWidth=".26458px" stroke="#fff"/>
        <path ref={b3} d="m-336.59 576.03-1.5639 2.183 2.0852 3.3233s-2.7369-2.574-3.5188-2.6391c-0.78197-0.0652-3.1278-0.32582-3.1278-0.32582s-2.5088 1.4988-2.4762 1.792c0 0 0.16291-1.8246 2.5088-2.5414l3.3233 0.13033z" fill="none" strokeWidth=".26458px" stroke="#fff"/>
        <path ref={b4} d="m-324.05 555.23s4.0769-0.26022 5.1178 1.0409l1.9083 3.2962-2.689 0.26022 3.6432 1.4746s2.6023 4.7708 1.5614 5.2045l-1.5614-0.78068-0.34696-0.17348-0.0867 1.2144s3.2962 2.1685 2.689 5.1178l-1.2144 0.43371 3.2094 0.43371 3.036 2.1685s2.2553 6.2454 1.8216 6.1587c-0.43371-0.0867-3.8166 0.52045-3.8166 0.52045l4.3371 1.1276 4.8575 0.43371-3.9901-2.1685-0.0868-1.9951-1.3879-3.4697s3.2962 1.0409 3.4697 3.4697l3.4697 2.689s3.2094 4.8575-0.52045 6.1587l-4.6841-0.52045-4.5973 3.036-1.7348 2.7757 0.6072 1.2144 2.8625-3.6432s3.3829-2.2553 4.8575-1.9083l2.8625 1.5614 1.3011-0.0867-0.6072-1.1276 1.5614-1.9083s2.342 3.2094 1.3011 4.5106l-1.1276 1.5614s-6.8526 1.0409-8.5007 2.7757l-4.2504 2.9492s-1.9083 0.78068-2.7757 0.34697c-0.86741-0.43371-1.8216-2.8625-1.8216-2.8625l0.95416-2.5155 0.69394-3.3829v-1.7348l-1.2144-2.4288-2.5155-4.3371 0.0867-1.9083 4.8575-1.9083-0.43371-1.3011-3.9034 1.7348s-3.3829-5.6382-1.5614-12.317c0 0-3.8807-0.14056-4.115-8.0287l-0.68842 0.77474-0.146 0.84679 0.23359 2.3652 0.96359 2.5112 2.1316 2.044-0.0876 9.373 1.6352 3.1827v3.6791s3.5331 5.0515 3.2412 7.1831c-0.292 2.1316-1.6936 5.9275-1.6936 5.9275l0.2044 2.2776 1.7228 1.752-0.49639 1.8688-0.1752 1.9272 0.2044 2.3068s-6.5699 3.7667-6.9787 11.125c0 0 0.26281 0.67159 0.4964 0.0292 0 0 2.3652-7.9715 7.5043-9.6358 0 0 3.7667-1.2264 5.9567-0.64239l4.0587 0.0876 0.99279-0.58399 1.4308-1.8396 1.2848-0.78839 1.5476-0.49639 2.0732-0.64239s2.3944-0.99278 2.3652-2.6864c0 0 2.161 4.4196-0.35215 7.5611 0 0-2.6454 2.4801-2.9761 2.4801m-15.059-45.205-0.49921 2.4212s1.872 3.0202 1.4477 3.3447l3.819 2.1466 0.0999 0.5741 1.8221 0.24961 0.0749-2.0218s-1.5476-3.7191-2.7207-3.5694l0.67387-0.99843 2.5959 2.8455s1.298 3.9937 0.94851 4.443c0 0 2.4212 2.7956 2.571 3.8439 0 0 2.9953 1.7472 1.8221-0.74882l-1.6724-2.4711s-0.77378-5.1419-2.4212-6.2901c-1.6474-1.1482-4.6926-3.6443-4.6926-3.6443zm-2.7104-6.0785 0.23613 1.5102 1.8221 1.9719 0.32449 1.4976s3.5943-0.0749 3.5943-0.44929c0-0.37441-1.4457-6.3652-5.9771-4.5305zm7.629 5.3762s3.7412 2.1977 4.9447 3.8721l1.4128 2.1715 0.8372 3.9767s0.91569 2.3023 1.7529 2.9302l0.36628 1.5436 0.0785 2.1715 1.0988 2.0145v2.5116l2.0145 2.2238 0.39245 2.5116-0.44476 2.4854 1.3866 1.5174 0.54941 2.0407-0.31395 2.6163 1.0727 2.1192 0.20931 4.0029-0.75872 1.936" fill="none" strokeWidth=".26458px" stroke="#fff"/>
        <path ref={b5} d="m-331.79 570.95s1.4265-3.5187 4.7551-6.0865l-3.4236 1.3314s-2.2824-4.0894 1.5216-7.9885l-1.7032 0.0602-0.78068-1.3879v-1.8216l0.95416-1.3011 0.78068-1.0409 1.9951-0.26022 1.1276 0.26022s2.8625 1.9951 2.5155 2.5155m-9.1227 0.21594 1.9622-2.9825 2.4854-1.1773 2.7471 0.49709 2.8779 2.1977 3.061 0.0523 3.6889 3.5581h2.0668s1.8837 0.2093 2.7732 1.0727c0.88953 0.86336 2.407 2.7994 2.407 2.7994l0.47092 1.0727 0.41861 1.936m-30.199-0.83473 0.83449 1.2949-0.0288 2.2445s-1.928 5.0357-2.4747 5.7839l0.0288-2.9351-4.489-0.57551 4.4602-0.60429s2.6186-1.0359 1.669-5.2084zm14.043 25.278s-3.5713-0.16534-5.39 2.5793l-1.1904-0.92589-0.23147-6.349 1.5542-2.447-0.95896-0.95896-1.1904-2.2155s-0.89282-4.7287 0.0661-5.39c0.95896-0.66135 4.2327-2.6785 4.2327-2.6785l-0.69442-0.0992-4.2327 2.447s-2.1163 6.7458-0.49602 9.1597c0 0 0.82673 6.3159-1.5541 6.1506s-4.398-0.26454-4.398-0.26454l-2.1825 0.62828-3.3729 2.2155s6.3159-2.447 8.7629-0.99203c2.447 1.455 2.8769 2.8769 2.8769 2.8769s0.95897 6.7127-3.1745 7.1757l-1.6203-0.39681-3.6705 0.0661s-2.5793 0.99203-4.5633 0.66135c0 0-3.439-2.0833-3.8028-3.0092s-1.1243-6.1836-0.46295-6.4813m-0.49358-9.1265s1.7526-3.3729 2.0502-3.3729l4.3649-4.1996-2.3147 0.89283s-1.8518-2.1494-1.951-3.1084c-0.0992-0.95896 0-2.7777 0-2.7777l1.3227-2.0833 2.4139-2.0171 2.91-0.1984-1.3227-1.488 0.29761-0.85976 0.82669-0.95896 3.3729-1.5872 0.19841-1.0582-0.42988-0.95896-0.85976 1.455-2.7446 0.92589-1.1904 1.8849-0.69442-1.0582v-2.9761s5.1586-3.3729 6.8781-2.7777c1.7195 0.59522 3.4721 1.6864 3.4721 1.6864l1.2566 2.1825-2.6454-0.13227-0.16534 1.1574 2.9761 1.3558s-1.0912 2.9761-0.0661 4.4972l-2.0172-0.99203s3.4936 5.2002 2.8215 5.973m6.3538 27.53 0.64416 1.8788 6.0658-3.1134zm-4.6068 17.659s0.66135-4.9932 2.8438-7.4402c0 0 4.4641-5.3239 4.7287-5.2578 0 0-5.1255 4.2988-5.7538 2.8107 0 0-3.2406-3.9681-2.6785-9.5235 0 0 1.5872-6.0844 6.5474-7.804m-25.699 1.7472 1.2566-2.7115 3.439-3.1084-3.5052 1.8187s-2.447-1.4219-1.6864-5.1255" fill="none" strokeWidth=".26458px" stroke="#fff"/>
        <path ref={b6} d="m-325.28 636.95-0.44997 1.05s5.7497 2.1999 8.6495 0.84996l2.2499-1.8999s-2.5536 0.66484-5.7657 0.88721c-1.4459 0.1001-3.4504-0.26447-4.6833-0.88722zm30.913-28.06 1.303 1.9806 0.20848 3.6484s-2.9187 8.4434-4.5865 8.704c0 0-6.2544 6.515-7.6616 5.9938l-3.1272 0.15635-1.8763-1.5636s2.2411-6.1501-0.31272-7.0883l-1.5115-0.57331s2.8666 5.1077 0.57332 7.5052l-12.144 7.0361-2.5539 0.46908 2.4496 0.20848 10.893-4.8992s1.4594-1.4072 4.0132-0.0521c0 0 4.4823 0.99025 7.2446-1.0424 0 0-0.88603 3.909-4.8992 5.4204l-3.0229 0.5212-1.1988-2.7102-1.8242-0.57332s1.9805 2.5539 1.3551 3.8047c-0.62544 1.2509-3.3357 4.8992-3.3357 4.8992l-3.2314 2.2411-3.1272 0.5212-5.0035-0.62544-2.8666-1.7721-0.72967-1.7721 0.20848-2.6581 1.5636-0.93815-1.6678-0.7818-0.83392-1.5636s-0.93815-2.7623 0.88604-5.6289c0 0 0.99027-0.99028 0.88603-1.8242 0 0 4.2738 0.78179 6.3586-0.78179 0 0 8.0785-7.8701 9.4336-7.8701 0 0 7.1925 1.1466 8.3912 0.99027l0.31272 3.2835 0.72968-3.1272s4.2217-1.8242 4.5865-2.7623l1.1988 1.1988-0.46908-3.3878s0.15636-1.6157 0.72968-2.1369c0.57331-0.52119 2.6581-2.4496 2.6581-2.4496zm-3.7104 1.4851s-0.39682 5.39-4.9932 6.4812c0 0-6.8119 0.72749-8.6968-0.72748l3.9681-3.0092-4.9932 2.1163s-9.1597 8.6306-9.8542 8.6968c0 0-4.0673 0.66135-5.2908-0.19841 0 0-2.943-3.7366-2.1163-7.6056m16.707-15.524-0.92046 1.8869v3.1295l1.0585-0.23011 3.4057 0.46023 2.071 0.55227 2.6233 0.0921 3.6818-3.7278s5.1545-0.78239 5.7068-3.1756c0 0 1.933-3.3136-0.55227-5.4767l-1.7949 1.0585-4.3722 0.46023s-6.167 4.05-6.3972 4.5102c0 0-3.7738 0.87443-4.5102 0.46022z" fill="none" strokeWidth=".26458px" stroke="#fff"/>
        <path ref={b7} d="m-359.05 638.93 1.2596 2.4353 5.9623 4.5767s5.5424 1.6795 7.2219 0.79777c0 0-7.8517-2.0994-9.1113-6.6341zm56.397 0.4s-1.8239 2.5976-2.7634 2.874c-0.93957 0.27634-2.8187 1.6581-3.9794 1.6028 0 0-5.5821 4.6978-6.5217 4.6978 0 0-8.9536 2.045-10.998 1.437l-2.8187-1.4923-2.5976 2.266s-3.3161 2.1555-6.1348 0.82904l-3.1503-1.3817-3.8135-0.27635-2.3213-1.3817 5.4716 0.22108s3.2056 1.8791 4.4768 1.7686c1.2712-0.11054 4.5873-0.77376 4.5873-0.77376l2.1555-1.8239-2.1002 0.99484s-2.6529 0.44215-4.0899 0.0553c0 0-5.5822-1.5476-0.82903-4.8084l5.9138-2.3766s1.7686-2.3766 1.437 0.55269c0 0-0.77377 3.4267-6.577 3.9241l5.969-0.33161 0.49742 0.99484s2.0449 1.437 3.2609 1.6581m7e-3 1.3e-4s-1.8239-1.3817-2.045-2.7634c0 0-0.0553-2.9292 0.66323-2.8187l3.7583 0.93957 4.0346 0.7185 3.5372-0.27635 3.5925-1.8239-2.8187 3.095s-5.4164 2.8187-6.9639 2.5976l2.7634 0.11054s4.3662-0.99484 5.3058-1.9344c0 0 3.703-3.2056 3.9794-4.0899 0 0 2.4871 0.55268 5.8032-1.2159l3.3161-1.7686m6.4609-14.37s-2.4871 9.5615-5.6927 11.606c0 0-3.2056 3.9794-9.451 3.5925l1.6581-3.1503s4.4215-0.0553 6.0796-1.6028c0 0 3.095-3.2609 3.2609-4.9189l0.11054-1.8791s2.7636-1.8833 4.0346-3.6477zm2.5703-17.85s-0.0785 0.47093 0.15698 0.60174c0.23546 0.13081 1.6414 2.3437 1.6414 2.3437l-0.10853 5.3721s-0.37984 2.1977-0.78682 2.9574c-0.40697 0.75968-1.655 3.4186-1.655 3.4186l-0.54264 1.3837s-0.81395 3.6357-0.56976 4.3682l-2.3062 5.7248s-2.1705 3.7713-2.9845 4.1512l-0.32559 1.7907s-1.0581 2.8217-1.845 3.3643l-2.876 1.7093-2.5775 0.65116s-5.2093 4.1512-6.8915 4.6667c0 0-3.7713 1.8992-7.9767 1.8992 0 0-3.0659 0.21705-3.6899-0.10853 0 0-1.0088-0.81661-2.0792-1.023m0.37455 0.0882c-0.32295-0.0623-1.0266-0.15721-1.3347-0.0692" fill="none" strokeWidth=".26458px" stroke="#fff"/>
        <path ref={b8} d="m-368.48 620.44s1.5975 7.2716 5.2884 8.3182l0.27544-1.8179h1.1018s-0.22035 3.9112 0.82632 4.4621c0 0 4.6825 3.9112 7.3267 3.4705l0.93649-0.71614 0.11018-2.9196 1.267 3.9663 3.0298 2.2586s2.3688 1.0467 4.1867 0.22035l-2.1484-2.0933 1.0467-1.267s3.1951 4.1316 6.8309 3.6909c0 0 6.28-0.82632 7.0512-3.3053 0 0-0.55088-5.4537 0-6.2249l-2.4239-0.11017s-4.1316-3.1951-5.1232-4.5723c0 0-4.1316-1.2119-4.407-1.9832 0 0-3.837-4.9154-4.6825-7.9877 0 0-3.0298-2.0933-3.9112-1.6526 0 0-3.3053 1.267-3.2502 1.9281l0.38561-1.7628 1.7628-0.99158s-5.6189-2.5891-7.6021-1.873l-2.9196 1.1568-4.6825 0.11018s-2.0933 4.1316 1.1568 6.4453l5.4537 0.8814-0.60596-4.0765 1.3221-0.11017s0.99158 7.8224 5.5639 8.9793l3.0298-0.27544 0.49579-4.0765 1.3772 0.27543-0.66105 4.7926s2.3137 5.0681 4.5172 6.1698c0 0 5.3435 0.27544 6.5004-0.38561 0 0-1.3772 1.5424-1.8179 1.873-0.4407 0.33052 1.7628 1.4323 1.7628 1.4323l2.3137 0.71614-2.0382 0.27544-2.8646-1.7628s-2.8095-0.8814-3.4705-0.55088c0 0-5.3435-3.2502-6.28-7.1063l-2.9196 0.0551-1.2119 4.0214-1.2119-1.7628 0.93649-2.6993s-5.1782-5.1782-5.5088-4.7926c-0.33053 0.38562-5.0681-0.27544-5.0681-0.27544l-0.11018 0.71614 1.3772 2.0933 2.6442 1.4323 2.534 0.4407s2.4239 1.267 2.3137 1.6526c-0.11019 0.38562-2.4789-0.60596-2.4789-0.60596l-2.6442-0.0551s-4.6274-2.6442-4.6825-4.0214zm1.53-20.25s5.6809 0.27237 7.3541-1.8677l-0.15564 4.0467s2.0623-5.642 5.5253-5.6031c0 0 2.6848-0.31128 3.4241 0.50584l2.4903 2.9183 2.4514 0.85603 5.6031-0.27237 1.4008-0.19455s4.6303 1.0117 4.1634 1.0506c0 0 4.5136 6.2646 2.6848 10.156l-6.1478-2.5292 5.7977 3.8132 1.1211 2.2732 0.5423 1.9213 0.18594 3.1298 0.30988 4.6018s-1.1466 3.6876-4.4314 0.79021l-1.7818-1.3015-1.224-2.0143-3.6876-0.94515s-3.5017-4.0595-3.8581-6.74c0 0-2.82-3.5172-3.6567-4.0285 0 0-5.454-1.8903-6.771-1.8748l-4.5243-0.91416s-3.8271 1.7199-4.6793 1.7354l-2.8664-0.093s-2.3861-1.5959-2.1227-4.5398c0 0-0.24791-2.2621 0.41835-2.9904zm36.961 50.21s-2.7132 2.5233-4.8295 2.5775c0 0-2.0891 0.65116-3.9884-0.0543l-3.5543-1.6821-3.3372-0.27132-3.6628-2.1977-4.5853-2.469-3.907-2.7132-3.2015-4.5853-2.469-3.093s-3.5-3.4186-4.2326-5.6705m1.1064-1.4311s2.1834 6.5081 7.3478 8.5235c0 0 2.8972 1.3436 5.8783 1.1757 0 0 2.6872 6.1722 7.4318 6.1302 0 0 3.9049 0.50386 7.012-1.8055l7.0539-3.275 1.5116-2.4353s0.50386-2.4773-1.2596-0.29391c0 0-1.1756 2.0994-4.3667 2.3933h-5.2905s-1.6795-1.2176-3.9888 0l-4.0308-0.084s-2.6452-2.0154-2.9391-3.275c0 0-8.6075 0.33592-11.169-5.7943z" fill="none" strokeWidth=".26458px" stroke="#fff"/>
        </g>
      </g>
      <path style={{opacity: 0}} ref={circle} d="m191.93 190.25a5.2627 5.2627 0 0 1-7.2494 1.6747 5.2627 5.2627 0 0 1-1.6791-7.2484 5.2627 5.2627 0 0 1 7.2474-1.6835 5.2627 5.2627 0 0 1 1.6879 7.2464l-4.4694-2.7787z" fill="#fff" strokeDashoffset="150.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".26459" stroke="#fff"/>
    </svg>}
    </>
  );
};
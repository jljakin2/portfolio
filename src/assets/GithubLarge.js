import React, { useState } from "react";
import styled, { withTheme } from "styled-components";

import theme from "../theme/theme";

const StyledIcon = styled.svg`
  cursor: pointer;
`;

const GithubLarge = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledIcon
      width="48px"
      height="48px"
      viewBox="0 0 36 36"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <g id="Main" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Desktop"
          transform="translate(-596.000000, -947.000000)"
          fillRule="nonzero">
          <g id="Github" transform="translate(596.000000, 947.000000)">
            <g
              id="Group"
              transform="translate(5.972625, 0.000000)"
              fill={isHovered ? theme.btnHover : theme.mainBtn}>
              <path
                d="M12.0275162,-1.25544487e-16 C5.38602043,-1.25544487e-16 0,5.38460693 0,12.0275162 C0,17.3414479 3.44612582,21.8499643 8.22518709,23.4401577 C8.82620953,23.5515419 9.04699905,23.1792246 9.04699905,22.8614686 C9.04699905,22.5748098 9.03569101,21.6271958 9.03060239,20.6224763 C5.68427004,21.3498661 4.97836552,19.203317 4.97836552,19.203317 C4.43133898,17.8129933 3.64288575,17.4432203 3.64288575,17.4432203 C2.55165969,16.6968895 3.72486905,16.7121554 3.72486905,16.7121554 C4.93285065,16.7969657 5.56892801,17.9517995 5.56892801,17.9517995 C6.6414958,19.7904871 8.38265158,19.2587264 9.06876703,18.9514304 C9.17704153,18.1740025 9.48857809,17.6430899 9.83262527,17.3428614 C7.16110034,17.0389578 4.35274809,16.0073816 4.35274809,11.3987891 C4.35274809,10.0856427 4.82259724,9.01279222 5.5921095,8.17034309 C5.46715563,7.86728756 5.0555429,6.64375741 5.70858233,4.98712925 C5.70858233,4.98712925 6.71839049,4.66428465 9.01618464,6.22055394 C9.97595471,5.95396685 11.0049865,5.82024925 12.0269508,5.81572603 C13.0491978,5.82053195 14.0787951,5.95424955 15.0399786,6.22055394 C17.3355112,4.66456735 18.3441885,4.98741195 18.3441885,4.98741195 C18.9989242,6.64404011 18.5873114,7.86728756 18.4623576,8.17062579 C19.233566,9.01250952 19.7000228,10.0856427 19.7000228,11.3990718 C19.7000228,16.018407 16.8862992,17.0355654 14.2079894,17.3329669 C14.6393913,17.7061323 15.0238647,18.438328 15.0238647,19.5606512 C15.0238647,21.1697855 15.010295,22.4648391 15.010295,22.8609032 C15.010295,23.1803554 15.226844,23.5557824 15.8363475,23.4376134 C20.6128645,21.8454411 24.0544671,17.3386209 24.0544671,12.0263854 C24.0550325,5.38488963 18.6701428,-1.25544487e-16 12.0275162,-1.25544487e-16 Z"
                id="Path"></path>
              <path
                d="M4.55572744,17.268511 C4.52887084,17.3284437 4.43473139,17.3462538 4.34935568,17.3052622 C4.26171835,17.265684 4.21309377,17.1845488 4.24136388,17.1243335 C4.26680697,17.0632701 4.36122912,17.0460253 4.44858375,17.087017 C4.53622107,17.1265951 4.58597646,17.2085784 4.55601015,17.268511 L4.55572744,17.268511 Z M5.04282136,17.8124279 C4.98543304,17.8652929 4.87320073,17.840698 4.79687144,17.756453 C4.71828055,17.6724908 4.70358009,17.5602585 4.76181651,17.5065453 C4.82061833,17.4533975 4.92945823,17.4782752 5.00776643,17.5622374 C5.08692272,17.6470477 5.10247128,17.7581493 5.04253866,17.8121452 L5.04282136,17.8124279 Z M5.51691102,18.50448 C5.44340875,18.5559316 5.3226954,18.5078724 5.24834502,18.4007287 C5.17427735,18.2941504 5.17427735,18.1660869 5.24975853,18.1143526 C5.3243916,18.062901 5.44312605,18.109264 5.51832453,18.2152769 C5.5923922,18.3241168 5.5923922,18.4527457 5.51691102,18.5047627 L5.51691102,18.50448 Z M6.16655804,19.1739161 C6.10068869,19.2465703 5.96018627,19.2270639 5.85756579,19.1278358 C5.752401,19.0308694 5.72328279,18.893194 5.78915213,18.8205398 C5.85615228,18.7478856 5.99722011,18.7682401 6.10068869,18.8666201 C6.20528808,18.9633038 6.2369506,19.1012619 6.16655804,19.1736334 L6.16655804,19.1739161 Z M7.06328577,19.5623474 C7.03388486,19.6567695 6.89875376,19.6994574 6.76249185,19.6595965 C6.62622995,19.6183222 6.53746182,19.5080688 6.56460112,19.4130812 C6.59287122,19.3180937 6.72913313,19.2737096 6.86624314,19.3163974 C7.00193964,19.3571064 7.09099047,19.466229 7.06300307,19.5623474 L7.06328577,19.5623474 Z M8.04708543,19.6344361 C8.05076054,19.7333815 7.93513581,19.8159302 7.79208908,19.8176264 C7.64847695,19.8210188 7.53200411,19.7407317 7.53030791,19.6429172 C7.53030791,19.542841 7.64338833,19.4614231 7.78700046,19.4591615 C7.9300472,19.4563345 8.04708543,19.5360562 8.04708543,19.6344361 Z M8.96303684,19.4786678 C8.9799989,19.5753516 8.88105353,19.6748624 8.7388549,19.7011536 C8.59920058,19.7271621 8.4702889,19.6672295 8.45219604,19.5711111 C8.43523397,19.4721657 8.53615825,19.3732204 8.67552987,19.3472119 C8.8177285,19.3223342 8.94494397,19.3805706 8.96303684,19.4789506 L8.96303684,19.4786678 Z"
                id="Shape"></path>
            </g>
            <path
              d="M6.93380869,30.1896453 L3.90890744,30.1896453 C3.8308417,30.1896453 3.76755691,30.2529301 3.76755691,30.3309958 L3.76755691,31.8100877 C3.76755691,31.8881535 3.8308417,31.9514382 3.90890744,31.9514382 L5.08861893,31.9514382 L5.08861893,33.7889951 C5.08861893,33.7889951 4.82372804,33.8794594 4.09068422,33.8794594 C3.2267498,33.8794594 2.01933361,33.563965 2.01933361,30.9088368 C2.01933361,28.2534258 3.27678789,27.9037246 4.45734748,27.9037246 C5.47902908,27.9037246 5.91891192,28.0835225 6.19935136,28.1703117 C6.28698868,28.1968856 6.36897199,28.1092483 6.36897199,28.0312228 L6.70623434,26.6021689 C6.70734251,26.5587348 6.68705451,26.5175248 6.65195574,26.4919155 C6.53802722,26.4104976 5.84427884,26.0226318 4.09124962,26.0226318 C2.07163331,26.0226318 0,26.8814776 0,31.0123053 C0,35.1425677 2.37186182,35.7580079 4.37055826,35.7580079 C6.02549021,35.7580079 7.02936165,35.0506899 7.02936165,35.0506899 C7.070636,35.0280738 7.07515922,34.9701201 7.07515922,34.9432635 L7.07515922,30.3307131 C7.07515922,30.2526474 7.01187443,30.1893626 6.93380869,30.1893626 L6.93380869,30.1896453 Z M22.3837039,26.3754427 L20.6801473,26.3754427 C20.6426095,26.3755922 20.6066728,26.390667 20.5802623,26.4173427 C20.5538517,26.4440184 20.5391367,26.4801039 20.5393622,26.5176413 L20.5399276,29.8094124 L17.8847993,29.8094124 L17.8847993,26.5176413 C17.8850249,26.4801526 17.8703486,26.4441098 17.8439992,26.4174423 C17.8176497,26.3907747 17.7817856,26.375667 17.7442969,26.3754427 L16.0410231,26.3754427 C16.0034853,26.3755922 15.9675485,26.390667 15.941138,26.4173427 C15.9147275,26.4440184 15.9000124,26.4801039 15.9002354,26.5176413 L15.9002354,35.4312055 C15.9002354,35.5095137 15.963563,35.5734041 16.0410231,35.5734041 L17.7442969,35.5734041 C17.7818349,35.5731801 17.8177421,35.5580335 17.8440997,35.5313046 C17.8704573,35.5045758 17.8851003,35.4684603 17.8847993,35.4309228 L17.8847993,31.6184164 L20.5399276,31.6184164 L20.5354044,35.4309228 C20.5354044,35.5095137 20.5987294,35.5734041 20.6767549,35.5734041 L22.3837039,35.5734041 C22.4212419,35.5731801 22.4571491,35.5580335 22.4835067,35.5313046 C22.5098643,35.5045758 22.5245073,35.4684603 22.5242108,35.4309228 L22.5242108,26.5173586 C22.5242108,26.4387677 22.462012,26.3754427 22.3837039,26.3754427 L22.3837039,26.3754427 Z M9.04982606,26.5781394 C8.44371501,26.5781394 7.95181518,27.0737143 7.95181518,27.6871756 C7.95181518,28.2997888 8.44371501,28.7967772 9.04982606,28.7967772 C9.65650252,28.7967772 10.1481196,28.2997888 10.1481196,27.6871756 C10.1481196,27.0737143 9.65621982,26.5781394 9.04982606,26.5781394 Z M9.88549037,29.2943311 L8.18758785,29.2943311 C8.10956236,29.2943311 8.0400179,29.3746182 8.0400179,29.4526436 L8.0400179,35.347526 C8.0400179,35.5208217 8.14800971,35.5722733 8.28766403,35.5722733 L9.81707671,35.5722733 C9.98528384,35.5722733 10.0262766,35.4897246 10.0262766,35.344699 L10.0262766,33.5506781 L10.0262766,29.4365297 C10.0264257,29.3990411 10.0116774,29.3630283 9.98527501,29.3364138 C9.95887262,29.3097994 9.92297895,29.2947634 9.88549037,29.2946138 L9.88549037,29.2943311 Z M28.9977777,29.307618 L27.3072254,29.307618 C27.2697365,29.3079167 27.2339019,29.3230962 27.2076053,29.3498169 C27.1813088,29.3765376 27.1667045,29.4126105 27.1670056,29.4500993 L27.1670056,33.8206576 C27.1670056,33.8206576 26.7373,34.1344558 26.1280793,34.1344558 C25.5188585,34.1344558 25.3571535,33.8582568 25.3571535,33.2614749 L25.3571535,29.4500993 C25.3574545,29.4125618 25.3428115,29.3764463 25.3164539,29.3497175 C25.2900963,29.3229886 25.2541891,29.307842 25.2166511,29.307618 L23.5012211,29.307618 C23.4230641,29.3082402 23.3601221,29.3719405 23.3604348,29.4500993 L23.3604348,33.54983 C23.3604348,35.3223656 24.3484762,35.756029 25.7074201,35.756029 C26.8223931,35.756029 27.7213824,35.1397407 27.7213824,35.1397407 C27.7213824,35.1397407 27.7637876,35.4648469 27.7835766,35.5030116 C27.8033657,35.5414589 27.8534038,35.5801889 27.9079651,35.5801889 L28.9991912,35.575383 C29.0368297,35.5752334 29.0728672,35.5601378 29.0993756,35.5334173 C29.125884,35.5066968 29.1406919,35.4705402 29.1405428,35.4329017 L29.1396936,29.4492512 C29.1393864,29.371221 29.0763714,29.307954 28.9983431,29.3073353 L28.9977777,29.307618 Z M33.6176782,29.1074657 C32.6576255,29.1074657 32.004586,29.5357578 32.004586,29.5357578 L32.004586,26.5173586 C32.0048116,26.4798699 31.9901353,26.4438271 31.9637859,26.4171596 C31.9374364,26.390492 31.9015723,26.3753843 31.8640836,26.37516 L30.1562866,26.37516 C30.1186507,26.37516 30.0825685,26.3901679 30.0560356,26.41686 C30.0295027,26.4435521 30.0147102,26.4797234 30.0149335,26.5173586 L30.0149335,35.4309228 C30.0147102,35.468558 30.0295027,35.5047293 30.0560356,35.5314214 C30.0825685,35.5581135 30.1186507,35.5731221 30.1562866,35.5731214 L31.3413694,35.5731214 C31.3950826,35.5731214 31.4352261,35.5456994 31.4649097,35.4973575 C31.4940279,35.4492984 31.5367158,35.0863102 31.5367158,35.0863102 C31.5367158,35.0863102 32.2349874,35.7478307 33.5574629,35.7478307 C35.1094917,35.7478307 36,34.9607909 36,32.2135021 C36,29.4662133 34.5780137,29.107183 33.6173955,29.107183 L33.6176782,29.1074657 Z M32.9505038,34.1293671 C32.3644645,34.111557 31.9667041,33.8455353 31.9667041,33.8455353 L31.9667041,31.0227653 C31.9667041,31.0227653 32.3590932,30.7824694 32.8402503,30.7389334 C33.4489057,30.6843721 34.0355104,30.8684105 34.0355104,32.3203631 C34.0355104,33.8517547 33.7711849,34.1539621 32.9507865,34.1290844 L32.9505038,34.1293671 Z M14.9455565,34.0960084 C14.8712061,34.0960084 14.6806656,34.1262574 14.4847538,34.1262574 C13.8571574,34.1262574 13.6442835,33.8345099 13.6442835,33.4568213 L13.6442835,30.9503938 L14.9220923,30.9503938 C14.9597775,30.950395 14.995903,30.9353477 15.0224442,30.9085942 C15.0489853,30.8818408 15.0637443,30.8455965 15.0634428,30.8079125 L15.0634428,29.4351162 C15.0635932,29.3975298 15.0487673,29.3614313 15.0222426,29.3348006 C14.995718,29.3081698 14.959679,29.2932 14.9220923,29.2932003 L13.6442835,29.2932003 L13.6423046,27.605475 C13.6423046,27.5413018 13.6095113,27.5093566 13.5354436,27.5093566 L11.7940052,27.5093566 C11.7267223,27.5093566 11.6902539,27.5393229 11.6902539,27.6040615 L11.6902539,29.348327 C11.6902539,29.348327 10.8175557,29.5589392 10.7587539,29.5759013 C10.6984444,29.5934916 10.656979,29.6487754 10.656979,29.7115978 L10.656979,30.8076298 C10.6567559,30.8451185 10.6714322,30.8811613 10.6977817,30.9078288 C10.7241312,30.9344964 10.7599953,30.9496042 10.797484,30.9498284 L11.6902539,30.9498284 L11.6902539,33.5868638 C11.6902539,35.5459821 13.064181,35.7382188 13.9914404,35.7382188 C14.4146439,35.7382188 14.9215269,35.6025223 15.0052064,35.5714252 C15.0560926,35.5524842 15.0852108,35.5001845 15.0852108,35.4433616 L15.0863416,34.2376416 C15.0851381,34.1599867 15.0226406,34.0972392 14.9449911,34.0957257 L14.9455565,34.0960084 Z"
              id="Shape"
              fill={isHovered ? theme.btnHover : theme.mainBtn}></path>
          </g>
        </g>
      </g>
    </StyledIcon>
  );
};

export default withTheme(GithubLarge);

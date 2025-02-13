'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { DocumentData } from 'firebase/firestore';

import Loader from '@/components/Loader';

interface EventDisplayProps {
  events: DocumentData[] | null;
}

const EventDisplay: React.FC<EventDisplayProps> = ({ events }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filteredEvents, setFilteredEvents] = useState<DocumentData[] | null>(events);

  useEffect(() => {
    const queryValue = searchParams.get('query') || '';

    const filteredList = events?.filter((event) => {
      const lowerQuery = queryValue.toLowerCase();

      return (
        event.content?.toLowerCase().includes(lowerQuery) ||
        event.date?.toLowerCase().includes(lowerQuery) ||
        event.firstName?.toLowerCase().includes(lowerQuery) ||
        event.lastName?.toLowerCase().includes(lowerQuery) ||
        event.location?.toLowerCase().includes(lowerQuery) ||
        event.title?.toLowerCase().includes(lowerQuery)
      );
    });

    setFilteredEvents(filteredList || []);
  }, [searchParams, events]);

  const handleEventClick = (title: string) => {
    router.push(`/events/item?title=${title}`);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full flex flex-col justify-start items-start gap-y-4
      relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="1036px" height="1008px" viewBox="0 0 1036 1008" version="1.1"
        className='absolute -z-[100] opacity-50 -top-[200px]'>
          <title>Stroke 1</title>
          <g id="Desktop" stroke="#fff9e2" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
            <g id="Public-Policy" transform="translate(-239.000000, -144.000000)" stroke="#fff9e2" strokeWidth={60}>
              <g id="Our-Impact">
                <g id="Group-13">
                  <path d="M570.045572,1117.27124 C581.688346,1123.75828 594.729572,1121.21171 605.912643,1114.94086 C617.051337,1108.69618 625.059726,1098.4951 635.610136,1091.48577 C646.011485,1084.57771 655.924683,1084.93387 667.346708,1088.92896 C677.573961,1092.50531 687.297133,1097.97509 698.039845,1099.92542 C708.41616,1101.80747 718.844817,1099.65574 726.382125,1091.88858 C733.737372,1084.31031 735.926651,1073.23192 743.137387,1065.71623 C747.220096,1061.46171 752.678499,1061.09645 758.257518,1061.09645 C766.083847,1061.09759 773.882867,1061.25689 781.708058,1060.91097 C797.614463,1060.20663 813.509489,1058.27565 829.132562,1055.20451 C842.136238,1052.64884 857.882202,1050.41404 868.785355,1042.30666 C878.079547,1035.39518 882.002953,1024.09719 880.745597,1012.77757 C878.125063,989.192761 859.147523,971.899282 838.473407,962.675639 C816.42701,952.83754 792.138991,950.414997 768.375535,948.018625 C756.278747,946.798819 744.153513,945.67687 732.177341,943.531969 C719.783567,941.309692 706.481767,937.810716 699.391645,926.448998 C692.713436,915.748388 691.926024,902.357832 691.720068,890.085812 C691.506146,877.484944 691.977228,864.860181 693.230032,852.318484 C695.759537,826.990444 701.848325,801.43938 713.54913,778.711393 C725.711915,755.090172 743.812149,736.199111 766.191946,721.998386 C789.992952,706.8976 816.50211,696.681726 842.74159,686.711633 C949.049035,646.322633 1062.73221,614.556476 1149.29632,536.964535 C1186.39913,503.707758 1217.68852,462.144466 1233.47772,414.486697 C1248.03346,370.549791 1249.18044,321.179515 1234.73166,277.05941 C1220.34774,233.138435 1186.37296,186.519549 1138.89497,175.77001 C1113.65228,170.055584 1089.38702,178.463368 1071.57239,196.866279 C1053.40502,215.631035 1043.95266,239.922467 1034.43431,263.743955 C1025.0104,287.328765 1014.20055,313.204124 991.454357,326.860943 C972.724875,338.106597 946.830172,340.441524 932.712512,320.763051 C919.485811,302.329418 921.093634,276.562158 920.130989,255.034632 C919.207031,234.396928 913.928412,211.799798 899.679897,196.115279 C860.97837,153.509691 804.003651,216.242076 781.046951,246.301414 C750.886341,285.794904 725.267004,335.67495 677.408969,356.55616 C654.126835,366.714003 627.988626,366.278195 604.691699,356.379789 C593.244641,351.51422 582.620268,344.550403 573.59234,336.002659 C564.636097,327.523188 558.17636,314.838118 546.547241,309.713112 C521.261303,298.571005 497.123485,325.363495 483.278916,342.91072 C469.059985,360.931304 455.468025,380.708771 431.283554,384.994022 C422.612919,386.531296 412.643964,385.569789 406.140988,379.048606 C396.771696,369.652005 398.817602,354.702556 400.78727,342.849275 C404.142873,322.65193 408.239236,294.187897 386.542167,282.218552 C360.904625,268.073583 334.822172,292.660864 312.757568,302.411345 C302.886471,306.772834 289.652943,309.503743 279.724953,303.856451 C269.154061,297.845039 268.232379,284.371418 269.37936,273.54109 C272.060202,248.206223 284.943264,224.315324 303.205077,206.844336" id="Stroke-1">
                  </path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <h3>{filteredEvents?.length} Events Displayed</h3>
        <div className="flex flex-row justify-start items-start gap-4 flex-wrap w-full
        min-h-[800px]">
          {filteredEvents?.map((event, index) => (
            <div
              key={index}
              className="cursor-pointer max-lg:w-[45%] max-md:w-full"
              onClick={() => handleEventClick(event.title)}>
              <img
                src={event.images[0]}
                className="w-[300px] aspect-square object-cover
                max-lg:w-full"
              />
              <div className="max-w-[300px] max-lg:max-w-none max-lg:w-full">
                <h4 className="mt-2 text-xl text-header uppercase font-title font-bold
                w-full max-lg:text-nowrap max-lg:overflow-x-hidden max-lg:overflow-ellipsis">{event.title}</h4>
                <p className='text-lg text-body'>{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default EventDisplay;

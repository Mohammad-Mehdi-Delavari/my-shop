import React from "react";
import HomeCarouselBanner from "../../elements/HomeElements/HomeCarouselBanner";
import HomeBenefits from "../../elements/HomeElements/HomeBenefits";
import HomeBrandSlider from "../../elements/HomeElements/HomeBrandSlider";
import HomeDiscountItems from "../../elements/HomeElements/HomeDiscountItems";
import HomeTripleBanner from "../../elements/HomeElements/HomeTripleBanner";
import HomeNewPros from "../../elements/HomeElements/HomeNewPros";
import HomeBlogPost from "../../elements/HomeElements/HomeBlogPost";

import {
  HomeBlogPostInfos,
  HomeDiscountItemsInfos,
  HomeNewProsInfos,
  HomeBrandSliderInfos,
  HomeBannerInfos,
} from "../../utils";
import HomeSearchBox from "../../elements/HomeElements/HomeSearchBox";

export default function Home() {
  return (
    <section>
      <HomeCarouselBanner infos={HomeBannerInfos} />
      <HomeBenefits />
      <HomeBrandSlider infos={HomeBrandSliderInfos} />
      <HomeDiscountItems
        title="تخفیفات شگفت اور"
        infos={HomeDiscountItemsInfos}
      />
      <HomeTripleBanner />
      <HomeNewPros infos={HomeNewProsInfos} />
      <HomeDiscountItems
        title="پرفروش ترین ها"
        infos={HomeDiscountItemsInfos}
      />
      <HomeBlogPost infos={HomeBlogPostInfos} />
      <HomeSearchBox/>
    </section>
  );
}

import { GridCarouselBannerProps } from "../types/GridCarouselBanner.ts";
import { useDevice } from "deco/hooks/useDevice.ts";
import { clx } from "../../sdk/clx.ts";

import Slider from "../Slider.tsx";
import { useId } from "../../sdk/useId.ts";
import GridLayouts from "./GridLayouts.tsx";

// deno-lint-ignore no-explicit-any
const Dots = ({ darkTheme, images }: any) => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @property --dot-progress {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 0%;
        }
        `,
      }}
    />
    <ul class="carousel justify-center col-span-full gap-4 z-10 pb-3 row-start-4 sm-laptop:mt-4">
      {
        // deno-lint-ignore no-explicit-any
        images?.map((_: any, index: number) => (
          <li class="carousel-item">
            <Slider.Dot
              index={index}
              additionalClasses={clx(
                "group size-4 p-[3px] rounded-full disabled:border",
                darkTheme
                  ? "disabled:border-white-300"
                  : "disabled:border-gray-100",
              )}
            >
              <div
                class={clx(
                  "size-2 rounded-full",
                  darkTheme
                    ? "bg-white-300/50 group-disabled:bg-white-300"
                    : "bg-gray-100/50 group-disabled:bg-gray-100",
                )}
              />
            </Slider.Dot>
          </li>
        ))
      }
    </ul>
  </>
);

const GridCarouselBanner = (
  {
    marginTop,
    paddingTop,
    paddingInline,
    imagesForCarousel,
    gridLine,
    darkTheme,
    showArrows,
    showDots,
    sectionBgColor,
  }: GridCarouselBannerProps,
) => {
  const device = useDevice();
  const id = useId();

  return (
    <section
      id={id}
      class={clx(
        "cy-grid-carousel-banner container flex flex-col gap-1.5 max-w-none w-full sm-laptop:bg-white sm-laptop:gap-5",
        "mt-" + marginTop?.mobile,
        "sm-laptop:mt-" + marginTop?.desktop,
        "pt-" + paddingTop?.mobile,
        "sm-laptop:pt-" + paddingTop?.desktop,
        "px-" + paddingInline?.mobile,
        "sm-laptop:px-" + paddingInline?.desktop,
      )}
      style={sectionBgColor && { backgroundColor: sectionBgColor }}
    >
      {device !== "desktop" && (
        <>
          <Slider class="cy-carousel-banner relative carousel carousel-center">
            {imagesForCarousel.map((item, index) => (
              <Slider.Item
                index={index}
                class={clx(
                  "carousel-item w-full",
                )}
              >
                <a href={item.href} alt={item.alt} class="w-full">
                  <img
                    src={item.image}
                    alt={item.alt}
                    title={item.title}
                    class="block w-full"
                  />
                </a>
              </Slider.Item>
            ))}
          </Slider>

          {showDots && (
            <div class="cy-carousel-banner-dots carousel justify-center">
              <div class="flex gap-2">
                <Dots darkTheme={darkTheme} images={imagesForCarousel} />
              </div>
            </div>
          )}

          {showArrows && (
            <>
              <Slider.PrevButton
                class={clx(
                  "rounded-r-2xl absolute top-1/2 left-0 w-8 h-7 flex justify-center items-center -translate-y-1/2",
                  darkTheme
                    ? "bg-gray-100 shadow-arrowLeftLightShadow"
                    : "bg-white-300 shadow-arrowLeftDarkShadow",
                )}
              >
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.34375 1.53125L1.875 7L7.34375 12.4688"
                    stroke={darkTheme ? "#F9F9F9" : "#4D4D4D"}
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Slider.PrevButton>
              <Slider.NextButton
                class={clx(
                  "rounded-l-2xl absolute top-1/2 right-0 w-8 h-7 flex justify-center items-center -translate-y-1/2",
                  darkTheme
                    ? "bg-gray-100 shadow-arrowRightLightShadow"
                    : "bg-white-300 shadow-arrowRightDarkShadow",
                )}
              >
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.65625 12.4688L7.125 7L1.65625 1.53125"
                    stroke={darkTheme ? "#F9F9F9" : "#4D4D4D"}
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Slider.NextButton>
            </>
          )}

          <Slider.JS rootId={id} />
        </>
      )}
      {device === "desktop" && <GridLayouts gridLine={gridLine} />}
    </section>
  );
};

export default GridCarouselBanner;

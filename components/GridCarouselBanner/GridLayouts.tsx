import { clx } from "../../sdk/clx.ts";
import { GridLayoutsProps } from "../types/GridCarouselBanner.ts";

interface GridLinesProps {
  gridLine: GridLayoutsProps[];
}

const GridLayouts = ({ gridLine }: GridLinesProps) => (
  <>
    {gridLine?.map(({ gridLayout }: GridLayoutsProps) => (
      <>
        {gridLayout.gridPosition === "1" && (
          <a
            href={gridLayout.images.href}
            alt={gridLayout.images.alt}
            class="w-full"
          >
            <img
              style={{
                maxHeight: `${gridLayout.images.height}px`,
                maxWidth: `${gridLayout.images.width}px`,
              }}
              src={gridLayout.images.image}
              alt={gridLayout.images.alt}
              title={gridLayout.images.title}
              class="block w-full rounded-xl mx-auto"
            />
          </a>
        )}

        {gridLayout.gridPosition === "1-3" && (
          <div
            class={clx(
              "flex",
              "max-w-[1460px] w-full mx-auto gap-5",
            )}
          >
            {gridLayout.images.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                alt={item?.alt}
                class={clx(
                  "w-auto",
                )}
              >
                <img
                  style={{
                    maxHeight: `${item?.height}px`,
                    maxWidth: `${item?.width}px`,
                  }}
                  src={item?.image}
                  alt={item?.alt}
                  title={item?.title}
                  class="block object-contain w-full h-full rounded-xl"
                />
              </a>
            ))}
          </div>
        )}

        {gridLayout.gridPosition === "2-2" && (
          <div
            class={clx(
              "flex max-w-[1460px] w-full mx-auto gap-5",
            )}
          >
            {gridLayout.images.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                alt={item?.alt}
                class={clx(
                  "w-auto",
                  index === 0 && "col-span-1",
                  index === 1 && "col-span-1",
                )}
              >
                <img
                  style={{
                    maxHeight: `${item?.height}px`,
                    maxWidth: `${item?.width}px`,
                  }}
                  src={item?.image}
                  alt={item?.alt}
                  title={item?.title}
                  class="block object-contain w-full h-full rounded-xl"
                />
              </a>
            ))}
          </div>
        )}

        {gridLayout.gridPosition === "3-1" && (
          <div
            class={clx(
              "flex",
              "max-w-[1460px] w-full mx-auto gap-5",
            )}
          >
            {gridLayout.images.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                alt={item?.alt}
                class={clx(
                  "w-fit",
                )}
              >
                <img
                  style={{
                    maxHeight: `${item?.height}px`,
                    maxWidth: `${item?.width}px`,
                  }}
                  src={item?.image}
                  alt={item?.alt}
                  title={item?.title}
                  class="block object-contain w-full h-full rounded-xl"
                />
              </a>
            ))}
          </div>
        )}

        {gridLayout.gridPosition === "1-1-1" && (
          <div
            class={clx(
              "flex",
              "max-w-[1460px] w-full mx-auto gap-5",
            )}
          >
            {gridLayout.images.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                alt={item?.alt}
                class={clx(
                  "w-auto",
                  index === 0 && "col-span-1",
                  index === 1 && "col-span-1",
                  index === 2 && "col-span-1",
                )}
              >
                <img
                  style={{
                    maxHeight: `${item?.height}px`,
                    maxWidth: `${item?.width}px`,
                  }}
                  src={item?.image}
                  alt={item?.alt}
                  title={item?.title}
                  class="block object-contain w-full h-full rounded-xl"
                />
              </a>
            ))}
          </div>
        )}

        {gridLayout.gridPosition === "2-1-1" && (
          <div
            class={clx(
              "flex",
              "max-w-[1460px] w-full mx-auto gap-5",
            )}
          >
            {gridLayout.images.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                alt={item?.alt}
                class={clx(
                  "w-auto",
                )}
              >
                <img
                  style={{
                    maxHeight: `${item?.height}px`,
                    maxWidth: `${item?.width}px`,
                  }}
                  src={item?.image}
                  alt={item?.alt}
                  title={item?.title}
                  class="block object-contain w-full h-full rounded-xl"
                />
              </a>
            ))}
          </div>
        )}

        {gridLayout.gridPosition === "1-2-1" && (
          <div
            class={clx(
              "flex",
              "max-w-[1460px] w-full mx-auto gap-5",
            )}
          >
            {gridLayout.images.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                alt={item?.alt}
                class={clx(
                  "w-auto",
                )}
              >
                <img
                  style={{
                    maxHeight: `${item?.height}px`,
                    maxWidth: `${item?.width}px`,
                  }}
                  src={item?.image}
                  alt={item?.alt}
                  title={item?.title}
                  class="block object-contain w-full h-full rounded-xl"
                />
              </a>
            ))}
          </div>
        )}

        {gridLayout.gridPosition === "1-1-2" && (
          <div
            class={clx(
              "flex",
              "max-w-[1460px] w-full mx-auto gap-5",
            )}
          >
            {gridLayout.images.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                alt={item?.alt}
                class={clx(
                  "w-auto",
                )}
              >
                <img
                  style={{
                    maxHeight: `${item?.height}px`,
                    maxWidth: `${item?.width}px`,
                  }}
                  src={item?.image}
                  alt={item?.alt}
                  title={item?.title}
                  class="block object-contain w-full h-full rounded-xl"
                />
              </a>
            ))}
          </div>
        )}

        {gridLayout.gridPosition === "1-1-1-1" && (
          <div
            class={clx(
              "flex",
              "max-w-[1460px] w-full mx-auto gap-5",
            )}
          >
            {gridLayout.images.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                alt={item?.alt}
                class={clx(
                  "w-auto",
                )}
              >
                <img
                  style={{
                    maxHeight: `${item?.height}px`,
                    maxWidth: `${item?.width}px`,
                  }}
                  src={item?.image}
                  alt={item?.alt}
                  title={item?.title}
                  class="block object-contain w-full h-full rounded-xl"
                />
              </a>
            ))}
          </div>
        )}
      </>
    ))}
  </>
);

export default GridLayouts;

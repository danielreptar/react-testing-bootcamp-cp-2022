import { rest } from "msw";

export const handlers = [
  rest.get(
    `https://api.nasa.gov/planetary/apod?api_key=qGTygHqz5jI8crF2RT7WSbY20DsqnmQuXrQoNOol&date=2022-04-28`,
    (req, res, ctx) => {
      req.url.searchParams.get("api_key");
      req.url.searchParams.get("date");
      return res(
        ctx.status(200),
        ctx.json({
          copyright: "Jeff Dai",
          date: "2022-04-28",
          explanation:
            "In the early hours of April 24 this bright Lyrid meteor flashed along the central Milky Way. For a moment, it cast a bright reflection across Lake Nian, Yunnan province, China. The annual Lyrid meteor shower, one of the oldest known, is active in late April, as our fair planet plows through dust left along the orbit of long-period comet Thatcher. The trail of the bright fireball pointCs back toward the shower's radiant in the constellation Lyra high in the northern springtime sky and off the top of the frame. Just rising in that starry sky, light from a third quarter moon also cast a glow on the peaceful waters of the lake.",
          hdurl:
            "https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Lyrid of the Lake",
          url: "https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai1024.jpg",
        })
      );
    }
  ),
];

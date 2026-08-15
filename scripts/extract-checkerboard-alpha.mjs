import sharp from "sharp";

const [source, destination] = process.argv.slice(2);

if (!source || !destination) {
  throw new Error("Usage: node scripts/extract-checkerboard-alpha.mjs <source> <destination>");
}

const { data, info } = await sharp(source)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const rgba = Buffer.alloc(info.width * info.height * 4);

for (let pixel = 0; pixel < info.width * info.height; pixel += 1) {
  const sourceOffset = pixel * info.channels;
  const targetOffset = pixel * 4;
  const red = data[sourceOffset];
  const green = data[sourceOffset + 1];
  const blue = data[sourceOffset + 2];
  const luminance = (red + green + blue) / 3;
  const saturation = Math.max(red, green, blue) - Math.min(red, green, blue);

  const luminanceAlpha = Math.max(0, Math.min(1, (244 - luminance) / 18));
  const saturationAlpha = Math.max(0, Math.min(1, (saturation - 3) / 15));
  const alpha = Math.round(Math.max(luminanceAlpha, saturationAlpha) * 255);

  rgba[targetOffset] = red;
  rgba[targetOffset + 1] = green;
  rgba[targetOffset + 2] = blue;
  rgba[targetOffset + 3] = alpha;
}

await sharp(rgba, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(destination);

export async function Folder(folder = "") {
  const name = 'dcxmbqwzo';
  const key = '649971452367775';
  const secret = 'RObGiMAOTTeg4ozxmKgSC1nkDR0';

  if (!name || !key || !secret) return [];

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${name}/resources/search`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${key}:${secret}`).toString(
            "base64"
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          expression: `folder:${folder} AND resource_type:image`,
        }),
        cache: "force-cache",
        next: {
          revalidate: 1800,
          tags: [`cloudinary-${folder}`],
        },
      }
    );

    if (!response.ok) return [];

    const data = await response.json();
    return (
      data.resources?.map((img) => ({
        src: img.secure_url,
        alt: img.public_id,
      })) || []
    );
  } catch (error) {
    return [];
  }
}

"use client";

import Image from "next/image";
import { useState } from "react";

type TeamAvatarProps = {
  name: string;
  initials: string;
  photoPath?: string;
  wrapperClassName: string;
  imageClassName?: string;
  fallbackClassName?: string;
  sizes?: string;
};

export default function TeamAvatar({
  name,
  initials,
  photoPath,
  wrapperClassName,
  imageClassName = "",
  fallbackClassName = "",
  sizes = "160px",
}: TeamAvatarProps) {
  const [photoUnavailable, setPhotoUnavailable] = useState(false);
  const showPhoto = Boolean(photoPath) && !photoUnavailable;

  return (
    <div className={wrapperClassName}>
      {showPhoto ? (
        <Image
          src={photoPath as string}
          alt={`${name} portrait`}
          fill
          sizes={sizes}
          className={imageClassName}
          onError={() => setPhotoUnavailable(true)}
        />
      ) : (
        <span className={fallbackClassName}>{initials}</span>
      )}
    </div>
  );
}

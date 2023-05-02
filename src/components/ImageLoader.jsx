import Image from ".././Demon-Slayer-wallpaper-anime-768x609.jpeg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ImageLoader() {
  return (
    <div>
      <LazyLoadImage
        src={Image}
        width={768}
        height={609}
        alt="Demon Slayer"
        effect="blur"
      />
    </div>
  )
}
